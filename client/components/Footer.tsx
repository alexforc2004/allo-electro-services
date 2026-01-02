import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Wrench,
  Shield,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const interventionZones = [
    "Rabat",
    "Temara",
    "Agdal",
    "Hay Riad",
    "Yacoub El Mansour",
  ];

  const brands = [
    "LG",
    "Samsung",
    "Bosch",
    "Whirlpool",
    "Electrolux",
    "Beko",
    "Brandt",
    "Candy",
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Allo Mustapha</h3>
                <p className="text-xs text-gray-400">
                  Réparation Électroménager
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Technicien réparateur expérimenté avec plus de 20 ans d'expertise
              en réparation d'électroménagers français et internationaux.
            </p>
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">Garantie sur réparation</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Téléphone
                </p>
                <p className="text-sm text-white font-medium">
                  +212 660-207390
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  WhatsApp
                </p>
                <p className="text-sm text-white font-medium">
                  +212 660-207390
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Horaires
                </p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <p className="text-sm text-gray-300">Disponible 7j/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-400" />
              Zones d'intervention
            </h4>
            <ul className="space-y-2">
              {interventionZones.map((zone) => (
                <li key={zone}>
                  <p className="text-sm text-gray-300 hover:text-green-400 transition">
                    {zone}
                  </p>
                </li>
              ))}
              <li>
                <p className="text-sm text-gray-400">+ environs</p>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-white mb-4">Marques réparées</h4>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((brand) => (
                <p key={brand} className="text-sm text-gray-300">
                  {brand}
                </p>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Et toutes les autres marques...
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">20+</p>
              <p className="text-xs text-gray-400">Ans d'expérience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">7/7</p>
              <p className="text-xs text-gray-400">Disponibilité</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">100%</p>
              <p className="text-xs text-gray-400">Marques acceptées</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Allo Mustapha – Réparation Électroménager. Tous
              droits réservés.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Rabat, Temara et régions • Service à domicile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
