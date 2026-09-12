'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer(){
  const pathname = usePathname()
  if(pathname?.startsWith('/admin')) return null
  return(
    <footer>
      <div className="footer-inner">
        <div>
          <div className="logo" style={{marginBottom:'14px'}}><div className="logo-mark">M</div><div className="logo-text"><b>Mojito Pet Boutique Jaipur</b><small>Luxury Grooming • Since 2022</small></div></div>
          <p>Jaipur&apos;s luxury pet boutique in Khatipura. We elevate your pet&apos;s grooming experience with exceptional care, stylish cuts & spa. 4.9★ Rated.</p>
          <div style={{marginTop:'16px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
            <a className="btn btn-ghost btn-sm" href="https://maps.google.com/?q=26.9265254,75.7390168" target="_blank">📍 Khatipura, Jaipur</a>
            <a className="btn btn-ghost btn-sm" href="https://wa.me/919571888868" target="_blank">WhatsApp</a>
          </div>
        </div>
        <div><h4>Services</h4><p><Link href="/services">Luxury Grooming</Link><br/><Link href="/services">Breed Styling</Link><br/><Link href="/services">Pet Spa</Link><br/><Link href="/services">Boutique & Accessories</Link><br/><Link href="/gallery">Gallery</Link></p></div>
        <div><h4>Quick Links</h4><p><Link href="/how-it-works">How it Works</Link><br/><Link href="/pricing">Pricing</Link><br/><Link href="/booking">Book Now</Link><br/><Link href="/admin">Admin Panel</Link><br/><Link href="/contact">Contact</Link></p></div>
        <div><h4>Visit Us</h4><p><b>194, Basement, Anjani Marg</b><br/>Hanuman Nagar Ext., Khatipura<br/>Jaipur - 302012<br/><br/>📞 +91 95718 88868<br/>🕘 10 AM - 8:30 PM (Mon-Sat)<br/>📍 <a href="https://maps.google.com/?q=26.9265254,75.7390168" target="_blank">Open in Maps</a></p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Mojito Pet Boutique Jaipur. Crafted with 🍃 for stylish pets. Inspired by The Pet Fort.</span><span>Prototype • Next.js • Luxury Boutique</span></div>
    </footer>
  )
}
