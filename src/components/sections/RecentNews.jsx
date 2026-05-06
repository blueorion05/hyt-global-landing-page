import newsImageMain from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Recent News/image 69.png'
import newsImageFeature from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Recent News/image 70.png'
import newsImageCardA from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Recent News/Rectangle 242.png'
import newsImageCardB from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Recent News/Rectangle 59.png'

export default function RecentNews() {
  const updates = [
    {
      image: newsImageCardA,
      title: 'Skills Training Activities',
      description: 'HYT learners actively participated in practical simulations and guided competency sessions.',
    },
    {
      image: newsImageCardB,
      title: 'Industry-Readiness Workshops',
      description: 'Students joined career-focused workshops to strengthen workplace communication and professionalism.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Latest Updates</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent <span className="text-amber-500">HYT News</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay informed about training milestones, student activities, and institute highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <img src={newsImageMain} alt="HYT recent event" className="w-full h-80 object-cover rounded-2xl shadow-md" />
          <img src={newsImageFeature} alt="HYT featured activity" className="w-full h-80 object-cover rounded-2xl shadow-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {updates.map((item) => (
            <article key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
