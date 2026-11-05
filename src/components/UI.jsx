import { ArrowUpRight, Download, ImageOff } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'
export function Eyebrow({children}) { return <p className="eyebrow"><span/>{children}</p> }
export function CVButton() { return <a className="button secondary" href={profile.cv} download><Download size={16}/>Download CV</a> }
export function External({href,children,className='button primary'}) { return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16}/></a> }
export function ProjectImage({project}) { const [failed,setFailed]=useState(false); return <div className="project-image">{project.image&&!failed?<img src={project.image} onError={()=>setFailed(true)} alt={`${project.name} application homepage`} loading="lazy" width="1200" height="800"/>:<div className="image-placeholder"><ImageOff size={26}/><span>{project.name}</span><small>Application screenshot to be supplied</small></div>}</div> }
