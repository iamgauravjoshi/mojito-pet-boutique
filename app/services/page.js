import Link from 'next/link'
export const metadata = { title: 'Services - Mojito Pet Boutique Jaipur' }

const services = [
  { id:'luxury', title:'Luxury Grooming & Spa', badge:'MOST BOOKED', color:'#E8FFD0', text:'#0A5C36', img:'/images/pet-spa-aromatherapy-bath-grooming-cute--1.jpg', price:'₹999', desc:'Bubble bath, aromatherapy, blueberry facial, de-shedding, paw balm, perfume - full spa day.', features:['Organic shampoo & conditioner','Blueberry facial & ear cleaning','De-shedding & undercoat removal','Paw balm & sanitary trim','Perfume & bow/bandana','Free photoshoot'] },
  { id:'styling', title:'Breed-Specific & Creative Styling', badge:'STYLISH CUTS', color:'#FFE4E9', text:'#7A2E4E', img:'/images/luxury-pet-boutique-grooming-salon-inter-2.jpg', price:'₹1299', desc:'Teddy, Puppy, Lion, Continental - our groomers know breed standards and Instagram trends.', features:['Breed standard cuts','Creative coloring (pet-safe)','Asian fusion & Teddy cuts','Show grooming preparation','Face & feet trimming','Tail & ear styling'] },
  { id:'boutique', title:'Pet Boutique & Fashion', badge:'NEW ARRIVALS', color:'#C8F277', text:'#0A3D2E', img:'/images/cute-dog-wearing-stylish-clothes-boutiqu-3.jpg', price:'₹499 onwards', desc:'Designer clothes, bows, bandanas, collars, leashes - curated collection for Jaipur\'s stylish pets.', features:['Designer sweaters & t-shirts','Bows, bandanas, tiaras','Premium leather collars','Harness & leash sets','Party & wedding outfits','Custom name embroidery'] },
  { id:'pawdicure', title:'Pawdicure, Dental & Hygiene', badge:'PAMPERED PAWS', color:'#E6F7FF', text:'#0E2E4D', img:'/images/pet-spa-aromatherapy-bath-grooming-cute--4.jpg', price:'₹599', desc:'Complete hygiene - nail art, paw balm, teeth brushing, anal glands, ear cleaning.', features:['Nail trim, filing, paw balm','Teeth brushing & breath spray','Ear cleaning & plucking','Anal gland expression','Sanitary trim','Flea & tick check'] },
]

export default function Services(){
  return(
    <>
    <section className="section" style={{paddingTop:'130px',paddingBottom:'20px'}}>
      <div className="section-head">
        <div className="eyebrow">Boutique Services</div>
        <h2>Luxury Care, Stylish Looks</h2>
        <p>Not just grooming - it&apos;s a boutique experience. Inspired by The Pet Fort but with fashion-first approach.</p>
      </div>
    </section>
    <section className="section" style={{paddingTop:0}}>
      <div style={{width:'min(1240px, calc(100% - 32px))',margin:'0 auto',display:'flex',flexDirection:'column',gap:'28px'}}>
        {services.map(s=>(
          <div key={s.id} className="admin-card" style={{padding:0,overflow:'hidden',display:'grid',gridTemplateColumns:'1fr 1.2fr'}}>
            <div style={{height:'100%',minHeight:'320px'}}><img src={s.img} alt={s.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
            <div style={{padding:'28px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
                <span style={{fontSize:'11px',fontWeight:800,padding:'6px 10px',borderRadius:'100px',background:s.color,color:s.text,letterSpacing:'0.06em'}}>{s.badge}</span>
                <b style={{fontFamily:'Bricolage Grotesque',fontSize:'20px',color:'#0A3D2E'}}>{s.price}</b>
              </div>
              <h3 style={{fontSize:'28px',color:'#0A3D2E',marginBottom:'10px'}}>{s.title}</h3>
              <p style={{color:'#6B7F93',fontSize:'14px',marginBottom:'16px',lineHeight:'1.6'}}>{s.desc}</p>
              <ul className="price-list" style={{margin:'0 0 20px'}}>
                {s.features.map(f=><li key={f}>{f}</li>)}
              </ul>
              <div style={{display:'flex',gap:'10px'}}>
                <Link href="/booking" className="btn btn-lime btn-sm">Book {s.title.split('&')[0]} →</Link>
                <Link href="/pricing" className="btn btn-ghost btn-sm">View Pricing</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="section">
      <div className="cta">
        <h2>Not sure which cut suits your baby? Get free consultation.</h2>
        <div className="cta-actions">
          <Link className="btn" style={{background:'white',color:'#0A3D2E'}} href="/booking">✨ Get Style Consultation</Link>
          <a className="btn" style={{background:'rgba(255,255,255,0.18)',color:'white',border:'1px solid rgba(255,255,255,0.3)'}} href="https://wa.me/919571888868" target="_blank">WhatsApp Us</a>
        </div>
      </div>
    </section>
    </>
  )
}
