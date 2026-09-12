import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Mojito Pet Boutique Jaipur | Luxury Grooming & Spa',
  description: 'Jaipur\'s luxury pet boutique in Khatipura. 4.9★ Rated grooming, styling, spa & accessories. Elevate your pet\'s grooming experience.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
