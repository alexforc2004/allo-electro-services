import {
  Refrigerator,
  Droplet,
  Wind,
  UtensilsCrossed,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Refrigerator,
      title: "Réparation Réfrigérateur & Congélateur",
      description: "Réparation professionnelle de frigo et congélateur toutes marques à Rabat",
      fullDescription: "Votre réfrigérateur ne refroidit plus ? Fuite d'eau ? Bruit anormal ? Nous diagnostiquons et réparons tous les problèmes de frigo rapidement. Réparation frigo LG, Samsung, Bosch, Whirlpool, Electrolux à domicile.",
      keywords: ["Réfrigérateur", "Frigo", "Congélateur", "Frigo qui ne refroidit pas", "Réparation frigo Rabat", "Dépannage réfrigérateur"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Fface79a3a89f43baaa3e0118fc39bda3?format=webp&width=800",
    },
    {
      id: 2,
      icon: Droplet,
      title: "Réparation Machine à Laver & Lave-linge",
      description: "Dépannage express lave-linge et lave-vaisselle à domicile",
      fullDescription: "Machine à laver qui fuit ? Ne tourne plus ? Lave-vaisselle ne lave pas correctement ? Intervention rapide pour vos appareils. Réparation lave-linge Samsung, LG, Bosch, Whirlpool, Electrolux.",
      keywords: ["Machine à laver", "Lave-linge", "Lave-vaisselle", "Réparation machine à laver", "Dépannage lave-linge Rabat", "Machine à laver qui fuit"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F47794b2be3704e99bc3b1c524a687791?format=webp&width=800",
    },
    {
      id: 3,
      icon: Wind,
      title: "Réparation Sèche-linge",
      description: "Service de réparation sèche-linge rapide et fiable à domicile",
      fullDescription: "Sèche-linge qui ne sèche plus ? Problème d'électronique ? Nous réparons tous les modèles. Intervention urgente disponible 7j/7.",
      keywords: ["Sèche-linge", "Séchage", "Réparation sèche-linge", "Électroménager de lessive", "Dépannage sèche-linge Rabat"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Fd69c8c8a9d694c94bed8c886bad74d6d?format=webp&width=800",
    },
    {
      id: 4,
      icon: UtensilsCrossed,
      title: "Réparation Four Électrique",
      description: "Réparation professionnel de four et cuisinière",
      fullDescription: "Four ne chauffe pas ? Cuisinière défectueuse ? Diagnostic gratuit et réparation express. Réparation four électrique, cuisinière Rabat.",
      keywords: ["Four électrique", "Cuisinière", "Réparation four", "Four qui ne chauffe pas", "Dépannage four Rabat"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F28f9e43669da41a79cf5df5f5caee06f?format=webp&width=800",
    },
    {
      id: 5,
      icon: Cpu,
      title: "Diagnostic Électronique",
      description: "Diagnostic rapide et précis de vos appareils électroménagers",
      fullDescription: "Diagnostic gratuit et détaillé de votre électroménager. Identification des pannes, devis transparent. Réparation ou remplacement de pièces avec garantie.",
      keywords: ["Diagnostic électronique", "Test électroménager", "Dépannage professionnel", "Diagnostic gratuit"],
      image: "https://i.pinimg.com/1200x/22/93/8c/22938cd5c6f8557cf3b2cd64d8156e68.jpg",
    },
    {
      id: 6,
      icon: CheckCircle2,
      title: "Maintenance Préventive",
      description: "Entretien régulier et maintenance pour prolonger la durée de vie",
      fullDescription: "Maintenance préventive de vos appareils électroménagers. Entretien régulier, nettoyage, vérification des pièces. Évitez les pannes coûteuses.",
      keywords: ["Maintenance préventive", "Entretien électroménager", "Nettoyage machine", "Prolonger durée de vie"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F04c29c2146a14908b1bbf5583f674780?format=webp&width=800",
    },
  ];

  const advantages = [
    "Intervention rapide à domicile",
    "Diagnostic gratuit et immédiat",
    "Pièces détachées de qualité",
    "Garantie sur réparation",
    "Technicien expérimenté 20+ ans",
    "Disponible 7 jours sur 7",
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading with SEO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services de Réparation Électroménager à Rabat
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Réparation professionnelle et rapide de tous vos appareils
            électroménagers français et internationaux. Intervention à domicile
            garantie avec pièces de qualité et technicien expérimenté à Rabat,
            Temara, et régions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const imagePosition = index % 2 === 0 ? "left" : "right";

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
              >
                {/* Image - Always first in DOM for mobile, positioned via order on lg */}
                <div className={`${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Content - Always second in DOM for mobile, positioned via order on lg */}
                <div className={`${imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="mb-3 inline-block p-2 sm:p-3 bg-white rounded-lg">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white mb-2 sm:mb-3 font-medium">
                    {service.description}
                  </p>
                  <p className="text-sm sm:text-base text-white mb-4 sm:mb-5 leading-relaxed hidden sm:block">
                    {service.fullDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="text-xs px-2.5 sm:px-3 py-1 bg-white text-blue-600 rounded-full font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-block px-5 sm:px-6 py-2 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition transform hover:scale-105 text-sm sm:text-base"
                  >
                    Demander une intervention
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed SEO Content */}
        <div className="bg-white rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Réparation Électroménager à Rabat – Service Professionnel & Garantie
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              Bienvenue chez <strong>Allo Mustapha</strong>, votre <strong>technicien
              réparateur d'électroménager</strong> de confiance à Rabat. Avec plus de 20
              ans d'expérience en <strong>dépannage d'appareils électroménagers</strong> français
              et internationaux, nous sommes spécialisés dans la <strong>réparation
              rapide et professionnelle</strong> de vos appareils à domicile.
            </p>

            <p>
              Nous intervenons sur <strong>tous types d'électroménagers</strong> :
              <strong>réfrigérateurs, frigos, congélateurs, machines à laver,
              lave-linge, lave-vaisselle, sèche-linge, fours électriques,
              cuisinières, micro-ondes</strong> et autres appareils de cuisine. Services incluent :
              <strong>réparation frigo Rabat, dépannage machine à laver, réparation four électrique,
              reparation lave-vaisselle, technicien lave-linge</strong>.
            </p>

            <p>
              Notre service de <strong>diagnostic gratuit</strong> vous permet
              de comprendre rapidement le problème de votre appareil. Nous
              utilisons des <strong>outils modernes</strong> et des <strong>pièces détachées de qualité</strong> pour assurer une <strong>réparation durable et fiable</strong>. Chaque <strong>réparation est garantie</strong>, et nos <strong>interventions sont rapides et efficaces</strong>.
              Nous offrons une <strong>garantie sur réparation</strong> et un <strong>devis gratuit</strong> avant toute intervention.
            </p>

            <p>
              Basé à <strong>Rabat</strong>, nous couvrons les <strong>zones d'intervention</strong> suivantes :
              <strong>Rabat, Temara, Agdal, Hay Riad, Yacoub El Mansour, Hassan, Wifaq,
              Bir Kacem, Ain Aouda, Menzeh, ONEP et régions</strong>.
              <strong>Intervention à domicile express disponible 7j/7</strong>.
            </p>

            <p>
              Nous réparons les principales marques : <strong>LG, Samsung, Bosch, Whirlpool,
              Electrolux, Beko, Brandt, Candy, Ariston, Siemens, Franke</strong> et +100 autres marques.
              <strong>Service professionnel, rapide et garantie</strong> pour tous vos besoins de <strong>dépannage électroménager à Rabat</strong>.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Nos Avantages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Notre Processus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Contact",
                desc: "Appelez ou envoyez un message",
              },
              { step: 2, title: "Diagnostic", desc: "Évaluation gratuite" },
              { step: 3, title: "Réparation", desc: "Intervention rapide" },
              { step: 4, title: "Garantie", desc: "Suivi et garantie" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
