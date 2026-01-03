import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      author: "Fatima M.",
      location: "Rabat",
      rating: 5,
      text: "Technicien très sérieux et professionnel. Il a réparé mon frigo en moins d'une heure. Je recommande vivement Allo Mustapha.",
      service: "Réparation Frigo",
    },
    {
      id: 2,
      author: "Ahmed B.",
      location: "Temara",
      rating: 5,
      text: "Intervention rapide pour ma machine à laver. Diagnostic gratuit et explications claires. Excellent service à domicile.",
      service: "Réparation Lave-linge",
    },
    {
      id: 3,
      author: "Layla K.",
      location: "Yacoub El Mansour",
      rating: 5,
      text: "Mon four électrique ne chauffait plus. Mustapha l'a réparé rapidement et la garantie donnée me rassure beaucoup.",
      service: "Réparation Four",
    },
    {
      id: 4,
      author: "Mohammed R.",
      location: "Agdal",
      rating: 5,
      text: "Service disponible 7j/7, c'est vraiment pratique. Intervention express et pièces de qualité. Je suis très satisfait.",
      service: "Dépannage",
    },
    {
      id: 5,
      author: "Noor S.",
      location: "Hay Riad",
      rating: 5,
      text: "Lave-vaisselle réparée en une visite. Technicien expérimenté, travail propre et garantie donnée. Parfait !",
      service: "Réparation Lave-vaisselle",
    },
    {
      id: 6,
      author: "Hassan D.",
      location: "Rabat",
      rating: 5,
      text: "Problème de sèche-linge résolu rapidement. Très compétent et honnête. Recommande à tous mes voisins.",
      service: "Réparation Sèche-linge",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Avis Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que nos clients satisfaits disent de nos services de
            réparation électroménager à Rabat et régions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-100 dark:border-slate-700"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg p-8">
          <div className="text-center text-white">
            <p className="text-3xl md:text-4xl font-bold">20+</p>
            <p className="text-sm md:text-base opacity-90">Ans d'Expérience</p>
          </div>
          <div className="text-center text-white border-l border-r border-white/20">
            <p className="text-3xl md:text-4xl font-bold">7/7</p>
            <p className="text-sm md:text-base opacity-90">Disponibilité</p>
          </div>
          <div className="text-center text-white">
            <p className="text-3xl md:text-4xl font-bold">⭐⭐⭐⭐⭐</p>
            <p className="text-sm md:text-base opacity-90">Avis Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
