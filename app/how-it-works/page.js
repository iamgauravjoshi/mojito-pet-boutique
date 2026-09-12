import Link from 'next/link'
export const metadata = { title:'How it Works - Mojito Pet Boutique' }
const steps = [
  { n:1, t:'Choose Boutique Service', d:'Luxury grooming, styling, spa or boutique shopping. Tell breed & style inspo.', icon:'✨', color:'#E8FFD0' },
  { n:2, t:'Pick Date & Time Slot', d:'60-90 min slots, no all-day wait. Appointment only for hygienic experience.', icon:'📅', color:'#FFE4E9' },
  { n:3, t:'Book & Pay Online', d:'Pay 100% online or 50% advance. Secure UPI/Card. Instant confirmation.', icon:'💳', color:'#FFF3C4' },
  { n:4, t:'Drop & Relax in Lounge', d:'AC parent lounge, free chai, watch grooming through glass. Transparent process.', icon:'🛋️', color:'#E6F7FF' },
  { n:5, t:'Glow-Up Reveal & Photoshoot', d:'Bow, perfume, photoshoot - your pet walks out like a star. Free Instagram pics.', icon:'📸', color:'#C8F277' },
]
export default function HowItWorks(){
  return(
    <>
    <section className="section" style={{paddingTop:'130px'}}>
      <div className="section-head"><div className="eyebrow">How it Works</div><h2>Book Boutique Glow-Up in Seconds</h2><p>Same seamless flow as The Pet Fort - appointment only, no waiting, luxury experience.</p></div>
      <div style={{width:'min(900px, calc(100% - 32px))',margin:'0 auto'}}>
        {steps.map(s=>(
          <div key={s.n} style={{display:'flex',gap:'20px',marginBottom:'28px',background:'white',padding:'20px',borderRadius:'20px',border:'1px solid rgba(10,61,46,0.06)',boxShadow:'0 8px 30px rgba(10,61,46,0.06)'}}>
            <div style={{width:'56px',height:'56px',borderRadius:'16px',background:s.color,display:'grid',placeItems:'center',fontSize:'26px',flexShrink:0}}>{s.icon}</div>
            <div><div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'6px'}}><span style={{width:'28px',height:'28px',borderRadius:'50%',background:'#0A3D2E',color:'white',display:'grid',placeItems:'center',fontFamily:'Bricolage Grotesque',fontWeight:700,fontSize:'14px'}}>{s.n}</span><h4 style={{fontSize:'20px',color:'#0A3D2E'}}>{s.t}</h4></div><p style={{color:'#6B7F93',fontSize:'14px',lineHeight:'1.6'}}>{s.d}</p></div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:'30px'}}><Link href="/booking" className="btn btn-lime">Book Glow-Up Now →</Link></div>
    </section>
    <section className="section">
      <div className="why">
        <div className="why-head"><h2>What Happens During 90 Min?</h2><p>Transparent process - you can watch everything.</p></div>
        <div className="features-grid">
          <div className="feature"><i>👋</i><h4>0-10 Min - Welcome & Check</h4><p>Health check, coat analysis, style consultation.</p></div>
          <div className="feature"><i>🛁</i><h4>10-35 Min - Spa Bath</h4><p>Organic shampoo, conditioner, blueberry facial.</p></div>
          <div className="feature"><i>💨</i><h4>35-50 Min - Blow Dry</h4><p>Low-heat dry, brushing, de-shedding.</p></div>
          <div className="feature"><i>✂️</i><h4>50-75 Min - Styling</h4><p>Breed cut, face, feet, sanitary trim.</p></div>
          <div className="feature"><i>💅</i><h4>75-85 Min - Pawdicure</h4><p>Nails, paw balm, teeth, ears, perfume.</p></div>
          <div className="feature"><i>🎀</i><h4>85-90 Min - Boutique & Photos</h4><p>Bow, bandana, outfit & photoshoot.</p></div>
          <div className="feature"><i>📸</i><h4>Free Photoshoot</h4><p>3 edited pics for Instagram, ready in 10 mins.</p></div>
          <div className="feature"><i>🏠</i><h4>Take Home Tips</h4><p>Brushing guide, next appointment reminder.</p></div>
        </div>
      </div>
    </section>
    </>
  )
}
