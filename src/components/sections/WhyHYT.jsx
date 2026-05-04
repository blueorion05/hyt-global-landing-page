import React from 'react'

const GraduationIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" />
  </svg>
)

const BuildingIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M3 21h18V3H3v18zm2-2v-4h4v4H5zm6 0v-4h4v4h-4zm6 0v-4h2v4h-2zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
  </svg>
)

const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6H16a15.9 15.9 0 00-1.2-3.5 8.02 8.02 0 014.13 3.5zM12 4.07c.7 1.02 1.2 2.36 1.5 3.93H10.5c.3-1.57.8-2.91 1.5-3.93zM4.07 12H8c0-1.24.24-2.43.67-3.5A8.02 8.02 0 004.07 12zM12 19.93c-.7-1.02-1.2-2.36-1.5-3.93h3c-.3 1.57-.8 2.91-1.5 3.93zM16 18a15.9 15.9 0 001.2-3.5H8.8A15.9 15.9 0 0010 18h6zM12 16.07c-.3-1.57-.8-2.91-1.5-3.93h3c-.7 1.02-1.2 2.36-1.5 3.93z" />
  </svg>
)

const TrophyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17 3H7v2H3v2a4 4 0 004 4h2v3a3 3 0 003 3 3 3 0 003-3v-3h2a4 4 0 004-4V5h-4V3z" />
  </svg>
)

const BriefcaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M10 2H6a2 2 0 00-2 2v3h12V4a2 2 0 00-2-2h-4V2zM4 10v8a2 2 0 002 2h12a2 2 0 002-2v-8H4z" />
  </svg>
)

const HandshakeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21 13l-6.5 6.5L8 13l4-4 2.5 2.5L21 13zM3 11l6 6 4-4-6-6-4 4z" />
  </svg>
)

export default function WhyHYT() {
  const features = [
    {
      icon: <GraduationIcon className="w-10 h-10 text-amber-400" />,
      title: 'Industry & TESDA-Certified Instructors',
      description: 'Expert trainers with national qualifications and extensive professional experience.',
    },
    {
      icon: <BuildingIcon className="w-10 h-10 text-amber-400" />,
      title: 'Fully Equipped Institution',
      description: 'Modern training rooms, technology centers, coworking spaces, and rooftop innovation hub.',
    },
    {
      icon: <GlobeIcon className="w-10 h-10 text-amber-400" />,
      title: 'Overseas Employment Partnerships',
      description: 'Strong global network for job placement and international deployment.',
    },
    {
      icon: <TrophyIcon className="w-10 h-10 text-amber-400" />,
      title: 'Track Record of Success',
      description: 'Proven success with high national certification pass rates.',
    },
    {
      icon: <BriefcaseIcon className="w-10 h-10 text-amber-400" />,
      title: 'Workforce & Entrepreneurial Readiness',
      description: 'Skills training for employment and future entrepreneurial ventures.',
    },
    {
      icon: <HandshakeIcon className="w-10 h-10 text-amber-400" />,
      title: 'Strong Global Network',
      description: 'Alumni and community partnerships ensuring continued support and opportunities.',
    },
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold uppercase tracking-wide mb-4">Why HYT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why students <span className="text-amber-400">choose us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Six reasons HYT graduates stand out in the local and global workforce.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-800/40 backdrop-blur border border-blue-700 p-8 rounded-xl hover:bg-blue-800/60 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
