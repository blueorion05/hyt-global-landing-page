import { useState, useEffect } from 'react'
import groundFloor1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Ground Floor/image 36.png'
import groundFloor2 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Ground Floor/image 37.png'
import groundFloor3 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Ground Floor/image 38.png'
import floor2_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/2nd Floor/image 49.png'
import floor2_2 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/2nd Floor/image 50.png'
import floor2_3 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/2nd Floor/image 51.png'
import techRoom1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Tech Room/image 28.png'
import techRoom2 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Tech Room/Untitled 3.png'
import floor3_1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/3rd Floor/image 45.png'
import floor3_2 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/3rd Floor/image 46.png'
import floor3_3 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/3rd Floor/image 47.png'
import roofDeck1 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Roof Deck/image 40.png'
import roofDeck2 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Roof Deck/image 41.png'
import roofDeck3 from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Roof Deck/image 42.png'
import { GraduationIcon } from '../icons'

export default function Facilities() {
  const floorSections = [
    { label: 'Ground Floor', images: [groundFloor1, groundFloor2, groundFloor3] },
    { label: '2nd Floor', images: [floor2_1, floor2_2, floor2_3] },
    { label: 'Tech Room', images: [techRoom1, techRoom2] },
    { label: '3rd Floor', images: [floor3_1, floor3_2, floor3_3] },
    { label: 'Roof Deck', images: [roofDeck1, roofDeck2, roofDeck3] },
  ]

  const [currentFloor, setCurrentFloor] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev + 1 < floorSections[currentFloor].images.length) {
          return prev + 1
        } else {
          setCurrentFloor((f) => (f + 1) % floorSections.length)
          return 0
        }
      })
    }, 3500)
    return () => clearInterval(id)
  }, [currentFloor])

  const prev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1)
    } else if (currentFloor > 0) {
      setCurrentFloor(currentFloor - 1)
      setCurrentImage(floorSections[currentFloor - 1].images.length - 1)
    }
  }

  const next = () => {
    if (currentImage + 1 < floorSections[currentFloor].images.length) {
      setCurrentImage(currentImage + 1)
    } else if (currentFloor + 1 < floorSections.length) {
      setCurrentFloor(currentFloor + 1)
      setCurrentImage(0)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Slideshow Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative">
            <div className="w-full h-96 relative">
              {floorSections[currentFloor].images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${floorSections[currentFloor].label} ${i + 1}`}
                  className={`absolute inset-0 w-full h-96 object-cover transition-opacity duration-700 high-quality-image ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Controls */}
              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>

              {/* Floor Label */}
              <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl md:text-2xl font-bold">{floorSections[currentFloor].label}</p>
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
