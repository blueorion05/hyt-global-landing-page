import { useState, useEffect } from 'react'
import heroBackground from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Contact Us/Background.jpg'
import baristaImg from '../../assets/images/IMG_2870.JPG'
import eventsImg from '../../assets/images/IMG_2904.JPG'
import cybersecurityImg from '../../assets/images/photo_6154425571392294219_y.jpg'
import housekeepingImg from '../../assets/images/JDM01220.JPG'
import frontOfficeImg from '../../assets/images/JDM00601.JPG'
import caregivingImg from '../../assets/images/JDM01305.JPG'
import hilotImg from '../../assets/images/JDM01319.JPG'
import bookkeepingImg from '../../assets/images/IMG_2889.JPG'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-blue-900 text-white py-32 -mt-20 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.72)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container ml-8 mr-8 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl pl-6 sm:pl-8 md:pl-12 lg:pl-0">
          {/* TESDA Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur px-4 py-2 rounded-full mb-8 border border-blue-400/30">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="font-medium">TESDA-Accredited Training Institution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Pathway to
            <span className="block text-amber-400 mt-2">Global Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Opening doors to brighter futures by transforming individuals into industry-ready professionals, leaders, and changemakers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition flex items-center justify-center gap-2">
              <span>Explore Courses</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button onClick={() => document.getElementById('admissions').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition">
              Apply Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
              <p className="text-gray-300 font-medium">Programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <p className="text-gray-300 font-medium">Cert. Pass Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
              <p className="text-gray-300 font-medium">Global Partners</p>
            </div>
            </div>
          </div>
        </div>

          {/* Slideshow - visible on large screens */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <HeroSlideshow />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSlideshow() {
  const slides = [baristaImg, frontOfficeImg, housekeepingImg, eventsImg, caregivingImg, hilotImg, cybersecurityImg, bookkeepingImg]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
      {slides.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
          />
          {/* Minimal blue gradient filter */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/15"></div>
        </div>
      ))}
    </div>
  )
}
