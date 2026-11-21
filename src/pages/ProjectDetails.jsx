import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github } from 'lucide-react'
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
    {project.image && <ProjectImage project={project}/>}
    <div className="case-content">
      {project.role && <section><Eyebrow>Contribution</Eyebrow><h2>My role</h2><p>{project.role}</p></section>}
      {project.sections.map(s => <section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}
      {project.features && <section className="planned-features"><h2>Key features</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}
      <Link className="text-link" to="/#contact">Let’s discuss this project<ArrowRight size={16}/></Link>
    </div>
  </article>
}
