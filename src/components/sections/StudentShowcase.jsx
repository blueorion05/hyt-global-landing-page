import baristaSuccess from '../../Programs Images/Barista/IMG_2863.JPG'
import caregivingSuccess from '../../Programs Images/Caregiving/JDM01280.JPG'
import hilotSuccess from '../../Programs Images/Hilot/IMG_2991.JPG'
import frontOfficeSuccess from '../../Programs Images/Front Office/JDM00604.JPG'

export default function StudentShowcase() {
  const testimonials = [
    {
      image: baristaSuccess,
      name: 'Maria Santos',
      course: 'Food & Beverage Services',
      quote: 'HYT transformed my passion for hospitality into a professional career. I\'m now managing a 5-star restaurant!',
      position: 'Restaurant Manager',
    },
    {
      image: caregivingSuccess,
      name: 'Juan Dela Cruz',
      course: 'Caregiving',
      quote: 'The hands-on training and mentorship at HYT prepared me perfectly for overseas employment. Grateful!',
      position: 'Senior Caregiver, Singapore',
    },
    {
      image: hilotSuccess,
      name: 'Ana Rodriguez',
      course: 'Hilot (Wellness Massage)',
      quote: 'I started my own wellness spa after graduation. HYT gave me both skills and confidence!',
      position: 'Wellness Spa Owner',
    },
    {
      image: frontOfficeSuccess,
      name: 'Carlos Mendoza',
      course: 'Front Office Services',
      quote: 'Professional training at HYT landed me a job at a luxury hotel within weeks of graduation.',
      position: 'Front Office Manager, 5-Star Hotel',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-amber-500">Successful Graduates</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from HYT Global graduates who are now thriving in their careers, locally and internationally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-wide mb-2">
                  {testimonial.course}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-blue-900 text-sm font-semibold mb-4">{testimonial.position}</p>
                <blockquote className="text-gray-600 italic text-sm">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Graduates Placed Locally</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">300+</div>
            <p className="text-gray-600 font-medium">International Placements</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
            <p className="text-gray-600 font-medium">Certification Pass Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
