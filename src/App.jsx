import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero-section/HeroSection'
import VideoCarousel from './components/video-carousel/VideoCarousel'
import BrandCarousel from './components/brand/BrandCarousel'
import TestimonialsCarousel from './components/testimonial/Testimonial'
import EventContactForm from './components/contact/EventForm'
import FAQSection from './components/faq/FAQ'
import Footer from './components/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-screen h-full bg-black">
      <Navbar />
      <HeroSection />
      <VideoCarousel />
      <BrandCarousel />
      <TestimonialsCarousel />
      <EventContactForm />
      <FAQSection />
      <Footer />


    </div>
  )
}

export default App
