import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"menu" | "description">("menu");
  const [selectedMachine, setSelectedMachine] = useState("");
  const [description, setDescription] = useState("");

  const machines = [
    "🧊 Frigo / Réfrigérateur",
    "🧺 Lave-linge",
    "🍽️ Lave-vaisselle",
    "🌪️ Sèche-linge",
    "🔥 Four électrique",
    "📡 Micro-ondes",
    "❓ Autre",
  ];

  const handleMachineSelect = (machine: string) => {
    setSelectedMachine(machine);
    setStep("description");
  };

  const handleSendMessage = () => {
    if (!description.trim()) {
      alert("Veuillez décrire le problème");
      return;
    }

    const message = `Bonjour Mustapha,

Type d'appareil: ${selectedMachine}

Problème: ${description}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212660207390?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset
    setIsOpen(false);
    setStep("menu");
    setSelectedMachine("");
    setDescription("");
  };

  const handleBack = () => {
    setStep("menu");
    setSelectedMachine("");
    setDescription("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110 md:bottom-6 md:right-6"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 w-80 bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden md:bottom-24 md:right-6 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
            <h3 className="font-bold text-lg">Allo Electro Service</h3>
            <p className="text-sm text-orange-100">
              Disponible 7j/7 • Réponse rapide
            </p>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {step === "menu" && (
              <>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Sélectionnez votre type d'appareil :
                </p>
                <div className="space-y-2">
                  {machines.map((machine) => (
                    <button
                      key={machine}
                      onClick={() => handleMachineSelect(machine)}
                      className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-green-500 dark:hover:border-green-400 transition text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {machine}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === "description" && (
              <>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Appareil sélectionné :
                  </p>
                  <p className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg font-medium">
                    {selectedMachine}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Décrivez le problème :
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ex: Mon frigo ne refroidit plus depuis hier..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleBack}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition font-medium"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700 p-3 text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              💬 Nous répondons en moins de 30 minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
}
