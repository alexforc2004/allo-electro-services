import { MapPin, Zap } from "lucide-react";

export default function InterventionZones() {
  const zones = [
    {
      name: "Rabat",
      description: "Dépannage électroménager rapide à Rabat",
    },
    {
      name: "Temara",
      description: "Réparation machine à laver à Temara",
    },
    {
      name: "Agdal",
      description: "Technicien réparateur frigo à Agdal",
    },
    {
      name: "Hay Riad",
      description: "Réparation four électrique à Hay Riad",
    },
    {
      name: "Yacoub El Mansour",
      description: "Dépannage électroménager à Yacoub El Mansour",
    },
    {
      name: "Hassan",
      description: "Service réparation à Hassan",
    },
    {
      name: "Wifaq",
      description: "Intervention rapide à Wifaq",
    },
    {
      name: "Bir Kacem",
      description: "Technicien expérimenté à Bir Kacem",
    },
    {
      name: "Ain Aouda",
      description: "Réparation à domicile à Ain Aouda",
    },
    {
      name: "Menzeh",
      description: "Service professionnel à Menzeh",
    },
    {
      name: "ONEP",
      description: "Dépannage urgent à ONEP",
    },
  ];

  return (
    <section id="zones" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-orange-500" />
            Zones d'Intervention
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nous intervenons rapidement dans les quartiers de Rabat et Quartiers de temara, quartiers de ain ouda, et quartiers de salé.
            pour une réparation professionnelle à domicile. Disponible 7j/7 pour
            votre dépannage électroménager.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="group p-5 rounded-lg border border-gray-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-md transition bg-white dark:bg-slate-900"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 pt-1">
                  <Zap className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    {zone.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {zone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content */}
        <div className="bg-gradient-to-br from-orange-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Réparation Électroménager – Zones d'Intervention à Rabat
          </h3>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Allo Electro Services</strong> couvre l'ensemble des zones
              d'intervention suivantes à Rabat et environs : <strong>Rabat</strong>,{" "}
              <strong>Temara</strong>, <strong>Agdal</strong>,{" "}
              <strong>Hay Riad</strong>, <strong>Yacoub El Mansour</strong>,{" "}
              <strong>Hassan</strong>, <strong>sale</strong>,{" "}
              <strong>Bir Kacem</strong>, <strong>Ain Aouda</strong>,{" "}
              <strong>Menzeh</strong>, <strong>ONEP</strong>,{" "}
              <strong>harhoura</strong>,<strong>skhirat</strong> et regions.
            </p>

            <p>
              Nous effectuons des interventions rapides à domicile pour tous vos
              besoins de <strong>dépannage électroménager</strong>. Notre
              technicien réparateur expérimenté se déplace à Rabat pour vous
              proposer un <strong>diagnostic gratuit</strong> et une réparation
              professionnelle.
            </p>

            <p>
              Que vous ayez besoin d'une <strong>réparation frigo</strong>,
              d'un dépannage <strong>machine à laver</strong> ou d'une
              intervention sur <strong>four électrique</strong>, nous sommes
              disponibles 7 jours sur 7 pour intervenir rapidement chez vous.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 pt-6 border-t border-orange-200 dark:border-slate-700">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  {zone.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Votre zone n'est pas listée ? Contactez-nous pour vérifier la
            disponibilité.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Demander une Intervention
          </a>
        </div>
      </div>
    </section>
  );
}
