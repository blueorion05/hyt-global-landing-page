import hytLogo from '../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYT.png'

const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.4v-2.9h2.4V9.3c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .08 2 .08v2.2h-1.1c-1.1 0-1.4.68-1.4 1.4v1.6h2.4l-.38 2.9h-2.02v7A10 10 0 0022 12z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a5 5 0 100 10 5 5 0 000-10zm6.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5 2.8 5 6.4V24H17v-7.4c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4v7.6H8V8z" />
  </svg>
)

const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23 7.5a3 3 0 00-2.1-2.12C19.5 5 12 5 12 5s-7.5 0-8.9.38A3 3 0 001.05 7.4 31.3 31.3 0 000 12a31.3 31.3 0 001.05 4.6 3 3 0 002.05 2.02C4.5 19 12 19 12 19s7.5 0 8.9-.38a3 3 0 002.05-2.02A31.3 31.3 0 0024 12a31.3 31.3 0 00-1-4.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={hytLogo} alt="HYT Global Institute Inc. logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl">
                <span>HYT</span> <span className="text-amber-400">Global Institute Inc.</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              A TESDA-accredited training institution transforming individuals into industry-ready professionals, leaders, and changemakers. Shaping bright futures since 2025.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: <FacebookIcon className="w-5 h-5 text-white" />, label: 'Facebook' },
                { icon: <InstagramIcon className="w-5 h-5 text-white" />, label: 'Instagram' },
                { icon: <LinkedInIcon className="w-5 h-5 text-white" />, label: 'LinkedIn' },
                { icon: <YoutubeIcon className="w-5 h-5 text-white" />, label: 'YouTube' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {['Home', 'Courses', 'Admissions', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-amber-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              {['LMS Portal', 'Website', 'Career Opportunities', 'Admissions'].map((link, index) => (
                <li key={index}>
                  <a href={link === 'LMS Portal' ? 'https://hytech-ad360.web.app/' : link === 'Website' ? 'https://connectorcore.com' : '#'} 
                     target={link === 'LMS Portal' || link === 'Website' ? '_blank' : '_self'} 
                     rel={link === 'LMS Portal' || link === 'Website' ? 'noopener noreferrer' : ''}
                     className="hover:text-amber-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>© 2026 HYT Global Institute Inc. All rights reserved.</p>
            <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0">
              <span>Website: connectorcore.com</span>
              <span>TESDA Accredited • Quezon City, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
