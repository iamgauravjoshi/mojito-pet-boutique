'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminPage(){
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('mojito_bookings')||'[]')
    if(data.length===0){
      const demo = [
        {id:'MOJ847392', ownerName:'Ananya Singh', phone:'9876543210', petName:'Coco', breed:'Poodle', date:'2026-09-12', time:'11:30 AM', plan:'Luxury Spa (Most Popular)', total:1299, status:'confirmed', paymentStatus:'paid', createdAt:new Date().toISOString(), style:'Teddy cut'},
        {id:'MOJ847391', ownerName:'Rohit Mehta', phone:'9123456780', petName:'Bruno', breed:'Golden Retriever', date:'2026-09-11', time:'4:00 PM', plan:'Essential Glow', total:699, status:'pending', paymentStatus:'pending', createdAt:new Date().toISOString(), style:'De-shed'},
        {id:'MOJ847390', ownerName:'Priya Sharma', phone:'9988776655', petName:'Milo', breed:'Indie', date:'2026-09-13', time:'10:00 AM', plan:'Full Makeover + Outfit', total:1999, status:'pending', paymentStatus:'pending', createdAt:new Date().toISOString(), style:'Lion cut + bow'},
        {id:'MOJ847389', ownerName:'Kavita Jain', phone:'9876501234', petName:'Luna', breed:'Shih Tzu', date:'2026-09-10', time:'2:30 PM', plan:'Luxury Spa', total:1498, status:'checkedin', paymentStatus:'paid', createdAt:new Date().toISOString(), style:'Puppy cut'},
      ]
      localStorage.setItem('mojito_bookings', JSON.stringify(demo))
      setBookings(demo)
    } else setBookings(data)
  },[])

  const updateStatus = (id, newStatus) =>{
    const updated = bookings.map(b=> b.id===id ? {...b, status:newStatus} : b)
    setBookings(updated)
    localStorage.setItem('mojito_bookings', JSON.stringify(updated))
  }

  const filtered = bookings.filter(b=>{
    const matchFilter = filter==='all' || b.status===filter
    const matchSearch = !search || b.ownerName.toLowerCase().includes(search.toLowerCase()) || b.petName.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b=>b.status==='pending').length,
    confirmed: bookings.filter(b=>b.status==='confirmed').length,
    checkedin: bookings.filter(b=>b.status==='checkedin').length,
    revenue: bookings.reduce((s,b)=>s+(b.paymentStatus!=='pending'?b.total:0),0),
  }

  return(
    <div className="admin-wrap">
      <div className="admin-sidebar">
        <Link href="/" className="logo" style={{marginBottom:'30px'}}><div className="logo-mark" style={{background:'white',color:'#0A3D2E'}}>M</div><div className="logo-text"><b style={{color:'white'}}>Mojito Admin</b><small style={{color:'rgba(255,255,255,0.6)'}}>Boutique Jaipur</small></div></Link>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          {[
            {icon:'📊', label:'Dashboard', active:true},
            {icon:'📅', label:'Bookings', active:true},
            {icon:'✂️', label:'Grooming Queue', active:false},
            {icon:'👗', label:'Boutique Stock', active:false},
            {icon:'💰', label:'Payments', active:false},
            {icon:'👥', label:'Customers', active:false},
            {icon:'⚙️', label:'Settings', active:false},
          ].map(i=>(
            <div key={i.label} style={{padding:'12px 14px',borderRadius:'12px',background:i.active?'rgba(255,255,255,0.12)':'transparent',display:'flex',gap:'10px',alignItems:'center',fontSize:'14px',fontWeight:600,cursor:'pointer',opacity:i.active?1:0.6}}><span>{i.icon}</span>{i.label}</div>
          ))}
        </div>
        <div style={{marginTop:'30px',padding:'16px',background:'rgba(200,242,119,0.15)',borderRadius:'16px',border:'1px solid rgba(200,242,119,0.2)'}}>
          <b style={{fontSize:'13px',color:'#C8F277'}}>🍃 Boutique Tip</b><p style={{fontSize:'11px',color:'rgba(255,255,255,0.7)',marginTop:'6px',lineHeight:'1.5'}}>Upsell bows & perfumes after grooming. Avg +₹400 per bill.</p>
        </div>
        <div style={{marginTop:'20px'}}><Link href="/" className="btn btn-ghost" style={{width:'100%',justifyContent:'center',background:'rgba(255,255,255,0.1)',color:'white',borderColor:'rgba(255,255,255,0.15)'}}>← Back to Website</Link></div>
      </div>

      <div className="admin-main">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px',flexWrap:'wrap',gap:'12px'}}>
          <div><h1 style={{fontSize:'28px',color:'#0A3D2E'}}>Mojito Dashboard</h1><p style={{fontSize:'13px',color:'#6B7F93'}}>Khatipura, Jaipur • {new Date().toLocaleDateString('en-IN', {weekday:'long', day:'numeric', month:'long'})} • 4.9★ Rated</p></div>
          <div style={{display:'flex',gap:'8px'}}>
            <input placeholder="Search bookings..." className="input" style={{width:'240px'}} value={search} onChange={e=>setSearch(e.target.value)}/>
            <Link href="/booking" className="btn btn-primary">+ New Booking</Link>
          </div>
        </div>

        <div className="admin-stat-grid">
          <div className="admin-card"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}><span style={{fontSize:'11px',fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6B7F93'}}>Total Bookings</span><span style={{width:'32px',height:'32px',borderRadius:'10px',background:'#E8FFD0',display:'grid',placeItems:'center'}}>📅</span></div><b style={{fontSize:'28px',fontFamily:'Bricolage Grotesque',color:'#0A3D2E'}}>{stats.total}</b><div style={{fontSize:'12px',color:'#0A5C36',marginTop:'4px'}}>↑ 8% from last week</div></div>
          <div className="admin-card"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}><span style={{fontSize:'11px',fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6B7F93'}}>Revenue</span><span style={{width:'32px',height:'32px',borderRadius:'10px',background:'#FFE4E9',display:'grid',placeItems:'center'}}>💰</span></div><b style={{fontSize:'28px',fontFamily:'Bricolage Grotesque',color:'#0A3D2E'}}>₹{stats.revenue.toLocaleString()}</b><div style={{fontSize:'12px',color:'#6B7F93',marginTop:'4px'}}>Avg bill ₹1,150</div></div>
          <div className="admin-card"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}><span style={{fontSize:'11px',fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6B7F93'}}>Today&apos;s Slots</span><span style={{width:'32px',height:'32px',borderRadius:'10px',background:'#FFF3C4',display:'grid',placeItems:'center'}}>⏰</span></div><b style={{fontSize:'28px',fontFamily:'Bricolage Grotesque',color:'#0A3D2E'}}>6/8</b><div style={{fontSize:'12px',color:'#7A5C00',marginTop:'4px'}}>2 slots available</div></div>
          <div className="admin-card"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}><span style={{fontSize:'11px',fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6B7F93'}}>In Salon</span><span style={{width:'32px',height:'32px',borderRadius:'10px',background:'#E6F7FF',display:'grid',placeItems:'center'}}>✂️</span></div><b style={{fontSize:'28px',fontFamily:'Bricolage Grotesque',color:'#0A3D2E'}}>{stats.checkedin}</b><div style={{fontSize:'12px',color:'#6B7F93',marginTop:'4px'}}>{stats.pending} pending</div></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'2.2fr 0.8fr',gap:'16px',marginBottom:'24px'}}>
          <div className="admin-card">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
              <h3 style={{fontSize:'18px',color:'#0A3D2E'}}>Recent Boutique Bookings</h3>
              <div style={{display:'flex',gap:'6px'}}>
                {['all','pending','confirmed','checkedin'].map(f=>(
                  <button key={f} onClick={()=>setFilter(f)} className="btn btn-sm" style={{background:filter===f?'#0A3D2E':'white',color:filter===f?'white':'#6B7F93',border:'1px solid rgba(10,61,46,0.12)',textTransform:'capitalize'}}>{f}</button>
                ))}
              </div>
            </div>
            <div style={{overflowX:'auto'}}>
              <table className="table">
                <thead><tr><th>Booking ID</th><th>Pet & Owner</th><th>Service</th><th>Slot</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {filtered.map(b=>(
                    <tr key={b.id}>
                      <td><b style={{color:'#0A3D2E'}}>{b.id}</b><div style={{fontSize:'11px',color:'#6B7F93'}}>{new Date(b.createdAt).toLocaleDateString()}</div></td>
                      <td><b>{b.petName}</b> ({b.breed})<div style={{fontSize:'11px',color:'#6B7F93'}}>{b.ownerName} • {b.phone}</div></td>
                      <td>{b.plan}<div style={{fontSize:'11px',color:'#6B7F93'}}>{b.style||'Standard'}</div></td>
                      <td>{b.date}<br/><span style={{fontSize:'11px',color:'#6B7F93'}}>{b.time}</span></td>
                      <td><b>₹{b.total}</b><div style={{fontSize:'11px',color:b.paymentStatus==='pending'?'#C14A00':'#0A5C36'}}>{b.paymentStatus}</div></td>
                      <td><span className={`status status-${b.status}`}>{b.status}</span></td>
                      <td>
                        <div style={{display:'flex',gap:'4px',flexWrap:'wrap'}}>
                          {b.status==='pending' && <button onClick={()=>updateStatus(b.id,'confirmed')} className="btn btn-sm" style={{background:'#E8FFD0',color:'#0A5C36',border:0}}>Confirm</button>}
                          {b.status==='confirmed' && <button onClick={()=>updateStatus(b.id,'checkedin')} className="btn btn-sm" style={{background:'#E6F7FF',color:'#0E2E4D',border:0}}>Check-In</button>}
                          {b.status==='checkedin' && <button onClick={()=>updateStatus(b.id,'confirmed')} className="btn btn-sm" style={{background:'#FFF3C4',color:'#7A5C00',border:0}}>Done</button>}
                          <button onClick={()=>setSelected(b)} className="btn btn-sm btn-ghost">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div className="admin-card">
              <h4 style={{color:'#0A3D2E',marginBottom:'12px'}}>Today&apos;s Queue</h4>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <div style={{padding:'10px',background:'#E8FFD0',borderRadius:'12px',fontSize:'12px'}}><b>10:00 AM</b> - Luna (Shih Tzu) - Luxury Spa</div>
                <div style={{padding:'10px',background:'#FFF3C4',borderRadius:'12px',fontSize:'12px'}}><b>11:30 AM</b> - Coco (Poodle) - Full Makeover</div>
                <div style={{padding:'10px',background:'#E6F7FF',borderRadius:'12px',fontSize:'12px'}}><b>2:30 PM</b> - Bruno (GR) - Essential</div>
                <div style={{padding:'10px',background:'#FFE4E9',borderRadius:'12px',fontSize:'12px'}}><b>4:00 PM</b> - Available</div>
              </div>
            </div>
            <div className="admin-card">
              <h4 style={{color:'#0A3D2E',marginBottom:'12px'}}>Boutique Stock</h4>
              <div style={{display:'flex',flexDirection:'column',gap:'8px',fontSize:'12px'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}><span>Bows & Bandanas</span><b style={{color:'#0A5C36'}}>12 left</b></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><span>Designer Sweaters</span><b style={{color:'#C14A00'}}>3 left - reorder!</b></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><span>Pet Perfume</span><b>8 left</b></div>
                <div style={{display:'flex',justifyContent:'space-between'}}><span>Organic Shampoo</span><b>5 left</b></div>
              </div>
            </div>
            <div className="admin-card" style={{background:'#0A3D2E',color:'white'}}>
              <h4 style={{marginBottom:'8px'}}>🍃 Mojito Brand</h4>
              <p style={{fontSize:'11px',color:'rgba(255,255,255,0.7)',lineHeight:'1.5'}}>Luxury boutique positioning. Avg bill ₹1,150. Upsell boutique items for +30% revenue. Instagram photos drive referrals.</p>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div style={{position:'fixed',inset:0,background:'rgba(10,61,46,0.5)',backdropFilter:'blur(8px)',display:'grid',placeItems:'center',zIndex:100,padding:'20px'}} onClick={()=>setSelected(null)}>
          <div className="admin-card" style={{width:'min(520px,100%)',maxHeight:'90vh',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}><h3 style={{color:'#0A3D2E'}}>Booking {selected.id}</h3><button onClick={()=>setSelected(null)} className="btn btn-ghost btn-sm">✕</button></div>
            <div style={{display:'grid',gap:'12px',fontSize:'13px'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                <div><label style={{fontSize:'11px',color:'#6B7F93',fontWeight:700}}>Owner</label><div><b>{selected.ownerName}</b><br/>{selected.phone}</div></div>
                <div><label style={{fontSize:'11px',color:'#6B7F93',fontWeight:700}}>Pet</label><div><b>{selected.petName}</b> ({selected.breed})</div></div>
              </div>
              <div><label style={{fontSize:'11px',color:'#6B7F93',fontWeight:700}}>Service</label><div>{selected.plan} • ₹{selected.total} • {selected.style}</div></div>
              <div style={{background:'#FFFBF2',padding:'12px',borderRadius:'12px',border:'1px solid rgba(10,61,46,0.06)'}}><b>Stylist Notes:</b><br/>Check coat, confirm style, suggest boutique bow. Click photos after.</div>
              <div style={{display:'flex',gap:'8px'}}><a href={`https://wa.me/91${selected.phone}?text=Hi%20${selected.ownerName},%20your%20booking%20${selected.id}%20for%20${selected.petName}%20at%20Mojito%20is%20confirmed!%20See%20you%20on%20${selected.date}%20at%20${selected.time}%20✨`} target="_blank" className="btn btn-lime" style={{flex:1,justifyContent:'center',color:'#0A3D2E'}}>WhatsApp Owner</a><button onClick={()=>{updateStatus(selected.id,'confirmed');setSelected(null)}} className="btn btn-primary" style={{flex:1,justifyContent:'center'}}>Confirm Booking</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
