import { GraduationIcon, GlobeIcon, ToolsIcon } from '../icons'

export default function About() {
  const features = [
    {
      icon: <GraduationIcon className="w-10 h-10 text-amber-500 mb-4" />,
      title: 'Industry-Certified Instructors',
      description: 'TESDA-certified trainers with extensive industry experience and real-world insights.',
    },
    {
      icon: <GlobeIcon className="w-10 h-10 text-emerald-500 mb-4" />,
      title: 'Global Deployment',
      description: 'Overseas employment partnerships and connections with international organizations.',
    },
    {
      icon: <ToolsIcon className="w-10 h-10 text-sky-500 mb-4" />,
      title: 'Modern Facilities',
      description: 'Multi-level building with training rooms, coworking spaces, and innovation hub.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold uppercase tracking-wide mb-4">About HYT Global</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shaping Bright Futures
            <span className="block text-blue-900">Since 2025</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
