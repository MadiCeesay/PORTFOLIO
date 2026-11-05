import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { socials } from '../data/socials'
const links=[['Home','home'],['About','about'],['Skills','skills'],['Work','work'],['Approach','approach'],['Contact','contact']]
export function Logo(){return <Link to="/#home" className="logo" aria-label="Madi Ceesay home">MC<span>.</span></Link>}
export function Navbar(){
 const [open,setOpen]=useState(false),[active,setActive]=useState('home'); const toggle=useRef(null); const location=useLocation()
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)})},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(e=>observer.observe(e));return()=>observer.disconnect()},[location.pathname])
 useEffect(()=>{if(!open)return; const key=e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[open])
 return <header className="site-header"><div className="container nav-row"><Logo/><nav id="main-navigation" aria-label="Main navigation" className={open?'navigation open':'navigation'}>{links.map(([label,id])=><Link key={id} to={`/#${id}`} className={location.pathname==='/'&&active===id?'active':''} aria-current={location.pathname==='/'&&active===id?'location':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><a href="/#contact" className="button primary nav-cta">Let’s Connect<ArrowUpRight size={15}/></a><button ref={toggle} className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button></div></header>
}
export function Footer(){return <footer className="container footer"><Logo/><nav aria-label="Footer navigation">{links.map(([label,id])=><Link key={id} to={`/#${id}`}>{label}</Link>)}</nav><div className="footer-socials">{socials.filter(s=>s.name==='LinkedIn').map(s=><a key={s.name} href={s.url} aria-label={`${s.name} profile (opens in a new tab)`} target="_blank" rel="noopener noreferrer"><s.icon size={18} aria-hidden="true"/></a>)}</div><p>© {new Date().getFullYear()} Madi Ceesay</p></footer>}
