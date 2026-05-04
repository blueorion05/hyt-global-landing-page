export default function Mission() {
  const missions = [
    {
      number: '1',
      title: 'Quality & Relevant Skills Training',
      description: 'Committed to delivering high-standard, competency-based education that meets the evolving needs of learners and industries.',
    },
    {
      number: '2',
      title: 'Innovation & Industry Alignment',
      description: 'Integrate modern technologies, emerging trends, and real-world applications into curriculum for future-ready trainees.',
    },
    {
      number: '3',
      title: 'Strengthen Employability Through Global Linkages',
      description: 'Build partnerships with local and international organizations, enabling graduates diverse employment pathways.',
    },
    {
      number: '4',
      title: 'Instill Professionalism, Discipline & Patriotism',
      description: 'Develop individuals who are not only job-ready but guided by ethical values and responsibility.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Vision */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Our Vision</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              To provide quality and
              <span className="block text-amber-500">relevant skills training</span>
            </h2>
          </div>
        </div>

        {/* Missions */}
        <div>
          <div className="text-center mb-16">
            <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Our Missions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to developing world-class Filipino professionals is built on these four core missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl border-l-4 border-amber-500 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    {mission.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mission.title}</h3>
                    <p className="text-gray-600">{mission.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
