import { ChatIcon, ArrowRightIcon, DocumentIcon, InterviewIcon } from '../icons'

export default function Admissions() {
  const steps = [
    {
      number: '1',
      icon: <ChatIcon className="w-12 h-12 text-blue-900" />,
      title: 'Send Us a Message',
      description: 'Send us a message through our contact form to express your interest and ask any questions you may have about the admissions process or our programs.',
    },
    {
      number: '2',
      icon: <DocumentIcon className="w-12 h-12 text-blue-900" />,
      title: 'Prepare Required Documents',
      items: [
        'Academic transcripts from the past school year.',
        'Recommendation letters from teachers or mentors.',
        'A personal statement (300–500 words) outlining your goals and interests.',
      ],
    },
    {
      number: '3',
      icon: <InterviewIcon className="w-12 h-12 text-blue-900" />,
      title: 'Attend an Interview',
      description: 'A one-on-one meeting with our admissions team to discuss your aspirations and suitability for HYT Skill Builders International.',
    },
  ]

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Admissions Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple <span className="text-blue-900">3-step</span> process
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Begin your pathway to excellence in just three easy steps.
          </p>
        </div>

        {/* Horizontal Steps Landscape Layout */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white p-8 hover:shadow-lg transition">
                  {/* Step Number and Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{step.icon}</div>
                    <div className="text-4xl font-bold text-blue-900">{step.number}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  
                  {step.description && (
                    <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                  )}

                  {step.items && (
                    <ul className="text-gray-700 space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-900 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-8 top-12 items-center justify-center">
                    <ArrowRightIcon className="w-8 h-8 text-blue-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition text-lg inline-flex items-center gap-3"
          >
            <span>Start Your Application</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
