import { useState } from 'react'
import baristaImg from '../../assets/images/IMG_2870.JPG'
import { ArrowRightIcon } from '../icons'
import frontOfficeImg from '../../assets/images/JDM00601.JPG'
import housekeepingImg from '../../assets/images/JDM01220.JPG'
import eventsImg from '../../assets/images/IMG_2904.JPG'
import caregivingImg from '../../assets/images/JDM01305.JPG'
import hilotImg from '../../assets/images/JDM01319.JPG'
import cybersecurityImg from '../../assets/images/photo_6154425571392294219_y.jpg'
import bookkeepingImg from '../../assets/images/IMG_2889.JPG'

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = [
    {
      image: baristaImg,
      category: 'Business & Hospitality',
      title: 'Food & Beverage Services',
      description: 'Comprehensive hands-on training in restaurant service, banquet operations, and bartending techniques.',
      details: {
        overview: 'Learn the art and science of exceptional food and beverage service. This comprehensive program combines theory with hands-on practical experience in hospitality service excellence.',
        whatYouLearn: [
          'Professional table service and customer interaction',
          'Restaurant and banquet operations management',
          'Bartending techniques and cocktail preparation',
          'Food safety and sanitation standards',
          'POS system operation and cash handling',
          'Menu knowledge and wine pairings',
          'Multi-tasking in high-pressure environments',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Restaurant Manager, Banquet Coordinator, Bartender, Food & Beverage Supervisor',
      },
    },
    {
      image: frontOfficeImg,
      category: 'Business & Hospitality',
      title: 'Front Office Services',
      description: 'Master front desk operations, guest relations, reservations, and customer service excellence.',
      details: {
        overview: 'Become a hospitality professional with expertise in front desk operations. Develop the skills to create memorable guest experiences and manage hotel operations efficiently.',
        whatYouLearn: [
          'Front desk operations and procedures',
          'Guest relations and communication',
          'Reservation systems and management',
          'Problem-solving and conflict resolution',
          'Hotel property management systems',
          'Housekeeping coordination',
          'Revenue management basics',
          'Multilingual customer service',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Front Desk Manager, Guest Services Manager, Hotel Receptionist, Concierge',
      },
    },
    {
      image: housekeepingImg,
      category: 'Business & Hospitality',
      title: 'Housekeeping Services',
      description: 'In-depth training on cleaning standards, laundry operations, and hotel service procedures.',
      details: {
        overview: 'Master the essential housekeeping operations that ensure guest satisfaction. Learn industry-standard cleaning techniques and hotel management best practices.',
        whatYouLearn: [
          'Guest room cleaning and inspection',
          'Laundry operations and fabric care',
          'Chemical handling and safety protocols',
          'Inventory management',
          'Emergency procedures and incident reporting',
          'Deep cleaning techniques',
          'Guest interaction and communication',
          'Quality assurance standards',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Housekeeping Manager, Executive Housekeeper, Room Inspector, Laundry Supervisor',
      },
    },
    {
      image: eventsImg,
      category: 'Business & Hospitality',
      title: 'Events Management',
      description: 'Plan and execute events with training in budgeting, logistics, coordination, and client relations.',
      details: {
        overview: 'Transform your passion for events into a rewarding career. Learn comprehensive event management from concept to execution with real-world industry experience.',
        whatYouLearn: [
          'Event planning and proposal development',
          'Budget management and cost control',
          'Vendor and supplier coordination',
          'Venue selection and logistics',
          'Timeline and project management',
          'Marketing and promotion strategies',
          'Risk management and contingency planning',
          'Client relations and communication',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Event Manager, Event Coordinator, Meeting Planner, Corporate Event Specialist',
      },
    },
    {
      image: caregivingImg,
      category: 'Healthcare & Wellness',
      title: 'Caregiving',
      description: 'Essential skills in personal care, mobility support, health monitoring, and patient communication.',
      details: {
        overview: 'Prepare for a fulfilling career in healthcare support. Develop compassionate caregiving skills and technical knowledge to provide quality care to patients and elderly clients.',
        whatYouLearn: [
          'Basic patient hygiene and personal care',
          'Patient safety and fall prevention',
          'Mobility assistance and transferring techniques',
          'Vital signs monitoring',
          'Infection control and sanitation',
          'Communication and empathy skills',
          'Dementia and Alzheimer\'s care',
          'Report documentation',
        ],
        duration: '4 months (160 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Caregiver, Nursing Assistant, Home Health Aide, Senior Care Specialist',
      },
    },
    {
      image: hilotImg,
      category: 'Healthcare & Wellness',
      title: 'Hilot (Wellness Massage)',
      description: 'Traditional Filipino healing techniques blended with modern therapeutic practices for holistic wellness.',
      details: {
        overview: 'Explore the ancient healing art of Hilot combined with modern wellness practices. Master therapeutic techniques rooted in Filipino tradition and contemporary science.',
        whatYouLearn: [
          'Traditional Filipino Hilot techniques',
          'Anatomy and physiology basics',
          'Muscle assessment and tension release',
          'Client consultation and needs assessment',
          'Herbal remedies and essential oils',
          'Wellness consultation skills',
          'Professional conduct and ethics',
          'Therapeutic communication',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Wellness Therapist, Spa Manager, Mobile Massage Therapist, Wellness Consultant',
      },
    },
    {
      image: cybersecurityImg,
      category: 'Tech Courses',
      title: 'IT & Cybersecurity',
      description: 'Essential IT fundamentals, cybersecurity practices, and communication competencies for tech professionals.',
      details: {
        overview: 'Enter the high-demand field of information technology and cybersecurity. Gain practical skills in network security, data protection, and IT infrastructure fundamentals.',
        whatYouLearn: [
          'Computer networking basics',
          'Network security principles',
          'Threat identification and analysis',
          'Firewall and access control configuration',
          'Data encryption and protection',
          'Incident response procedures',
          'Compliance and security standards',
          'IT troubleshooting and support',
        ],
        duration: '8 months (320 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Cybersecurity Analyst, IT Support Specialist, Network Administrator, Security Engineer',
      },
    },
    {
      image: bookkeepingImg,
      category: 'Business & Professional',
      title: 'Bookkeeping & Accounting',
      description: 'Professional accounting training with financial software and spreadsheet applications.',
      details: {
        overview: 'Build a strong foundation in accounting principles and bookkeeping practices. Master financial software and develop skills essential for business financial management.',
        whatYouLearn: [
          'Accounting principles and concepts',
          'Double-entry bookkeeping',
          'Journal entries and ledger management',
          'Trial balance and financial statements',
          'QuickBooks and accounting software',
          'Excel and spreadsheet analysis',
          'Tax preparation basics',
          'Payroll processing fundamentals',
        ],
        duration: '6 months (240 hours)',
        requirements: 'High School Diploma or equivalent',
        careerPath: 'Bookkeeper, Accounting Clerk, Payroll Specialist, Financial Analyst',
      },
    },
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Programs</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Courses <span className="text-blue-900">offered</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A wide range of TESDA and non-TESDA programs designed to launch your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group flex flex-col h-full">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-wide mb-2">
                  {course.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">{course.description}</p>
                <button onClick={() => setSelectedCourse(course)} className="text-blue-900 font-semibold text-sm hover:text-amber-500 transition inline-flex items-center gap-2">
                  <span>View Details</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-amber-500 font-semibold uppercase tracking-wide mb-2">
                {selectedCourse.category}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCourse.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedCourse.description}</p>

              {/* Overview Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-600 text-base leading-relaxed">{selectedCourse.details.overview}</p>
              </div>

              {/* What You'll Learn Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h3>
                <ul className="space-y-2">
                  {selectedCourse.details.whatYouLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="text-blue-900 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                  <p className="text-gray-600">{selectedCourse.details.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <p className="text-gray-600">{selectedCourse.details.requirements}</p>
                </div>
              </div>

              {/* Career Path Section */}
              <div className="mb-8 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Career Path</h4>
                <p className="text-gray-600">{selectedCourse.details.careerPath}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedCourse(null)
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                >
                  Inquire Now
                </button>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
