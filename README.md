# Mojito Pet Boutique Jaipur - Luxury Grooming Prototype

**Inspired by The Pet Fort** but crafted for luxury boutique positioning.

**Live at:** Port 3001

## Research Findings
- **Business:** Mojito Pet Boutique
- **Address:** 194, Basement, Anjani Marg, Hanuman Nagar Extension, Khatipura, Jaipur, Rajasthan 302012
- **Phone:** +91 95718 88868
- **Coordinates:** 26.9265254, 75.7390168
- **Rating:** 4.9★ (PetBoop)
- **Hours:** 10 AM – 8:30 PM (Mon-Sat)
- **Category:** Luxury Pet Groomer, Boutique, Spa, Accessories
- **Tagline from research:** "Elevate your pet's grooming experience at Mojito Pet Boutique in Jaipur. Trusted for exceptional care and attention to detail."

No strong Instagram found - built brand as fresh, minty, luxury boutique (mojito = lime, mint, fresh).

## Brand Identity Created
- **Name Meaning:** Mojito = Fresh, Minty, Tropical, Luxury
- **Colors:** Deep Mojito Green #0A3D2E, Lime #C8F277, Pink #FF8FA3 (boutique), Cream
- **Fonts:** Bricolage Grotesque (stylish, boutique) + Plus Jakarta Sans
- **Vibe:** Fresh, Stylish, Instagrammable, Luxury but Friendly
- **Differentiator from Pet Fort:** Fashion-first, boutique accessories, photoshoot included, appointment-only, organic products

## Pages (Separated)
- `/` - Home: Hero with spa image, stats, services preview, why us (8 features), gallery, reviews
- `/services` - 4 services: Luxury Grooming & Spa, Breed Styling, Boutique & Fashion, Pawdicure
- `/how-it-works` - 5 steps + 90-min transparent process timeline
- `/gallery` - 12 real clean photos: salon interior, spa, fashion dogs
- `/pricing` - 3 plans: Essential ₹699, Luxury ₹1299 (most popular), Makeover ₹1999 + add-ons
- `/contact` - Khatipura location, contact, appointment-only info
- `/booking` - 3-step boutique booking
- `/admin` - Dashboard for boutique

## Photos Added (20 images)
- Luxury boutique grooming salon interiors (5)
- Cute dogs wearing stylish clothes boutique fashion (5)
- Pet spa aromatherapy bath grooming (5)
- Happy puppies (5)
All in `/public/images/`

## Booking Flow (Boutique Specific)
1. Choose service & slot (10AM-8:30PM slots, 60-90 min)
2. Pet details + style inspiration (Teddy cut, Lion cut, Instagram ref)
3. Payment (UPI/Card/COD) - stores in localStorage key `mojito_bookings`
4. WhatsApp redirect to +91 95718 88868 with booking details

## Admin Features
- Stats: Total bookings, Revenue, Today's slots (6/8), In Salon
- Filters, search, status updates
- Today's queue, boutique stock (bows, sweaters, perfume)
- Detail modal with WhatsApp owner
- Demo data seeded

## Comparison with DCR Project
- DCR: Navy + Orange, vet-supervised, hostel focus, 15 rooms, 3K parents
- Mojito: Mojito Green + Lime + Pink, boutique luxury, grooming focus, appointment-only, fashion

## How to Run
```bash
cd mojito-pet-boutique
npm install
npm run dev
# http://localhost:3001
# Admin: http://localhost:3001/admin
```

## Production TODO
- Razorpay integration
- Supabase for bookings
- Admin auth
- Instagram feed integration for boutique outfits
- Online boutique shop (Shopify style)
- Loyalty program (5th grooming free)

Built as prototype inspired by The Pet Fort design system.
