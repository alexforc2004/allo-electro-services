import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    machineType: "",
    description: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const machineTypes = [
    "Réfrigérateur / Frigo",
    "Machine à laver",
    "Lave-vaisselle",
    "Sèche-linge",
    "Four électrique",
    "Micro-ondes",
    "Autre",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Simulate form submission - in production, this would send to a backend
    try {
      // Construct WhatsApp message
      const message = `
*Nouvelle demande de réparation*

Nom: ${formData.name} ${formData.surname}
Téléphone: ${formData.phone}
Email: ${formData.email}
Appareil: ${formData.machineType}

Description du problème:
${formData.description}
      `.trim();

      // Here you would typically send to your backend API
      // For now, we'll just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store form data and show success
      setSubmitStatus("success");
      setFormData({
        name: "",
        surname: "",
        phone: "",
        email: "",
        machineType: "",
        description: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Contacter Allo Electro Services
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Remplissez le formulaire ci-contre ou contactez-nous directement
              par téléphone ou WhatsApp. Réponse rapide garantie !
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-600 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+212660207390"
                    className="text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    +212660207390
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-600 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.999 1.268c-1.474.744-2.666 1.752-3.646 3.048-1.033 1.388-1.57 2.900-1.57 4.369 0 2.209.713 4.334 2.05 6.059l1.503-5.702c.362-1.374 1.328-2.566 2.541-3.3.584-.352 1.21-.534 1.844-.534.341 0 .671.04.989.12 1.287.335 2.306 1.127 2.924 2.325.402.785.516 1.627.348 2.45-.166.82-.678 1.53-1.398 1.973-.722.45-1.556.635-2.389.54-.406-.043-.813-.16-1.196-.353-1.14-.569-1.973-1.631-2.319-2.965l-1.568 5.938c-.373 1.414-.22 2.896.436 4.247 1.197 2.372 3.584 4.007 6.375 4.007.902 0 1.77-.15 2.598-.45 2.209-.82 4.088-2.411 5.305-4.452.832-1.418 1.309-3.055 1.309-4.747 0-3.954-2.115-7.398-5.262-9.191-1.473-.872-3.104-1.325-4.736-1.325z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/212660207390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    +212660207390
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Disponibilité
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    7 jours sur 7 - Intervention rapide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="+212 6XX-XXXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Machine Type */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Type d'appareil *
                </label>
                <select
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Sélectionnez un appareil</option>
                  {machineTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Description du problème *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Décrivez le problème de votre appareil..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <p>Merci ! Nous vous recontacterons très bientôt.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <p>Une erreur s'est produite. Veuillez réessayer.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {submitStatus === "loading"
                  ? "Envoi en cours..."
                  : "Envoyer le formulaire"}
              </button>

              {/* Alternative CTA */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-4">
                Ou contactez directement au{" "}
                <a
                  href="tel:+212660207390"
                  className="text-orange-600 dark:text-orange-400 font-semibold hover:underline"
                >
                  +212 660-207390
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
