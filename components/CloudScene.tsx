'use client';

import { useEffect, useRef } from 'react';

type CloudSceneProps = {
  paused: boolean;
  className?: string;
};

const TAU = Math.PI * 2;
const RINGS = 108;
const STRANDS = 32;

/** A small, dependency-free particle sculpture, rendered entirely on the canvas. */
export function CloudScene({ paused, className = '' }: CloudSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const syncActivityRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const projected = new Float32Array(RINGS * STRANDS * 4);
    const stars = Array.from({ length: 52 }, (_, index) => ({
      x: ((index * 719 + 167) % 997) / 997,
      y: ((index * 433 + 97) % 991) / 991,
      size: index % 7 === 0 ? 1.1 : 0.55,
    }));

    let width = 0;
    let height = 0;
    let frame = 0;
    let previousFrame = 0;
    let elapsed = 0;
    let visible = false;
    let disposed = false;

    function render() {
      if (!context || width <= 0 || height <= 0) return;

      const size = Math.min(width, height);
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const scale = size * 0.36;
      const tiltX = 0.96 + Math.sin(elapsed * 0.17) * 0.085 + pointer.y * 0.12;
      const tiltY = -0.34 + Math.sin(elapsed * 0.13) * 0.12 + pointer.x * 0.17;
      const tiltZ = -0.49 + Math.sin(elapsed * 0.1) * 0.08;
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);
      const cosZ = Math.cos(tiltZ);
      const sinZ = Math.sin(tiltZ);

      function project(x: number, y: number, z: number) {
        const rotatedY = y * cosX - z * sinX;
        const rotatedZ = y * sinX + z * cosX;
        const rotatedX = x * cosY + rotatedZ * sinY;
        const depth = -x * sinY + rotatedZ * cosY;
        const perspective = 3.8 / (3.8 - depth);
        return {
          x: centerX + (rotatedX * cosZ - rotatedY * sinZ) * scale * perspective,
          y: centerY + (rotatedX * sinZ + rotatedY * cosZ) * scale * perspective,
          depth,
        };
      }

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = 'source-over';

      const atmosphere = context.createRadialGradient(
        centerX, centerY, size * 0.08,
        centerX, centerY, size * 0.49,
      );
      atmosphere.addColorStop(0, 'rgba(217,255,63,0)');
      atmosphere.addColorStop(0.46, 'rgba(159,192,63,0.065)');
      atmosphere.addColorStop(0.72, 'rgba(176,211,74,0.025)');
      atmosphere.addColorStop(1, 'rgba(217,255,63,0)');
      context.fillStyle = atmosphere;
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < stars.length; index += 1) {
        const star = stars[index];
        const twinkle = 0.15 + (Math.sin(elapsed * 0.4 + index * 2.7) + 1) * 0.07;
        context.fillStyle = `rgba(243,240,233,${twinkle})`;
        context.fillRect(
          star.x * width + pointer.x * 3,
          star.y * height + pointer.y * 3,
          star.size,
          star.size,
        );
      }

      // Separate front and back orbital segments give the sculpture real depth.
      function drawOrbits(front: boolean) {
        if (!context) return;
        for (let orbit = 0; orbit < 2; orbit += 1) {
          let previous: ReturnType<typeof project> | null = null;
          const radius = orbit === 0 ? 1.32 : 1.16;
          for (let step = 0; step <= 180; step += 1) {
            const angle = (step / 180) * TAU;
            const point = project(
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              Math.sin(angle + orbit * 1.4) * (orbit === 0 ? 0.22 : -0.48),
            );
            if (previous && (point.depth > 0) === front) {
              context.beginPath();
              context.moveTo(previous.x, previous.y);
              context.lineTo(point.x, point.y);
              context.strokeStyle = front ? 'rgba(223,241,178,0.19)' : 'rgba(223,241,178,0.08)';
              context.lineWidth = 0.65;
              context.stroke();
            }
            previous = point;
          }
        }
      }

      drawOrbits(false);

      // A twisted toroidal surface: the moving strands read as flowing fibres.
      for (let ring = 0; ring < RINGS; ring += 1) {
        const u = (ring / RINGS) * TAU;
        const breathing = 1 + Math.sin(u * 3 + elapsed * 0.35) * 0.025;
        for (let strand = 0; strand < STRANDS; strand += 1) {
          const v = (strand / STRANDS) * TAU + u * 2 + elapsed * 0.22;
          const tube = (0.3 + Math.cos(u * 3 - elapsed * 0.2) * 0.038) * breathing;
          const radius = 0.79 + Math.cos(v) * tube;
          const point = project(
            Math.cos(u) * radius,
            Math.sin(u) * radius,
            Math.sin(v) * tube,
          );
          const index = (ring * STRANDS + strand) * 4;
          projected[index] = point.x;
          projected[index + 1] = point.y;
          projected[index + 2] = point.depth;
          projected[index + 3] = Math.cos(v - 0.8) * 0.5 + 0.5;
        }
      }

      context.globalCompositeOperation = 'screen';

      // Continuous fibres sit underneath the individual illuminated particles.
      for (let strand = 0; strand < STRANDS; strand += 1) {
        for (let ring = 0; ring < RINGS; ring += 1) {
          const index = (ring * STRANDS + strand) * 4;
          const next = (((ring + 1) % RINGS) * STRANDS + strand) * 4;
          const depth = Math.max(0, Math.min(1, (projected[index + 2] + 0.95) / 1.9));
          const light = projected[index + 3];
          context.beginPath();
          context.moveTo(projected[index], projected[index + 1]);
          context.lineTo(projected[next], projected[next + 1]);
          context.strokeStyle = `rgba(209,246,117,${0.025 + depth * 0.19 + light * 0.025})`;
          context.lineWidth = 0.48 + depth * 0.3;
          context.stroke();
        }
      }

      for (let particle = 0; particle < RINGS * STRANDS; particle += 1) {
        const index = particle * 4;
        const depth = Math.max(0, Math.min(1, (projected[index + 2] + 0.95) / 1.9));
        const light = projected[index + 3];
        const shimmer = (Math.sin(particle * 0.21 - elapsed * 0.7) + 1) * 0.5;
        const opacity = 0.13 + depth * 0.51 + light * 0.18;
        const radius = (0.38 + depth * 0.68 + shimmer * 0.17) * Math.max(0.7, size / 600);
        context.beginPath();
        context.arc(projected[index], projected[index + 1], radius, 0, TAU);
        context.fillStyle = light > 0.72
          ? `rgba(242,247,216,${opacity})`
          : `rgba(217,255,63,${opacity})`;
        context.fill();
      }

      // A handful of larger glints add bloom without a full-canvas blur pass.
      for (let glint = 0; glint < 9; glint += 1) {
        const ring = (glint * 13 + 3) % RINGS;
        const strand = (glint * 7 + 5) % STRANDS;
        const index = (ring * STRANDS + strand) * 4;
        if (projected[index + 2] < 0.15) continue;
        const x = projected[index];
        const y = projected[index + 1];
        const halo = context.createRadialGradient(x, y, 0, x, y, size * 0.019);
        const glow = 0.17 + (Math.sin(elapsed * 0.8 + glint) + 1) * 0.045;
        halo.addColorStop(0, `rgba(230,255,167,${glow})`);
        halo.addColorStop(0.2, 'rgba(217,255,63,0.1)');
        halo.addColorStop(1, 'rgba(217,255,63,0)');
        context.fillStyle = halo;
        context.fillRect(x - size * 0.02, y - size * 0.02, size * 0.04, size * 0.04);
      }

      context.globalCompositeOperation = 'source-over';
      drawOrbits(true);

      // The travelling orbital marker shares the same projection as its path.
      const markerAngle = elapsed * 0.12 + 0.6;
      const marker = project(
        Math.cos(markerAngle) * 1.32,
        Math.sin(markerAngle) * 1.32,
        Math.sin(markerAngle) * 0.22,
      );
      context.beginPath();
      context.arc(marker.x, marker.y, 3, 0, TAU);
      context.fillStyle = '#d9ff3f';
      context.fill();
      context.beginPath();
      context.arc(marker.x, marker.y, 7.5, 0, TAU);
      context.strokeStyle = 'rgba(217,255,63,0.22)';
      context.lineWidth = 1;
      context.stroke();
    }

    function shouldAnimate() {
      return !disposed && visible && !document.hidden && !reducedMotion.matches && !pausedRef.current;
    }

    function tick(timestamp: number) {
      frame = 0;
      if (!shouldAnimate()) return;
      const delta = previousFrame ? Math.min((timestamp - previousFrame) / 1000, 0.05) : 0;
      previousFrame = timestamp;
      elapsed += delta;
      const ease = 1 - Math.exp(-delta * 4);
      pointer.x += (pointer.targetX - pointer.x) * ease;
      pointer.y += (pointer.targetY - pointer.y) * ease;
      render();
      frame = window.requestAnimationFrame(tick);
    }

    function syncActivity() {
      if (shouldAnimate()) {
        if (!frame) {
          previousFrame = 0;
          frame = window.requestAnimationFrame(tick);
        }
      } else {
        window.cancelAnimationFrame(frame);
        frame = 0;
        previousFrame = 0;
      }
    }

    function resize() {
      if (!canvas || !container || !context) return;
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
      if (width > 0 && height > 0 && fallbackRef.current) {
        fallbackRef.current.style.opacity = '0';
      }
    }

    function movePointer(event: PointerEvent) {
      if (event.pointerType === 'touch' || !shouldAnimate() || !container) return;
      const bounds = container.getBoundingClientRect();
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    }

    function resetPointer() {
      pointer.targetX = 0;
      pointer.targetY = 0;
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncActivity();
    }, { threshold: 0 });

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    container.addEventListener('pointermove', movePointer, { passive: true });
    container.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', syncActivity);
    reducedMotion.addEventListener('change', syncActivity);
    syncActivityRef.current = syncActivity;
    resize();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener('pointermove', movePointer);
      container.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('visibilitychange', syncActivity);
      reducedMotion.removeEventListener('change', syncActivity);
      syncActivityRef.current = null;
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    syncActivityRef.current?.();
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', isolation: 'isolate' }}
    >
      <div
        ref={fallbackRef}
        style={{
          position: 'absolute',
          inset: '19%',
          border: '1px solid rgba(217,255,63,.45)',
          borderRadius: '50%',
          transform: 'rotate(-28deg) scaleY(.7)',
          background: 'radial-gradient(ellipse, transparent 35%, rgba(217,255,63,.05) 37%, rgba(217,255,63,.24) 49%, rgba(243,240,233,.17) 53%, rgba(217,255,63,.08) 64%, transparent 69%)',
          boxShadow: '0 0 75px rgba(217,255,63,.07), inset 0 0 45px rgba(217,255,63,.07)',
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
