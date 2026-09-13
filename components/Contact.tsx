'use client';

import { type FormEvent, useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, Copy, MessageCircle } from 'lucide-react';
import { contactOptions, primaryWhatsAppUrl, site } from '@/lib/site';
import './contact-sections.css';

export function Contact() {
  const [status, setStatus] = useState('');
  const [draftUrl, setDraftUrl] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const project = String(data.get('project') ?? '').trim();

    if (!name || !project) {
      setStatus('Please add your name and a few details about your project.');
      const missingField = form.elements.namedItem(!name ? 'name' : 'project');
      if (missingField instanceof HTMLElement) missingField.focus();
      return;
    }

    const subject = `${service} — project inquiry from ${name}`;
    const body = `Hi Samarth,\n\n${project}\n\nInterested in: ${service}\n\n${name}\n${email}`;
    const url = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftUrl(url);
    setStatus('Your draft is ready for your email app. Review and send it there. If nothing opens, use the direct email link.');
    window.location.href = url;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus('Email address copied. You can paste it into your email app.');
    } catch {
      setStatus(`You can email Samarth directly at ${site.email}.`);
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-heading">
          <p className="closing-eyebrow"><span className="closing-dot" /> A conversation is a good start</p>
          <h2 id="contact-title">Let’s build<br />what’s <span>next.</span></h2>
          <ArrowDownLeft className="contact-heading-arrow" aria-hidden="true" />
        </div>
        <div className="contact-grid">
          <div className="contact-direct">
            <div className="contact-person">
              <img src={site.founderPhoto} alt="" width={64} height={64} loading="lazy" />
              <div><h3>{site.founder}</h3><p>{site.consultingRole}</p></div>
            </div>
            <p className="contact-intro">A new idea. A stubborn bottleneck. A platform ready for its next chapter. Tell me where you want to go.</p>
            <div className="contact-lines">
              {contactOptions.map((option) => (
                <a key={option.label} href={option.href} className="contact-line cursor-target">
                  <span className="contact-line-label">{option.label}</span>
                  <span className="contact-line-value">{option.value}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="contact-alternatives">
              <a href={primaryWhatsAppUrl} target="_blank" rel="noreferrer" className="contact-whatsapp cursor-target">
                <MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <button type="button" onClick={copyEmail} className="contact-copy cursor-target"><Copy size={14} aria-hidden="true" /> Copy email</button>
            </div>
            <p className="contact-personal-note">Work directly with the person who designs<br className="contact-desktop-break" /> the architecture and writes the code.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form" aria-labelledby="brief-title" aria-describedby="email-draft-note">
            <div className="contact-form-heading"><h3 id="brief-title">A little about your project</h3><span className="closing-eyebrow">01 → 02</span></div>
            <div className="contact-fields-pair">
              <label className="contact-field" htmlFor="contact-name">
                <span>Your name <span aria-hidden="true">*</span></span>
                <input id="contact-name" name="name" autoComplete="name" placeholder="Alex Taylor" maxLength={120} required />
              </label>
              <label className="contact-field" htmlFor="contact-email">
                <span>Email address <span aria-hidden="true">*</span></span>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" maxLength={254} required />
              </label>
            </div>
            <label className="contact-field contact-select" htmlFor="contact-service">
              <span>What are we building? <span aria-hidden="true">*</span></span>
              <select id="contact-service" name="service" defaultValue="" required>
                <option value="" disabled>Select a focus area</option>
                <option>Cloud / DevOps consulting</option>
                <option>Platform engineering</option>
                <option>AI product architecture</option>
                <option>Data engineering / low-code SaaS</option>
                <option>Kubernetes / Terraform implementation</option>
                <option>Let’s figure it out together</option>
              </select>
            </label>
            <label className="contact-field contact-project" htmlFor="contact-project">
              <span>The idea, the challenge, the ambition <span aria-hidden="true">*</span></span>
              <textarea id="contact-project" name="project" rows={3} placeholder="Where are you today, and where would you like to be?" maxLength={2000} required />
            </label>
            <button type="submit" className="contact-submit cursor-target">Create email draft <ArrowUpRight size={21} aria-hidden="true" /></button>
            <p id="email-draft-note" className="contact-draft-note">Opens your email app with a prepared draft. You review and send it.</p>
            <div className="contact-status" role="status" aria-live="polite" aria-atomic="true">{status}</div>
            {draftUrl && <a className="contact-reopen" href={draftUrl}>Open email draft again <ArrowUpRight size={13} aria-hidden="true" /></a>}
          </form>
        </div>
      </div>
    </section>
  );
}
