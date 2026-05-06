import { useState, useEffect } from 'react'
import hytLogo from '../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYT.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    // initial check: transparent when at top
    const y = window.scrollY || window.pageYOffset
    setIsTransparent(y < 80)

    const hero = document.getElementById('home')
    if (hero) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsTransparent(entry.isIntersecting)
          })
        },
        // looser threshold so hero counts as intersecting even when partially covered by the sticky nav
        { threshold: 0.1, rootMargin: '-10px 0px 0px 0px' }
      )

      obs.observe(hero)
      return () => obs.disconnect()
    }

    // fallback to scroll if hero not found
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setIsTransparent(y < 80)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = isTransparent ? 'text-white hover:text-amber-200 font-medium' : 'text-gray-700 hover:text-blue-900 font-medium'
  const brandTextClass = isTransparent ? 'text-white' : 'text-blue-900'
  const brandSubClass = isTransparent ? 'text-white/90' : 'text-amber-500'
  const lmsBtnClass = isTransparent ? 'border border-white text-white bg-white/10 hover:bg-white/20 rounded-full font-semibold transition px-6 py-2' : 'px-6 py-2 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition'
  const mobileMenuBg = isTransparent ? 'md:hidden bg-black/60 text-white p-4' : 'md:hidden bg-white border-t border-gray-200 p-4'
  const mobileLinkClass = isTransparent ? 'block w-full text-left py-2 text-white hover:text-amber-200' : 'block w-full text-left py-2 text-gray-700 hover:text-blue-900'
  const mobileLmsClass = isTransparent ? 'w-full mt-4 px-6 py-2 border border-white text-white rounded-full bg-white/10 hover:bg-white/20 font-semibold transition' : 'w-full mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 font-semibold transition'

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${isTransparent ? 'bg-transparent backdrop-blur-sm' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {!isTransparent && <img src={hytLogo} alt="HYT Global Institute Inc. logo" className="w-10 h-10 object-contain" />}
          <span className="font-bold text-xl">
            <span className={brandTextClass}>HYT</span>{' '}
            <span className={brandSubClass}>Global Institute Inc.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('home')} className={linkClass}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={linkClass}>
            About
          </button>
          <button onClick={() => scrollToSection('courses')} className={linkClass}>
            Courses
          </button>
          <button onClick={() => scrollToSection('partners')} className={linkClass}>
            Partners
          </button>
          <button onClick={() => scrollToSection('admissions')} className={linkClass}>
            Admissions
          </button>
          <button onClick={() => scrollToSection('contact')} className={linkClass}>
            Contact
          </button>
          <button className={lmsBtnClass}>
            <a href="https://hytech-ad360.web.app/" target="_blank" rel="noopener noreferrer" className="block">
              LMS Portal
            </a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={mobileMenuBg}>
          <button onClick={() => scrollToSection('home')} className={mobileLinkClass}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={mobileLinkClass}>
            About
          </button>
          <button onClick={() => scrollToSection('courses')} className={mobileLinkClass}>
            Courses
          </button>
          <button onClick={() => scrollToSection('admissions')} className={mobileLinkClass}>
            Admissions
          </button>
          <button onClick={() => scrollToSection('partners')} className={mobileLinkClass}>
            Partners
          </button>
          <button onClick={() => scrollToSection('contact')} className={mobileLinkClass}>
            Contact
          </button>
          <button className={mobileLmsClass}>
            <a href="https://hytech-ad360.web.app/" target="_blank" rel="noopener noreferrer" className="block">
              LMS Portal
            </a>
          </button>
        </div>
      )}
    </nav>
  )
}
