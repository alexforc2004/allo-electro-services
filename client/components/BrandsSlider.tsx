import { useState, useEffect } from "react";

export default function BrandsSlider() {
  const brands = [
    {
      name: "LG",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F75bbc5b90fdc488598fbaee5be2cdedf?format=webp&width=200",
    },
   {
      name: "Samsung",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Fd62cf6969cd24b12b064e5bc4811fbe5?format=webp&width=200",
    },
     {
      name: "Whirlpool",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F82af275d542244308e58773757c4fd00?format=webp&width=200",
    },
    {
      name: "Franke",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F65143e9e0faf4de09071551d1244fc04?format=webp&width=200",
    },
    {
      name: "Ariston",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2F9be32b18acb444479043cb86a02ea8f0?format=webp&width=200",
    },
     {
      name: "Bosch",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Ff43a62644c9041d388470bd2dc41555d?format=webp&width=200",
    },
   {
      name: "Electrolux",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Faa8d9d619f1246a88c3430cb8a9fe135?format=webp&width=200",
    },
    {
      name: "Beko",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EBeko%3C/text%3E%3C/svg%3E",
    },
    {
      name: "Brandt",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EBrandt%3C/text%3E%3C/svg%3E",
    },
    {
      name: "Candy",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3ECandy%3C/text%3E%3C/svg%3E",
    },
    {
      name: "Arthur Martin",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EArthur Martin%3C/text%3E%3C/svg%3E",
    },
    {
      name: "Siemens",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3ESiemens%3C/text%3E%3C/svg%3E",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (brands.length * 100));
    }, 30);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <section id="marques" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Marques Réparées
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nous réparons <strong>toutes les marques</strong> d'électroménagers
            français et internationaux. Nous ne sommes pas un SAV officiel, mais
            nous avons l'expertise pour réparer vos appareils.
          </p>
        </div>

        {/* Brands Slider */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-lg p-8">
          <div className="flex gap-8 md:gap-12 animate-scroll">
            {/* First set */}
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-1`}
                className="flex-shrink-0 min-w-[140px] md:min-w-[160px] h-20 flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 max-w-32 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Second set for continuous loop */}
            {brands.map((brand) => (
              <div
                key={`${brand.name}-2`}
                className="flex-shrink-0 min-w-[140px] md:min-w-[160px] h-20 flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 max-w-32 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-slate-800 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-slate-800 to-transparent pointer-events-none z-10" />
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-center text-blue-900 dark:text-blue-300">
            <strong>+100 marques disponibles</strong> – Si votre marque n'est pas
            listée, nous pouvons probablement la réparer. N'hésitez pas à
            <a href="#contact" className="underline ml-1 hover:text-blue-700">
              nous contacter
            </a>
            !
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 16px));
          }
        }
        
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
