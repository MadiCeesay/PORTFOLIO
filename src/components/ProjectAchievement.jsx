import { Trophy } from 'lucide-react'

export default function ProjectAchievement({ project }) {
  if (!project.achievement) return null
  return <div className="project-recognition">
    <p className="project-team">Team: <span>{project.team}</span></p>
    <span className="project-award"><Trophy size={16} aria-hidden="true"/>{project.achievement}</span>
  </div>
}
