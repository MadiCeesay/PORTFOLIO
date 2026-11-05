import { GitFork, Linkedin, Mail } from 'lucide-react'
import { profile } from './profile'
export const socials = [
  { name: 'GitHub', url: 'https://github.com/MadiCeesay', icon: GitFork },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/madi-ceesay-857351372', icon: Linkedin },
  { name: 'Email', url: `mailto:${profile.email}`, icon: Mail },
].filter(s => s.url)
