import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export default function ProjectOverviewImage({ project }) {
  const [failed, setFailed] = useState(Boolean(project.screenshotPending))
  return <figure className={`overview-visual overview-visual-${project.presentation}`}>
    <div className="overview-image-frame">
      {failed ? <div className="overview-image-pending"><ImageOff aria-hidden="true" size={26}/><p>{project.name} homepage screenshot</p><small>Image file awaiting import</small></div> : <img src={project.image} alt={project.imageAlt} onError={() => setFailed(true)} fetchPriority="high" decoding="async"/>}
    </div>
    <figcaption>{project.name} · {project.presentation === 'mobile' ? 'Mobile application' : 'Homepage'} · In development</figcaption>
  </figure>
}
