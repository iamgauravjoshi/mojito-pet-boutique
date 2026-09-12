'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home(){
  useEffect(()=>{
    const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}})}, {threshold:0.1});
    document.querySelectorAll('.service-card,.stat,.feature,.review,.price-card').forEach(el=>{
      el.style.opacity=0;el.style.transform='translateY(18px)';el.style.transition='0.6s ease';
      obs.observe(el);
    });
  },[])

  return(
    <>
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="badge"><span className="badge-dot"></span> Khatipura&apos;s Luxury Boutique • 4.9★ Rated • 10AM-8:30PM</div>
          <h1>A <em>Boutique</em> Experience For Your Stylish Baby</h1>
          <div className="hero-pills">
            <span className="pill">🍃 Fresh & Hygienic</span>
            <span className="pill">💖 Stylish & Loving</span>
            <span className="pill">✨ Luxury Spa</span>
          </div>
          <p className="hero-desc">At Mojito Pet Boutique Jaipur, we elevate your pet&apos;s grooming experience. From breed-specific cuts to aromatherapy spa & designer accessories - your pet leaves looking like a star.</p>
          <div className="hero-ctas">
            <Link className="btn btn-lime" href="/booking">✨ Book Grooming</Link>
            <a className="btn btn-ghost" href="https://maps.google.com/?q=26.9265254,75.7390168" target="_blank">📍 View Location</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
            <div style={{display:'flex'}}><span style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid white',marginLeft:'-8px',display:'grid',placeItems:'center',background:'#E8FFD0'}}>🐩</span><span style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid white',marginLeft:'-8px',display:'grid',placeItems:'center',background:'#FFE4E9'}}>🐱</span><span style={{width:'36px',height:'36px',borderRadius:'50%',border:'2px solid white',marginLeft:'-8px',display:'grid',placeItems:'center',background:'#FFF3C4'}}>✂️</span></div>
            <div style={{fontSize:'13px',lineHeight:'1.3'}}><b style={{color:'#0A3D2E'}}>Trusted by 500+ Stylish Parents</b><br/>Khatipura, Jaipur&apos;s favorite boutique</div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-top">
              <img src="/images/pet-spa-aromatherapy-bath-grooming-cute--1.jpg" alt="Luxury Spa" />
            </div>
            <div className="visual-bottom">
              <h4>Your Pet&apos;s Glow-Up at Mojito ✨</h4>
              <p>Bubble bath, breed styling, pawdicure, perfume & bow - all with stress-free handling.</p>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <span className="vf">✓ Aroma Bath</span><span className="vf">✓ Breed Cut</span><span className="vf">✓ Pawdicure</span><span className="vf">✓ Perfume</span>
              </div>
            </div>
          </div>
          <div className="float-card fc1"><i style={{background:'#E8FFD0'}}>🧴</i> Organic Products</div>
          <div className="float-card fc2"><i style={{background:'#FFE4E9'}}>💇‍♀️</i> Creative Styling</div>
          <div className="float-card fc3"><i style={{background:'#FFF3C4'}}>🎀</i> Boutique Accessories</div>
        </div>
      </div>
      <div className="stats">
        <div className="stat"><div className="stat-icon" style={{background:'#E8FFD0'}}>💚</div><div><b>500+ Clients</b><span>Jaipur&apos;s stylish pet parents trust Mojito</span></div></div>
        <div className="stat"><div className="stat-icon" style={{background:'#FFE4E9'}}>⭐</div><div><b>4.9★ Rated</b><span>Loved for attention to detail & care</span></div></div>
        <div className="stat"><div className="stat-icon" style={{background:'#E6F7FF'}}>✨</div><div><b>Luxury Boutique</b><span>Not just grooming - it&apos;s a glow-up</span></div></div>
      </div>
    </section>

    <section className="section">
      <div className="section-head">
        <div className="eyebrow">Our Boutique Services</div>
        <h2>More Than Grooming - It&apos;s Fashion</h2>
        <p>Complete luxury care designed to keep your pet stylish, healthy and happy.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-img"><img src="/images/pet-spa-aromatherapy-bath-grooming-cute--1.jpg" alt="Luxury Grooming"/><span className="service-badge" style={{background:'#E8FFD0',color:'#0A5C36'}}>MOST BOOKED</span></div>
          <div className="service-content">
            <h3>Luxury Grooming & Spa</h3>
            <p>Bubble baths, aromatherapy, blueberry facials, de-shedding - spa day your pet deserves.</p>
            <ul className="service-list"><li>Organic shampoo & conditioner</li><li>Blow-dry & brushing</li><li>Blueberry facial & ear cleaning</li></ul>
            <Link href="/services" className="btn btn-ghost btn-sm">Explore Spa →</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-img"><img src="/images/luxury-pet-boutique-grooming-salon-inter-2.jpg" alt="Styling"/><span className="service-badge" style={{background:'#FFE4E9',color:'#7A2E4E'}}>STYLISH CUTS</span></div>
          <div className="service-content">
            <h3>Breed-Specific Styling</h3>
            <p>From Teddy cut to Lion cut, our certified groomers know breed standards & creative styles.</p>
            <ul className="service-list"><li>Teddy, Puppy, Lion cuts</li><li>Creative coloring (pet-safe)</li><li>Show grooming ready</li></ul>
            <Link href="/services" className="btn btn-ghost btn-sm">View Styles →</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-img"><img src="/images/cute-dog-wearing-stylish-clothes-boutiqu-3.jpg" alt="Boutique"/><span className="service-badge" style={{background:'#C8F277',color:'#0A3D2E'}}>NEW ARRIVALS</span></div>
          <div className="service-content">
            <h3>Pet Boutique & Accessories</h3>
            <p>Designer clothes, bows, bandanas, collars, leashes - make your pet a trendsetter.</p>
            <ul className="service-list"><li>Designer clothes & sweaters</li><li>Bows, bandanas, tiaras</li><li>Premium collars & leashes</li></ul>
            <Link href="/services" className="btn btn-ghost btn-sm">Shop Boutique →</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-img"><img src="/images/pet-spa-aromatherapy-bath-grooming-cute--4.jpg" alt="Pawdicure"/><span className="service-badge" style={{background:'#E6F7FF',color:'#0E2E4D'}}>PAMPERED PAWS</span></div>
          <div className="service-content">
            <h3>Pawdicure & Dental Care</h3>
            <p>Nail art, paw balm, teeth brushing - complete hygiene with a touch of luxury.</p>
            <ul className="service-list"><li>Nail trim & filing + paw balm</li><li>Teeth brushing & breath fresh</li><li>Anal glands & sanitary trim</li></ul>
            <Link href="/contact" className="btn btn-ghost btn-sm">Book Pawdicure →</Link>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center',marginTop:'28px'}}><Link href="/services" className="btn btn-primary">View All Boutique Services</Link></div>
    </section>

    <section className="section" style={{paddingTop:0}}>
      <div className="why">
        <div className="why-head">
          <h2>Why Jaipur Chooses Mojito Over Regular Salons</h2>
          <p>4.9★ rated for exceptional care, attention to detail and boutique luxury.</p>
        </div>
        <div className="features-grid">
          <div className="feature"><i>🧴</i><h4>Organic Products</h4><p>Hypoallergenic, pet-safe shampoos, no harsh chemicals, suitable for sensitive skin.</p></div>
          <div className="feature"><i>✂️</i><h4>Certified Groomers</h4><p>Trained in breed standards, creative styling & stress-free handling.</p></div>
          <div className="feature"><i>💖</i><h4>Stress-Free Handling</h4><p>Calm music, treats, breaks - no rushing, your pet&apos;s comfort first.</p></div>
          <div className="feature"><i>📸</i><h4>Glow-Up Photoshoot</h4><p>Free after-grooming photoshoot for Instagram - your pet becomes a star.</p></div>
          <div className="feature"><i>🎀</i><h4>Boutique Accessories</h4><p>Exclusive bows, clothes, collars - not available in regular pet shops.</p></div>
          <div className="feature"><i>🧹</i><h4>Hygienic Salon</h4><p>Sanitized tools after every pet, AC salon, odor-free, tick-free.</p></div>
          <div className="feature"><i>⏰</i><h4>On-Time Service</h4><p>60-90 min grooming, no all-day waiting, appointment only.</p></div>
          <div className="feature"><i>😌</i><h4>Pet Parent Lounge</h4><p>AC waiting, free chai, watch grooming via glass, transparent process.</p></div>
        </div>
      </div>
    </section>

    <section className="section" style={{paddingTop:'20px'}}>
      <div className="section-head"><div className="eyebrow">Inside Mojito</div><h2>Where Style Meets Love</h2><p>AC boutique salon, spa tubs, styling stations & designer rack - Khatipura, Jaipur.</p></div>
      <div className="gallery">
        <div className="g-item"><img src="/images/luxury-pet-boutique-grooming-salon-inter-1.jpg" alt="Salon"/><span>Luxury Salon Interior</span></div>
        <div className="g-item"><img src="/images/pet-spa-aromatherapy-bath-grooming-cute--2.jpg" alt="Spa"/><span>Spa Bath Zone</span></div>
        <div className="g-item"><img src="/images/cute-dog-wearing-stylish-clothes-boutiqu-1.jpg" alt="Fashion"/><span>Designer Fashion</span></div>
        <div className="g-item"><img src="/images/luxury-pet-boutique-grooming-salon-inter-3.jpg" alt="Reception"/><span>Boutique Reception</span></div>
        <div className="g-item"><img src="/images/cute-dog-wearing-stylish-clothes-boutiqu-4.jpg" alt="Diva"/><span>Diva Looks</span></div>
        <div className="g-item"><img src="/images/pet-spa-aromatherapy-bath-grooming-cute--5.jpg" alt="Pug Spa"/><span>Pug Spa Day</span></div>
      </div>
      <div style={{textAlign:'center',marginTop:'22px'}}><Link href="/gallery" className="btn btn-ghost">View Full Boutique →</Link></div>
    </section>

    <section className="section" style={{paddingTop:'20px'}}>
      <div className="section-head"><div className="eyebrow">Parent&apos;s Love</div><h2>What Stylish Parents Say</h2></div>
      <div className="reviews">
        <div className="review"><div className="review-head"><div className="review-avatar"><img src="/images/cute-happy-golden-retriever-puppy-clean--1.jpg" alt="RP"/></div><div><h5>Ananya Singh</h5><small>Poodle Parent, Khatipura</small></div></div><p>&quot;Mojito is not a grooming salon, it&apos;s a boutique! My poodle got teddy cut + bow + perfume. She looked like a doll. Super hygienic.&quot;</p><div className="stars">★★★★★</div></div>
        <div className="review"><div className="review-head"><div className="review-avatar"><img src="/images/cute-happy-golden-retriever-puppy-clean--3.jpg" alt="SK"/></div><div><h5>Rohit Mehta</h5><small>Golden Retriever Parent</small></div></div><p>&quot;Best in Jaipur for de-shedding. Used organic products, no rash. And they clicked amazing photos for Instagram!&quot;</p><div className="stars">★★★★★</div></div>
        <div className="review"><div className="review-head"><div className="review-avatar"><img src="/images/cute-happy-golden-retriever-puppy-clean--5.jpg" alt="GS"/></div><div><h5>Priya Sharma</h5><small>Indie Parent</small></div></div><p>&quot;My indie was scared of grooming but Mojito team handled with so much love. Calm, patient, and boutique clothes are just wow!&quot;</p><div className="stars">★★★★★</div></div>
      </div>
    </section>

    <section className="section">
      <div className="cta">
        <h2>Ready for your pet&apos;s boutique glow-up?</h2>
        <div className="cta-actions">
          <Link className="btn" style={{background:'white',color:'#0A3D2E'}} href="/booking">✨ Book Grooming Now</Link>
          <a className="btn" style={{background:'rgba(255,255,255,0.18)',color:'white',border:'1px solid rgba(255,255,255,0.3)'}} href="tel:+919571888868">Call: 95718 88868</a>
        </div>
      </div>
    </section>
    </>
  )
}
