import { useState, useEffect } from "react";
import { Wrench, Zap, Shield } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  const slides = [
 
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F61cd64f8a34340d0a7176fa61d6f35b5?format=webp&width=800",
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F61cd64f8a34340d0a7176fa61d6f35b5?format=webp&width=800",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    // Title animation: hide, show again
    const hideTimer = setTimeout(() => setShowTitle(false), 500);
    const showTimer = setTimeout(() => setShowTitle(true), 2000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Animated background slides with images */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-8"
            }`}
          >
            Allo Electro Services
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-100 mb-8 font-medium transition-all duration-700 transform ${
              showTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Intervention rapide
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Toutes marques
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center justify-center gap-2">
              <Wrench className="w-5 h-5" />
              Garantie
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
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Demander un devis
            </a>
            <a
              href="https://wa.me/212660207390"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.999 1.268c-1.474.744-2.666 1.752-3.646 3.048-1.033 1.388-1.57 2.900-1.57 4.369 0 2.209.713 4.334 2.05 6.059l1.503-5.702c.362-1.374 1.328-2.566 2.541-3.3.584-.352 1.21-.534 1.844-.534.341 0 .671.04.989.12 1.287.335 2.306 1.127 2.924 2.325.402.785.516 1.627.348 2.45-.166.82-.678 1.53-1.398 1.973-.722.45-1.556.635-2.389.54-.406-.043-.813-.16-1.196-.353-1.14-.569-1.973-1.631-2.319-2.965l-1.568 5.938c-.373 1.414-.22 2.896.436 4.247 1.197 2.372 3.584 4.007 6.375 4.007.902 0 1.77-.15 2.598-.45 2.209-.82 4.088-2.411 5.305-4.452.832-1.418 1.309-3.055 1.309-4.747 0-3.954-2.115-7.398-5.262-9.191-1.473-.872-3.104-1.325-4.736-1.325z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
