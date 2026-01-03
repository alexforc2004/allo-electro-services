import { useState, useEffect } from "react";
import { Wrench, Zap, Shield } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F61cd64f8a34340d0a7176fa61d6f35b5?format=webp&width=800",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F61cd64f8a34340d0a7176fa61d6f35b5?format=webp&width=800",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F61cd64f8a34340d0a7176fa61d6f35b5?format=webp&width=800",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const hideTimer = setTimeout(() => setShowTitle(false), 500);
    const showTimer = setTimeout(() => setShowTitle(true), 2000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-8"
            }`}
          >
            Allo Electro Services
          </h1>

          {/* ✅ العنوان الثانوي */}
          <p
            className={`text-lg sm:text-xl text-orange-300 font-semibold mb-6 transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Réparation électroménager Samsung LG à domicile
          </p>

          <p
            className={`text-lg sm:text-xl text-gray-100 mb-8 transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Shield className="w-5 h-5" /> Intervention rapide
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <Zap className="w-5 h-5" /> Toutes marques
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <Wrench className="w-5 h-5" /> Garantie
            </span>
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Demander un devis
            </a>

            <a
              href="https://wa.me/212660207390"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
