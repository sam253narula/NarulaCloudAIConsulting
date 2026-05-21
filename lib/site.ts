import {
  Bot,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  DatabaseZap,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from 'lucide-react';

const repoName = 'NarulaCloudAIConsulting';
const basePath = process.env.NODE_ENV === 'production' ? `/${repoName}` : '';
const publicAsset = (path: string) => `${basePath}${path}`;

export const site = {
  name: 'Narula Cloud & AI Consulting',
  founder: 'Samarth Narula',
  title: 'DevOps, Cloud, Platform Engineering & AI Product Consulting',
  description:
    'Hands-on consulting for scalable cloud platforms, automated DevOps workflows, data engineering systems, low-code SaaS enablement, and AI-powered engineering products.',
  email: 'samarthnarula253@gmail.com',
  whatsappNumber: '+91 9930864102/ +1 7272255610',
  linkedin: 'https://www.linkedin.com/in/samarth-narula/',
  logo: publicAsset('/narula-logo-transparent.png'),
  logoWhite: publicAsset('/narula-logo-white.png'),
  founderPhoto: publicAsset('/samarth-narula-founder.jpg'),
  role: 'Founder',
  consultingRole: 'Founder & Independent Consultant'
};

export const primaryWhatsAppUrl = 'https://wa.me/919930864102';
export const indiaPhoneUrl = 'tel:+919930864102';
export const usPhoneUrl = 'tel:+17272255610';

export const navItems = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'method', href: '#method' },
  { label: 'proof', href: '#proof' },
  { label: 'contact', href: '#contact' }
];

export const metrics = [
  { value: '10+', label: 'years building systems', detail: 'cloud, AI, data and DevOps' },
  { value: '31K+', label: 'users enabled', detail: 'enterprise telecom platform' },
  { value: '55', label: 'engineers led', detail: 'global delivery teams' },
  { value: 'AWS/GCP', label: 'cloud depth', detail: 'certified multi-cloud execution' }
];

export const services = [
  {
    icon: GitBranch,
    title: 'DevOps Automation',
    text: 'CI/CD pipelines, release workflows, GitOps, deployment controls and delivery automation that reduce manual effort.',
    tags: ['CI/CD', 'GitOps', 'Argo']
  },
  {
    icon: CloudCog,
    title: 'Cloud Architecture',
    text: 'Secure AWS and GCP architecture for product platforms, data workloads, SaaS deployments and scalable foundations.',
    tags: ['AWS', 'GCP', 'Security']
  },
  {
    icon: Layers3,
    title: 'Platform Engineering',
    text: 'Internal developer platforms, reusable Terraform modules, golden paths and self-service engineering workflows.',
    tags: ['IDP', 'Terraform', 'DX']
  },
  {
    icon: Boxes,
    title: 'Kubernetes Platforms',
    text: 'Containerized delivery using Docker, Kubernetes, Helm, observability, service reliability and rollout strategies.',
    tags: ['EKS', 'GKE', 'Helm']
  },
  {
    icon: BrainCircuit,
    title: 'AI Product Engineering',
    text: 'GenAI prototypes, AI copilots, structured outputs, guardrails and practical AI automation for engineering teams.',
    tags: ['GenAI', 'RAG', 'Guardrails']
  },
  {
    icon: DatabaseZap,
    title: 'Data Engineering & Low-Code SaaS',
    text: 'Data pipelines, lakehouse migration, metadata workflows, low-code SaaS evaluation and cloud analytics foundations.',
    tags: ['Spark', 'BigQuery', 'SaaS']
  }
];

export const showcase = [
  {
    number: '01',
    title: 'ThinkDB AI Data Copilot',
    company: 'AI Product Architecture',
    description:
      'A natural-language database IDE concept that converts questions into safe, schema-aware SQL with validation, guardrails and conversational follow-ups.',
    stack: ['GenAI', 'SQL', 'Spring Boot', 'PostgreSQL'],
    icon: Bot,
    accent: 'from-lime-300 via-emerald-300 to-cyan-300'
  },
  {
    number: '02',
    title: 'Enterprise Cloud Data Platform',
    company: 'Cloud + Data Engineering',
    description:
      'GCP modernization patterns for data teams using BigQuery, Dataproc, Composer, governance and reusable platform automation.',
    stack: ['GCP', 'BigQuery', 'Dataproc', 'Composer'],
    icon: LineChart,
    accent: 'from-sky-300 via-indigo-300 to-violet-300'
  },
  {
    number: '03',
    title: 'Multi-Tenant SaaS Automation',
    company: 'DevOps + Platform Engineering',
    description:
      'Zero-touch SaaS onboarding patterns with cloud templates, Lambda workflows, Kubernetes jobs, secrets automation and Argo orchestration.',
    stack: ['AWS', 'EKS', 'Lambda', 'Argo'],
    icon: Workflow,
    accent: 'from-orange-300 via-rose-300 to-pink-300'
  },
  {
    number: '04',
    title: 'Low-Code Engineering Enablement',
    company: 'SaaS Evaluation + Adoption',
    description:
      'Technical evaluation and rollout support for low-code data platforms, Spark/Airflow workflows, demos and adoption playbooks.',
    stack: ['Prophecy', 'Spark', 'Airflow', 'DataOps'],
    icon: Code2,
    accent: 'from-yellow-300 via-lime-300 to-green-300'
  }
];

export const method = [
  {
    title: 'Map the bottleneck',
    description:
      'Find where cloud, DevOps, data, AI, cost, security or team workflows are slowing delivery down.',
    icon: Gauge
  },
  {
    title: 'Design the operating model',
    description:
      'Define architecture, implementation roadmap, reusable platform blocks and measurable engineering outcomes.',
    icon: ServerCog
  },
  {
    title: 'Build with your team',
    description:
      'Implement infrastructure, pipelines, Kubernetes platforms, data workflows and AI prototypes hands-on.',
    icon: Rocket
  },
  {
    title: 'Harden for production',
    description:
      'Improve reliability, observability, security, cost, governance and production readiness before scale.',
    icon: ShieldCheck
  }
];

export const marqueeWords = [
  'Cloud Architecture',
  'AI Products',
  'Kubernetes',
  'DevOps Automation',
  'Data Engineering',
  'Low-Code SaaS',
  'Terraform',
  'Platform Engineering',
  'Reliability',
  'GenAI Workflows'
];

export const trust = [
  { label: 'AWS', icon: CloudCog },
  { label: 'GCP', icon: CloudCog },
  { label: 'Kubernetes', icon: Boxes },
  { label: 'Terraform', icon: TerminalSquare },
  { label: 'GenAI', icon: BrainCircuit },
  { label: 'Security', icon: LockKeyhole },
  { label: 'Automation', icon: Zap },
  { label: 'Data', icon: DatabaseZap }
];

export const proofPoints = [
  'Cloud architecture across AWS and GCP',
  'Platform engineering with Kubernetes, Helm and Terraform',
  'Data engineering systems with Spark, BigQuery, Kafka and Flink',
  'Low-code SaaS enablement and enterprise rollout support',
  'AI-powered engineering tools, copilots and GenAI automation',
  'Hands-on delivery across startups, product teams and enterprises'
];

export const contactOptions = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'India', value: '+91 9930864102', href: indiaPhoneUrl },
  { label: 'US', value: '+1 7272255610', href: usPhoneUrl }
];
