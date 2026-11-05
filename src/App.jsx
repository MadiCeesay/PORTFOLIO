import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components/Layout'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
import { projects } from './data/projects'
export default function App(){const {pathname,hash}=useLocation();useEffect(()=>{const project=projects.find(p=>pathname===`/projects/${p.slug}`);document.title=project?`${project.name} — Madi Ceesay`:'Madi Ceesay — Full-Stack Software Engineer';if(hash){requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView())}else window.scrollTo(0,0)},[pathname,hash]);return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetails/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
