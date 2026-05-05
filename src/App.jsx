import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import WhyHYT from './components/sections/WhyHYT'
import CoursesSection from './components/sections/CoursesSection'
import Partners from './components/sections/Partners'
import Facilities from './components/sections/Facilities'
import Admissions from './components/sections/Admissions'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyHYT />
      <CoursesSection />
      <Partners />
      <Facilities />
      <Admissions />
      <Contact />
      <Footer />

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
