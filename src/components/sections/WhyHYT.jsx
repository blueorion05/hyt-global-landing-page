import React from 'react'
import { GraduationIcon, BuildingIcon, GlobeIcon, TrophyIcon, BriefcaseIcon, HandshakeIcon } from '../icons'

export default function WhyHYT() {
  const features = [
    {
      icon: <GraduationIcon className="w-12 h-12 text-amber-400" />,
      title: 'Industry & TESDA-Certified Instructors',
      description: 'Expert trainers with national qualifications and extensive professional experience.',
    },
    {
      icon: <BuildingIcon className="w-12 h-12 text-amber-400" />,
      title: 'Fully Equipped Institution',
      description: 'Modern training rooms, technology centers, coworking spaces, and rooftop innovation hub.',
    },
    {
      icon: <GlobeIcon className="w-12 h-12 text-amber-400" />,
      title: 'Overseas Employment Partnerships',
      description: 'Strong global network for job placement and international deployment.',
    },
    {
      icon: <TrophyIcon className="w-12 h-12 text-amber-400" />,
      title: 'Track Record of Success',
      description: 'Proven success with high national certification pass rates.',
    },
    {
      icon: <BriefcaseIcon className="w-12 h-12 text-amber-400" />,
      title: 'Workforce & Entrepreneurial Readiness',
      description: 'Skills training for employment and future entrepreneurial ventures.',
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-amber-400" />,
      title: 'Strong Global Network',
      description: 'Alumni and community partnerships ensuring continued support and opportunities.',
    },
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold uppercase tracking-wide mb-4">Why HYT</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
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
