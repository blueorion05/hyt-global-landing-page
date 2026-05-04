import hytLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/HYTLOGO.png'
import brainsLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/BRAINSLOGO.png'
import kgcLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/KGC.png'
import klassicLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/KLASSIC.png'
import levelUpLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/LEVELUP.png'
import luxLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/LUXLOGO.png'
import wdcLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/WDCLOGO.png'
import zcorpLogo from '../../assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/Logo and Partner Companies Logos/ZCORPLOGO.png'

export default function Partners() {
  const partners = [
    { name: 'BRAINS', logo: brainsLogo },
    { name: 'KGC', logo: kgcLogo },
    { name: 'Klassic', logo: klassicLogo },
    { name: 'LevelUp', logo: levelUpLogo },
    { name: 'LUX', logo: luxLogo },
    { name: 'WDC', logo: wdcLogo },
    { name: 'ZCorp', logo: zcorpLogo },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-900 font-semibold uppercase tracking-wide mb-4">Partnership Network</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-900">Industry Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            HYT Global Institute collaborates with organizations that support student exposure,
            internship pathways, and employment opportunities.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={hytLogo} alt="HYT Global Institute logo" className="h-20 w-auto object-contain" />
            <p className="text-gray-700 text-center md:text-left">
              HYT serves as a bridge between high-quality skills training and real workforce demand.
              Through active institutional partnerships, students gain practical opportunities and stronger career outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white border border-gray-200 rounded-xl p-6 h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src={partner.logo} alt={partner.name + ' logo'} className="max-h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
