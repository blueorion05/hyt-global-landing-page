import { useState, useEffect } from 'react'
import facilityImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Tech Room/image 28.png'
import build2_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/2nd Floor/image 49.png'
import build3_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/3rd Floor/image 45.png'
import ground_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Ground Floor/image 36.png'
import roof_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Roof Deck/image 40.png'
import { GraduationIcon } from '../icons'

export default function Facilities() {
  const slides = [facilityImg, build2_1, build3_1, ground_1, roof_1]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 3500)
    return () => clearInterval(id)
  }, [])

  const prev = () => setCurrent((s) => (s - 1 + slides.length) % slides.length)
  const next = () => setCurrent((s) => (s + 1) % slides.length)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Slideshow Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative">
            <div className="w-full h-96 relative">
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Facility ${i + 1}`}
                  className={`absolute inset-0 w-full h-96 object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Controls */}
              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>

              {/* Dots */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Facilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A learning environment that inspires
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our campus is designed for collaboration, focus, and hands-on mastery — equipping students with the spaces 
              they need to thrive.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                'Modern classrooms and tech rooms',
                'Coworking and innovation spaces',
                'Conference and training rooms',
                'Clean and comfortable facilities',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.285 6.709a1 1 0 00-1.414-1.418l-9.192 9.192-3.192-3.193a1 1 0 10-1.414 1.414l3.9 3.9a1 1 0 001.414 0l9.898-9.895z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="mt-10 bg-amber-500 text-white p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  <GraduationIcon className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-lg">A learning environment built for excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
