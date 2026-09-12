export const metadata = { title:'Contact - Mojito Pet Boutique Jaipur' }
export default function Contact(){
  return(
    <>
    <section className="section" style={{paddingTop:'130px'}}>
      <div className="section-head"><div className="eyebrow">Visit Us</div><h2>We&apos;re in Khatipura, Jaipur</h2><p>10AM-8:30PM Mon-Sat. Appointment only. Call, WhatsApp or walk-in for tour.</p></div>
      <div className="booking-layout">
        <div className="booking-form">
          <h3 style={{fontSize:'22px',color:'#0A3D2E',marginBottom:'6px'}}>Send us a Message</h3>
          <p style={{color:'#6B7F93',fontSize:'14px',marginBottom:'20px'}}>We reply within 10 mins on WhatsApp.</p>
          <div className="form-grid">
            <div><label className="label">Your Name</label><input className="input" placeholder="e.g. Ananya Singh"/></div>
            <div className="form-row">
              <div><label className="label">Phone</label><input className="input" placeholder="+91 95..."/></div>
              <div><label className="label">Pet Type</label><select className="input"><option>Dog</option><option>Cat</option><option>Other</option></select></div>
            </div>
            <div><label className="label">Message</label><textarea className="input" rows={4} placeholder="Breed, style you want, dates..."></textarea></div>
            <a href="https://wa.me/919571888868" target="_blank" className="btn btn-lime" style={{justifyContent:'center',color:'#0A3D2E'}}>Send on WhatsApp →</a>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <div className="admin-card">
            <h4 style={{color:'#0A3D2E',marginBottom:'10px'}}>📍 Location</h4>
            <p style={{fontSize:'14px',color:'#6B7F93',lineHeight:'1.7'}}><b>194, Basement, Anjani Marg</b><br/>Hanuman Nagar Extension, Khatipura<br/>Jaipur - 302012<br/><br/><a href="https://maps.google.com/?q=26.9265254,75.7390168" target="_blank" className="btn btn-ghost btn-sm">Open in Google Maps →</a></p>
          </div>
          <div className="admin-card">
            <h4 style={{color:'#0A3D2E',marginBottom:'10px'}}>📞 Contact</h4>
            <p style={{fontSize:'14px',color:'#6B7F93',lineHeight:'1.7'}}>Phone: +91 95718 88868<br/>WhatsApp: +91 95718 88868<br/>Hours: 10AM - 8:30PM Mon-Sat<br/>Appointment Only</p>
            <div style={{marginTop:'12px',display:'flex',gap:'8px'}}><a href="tel:+919571888868" className="btn btn-primary btn-sm">Call Now</a><a href="https://wa.me/919571888868" target="_blank" className="btn btn-ghost btn-sm">WhatsApp</a></div>
          </div>
          <div className="admin-card" style={{background:'#0A3D2E',color:'white'}}>
            <h4 style={{marginBottom:'10px'}}>Why Appointment Only?</h4>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.7)',lineHeight:'1.6'}}>We take only 1 pet at a time for stress-free, hygienic grooming. No cage, no rush. Your baby gets full attention.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
