import hytLogo from '../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYT.png'
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from './icons'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Logo + Contact */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-start gap-4">
              <img src={hytLogo} alt="HYT Global Institute Inc. logo" className="w-32 h-32 object-contain" />
              <div>
                <h3 className="font-bold text-2xl">
                  HYT <span className="text-amber-400">Global Institute Inc.</span>
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  A TESDA-accredited training institution transforming individuals into industry-ready professionals, leaders, and changemakers. Shaping bright futures since 2025.
                </p>
                <div className="mt-4 text-gray-300 text-sm space-y-1">
                  <div>55 Natividad, San Francisco Del Monte, Quezon City</div>
                  <div>0927 894 6416 / (02) 8359 0648</div>
                  <div>admissions@hytglobalinstitute.com</div>
                </div>
                <div className="flex gap-3 mt-4">
                  {[
                    { icon: <FacebookIcon className="w-5 h-5 text-white" />, label: 'Facebook' },
                    { icon: <InstagramIcon className="w-5 h-5 text-white" />, label: 'Instagram' },
                    { icon: <LinkedInIcon className="w-5 h-5 text-white" />, label: 'LinkedIn' },
                    { icon: <YoutubeIcon className="w-5 h-5 text-white" />, label: 'YouTube' },
                  ].map((social, index) => (
                    <a key={index} href="#" title={social.label} className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {['Home', 'Courses', 'Admissions', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-amber-400 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                {['Benefits', 'Partners', 'News', 'Gallery'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-amber-400 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                {['LMS Portal', 'Website', 'Career Opportunities', 'Admissions'].map((link, index) => (
                  <li key={index}>
                    <a href={link === 'LMS Portal' ? 'https://hytech-ad360.web.app/' : link === 'Website' ? 'https://connectorcore.com' : '#'}
                       target={link === 'LMS Portal' || link === 'Website' ? '_blank' : '_self'}
                       rel={link === 'LMS Portal' || link === 'Website' ? 'noopener noreferrer' : ''}
                       className="hover:text-amber-400 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
            <p>© 2026 HYT Global Institute Inc. All rights reserved.</p>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <span>Website: connectorcore.com</span>
              <span>TESDA Accredited • Quezon City, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
