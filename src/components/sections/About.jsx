const GraduationIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" />
  </svg>
)

const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6H16a15.9 15.9 0 00-1.2-3.5 8.02 8.02 0 014.13 3.5zM12 4.07c.7 1.02 1.2 2.36 1.5 3.93H10.5c.3-1.57.8-2.91 1.5-3.93zM4.07 12H8c0-1.24.24-2.43.67-3.5A8.02 8.02 0 004.07 12zM12 19.93c-.7-1.02-1.2-2.36-1.5-3.93h3c-.3 1.57-.8 2.91-1.5 3.93zM16 18a15.9 15.9 0 001.2-3.5H8.8A15.9 15.9 0 0010 18h6zM12 16.07c-.3-1.57-.8-2.91-1.5-3.93h3c-.7 1.02-1.2 2.36-1.5 3.93z" />
  </svg>
)

const ToolsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.7 13.35l-2.35-2.35a2 2 0 00-2.83 0l-.88.88-1.95-1.95 2.06-2.06a2 2 0 000-2.83L14.65 2.3 12 4.95 9.35 2.3 7.95 3.7l2.06 2.06-1.95 1.95-.88-.88a2 2 0 00-2.83 0L2.3 10.95 4.95 13.6 2.3 16.25l2.35 2.35a2 2 0 002.83 0l.88-.88 1.95 1.95-2.06 2.06a2 2 0 002.83 2.83L12 21.7l2.65 2.65 1.4-1.4-2.06-2.06 1.95-1.95.88.88a2 2 0 002.83 0l2.35-2.35L19.05 13.6l2.65-2.65z" />
  </svg>
)

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shaping Bright Futures
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
