import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    label: "🤖 AI Services",
    message: "Hello BikerTechie Team,%0A%0AI am reaching out regarding your AI Services.%0AI visited your website and would like to understand how AI solutions can benefit my business.%0A%0AKindly guide me further. Thank you.",
  },
  {
    label: "☁️ Cloud Services",
    message: "Hello BikerTechie Team,%0A%0AI am interested in your Cloud Services.%0AI would like to explore cloud solutions suitable for my business requirements.%0A%0APlease share more details at your earliest convenience. Thank you.",
  },
  {
    label: "💻 Web Development",
    message: "Hello BikerTechie Team,%0A%0AI am looking for professional Web Development services.%0AI visited your website and would love to discuss my project requirements.%0A%0ALooking forward to your response. Thank you.",
  },
  {
    label: "📜 Certification",
    message: "Hello BikerTechie Team,%0A%0AI am interested in your Certification programs.%0AKindly provide details regarding the available certifications, duration, and fees.%0A%0AThank you for your time.",
  },
  {
    label: "🎓 Training",
    message: "Hello BikerTechie Team,%0A%0AI would like to enquire about your Training programs.%0APlease share information on the available courses, schedules, and pricing.%0A%0ALooking forward to hearing from you. Thank you.",
  },
];

const WHATSAPP_BASE = "https://wa.me/918195898448?text=";

const ROTATING_TEXTS = [
  "Chat with us ✦",
  "We reply fast ✦",
  "AI $ Cloud Services ✦",
  "Training $ Certification ✦",
];

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((i) => (i + 1) % ROTATING_TEXTS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (service) => {
    setSelected(service.label);
    setTimeout(() => {
      window.open(WHATSAPP_BASE + service.message, '_blank');
      setSelected(null);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-20 right-8 z-[9999] flex flex-col items-end gap-3">

      {/* Chat Card Pop-up */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Card Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ background: 'linear-gradient(90deg, #00b09b, #96c93d)' }}
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H3a7 7 0 017-7h1V5.73A2 2 0 0112 2zM7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2H3z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">BikerTechie Support</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/80 text-xs">Online · Replies instantly</span>
                </div>
              </div>
            </div>

            {/* Bot message */}
            <div className="px-4 pt-4 pb-2">
              <div className="flex gap-2 items-end">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00b09b, #96c93d)' }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H3a7 7 0 017-7h1V5.73A2 2 0 0112 2z"/>
                  </svg>
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-4 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="text-white/90 text-sm leading-snug">
                    👋 Hello! Please select a service and we'll connect you instantly on WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Buttons */}
            <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
              {SERVICES.map((service) => (
                <motion.button
                  key={service.label}
                  onClick={() => handleServiceClick(service)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-white/90 transition-all"
                  style={{
                    background: selected === service.label
                      ? 'linear-gradient(90deg, #00b09b, #96c93d)'
                      : 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {service.label}
                </motion.button>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-4 pb-3 flex items-center justify-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="#96c93d" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-white/30 text-xs">Powered by WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Row */}
      <div className="flex items-center gap-3">

        {/* Rotating label pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.35 }}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #0f0f0f, #1a1a2e)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {ROTATING_TEXTS[textIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative rounded-2xl flex items-center justify-center cursor-pointer"
          style={{
            width: '72px',
            height: '72px',
            background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
            boxShadow: '0 8px 32px rgba(0,176,155,0.45)',
          }}
          aria-label="Open chat"
        >
          {/* Pulse ring */}
          {!isOpen && (
            <motion.span
              className="absolute inset-0 rounded-2xl"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ background: 'rgba(0,176,155,0.5)' }}
            />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="w-8 h-8 relative z-10"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 relative z-10"
              >
                <path d="M12 3C6.477 3 2 6.925 2 11.765c0 2.547 1.193 4.836 3.094 6.43L4 21l3.77-1.687A10.77 10.77 0 0012 20.53c5.523 0 10-3.925 10-8.765S17.523 3 12 3zm-1 11H7v-2h4v2zm5 0h-3v-2h3v2zm0-4H8V8h8v2z"/>
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Unread dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">1</span>
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;