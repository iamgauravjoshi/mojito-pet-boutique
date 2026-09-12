import Link from 'next/link'
export const metadata = { title:'Pricing - Mojito Pet Boutique Jaipur' }
export default function Pricing(){
  return(
    <>
    <section className="section" style={{paddingTop:'130px'}}>
      <div className="section-head"><div className="eyebrow">Boutique Pricing</div><h2>Luxury That&apos;s Worth It</h2><p>Transparent pricing. Organic products included. Free photoshoot included. No hidden charges.</p></div>
      <div className="pricing">
        <div className="price-card"><h3>Essential Glow</h3><p>Quick freshen up</p><div className="price">₹699 <small>/ session</small></div><ul className="price-list"><li>Bath + blow-dry + brushing</li><li>Nail trim + ear cleaning</li><li>Perfume + bandana</li><li>30-45 mins</li></ul><Link href="/booking?plan=essential" className="btn btn-ghost" style={{width:'100%',justifyContent:'center'}}>Book Essential</Link></div>
        <div className="price-card featured"><div style={{position:'absolute',top:'16px',right:'16px',background:'#C8F277',color:'#0A3D2E',fontSize:'11px',fontWeight:800,padding:'6px 10px',borderRadius:'100px'}}>MOST POPULAR</div><h3>Luxury Spa</h3><p>Full boutique experience</p><div className="price">₹1299 <small>/ session</small></div><ul className="price-list"><li>Organic aroma bath + facial</li><li>Breed-specific styling</li><li>Pawdicure + teeth + perfume</li><li>Bow + free photoshoot</li><li>60-90 mins</li></ul><Link href="/booking?plan=luxury" className="btn btn-lime" style={{width:'100%',justifyContent:'center',color:'#0A3D2E'}}>Book Luxury Spa</Link></div>
        <div className="price-card"><h3>Full Makeover</h3><p>Glow-up + boutique outfit</p><div className="price">₹1999 <small>/ session</small></div><ul className="price-list"><li>Everything in Luxury Spa</li><li>Designer outfit / bow set</li><li>Creative coloring (optional)</li><li>3 edited photos + video</li><li>Free next nail trim</li></ul><Link href="/booking?plan=makeover" className="btn btn-ghost" style={{width:'100%',justifyContent:'center'}}>Book Makeover</Link></div>
      </div>
    </section>
    <section className="section" style={{paddingTop:0}}>
      <div style={{width:'min(900px, calc(100% - 32px))',margin:'0 auto'}}>
        <div className="admin-card" style={{padding:'28px'}}>
          <h3 style={{fontSize:'22px',color:'#0A3D2E',marginBottom:'16px'}}>Add-ons & Boutique Shop</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
            {[
              ['Teeth Brushing','₹199'],
              ['De-shedding Treatment','₹399'],
              ['Tick & Flea Treatment','₹499'],
              ['Blueberry Facial','₹199'],
              ['Paw Balm + Massage','₹149'],
              ['Designer Bow / Bandana','₹249'],
              ['Pet Perfume (30ml)','₹399'],
              ['Photoshoot (5 pics)','₹299'],
              ['Sweater / T-shirt','₹699'],
              ['Custom Name Collar','₹899'],
            ].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'12px 14px',background:'#FFFBF2',borderRadius:'12px',border:'1px solid rgba(10,61,46,0.06)'}}><span style={{fontSize:'13px',fontWeight:600}}>{k}</span><b style={{fontSize:'13px',color:'#0A3D2E'}}>{v}</b></div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
