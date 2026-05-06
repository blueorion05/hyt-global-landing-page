import hytFoundationLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYTLOGO.png'
import hytLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYT.png'
import brainsLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/BRAINSLOGO.png'
import kgcLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/KGC.png'
import klassicLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/KLASSIC.png'
import levelUpLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/LEVELUP.png'
import luxLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/LUXLOGO.png'
import wdcLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/WDCLOGO.png'
import zcorpLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/ZCORPLOGO.png'

export default function Partners() {
  const partners = [
    { name: 'HYT Foundation Inc.', logo: hytFoundationLogo },
    { name: 'BRAINS', logo: brainsLogo },
    { name: 'KGC', logo: kgcLogo },
    { name: 'Klassic', logo: klassicLogo },
    { name: 'LevelUp', logo: levelUpLogo },
    { name: 'LUX', logo: luxLogo },
    { name: 'WDC', logo: wdcLogo },
    { name: 'ZCorp', logo: zcorpLogo },
  ]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Partnership Network</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-900">Industry Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            HYT Global Institute collaborates with organizations that support student exposure,
            internship pathways, and employment opportunities.
          </p>
        </div>

        <div className="relative mb-12 mx-auto max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img src={hytLogo} alt="HYT Global Institute logo" className="h-20 sm:h-24 w-auto object-contain" />
              </div>
              <div className="relative flex-1">
                <p className="text-gray-700 text-center md:text-left leading-relaxed text-sm sm:text-base">
                  HYT serves as a bridge between high-quality skills training and real workforce demand.
                  Through active institutional partnerships, students gain practical opportunities and stronger career outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center text-base sm:text-lg font-semibold text-gray-900 mb-6 sm:mb-8">Our Trusted Partners & Brands</h3>
          <div className="marquee-container rounded-xl">
            <div className="marquee-content">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-40 sm:w-56 md:w-64 h-32 sm:h-40 md:h-48 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                  <img src={partner.logo} alt={partner.name + ' logo'} className="max-h-16 sm:max-h-24 md:max-h-32 w-auto object-contain px-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
