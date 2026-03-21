import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Clock, Linkedin, Instagram, MessageSquare, Send, MapPin, Loader2, AlertCircle
} from 'lucide-react';

// ─── Confetti Canvas ──────────────────────────────────────────────────────────
const ConfettiCanvas = ({ active }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#22c55e', '#ec4899', '#f97316'];
    const pieces = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 60,
      w: 6 + Math.random() * 8,
      h: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 3,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.2,
      isCircle: Math.random() > 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      });
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', borderRadius: 'inherit',
      }}
    />
  );
};

// ─── Success Modal ────────────────────────────────────────────────────────────
const SuccessModal = ({ onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();
    const duration = 4000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(pct);
      if (elapsed < duration) requestAnimationFrame(tick);
      else onClose();
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(3,7,18,0.80)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          style={{
            position: 'relative',
            background: '#0f172a',
            border: '1px solid rgba(139,92,246,0.35)',
            borderRadius: 24,
            padding: '44px 56px',
            textAlign: 'center',
            minWidth: 320,
            overflow: 'hidden',
          }}
        >
          <ConfettiCanvas active />

          {/* Animated check circle */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(34,197,94,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#22c55e" strokeWidth="2" />
              <motion.path
                d="M12 20l6 6 10-12"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              />
            </svg>
          </div>

          <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: '0 0 8px' }}>
            Message Sent! 🎉
          </h3>
          <p style={{ color: '#94a3b8', fontSize: 14, margin: '0 0 24px' }}>
            We'll get back to you within 12 hours.
          </p>

          {/* Timer bar */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 99, height: 4, width: 200, margin: '0 auto',
            overflow: 'hidden',
          }}>
            <div style={{
              height: 4,
              borderRadius: 99,
              background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
              width: `${progress}%`,
              transition: 'width 50ms linear',
            }} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { id: 'Certificate', label: 'Certificate' },
  { id: 'Training', label: 'Training' },
  { id: 'Web Development', label: 'Web Dev' },
  { id: 'AI Automation', label: 'AI Automation' },
  { id: 'AI Chatbot', label: 'AI Chatbot' },
  { id: '__other_option__', label: 'Other' },
];

// ─── Form ─────────────────────────────────────────────────────────────────────
const CustomForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showOther, setShowOther] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const formRef = useRef(null);

  const FORM_ID = "1FAIpQLSegzWPr1BNtEsqkCFPVw2R0sjtQ4kYEXTLcYOk__fTFSEjt0w";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      setServiceError(true);
      return;
    }

    if (!selectedService) {
      setServiceError(true);
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData(e.target);

    try {
      await fetch(
        `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
        { method: 'POST', body: formData, mode: 'no-cors' }
      );
      setShowModal(true);
    } catch {
      setError('Something went wrong. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedService('');
    setShowOther(false);
    setServiceError(false);
    formRef.current?.reset();
  };

  return (
    <>
      {showModal && <SuccessModal onClose={handleModalClose} />}

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
          >
            <AlertCircle size={16} className="shrink-0" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Full Name *</label>
          <input
            type="text"
            name="entry.304773984"
            required
            placeholder="Your full name"
            className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="email"
            name="entry.1989462799"
            required
            placeholder="you@email.com"
            className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white"
          />
          <input
            type="text"
            name="entry.763954752"
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm text-slate-400 uppercase">Service Required *</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map((service) => (
              <label
                key={service.id}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-colors ${
                  selectedService === service.id
                    ? 'bg-violet-500/10 border-violet-500/50 text-white'
                    : serviceError
                    ? 'bg-[#030712] border-red-500/50 text-slate-400'
                    : 'bg-[#030712] border-slate-800 text-slate-400'
                }`}
              >
                <input
                  type="radio"
                  name="entry.212220903"
                  value={service.id}
                  className="hidden"
                  onChange={() => {
                    setSelectedService(service.id);
                    setShowOther(service.id === '__other_option__');
                    setServiceError(false);
                  }}
                />
                {service.label}
              </label>
            ))}
          </div>

          <AnimatePresence>
            {serviceError && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle size={14} className="shrink-0" />
                Please select a service.
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showOther && (
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                type="text"
                name="entry.212220903.other_option_response"
                placeholder="Please specify"
                required
                className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white"
              />
            )}
          </AnimatePresence>
        </div>

        <textarea
          name="entry.1586093507"
          required
          rows={4}
          placeholder="How can we help you?"
          className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white"
        />

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.01 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 size={18} className="animate-spin" />Sending...</>
          ) : (
            <><Send size={18} />Send Message</>
          )}
        </motion.button>
      </form>
    </>
  );
};

// ─── Contact Info ─────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'contact@bikertechie.com',
    link: 'mailto:contact@bikertechie.com',
    description: 'We respond within 12 hours',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat, 9AM - 7PM IST',
    description: 'Available for consultations',
  },
  {
    icon: MapPin,
    title: 'Office Location',
    value: 'Pandey Bhawan, Siddharth Nagar, UP, India 272207',
    link: 'https://www.google.com/maps?q=Pandey+Bhawan+Siddharth+Nagar+UP+272207',
    description: 'Visit us or schedule a meeting',
  },
];

const socialLinks = [
  { icon: Linkedin, url: 'https://www.linkedin.com/company/biker-techie/' },
  { icon: Instagram, url: 'https://www.instagram.com/bikertechie_' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export const Contact = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-24">

      {/* Hero */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 mb-6">
          <MessageSquare size={16} />
          Get in Touch
        </span>
        <h1 className="text-5xl font-bold text-white mb-6">
          Let's Start a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Conversation
          </span>
        </h1>
        <p className="text-slate-400 text-lg">
          Turn your ideas into scalable AI and cloud solutions.
          Share your requirements and our team will get back to you within 12 hours.
        </p>
      </section>

      {/* Main */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">

          <div className="lg:col-span-3 order-1">
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5">
              <CustomForm />
            </div>
          </div>

          <div className="lg:col-span-2 order-2">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

            <div className="space-y-6 mb-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
                    <info.icon className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noreferrer" className="text-violet-400">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-violet-400">{info.value}</p>
                    )}
                    <p className="text-slate-500 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Siddharth+Nagar+UP+272207&output=embed"
              className="w-full h-40 rounded-xl border border-white/10 mb-6"
              loading="lazy"
              title="Office Location"
            />

            <h3 className="text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i} href={s.url} target="_blank" rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;