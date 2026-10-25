import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";

import { baseURL, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({ title: work.title, description: work.description, baseURL, path: work.path, image: "/images/og/home.jpg" });
}

const projects = [
  {
    number: "01", name: "Anime Index", category: "Distributed discovery platform",
    description: "A production-oriented anime discovery application combining a modern catalogue interface with a normalized aggregation API, resilient provider access, and an AWS-hosted container stack.",
    highlights: ["Live AniList GraphQL trending, search, and title-detail flows", "Django REST API with Redis caching and graceful provider fallbacks", "Dockerized Next.js, Django, pgvector/PostgreSQL, and Redis on AWS EC2"],
    tags: ["Next.js 16", "React 19", "TypeScript", "Python", "Django REST", "PostgreSQL", "pgvector", "Redis", "GraphQL", "Docker Compose", "AWS EC2", "CloudFormation", "Jenkins", "Kafka"],
    live: "https://anime-index.65-0-27-27.sslip.io", source: "https://github.com/thelovedhimaan/animae-search", accent: "lime",
  },
  {
    number: "02", name: "Dynamic Chemicals", category: "Commerce and operations platform",
    description: "A production catalogue and order-management platform for personalized chemical products, covering discovery, multi-item requests, private tracking, pricing, notifications, and staff operations.",
    highlights: ["Multi-item ordering with customization and image previews", "Express API, Supabase persistence, and JWT-protected administration", "Meta WhatsApp, Resend email, and optional OpenAI support integrations"],
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express 5", "Supabase", "PostgreSQL", "JWT", "WhatsApp API", "Resend", "OpenAI Responses", "Vercel"],
    live: "https://dynamicchemicals.vercel.app", source: "https://github.com/thelovedhimaan/dynamic_chemicals", accent: "cyan",
  },
  {
    number: "03", name: "Color Palette Studio", category: "Accessible design tooling",
    description: "A cloud-backed color-system workspace for creating private palettes, evaluating accessibility, saving checkpoints, sharing snapshots, and exporting production-ready tokens.",
    highlights: ["Google OAuth, Supabase Postgres, ownership policies, and read-only sharing", "WCAG contrast analysis, color-vision previews, and version history", "Vitest, Testing Library, axe-core, bundle budgets, and GitHub Actions"],
    tags: ["React 19", "TypeScript", "Vite 6", "Supabase Auth", "Google OAuth", "PostgreSQL RLS", "Vitest", "Testing Library", "axe-core", "WCAG", "GitHub Actions", "Vercel"],
    live: "https://color-pallet-drab.vercel.app", source: "https://github.com/thelovedhimaan/color-pallet", accent: "violet",
  },
] as const;

const principles = [
  ["01", "Useful first", "Start with the real user flow, then shape the architecture around it."],
  ["02", "Evidence driven", "Validate accessibility, performance, security boundaries, and production behavior."],
  ["03", "Built to operate", "Treat administration, failure states, documentation, and deployment as product work."],
] as const;

export default function WorkPage() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" className="work-page">
      <Schema as="webPage" baseURL={baseURL} path={work.path} title={work.title} description={work.description} image="/images/og/home.jpg" author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }} />

      <header className="work-hero">
        <Text variant="label-strong-s" onBackground="brand-weak">Selected product work</Text>
        <Heading variant="display-strong-l" wrap="balance">Products designed, built, and prepared for real use.</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">Full-stack projects combining focused interfaces, dependable workflows, technical depth, and the operational details needed beyond launch.</Text>
        <div className="work-summary" aria-label="Portfolio summary">
          <span><strong>Full stack</strong> UI to operations</span><span><strong>Live</strong> product demos</span>
        </div>
      </header>

      <div className="work-projects">
        {projects.map((project) => (
          <article className={`work-card work-card--${project.accent}`} key={project.name}>
            <div className="work-card__rail"><span>{project.number}</span><i aria-hidden="true" /><small>Live project</small></div>
            <div className="work-card__body">
              <div className="work-card__heading">
                <div><Text variant="label-strong-s" onBackground="neutral-weak">{project.category}</Text><Heading variant="heading-strong-xl">{project.name}</Heading></div>
                <span className="work-card__status"><i /> Production</span>
              </div>
              <Text onBackground="neutral-weak" className="work-card__description">{project.description}</Text>
              <div className="work-card__details">
                <div><Text variant="label-strong-s" onBackground="neutral-weak">What it delivers</Text><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
                <div><Text variant="label-strong-s" onBackground="neutral-weak">Stack</Text><div className="work-card__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </div>
              <div className="work-card__actions">
                <a className="work-link work-link--primary" href={project.live} target="_blank" rel="noreferrer">View live <span aria-hidden="true">↗</span></a>
                <a className="work-link" href={project.source} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="work-principles">
        <div className="work-principles__intro"><Text variant="label-strong-s" onBackground="brand-weak">How I build</Text><Heading variant="heading-strong-xl">Engineering beyond the interface</Heading><Text onBackground="neutral-weak">Each project is treated as a complete product system, including its customer journey, operating model, quality evidence, and recovery path.</Text></div>
        <div className="work-principles__grid">
          {principles.map(([number, title, description]) => <article key={number}><span className="work-principle__number">{number}</span><div><Heading variant="heading-strong-s">{title}</Heading><Text onBackground="neutral-weak">{description}</Text></div></article>)}
        </div>
      </section>
    </Column>
  );
}
