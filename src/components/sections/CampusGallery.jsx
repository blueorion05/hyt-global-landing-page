import groundFloorImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Ground Floor/image 36.png'
import secondFloorImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/2nd Floor/image 49.png'
import thirdFloorImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/3rd Floor/image 45.png'
import roofDeckImg from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Building Images/Roof Deck/image 40.png'

export default function CampusGallery() {
  const gallery = [
    { image: groundFloorImg, title: 'Ground Floor Training Area', caption: 'Welcoming spaces for hands-on foundation training.' },
    { image: secondFloorImg, title: 'Second Floor Classrooms', caption: 'Focused learning rooms designed for technical sessions.' },
    { image: thirdFloorImg, title: 'Third Floor Activity Zone', caption: 'Collaborative rooms for practical workshops and simulations.' },
    { image: roofDeckImg, title: 'Roof Deck Learning Space', caption: 'Open multipurpose area for events, team activities, and briefings.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Campus Spaces</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore the <span className="text-blue-900">HYT Campus</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our multi-level campus is designed to support immersive training, collaborative learning,
            and professional growth from enrollment to employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item) => (
            <article key={item.title} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
