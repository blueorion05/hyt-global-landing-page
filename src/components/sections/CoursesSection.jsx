import baristaImg from '../../assets/images/IMG_2870.JPG'
import frontOfficeImg from '../../assets/images/JDM00601.JPG'
import housekeepingImg from '../../assets/images/JDM01220.JPG'
import eventsImg from '../../assets/images/IMG_2904.JPG'
import caregivingImg from '../../assets/images/JDM01305.JPG'
import hilotImg from '../../assets/images/JDM01319.JPG'
import cybersecurityImg from '../../assets/images/photo_6154425571392294219_y.jpg'
import bookkeepingImg from '../../assets/images/IMG_2889.JPG'

export default function CoursesSection() {
  const courses = [
    {
      image: baristaImg,
      category: 'Business & Hospitality',
      title: 'Food & Beverage Services',
      description: 'Comprehensive hands-on training in restaurant service, banquet operations, and bartending techniques.',
    },
    {
      image: frontOfficeImg,
      category: 'Business & Hospitality',
      title: 'Front Office Services',
      description: 'Master front desk operations, guest relations, reservations, and customer service excellence.',
    },
    {
      image: housekeepingImg,
      category: 'Business & Hospitality',
      title: 'Housekeeping Services',
      description: 'In-depth training on cleaning standards, laundry operations, and hotel service procedures.',
    },
    {
      image: eventsImg,
      category: 'Business & Hospitality',
      title: 'Events Management',
      description: 'Plan and execute events with training in budgeting, logistics, coordination, and client relations.',
    },
    {
      image: caregivingImg,
      category: 'Healthcare & Wellness',
      title: 'Caregiving',
      description: 'Essential skills in personal care, mobility support, health monitoring, and patient communication.',
    },
    {
      image: hilotImg,
      category: 'Healthcare & Wellness',
      title: 'Hilot (Wellness Massage)',
      description: 'Traditional Filipino healing techniques blended with modern therapeutic practices for holistic wellness.',
    },
    {
      image: cybersecurityImg,
      category: 'Tech Courses',
      title: 'IT & Cybersecurity',
      description: 'Essential IT fundamentals, cybersecurity practices, and communication competencies for tech professionals.',
    },
    {
      image: bookkeepingImg,
      category: 'Business & Professional',
      title: 'Bookkeeping & Accounting',
      description: 'Professional accounting training with financial software and spreadsheet applications.',
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
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-wide mb-2">
                  {course.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <a href="#" className="text-blue-900 font-semibold text-sm hover:text-amber-500 transition">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
