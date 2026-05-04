import { useState } from 'react'

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2.25 4A2.25 2.25 0 004.5 6.25v11.5A2.25 2.25 0 006.75 20h10.5a2.25 2.25 0 002.25-2.25V6.25A2.25 2.25 0 0017.25 4H6.75A2.25 2.25 0 004.5 4zM6 8.5l6 4 6-4" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2.3 5.5a2 2 0 012.1-1.6l3.2.5a1 1 0 01.9.9l.2 1.9a1 1 0 01-.4.9L6.4 9.9a11 11 0 005.7 5.7l1-1.8a1 1 0 01.9-.4l1.9.2a1 1 0 01.9.9l.5 3.2A2 2 0 0118.5 21h-1A16 16 0 013 6v-1z" />
  </svg>
)

const MapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
)

const ClockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h3v-2h-2V7h-2v6z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-900">HYT Global</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to answer your questions and guide you toward the right program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <MailIcon className="w-6 h-6 text-amber-500" />,
                title: 'Email',
                content: 'info@hytfoundation.org',
              },
              {
                icon: <PhoneIcon className="w-6 h-6 text-emerald-500" />,
                title: 'Phone',
                content: '0927 894 6416 / (02) 8359 0648',
              },
              {
                icon: <MapIcon className="w-6 h-6 text-sky-500" />,
                title: 'Address',
                content: '55 Natividad, San Francisco Del Monte, Quezon City, Philippines',
              },
              {
                icon: <ClockIcon className="w-6 h-6 text-violet-500" />,
                title: 'Office Hours',
                content: 'Monday–Saturday, 9:00 AM – 6:00 PM',
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3426647635937!2d121.0449!3d14.6243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7e4d6d6d6d7%3A0xd6d6d6d6d6d6d6d6!2s55%20Natividad%2C%20San%20Francisco%20Del%20Monte%2C%20Quezon%20City!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
