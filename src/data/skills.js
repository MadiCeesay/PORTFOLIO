import { Code2, Database, Braces, Cloud, FlaskConical, Binary } from 'lucide-react'
export const skills = [
  { name: 'Backend Development', icon: Braces, items: ['Node.js & Express.js', 'REST APIs', 'JWT authentication', 'Spring Boot'] },
  { name: 'Frontend Development', icon: Code2, items: ['React & React Router', 'Redux Toolkit', 'Tailwind CSS', 'HTML & CSS', 'Axios'] },
  { name: 'Databases', icon: Database, items: ['MongoDB', 'PostgreSQL'] },
  { name: 'Programming Languages', icon: Binary, items: ['JavaScript (ES6+)', 'Java', 'Python'] },
  { name: 'Testing', icon: FlaskConical, items: ['Postman'], note: 'API tooling used in my development workflow.' },
  { name: 'Tools and Deployment', icon: Cloud, items: ['Git & GitHub', 'Vite & VS Code', 'Docker', 'Vercel, Netlify & Render', 'Cloudinary'] },
]
