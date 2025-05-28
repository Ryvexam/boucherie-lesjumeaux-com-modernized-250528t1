import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Promo from './components/Promo'
import Notification from './components/Notification'
import Product_categories from './components/Product_categories'
import Featured_products from './components/Featured_products'
import Contact_info from './components/Contact_info'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
        <Promo />
        <Notification />
        <Product_categories />
        <Featured_products />
        <Contact_info />
      </main>
      <Footer />
    </div>
  )
}

export default App