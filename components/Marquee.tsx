const technologies = ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'GenAI', 'Docker', 'BigQuery', 'GitOps'];

export function Marquee() {
  return (
    <section className="technology-strip" aria-label="Technologies: AWS, Google Cloud, Kubernetes, Terraform, GenAI, Docker, BigQuery, GitOps">
      <span className="technology-label">THE STACK BEHIND<br /><strong>WHAT’S NEXT</strong></span>
      <div className="technology-window" aria-hidden="true"><div className="technology-track">{[0, 1].map((copy) => <div key={copy} className="technology-group">{technologies.map((name) => <span key={name}><i />{name}</span>)}</div>)}</div></div>
    </section>
  );
}
