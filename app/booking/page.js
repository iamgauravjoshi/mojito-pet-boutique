'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const PLANS = {
  essential:{name:'Essential Glow', price:699, time:'30-45 min', img:'/images/pet-spa-aromatherapy-bath-grooming-cute--3.jpg'},
  luxury:{name:'Luxury Spa (Most Popular)', price:1299, time:'60-90 min', img:'/images/pet-spa-aromatherapy-bath-grooming-cute--1.jpg'},
  makeover:{name:'Full Makeover + Outfit', price:1999, time:'90-120 min', img:'/images/cute-dog-wearing-stylish-clothes-boutiqu-3.jpg'},
  boutique:{name:'Boutique Shopping', price:499, time:'15 min', img:'/images/cute-dog-wearing-stylish-clothes-boutiqu-1.jpg'},
}

function BookingContent(){
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get('plan') || 'luxury'
  const [plan, setPlan] = useState(initialPlan)
  const [form, setForm] = useState({ownerName:'', phone:'', email:'', petName:'', breed:'', age:'', weight:'', date:'', time:'', style:'', addons:{teeth:false, deshed:false, photoshoot:true}, notes:''})
  const [payment, setPayment] = useState('upi')
  const [step, setStep] = useState(1)

  const currentPlan = PLANS[plan] || PLANS.luxury
  const addonCost = (form.addons.teeth?199:0)+(form.addons.deshed?399:0)
  const total = currentPlan.price + addonCost

  const handleBook = () =>{
    const bookings = JSON.parse(localStorage.getItem('mojito_bookings')||'[]')
    const newBooking = {id:'MOJ'+Date.now().toString().slice(-6), ...form, plan: currentPlan.name, total, status:'pending', paymentMethod:payment, paymentStatus: step===3 ? 'paid' : 'pending', createdAt: new Date().toISOString()}
    bookings.unshift(newBooking)
    localStorage.setItem('mojito_bookings', JSON.stringify(bookings))
    if(step<3) setStep(step+1)
    else {
      const text = `Hi Mojito Pet Boutique 🍃%0A%0ABooking ID: ${newBooking.id}%0AOwner: ${form.ownerName}%0APet: ${form.petName} (${form.breed})%0AService: ${currentPlan.name}%0ADate: ${form.date} ${form.time}%0AStyle: ${form.style}%0ATotal: ₹${total} paid via ${payment}%0APhone: ${form.phone}%0ANotes: ${form.notes}`
      window.open(`https://wa.me/919571888868?text=${text}`,'_blank')
      setStep(4)
    }
  }

  return(
    <section className="section" style={{paddingTop:'120px'}}>
      <div className="section-head" style={{marginBottom:'20px'}}>
        <div className="eyebrow">Booking</div>
        <h2>Book Boutique Glow-Up</h2>
        <p>Appointment only • 60-90 min • Free photoshoot • Organic products</p>
        <div style={{display:'flex',justifyContent:'center',gap:'8px',marginTop:'18px'}}>
          {[1,2,3].map(s=><div key={s} style={{display:'flex',alignItems:'center',gap:'8px'}}><div style={{width:'32px',height:'32px',borderRadius:'50%',background:step>=s?'#0A3D2E':'white',color:step>=s?'white':'#6B7F93',border:'1px solid rgba(10,61,46,0.12)',display:'grid',placeItems:'center',fontWeight:800,fontSize:'13px'}}>{s}</div>{s<3 && <div style={{width:'30px',height:'2px',background:step>s?'#0A3D2E':'rgba(10,61,46,0.12)'}}></div>}</div>)}
        </div>
      </div>

      <div className="booking-layout">
        <div className="booking-form">
          {step===1 && <>
            <h3 style={{fontSize:'20px',color:'#0A3D2E',marginBottom:'14px'}}>1. Choose Service & Slot</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px',marginBottom:'20px'}}>
              {Object.entries(PLANS).map(([k,p])=>(
                <div key={k} onClick={()=>setPlan(k)} style={{border:plan===k?'2px solid #0A3D2E':'1px solid rgba(10,61,46,0.08)',borderRadius:'16px',overflow:'hidden',cursor:'pointer',background:plan===k?'#E8FFD0':'white'}}>
                  <div style={{height:'90px'}}><img src={p.img} alt={p.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
                  <div style={{padding:'10px'}}><b style={{fontSize:'12px',color:'#0A3D2E'}}>{p.name}</b><div style={{fontSize:'11px',color:'#6B7F93'}}>₹{p.price} • {p.time}</div></div>
                </div>
              ))}
            </div>
            <div className="form-grid">
              <div className="form-row">
                <div><label className="label">Date *</label><input type="date" className="input" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
                <div><label className="label">Time Slot *</label><select className="input" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}><option value="">Select</option><option>10:00 AM</option><option>11:30 AM</option><option>1:00 PM</option><option>2:30 PM</option><option>4:00 PM</option><option>5:30 PM</option><option>7:00 PM</option></select></div>
              </div>
              <div><label className="label">Style Inspiration</label><input className="input" placeholder="Teddy cut, Lion cut, Instagram ref..." value={form.style} onChange={e=>setForm({...form,style:e.target.value})}/></div>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <label style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'12px',fontWeight:600,background:'white',padding:'8px 12px',borderRadius:'100px',border:'1px solid rgba(10,61,46,0.12)',cursor:'pointer'}}><input type="checkbox" checked={form.addons.teeth} onChange={e=>setForm({...form,addons:{...form.addons,teeth:e.target.checked}})}/> 🦷 Teeth +₹199</label>
                <label style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'12px',fontWeight:600,background:'white',padding:'8px 12px',borderRadius:'100px',border:'1px solid rgba(10,61,46,0.12)',cursor:'pointer'}}><input type="checkbox" checked={form.addons.deshed} onChange={e=>setForm({...form,addons:{...form.addons,deshed:e.target.checked}})}/> 🐾 De-shed +₹399</label>
                <label style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'12px',fontWeight:600,background:'#E8FFD0',padding:'8px 12px',borderRadius:'100px',border:'1px solid rgba(10,61,46,0.12)',cursor:'pointer'}}><input type="checkbox" checked={form.addons.photoshoot} onChange={e=>setForm({...form,addons:{...form.addons,photoshoot:e.target.checked}})}/> 📸 Free Photoshoot</label>
              </div>
            </div>
            <button className="btn btn-primary" style={{width:'100%',marginTop:'20px',justifyContent:'center',padding:'16px'}} onClick={()=>setStep(2)} disabled={!form.date||!form.time}>Continue to Pet Details →</button>
          </>}

          {step===2 && <>
            <h3 style={{fontSize:'20px',color:'#0A3D2E',marginBottom:'14px'}}>2. Pet & Owner Details</h3>
            <div className="form-grid">
              <div className="form-row">
                <div><label className="label">Owner Name *</label><input className="input" placeholder="Ananya Singh" value={form.ownerName} onChange={e=>setForm({...form,ownerName:e.target.value})}/></div>
                <div><label className="label">Phone *</label><input className="input" placeholder="+91 95..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div>
              </div>
              <div><label className="label">Email</label><input className="input" placeholder="ananya@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
              <div className="form-row">
                <div><label className="label">Pet Name *</label><input className="input" placeholder="Coco" value={form.petName} onChange={e=>setForm({...form,petName:e.target.value})}/></div>
                <div><label className="label">Breed *</label><input className="input" placeholder="Poodle / Shih Tzu" value={form.breed} onChange={e=>setForm({...form,breed:e.target.value})}/></div>
              </div>
              <div className="form-row">
                <div><label className="label">Age</label><input className="input" placeholder="2 years" value={form.age} onChange={e=>setForm({...form,age:e.target.value})}/></div>
                <div><label className="label">Weight</label><input className="input" placeholder="8kg" value={form.weight} onChange={e=>setForm({...form,weight:e.target.value})}/></div>
              </div>
              <div><label className="label">Special Notes</label><textarea className="input" rows={3} placeholder="Scared of dryer, sensitive skin..." value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}></textarea></div>
            </div>
            <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
              <button className="btn btn-ghost" style={{flex:1,justifyContent:'center'}} onClick={()=>setStep(1)}>← Back</button>
              <button className="btn btn-primary" style={{flex:1,justifyContent:'center'}} onClick={()=>setStep(3)} disabled={!form.ownerName||!form.phone||!form.petName}>Continue to Payment →</button>
            </div>
          </>}

          {step===3 && <>
            <h3 style={{fontSize:'20px',color:'#0A3D2E',marginBottom:'14px'}}>3. Payment</h3>
            <div style={{background:'#E8FFD0',padding:'16px',borderRadius:'16px',marginBottom:'16px'}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px'}}><span>{currentPlan.name}</span><b>₹{currentPlan.price}</b></div>
              {form.addons.teeth && <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px'}}><span>Teeth Brushing</span><b>₹199</b></div>}
              {form.addons.deshed && <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px'}}><span>De-shedding</span><b>₹399</b></div>}
              <div style={{height:'1px',background:'rgba(10,61,46,0.12)',margin:'10px 0'}}></div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'18px',fontWeight:800,color:'#0A3D2E'}}><span>Total</span><span>₹{total}</span></div>
            </div>
            <div style={{display:'grid',gap:'10px',marginBottom:'16px'}}>
              {[
                {id:'upi', label:'UPI (GPay, PhonePe)', icon:'📱', desc:'Instant confirmation'},
                {id:'card', label:'Card', icon:'💳', desc:'Visa, Mastercard'},
                {id:'cod', label:'Pay at Salon', icon:'💵', desc:'Pay after service'},
              ].map(m=>(
                <div key={m.id} onClick={()=>setPayment(m.id)} style={{padding:'14px',borderRadius:'14px',border:payment===m.id?'2px solid #0A3D2E':'1px solid rgba(10,61,46,0.12)',background:payment===m.id?'#E8FFD0':'white',cursor:'pointer',display:'flex',gap:'12px',alignItems:'center'}}>
                  <div style={{fontSize:'22px'}}>{m.icon}</div>
                  <div style={{flex:1}}><b style={{fontSize:'14px',color:'#0A3D2E'}}>{m.label}</b><div style={{fontSize:'12px',color:'#6B7F93'}}>{m.desc}</div></div>
                  <div style={{width:'20px',height:'20px',borderRadius:'50%',border:'2px solid #0A3D2E',background:payment===m.id?'#0A3D2E':'white',display:'grid',placeItems:'center'}}>{payment===m.id && <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'white'}}></div>}</div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:'10px'}}>
              <button className="btn btn-ghost" style={{flex:1,justifyContent:'center'}} onClick={()=>setStep(2)}>← Back</button>
              <button className="btn btn-lime" style={{flex:1,justifyContent:'center',padding:'16px',color:'#0A3D2E'}} onClick={handleBook}>Pay ₹{total} & Confirm →</button>
            </div>
          </>}

          {step===4 && (
            <div style={{textAlign:'center',padding:'30px 0'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'#E8FFD0',display:'grid',placeItems:'center',fontSize:'40px',margin:'0 auto 16px'}}>✅</div>
              <h3 style={{fontSize:'26px',color:'#0A3D2E',marginBottom:'8px'}}>Booking Confirmed! ✨</h3>
              <p style={{color:'#6B7F93',fontSize:'14px',marginBottom:'20px'}}>See you at Mojito! We&apos;ve sent details to WhatsApp.</p>
              <div style={{background:'#FFFBF2',padding:'16px',borderRadius:'16px',textAlign:'left',fontSize:'13px',border:'1px solid rgba(10,61,46,0.06)'}}>
                <div><b>Pet:</b> {form.petName} ({form.breed})</div>
                <div><b>Date:</b> {form.date} {form.time}</div>
                <div><b>Total:</b> ₹{total}</div>
              </div>
              <div style={{marginTop:'20px',display:'flex',gap:'10px',justifyContent:'center'}}>
                <a href="/" className="btn btn-ghost">Go Home</a>
                <a href="/admin" className="btn btn-primary">View in Admin →</a>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="admin-card" style={{position:'sticky',top:'100px'}}>
            <h4 style={{color:'#0A3D2E',marginBottom:'12px'}}>Booking Summary</h4>
            <div style={{height:'160px',borderRadius:'16px',overflow:'hidden',marginBottom:'14px'}}><img src={currentPlan.img} alt={currentPlan.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}><span style={{fontSize:'13px',color:'#6B7F93'}}>Service</span><b style={{fontSize:'13px'}}>{currentPlan.name}</b></div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}><span style={{fontSize:'13px',color:'#6B7F93'}}>Duration</span><b style={{fontSize:'13px'}}>{currentPlan.time}</b></div>
            <div style={{height:'1px',background:'rgba(10,61,46,0.08)',margin:'12px 0'}}></div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'18px',fontWeight:800,color:'#0A3D2E'}}><span>Total</span><span>₹{total}</span></div>
            <div style={{fontSize:'12px',color:'#6B7F93',marginTop:'8px'}}>✓ Organic Products<br/>✓ Free Photoshoot<br/>✓ Bow & Perfume<br/>✓ AC Parent Lounge</div>
            <div style={{marginTop:'16px',background:'#0A3D2E',color:'white',padding:'12px',borderRadius:'12px',fontSize:'12px'}}>
              <b>🍃 Mojito Pet Boutique</b><br/>194, Anjani Marg, Khatipura<br/>Jaipur • 10AM-8:30PM • +91 95718 88868
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BookingPage(){
  return(
    <Suspense fallback={<div style={{padding:'140px 20px',textAlign:'center',color:'#6B7F93'}}>Loading booking...</div>}>
      <BookingContent />
    </Suspense>
  )
}
