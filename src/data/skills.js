import { Code2, Database, Braces, Cloud, FlaskConical, Binary } from 'lucide-react'
export const skills = [
  { name: 'Backend Development', icon: Braces, items: ['Node.js & Express.js', 'REST APIs', 'Socket.IO (real-time)', 'JWT authentication', 'Spring Boot'] },
  { name: 'Frontend & Mobile', icon: Code2, items: ['React & React Router', 'React Native (Expo)', 'Redux Toolkit & React Query', 'Tailwind CSS', 'HTML & CSS'] },
  { name: 'Databases', icon: Database, items: ['MongoDB & Mongoose', 'MongoDB Atlas', 'PostgreSQL'] },
  { name: 'Programming Languages', icon: Binary, items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python'] },
  { name: 'Testing & AI', icon: FlaskConical, items: ['Vitest', 'Postman', 'Google Gemini API', 'ElevenLabs speech-to-text'] },
  { name: 'Tools and Deployment', icon: Cloud, items: ['Git & GitHub', 'Docker', 'Vercel & Render', 'Expo (EAS)', 'Cloudinary'] },
]
