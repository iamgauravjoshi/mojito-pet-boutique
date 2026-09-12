export const metadata = { title:'Gallery - Mojito Pet Boutique Jaipur' }
const images = [
  { src:'/images/luxury-pet-boutique-grooming-salon-inter-1.jpg', label:'Luxury Salon' },
  { src:'/images/luxury-pet-boutique-grooming-salon-inter-2.jpg', label:'Boutique Interior' },
  { src:'/images/luxury-pet-boutique-grooming-salon-inter-3.jpg', label:'Reception' },
  { src:'/images/pet-spa-aromatherapy-bath-grooming-cute--1.jpg', label:'Bubble Bath' },
  { src:'/images/pet-spa-aromatherapy-bath-grooming-cute--2.jpg', label:'Spa Day' },
  { src:'/images/pet-spa-aromatherapy-bath-grooming-cute--3.jpg', label:'After Bath Glow' },
  { src:'/images/cute-dog-wearing-stylish-clothes-boutiqu-1.jpg', label:'Fashion Stylist' },
  { src:'/images/cute-dog-wearing-stylish-clothes-boutiqu-3.jpg', label:'Designer Wear' },
  { src:'/images/cute-dog-wearing-stylish-clothes-boutiqu-4.jpg', label:'Diva Look' },
  { src:'/images/cute-dog-wearing-stylish-clothes-boutiqu-5.jpg', label:'Winter Fashion' },
  { src:'/images/pet-spa-aromatherapy-bath-grooming-cute--5.jpg', label:'Pug Spa' },
  { src:'/images/cute-happy-golden-retriever-puppy-clean--2.jpg', label:'Happy Client' },
]
export default function Gallery(){
  return(
    <>
    <section className="section" style={{paddingTop:'130px'}}>
      <div className="section-head"><div className="eyebrow">Inside Mojito</div><h2>Real, Clean & Boutique Photos</h2><p>AC salon, spa tubs, styling stations, designer rack - see why we are 4.9★ rated.</p></div>
      <div className="gallery">
        {images.map((img,i)=><div key={i} className="g-item"><img src={img.src} alt={img.label}/><span>{img.label}</span></div>)}
      </div>
    </section>
    <section className="section" style={{paddingTop:0}}>
      <div style={{width:'min(1240px, calc(100% - 32px))',margin:'0 auto'}}>
        <div className="admin-card" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',padding:'28px'}}>
          <div><h3 style={{fontSize:'24px',color:'#0A3D2E',marginBottom:'10px'}}>Want Live Salon Tour?</h3><p style={{color:'#6B7F93',fontSize:'14px',lineHeight:'1.6'}}>Video call to see salon, products, meet groomers before booking. Transparent & hygienic.</p></div>
          <div style={{display:'flex',gap:'12px',alignItems:'center',justifyContent:'flex-end',flexWrap:'wrap'}}><a href="https://wa.me/919571888868?text=Hi%20Mojito%2C%20I%20want%20a%20video%20tour%20of%20salon" target="_blank" className="btn btn-lime">Request Video Tour on WhatsApp</a></div>
        </div>
      </div>
    </section>
    </>
  )
}
