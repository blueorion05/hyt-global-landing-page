import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import WhyHYT from './components/sections/WhyHYT'
import CoursesSection from './components/sections/CoursesSection'
import Facilities from './components/sections/Facilities'
import Admissions from './components/sections/Admissions'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyHYT />
      <CoursesSection />
      <Facilities />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
