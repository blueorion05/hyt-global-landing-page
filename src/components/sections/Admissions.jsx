export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Admissions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A simple <span className="text-blue-900">3-step</span> process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Begin your pathway to global excellence in just a few steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              number: '1',
              icon: '📋',
              title: 'Submit Application',
              description: 'Complete the online application form available on our website.',
            },
            {
              number: '2',
              icon: '📋',
              title: 'Prepare Requirements',
              description: 'Compile academic transcripts, recommendations, and personal statement.',
            },
            {
              number: '3',
              icon: '💬',
              title: 'Attend Interview',
              description: 'Meet our admissions team for a one-on-one discussion.',
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 mt-2">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < 2 && (
                <div className="hidden md:block absolute -right-4 top-12 w-8 h-0.5 bg-blue-900"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition text-lg">
            Start Your Application →
          </button>
        </div>
      </div>
    </section>
  )
}
