import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/projects'
import { Eyebrow, External, ProjectImage } from '../components/UI'
import NotFound from './NotFound'
import ProjectAchievement from '../components/ProjectAchievement'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <NotFound/>

  return <article className="container case-study">
    <Link to="/#work" className="text-link"><ArrowLeft size={17}/>Back to selected work</Link>
    <Eyebrow>{project.category}</Eyebrow>
    <h1>{project.name}</h1>
    <ProjectAchievement project={project}/>
    <p className="case-intro">{project.summary}</p>
    {project.live && <p className="live-badge"><span aria-hidden="true"/>Live</p>}
    <div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
    <div className="button-row case-links">
      {project.live && <External href={project.live}>{project.platform === 'mobile' ? 'Open the App' : 'Visit Live Website'}</External>}
      {project.code && <a className="button secondary" href={project.code} target="_blank" rel="noopener noreferrer"><Github size={16}/>View Code</a>}
    </div>
    {project.metrics && <dl className="metric-strip">{project.metrics.map(m => <div key={m.label}><dt>{m.value}</dt><dd>{m.label}</dd></div>)}</dl>}
    {project.image && <ProjectImage project={project}/>}
    <div className="case-content">
      {project.role && <section><Eyebrow>Contribution</Eyebrow><h2>My role</h2><p>{project.role}</p></section>}
      {project.sections.map(s => <section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}
      {project.video && <section id="demo"><Eyebrow>Demo</Eyebrow><h2>See it in action</h2><figure className="demo-video"><video src={project.video.src} poster={project.video.poster} controls muted playsInline preload="metadata"/><figcaption>{project.video.caption}</figcaption></figure></section>}
      {project.architecture && <section><Eyebrow>Architecture</Eyebrow><h2>How it’s built</h2><figure className="architecture"><img src={project.architecture.image} alt={`${project.name} system architecture diagram`} loading="lazy"/><figcaption>{project.architecture.caption}</figcaption></figure></section>}
      {project.challenges && <section><Eyebrow>Engineering</Eyebrow><h2>Key technical challenges</h2><div className="challenges">{project.challenges.map((c, i) => <article className="surface challenge" key={c.title}><span className="challenge-number">0{i + 1}</span><h3>{c.title}</h3><p><strong>Problem.</strong> {c.problem}</p><p><strong>Solution.</strong> {c.solution}</p></article>)}</div></section>}
      {project.results && <section><Eyebrow>Outcome</Eyebrow><h2>Results</h2><ul className="results">{project.results.map(r => <li key={r}><CheckCircle2 size={18} aria-hidden="true"/>{r}</li>)}</ul></section>}
      {project.features && <section className="planned-features"><h2>Key features</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}
      <Link className="text-link" to="/#contact">Let’s discuss this project<ArrowRight size={16}/></Link>
    </div>
  </article>
}
