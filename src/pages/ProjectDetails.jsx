import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { Eyebrow, External, ProjectImage } from '../components/UI'
import NotFound from './NotFound'
import ProjectOverviewImage from '../components/ProjectOverviewImage'
import ProjectAchievement from '../components/ProjectAchievement'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <NotFound/>

  return <article className={`container case-study${project.presentation ? ' development-overview' : ''}`}>
    <Link to="/#work" className="text-link"><ArrowLeft size={17}/>Back to selected work</Link>
    <Eyebrow>{project.category}</Eyebrow>
    <h1>{project.name}</h1>
    <ProjectAchievement project={project}/>
    <p className="case-intro">{project.summary}</p>
    {project.status && <p className="development-badge"><span aria-hidden="true"/>{project.status}</p>}
    <div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
    {project.live && <External href={project.live}>Visit Live Website</External>}
    {project.featured && <ProjectImage project={project}/>}
    {project.presentation && <ProjectOverviewImage key={project.slug} project={project}/>}
    <div className="case-content">
      {project.role && <section><Eyebrow>Contribution</Eyebrow><h2>My role</h2><p>{project.role}</p></section>}
      {project.sections.map(s => <section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}
      {project.features && <section className="planned-features"><h2>Planned key features</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}
      {project.statusDescription && <section className="surface project-status"><h2>Project status</h2><p className="development-badge"><span aria-hidden="true"/>{project.status}</p><p>{project.statusDescription}</p></section>}
      {project.note && <aside className="surface documentation-note"><h3>Documentation in progress</h3><p>{project.note}</p><p>Only supplied project details are included here. Research findings, testing results, and impact metrics will be added when documented.</p></aside>}
      <Link className="text-link" to="/#contact">Let’s discuss this project<ArrowRight size={16}/></Link>
    </div>
  </article>
}
