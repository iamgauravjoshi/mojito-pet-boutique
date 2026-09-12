'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const pathname = usePathname()
  if(pathname?.startsWith('/admin')) return null
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { href:'/', label:'Home', icon:'🏠' },
    { href:'/services', label:'Services', icon:'✨' },
    { href:'/how-it-works', label:'How it Works', icon:'⚡' },
    { href:'/gallery', label:'Gallery', icon:'📸' },
    { href:'/pricing', label:'Pricing', icon:'💰' },
    { href:'/contact', label:'Contact', icon:'📍' },
  ]

  // Lock body scroll when menu open
  useEffect(()=>{
    if(mobileOpen) document.body.style.overflow='hidden'
    else document.body.style.overflow=''
    return ()=>{document.body.style.overflow=''}
  },[mobileOpen])

  // Close on route change
  useEffect(()=>{setMobileOpen(false)},[pathname])

  return(
    <>
      <nav className="navbar">
        <Link href="/" className="logo" onClick={()=>setMobileOpen(false)}>
          <div className="logo-mark">M</div>
          <div className="logo-text"><b>Mojito Pet Boutique</b><small>Jaipur • Luxury Grooming</small></div>
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {links.map(l=>(
            <Link key={l.href} href={l.href} className={pathname===l.href?'active':''}>{l.label}</Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions desktop-only">
          <a className="btn btn-ghost btn-sm" href="tel:+919571888868">📞 Call</a>
          <Link className="btn btn-primary btn-sm" href="/booking">Book Now</Link>
          <Link className="btn btn-ghost btn-sm" href="/admin" style={{background:'#0A3D2E',color:'white',borderColor:'#0A3D2E'}}>Admin</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <div className={`hamburger ${mobileOpen?'open':''}`}>
            <span></span><span></span><span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && <div className="mobile-overlay" onClick={()=>setMobileOpen(false)} />}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen?'open':''}`}>
        <div className="mobile-menu-header">
          <div className="logo"><div className="logo-mark">M</div><div className="logo-text"><b>Mojito Pet Boutique</b><small>Luxury Grooming • Jaipur</small></div></div>
          <button className="mobile-close" onClick={()=>setMobileOpen(false)}>✕</button>
        </div>
        
        <div className="mobile-menu-links">
          {links.map(l=>(
            <Link key={l.href} href={l.href} className={pathname===l.href?'active':''} onClick={()=>setMobileOpen(false)}>
              <span style={{display:'flex',alignItems:'center',gap:'12px'}}><span style={{fontSize:'18px'}}>{l.icon}</span>{l.label}</span>
              <span style={{opacity:0.4}}>→</span>
            </Link>
          ))}
        </div>

        <div className="mobile-menu-actions">
          <Link href="/booking" className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:'16px'}} onClick={()=>setMobileOpen(false)}>✨ Book Grooming Now</Link>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
            <a href="tel:+919571888868" className="btn btn-ghost" style={{justifyContent:'center',padding:'14px'}}>📞 Call</a>
            <Link href="/admin" className="btn btn-ghost" style={{justifyContent:'center',padding:'14px',background:'#0A3D2E',color:'white',borderColor:'#0A3D2E'}} onClick={()=>setMobileOpen(false)}>Admin</Link>
          </div>
          <div style={{background:'#E8FFD0',padding:'12px',borderRadius:'14px',fontSize:'12px',color:'#0A5C36',textAlign:'center',marginTop:'4px'}}>
            📍 194, Anjani Marg, Khatipura<br/>10AM-8:30PM • +91 95718 88868
          </div>
        </div>
      </div>
    </>
  )
}
