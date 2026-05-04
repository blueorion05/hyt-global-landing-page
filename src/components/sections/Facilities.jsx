import facilityImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Tech Room/image 28.png'

export default function Facilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={facilityImg}
              alt="Modern Facilities"
              className="w-full h-96 object-cover"
            />
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
                    ✓
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="mt-10 bg-amber-500 text-white p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-500">
                    <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" />
                  </svg>
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
