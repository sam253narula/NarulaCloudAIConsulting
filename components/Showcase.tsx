'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Box, Check, Code2, Database, GitBranch, Layers3, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { showcase } from '@/lib/site';
import { SectionLabel } from './SectionLabel';
import { useMotionPreferences } from './MotionProvider';

function ProjectDiagram({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="portfolio-project-visual portfolio-copilot-visual" aria-hidden="true">
        <div className="portfolio-visual-caption"><span>ThinkDB / concept interface</span><span className="portfolio-visual-dot" /></div>
        <div className="portfolio-copilot-window">
          <div className="portfolio-window-bar"><span><i /><i /><i /></span><span>workspace / query.sql</span><Terminal size={12} /></div>
          <div className="portfolio-query-prompt"><Sparkles size={15} /><span>Explore my data in plain English</span></div>
          <div className="portfolio-query-code"><span className="portfolio-code-line"><b>SELECT</b> your_next_idea</span><span className="portfolio-code-line"><b>FROM</b> your_data</span><span className="portfolio-code-line"><b>WHERE</b> possibilities = <em>&apos;limitless&apos;</em>;</span></div>
          <div className="portfolio-query-footer"><span><ShieldCheck size={12} /> Schema-aware guardrails</span><span className="portfolio-query-cursor" /></div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="portfolio-project-visual portfolio-cloud-visual" aria-hidden="true">
        <div className="portfolio-visual-caption"><span>Cloud data / architecture pattern</span><span className="portfolio-visual-dot" /></div>
        <div className="portfolio-cloud-diagram">
          <div className="portfolio-diagram-node portfolio-cloud-source"><Database size={23} /><span>Data sources</span></div>
          <div className="portfolio-flow-connector"><i /></div>
          <div className="portfolio-cloud-services"><div><Layers3 size={15} /> Dataproc</div><div><GitBranch size={15} /> Composer</div></div>
          <div className="portfolio-flow-connector"><i /></div>
          <div className="portfolio-diagram-node portfolio-cloud-destination"><Database size={23} /><span>BigQuery</span></div>
        </div>
        <div className="portfolio-governance-bar"><ShieldCheck size={12} /><span>Governance</span><i /><span>Reusable infrastructure</span></div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="portfolio-project-visual portfolio-tenant-visual" aria-hidden="true">
        <div className="portfolio-visual-caption"><span>SaaS / orchestration pattern</span><span className="portfolio-visual-dot" /></div>
        <div className="portfolio-tenant-diagram">
          <div className="portfolio-tenant-trigger"><Code2 size={17} /><span>Onboarding event</span></div>
          <div className="portfolio-tenant-branches"><i /><i /><i /></div>
          <div className="portfolio-tenants">{['01', '02', '03'].map((tenant) => <div key={tenant}><Box size={22} /><span>Tenant {tenant}</span><small><Check size={10} /> Provision</small></div>)}</div>
        </div>
        <div className="portfolio-diagram-footer"><span>Template</span><ArrowRight size={12} /><span>Orchestrate</span><ArrowRight size={12} /><span>Deploy</span></div>
      </div>
    );
  }

  return (
    <div className="portfolio-project-visual portfolio-lowcode-visual" aria-hidden="true">
      <div className="portfolio-visual-caption"><span>Low-code / workflow pattern</span><span className="portfolio-visual-dot" /></div>
      <div className="portfolio-lowcode-canvas">
        <div className="portfolio-pipeline"><div><Database size={20} /><span>Source</span></div><i /><div><Code2 size={20} /><span>Transform</span></div><i /><div><Layers3 size={20} /><span>Publish</span></div></div>
      </div>
      <div className="portfolio-diagram-footer"><span>Visual workflows</span><span className="portfolio-footer-divider">/</span><span>Spark + Airflow</span></div>
    </div>
  );
}

export function Showcase() {
  const { motionEnabled } = useMotionPreferences();

  return (
    <section id="work" className="portfolio-section portfolio-work" data-motion={motionEnabled ? 'on' : 'off'}>
      <div className="portfolio-container">
        <SectionLabel index="02" eyebrow="selected work" title="Complexity, engineered out.">
          A selection of product concepts and engineering patterns across AI, cloud, data and developer platforms.
        </SectionLabel>
        <div className="portfolio-project-grid">
          {showcase.map((project, index) => (
            <motion.article
              key={project.title}
              className="portfolio-project-card"
              initial={motionEnabled ? { opacity: 0, y: 32 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: motionEnabled ? 0.65 : 0, delay: motionEnabled ? (index % 2) * 0.08 : 0 }}
            >
              <ProjectDiagram index={index} />
              <div className="portfolio-project-info">
                <p className="portfolio-project-category"><span>{project.company}</span><span>{project.number}</span></p>
                <h3>{project.title}</h3>
                <p className="portfolio-project-description">{project.description}</p>
                <ul className="portfolio-stack-list" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
