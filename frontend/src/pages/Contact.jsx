import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Clock, Linkedin, Instagram, MessageSquare, CheckCircle2, Send
} from 'lucide-react';


const services = [
  { id: 'Certificate', label: 'Certificate' },
  { id: 'Training', label: 'Training' },
  { id: 'Web Development', label: 'Web Dev' },
  { id: 'AI Automation', label: 'AI Automation' },
  { id: 'AI Chatbot', label: 'AI Chatbot' },
  { id: '__other_option__', label: 'Other' },
];

const CustomForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showOther, setShowOther] = useState(false);

  // Replace this with your actual Google Form ID
  const FORM_ID = "1FAIpQLSegzWPr1BNtEsqkCFPVw2R0sjtQ4kYEXTLcYOk__fTFSEjt0w";

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400">Thank you, Bharat. We'll get back to you shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <>
      {/* Hidden iframe to handle silent submission */}
      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" />
      
      <form 
        action={`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`}
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Full Name *</label>
          <input 
            type="text" 
            name="entry.304773984" 
            required 
            placeholder="Your full name"
            className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 outline-none transition-all"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email Address *</label>
            <input 
              type="email" 
              name="entry.1989462799" 
              required 
              placeholder="you@email.com"
              className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Phone Number</label>
            <input 
              type="text" 
              name="entry.763954752" 
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Service Required *</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map((service) => (
              <label 
                key={service.id}
                className={`
                  relative flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all text-sm
                  ${selectedService === service.id 
                    ? 'bg-violet-500/10 border-violet-500/50 text-white font-semibold' 
                    : 'bg-[#030712] border-slate-800 text-slate-400 hover:border-slate-700'}
                `}
              >
                <input 
                  type="radio" 
                  name="entry.212220903" 
                  value={service.id}
                  required
                  className="absolute opacity-0"
                  onChange={(e) => {
                    setSelectedService(service.id);
                    setShowOther(service.id === '__other_option__');
                  }}
                />
                {service.label}
              </label>
            ))}
          </div>
          
          <AnimatePresence>
            {showOther && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <input 
                  type="text" 
                  name="entry.212220903.other_option_response"
                  placeholder="Please specify your requirement"
                  required
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 outline-none"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Message *</label>
          <textarea 
            name="entry.1586093507" 
            required 
            rows={4}
            placeholder="How can we help you?"
            className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 outline-none transition-all resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send size={18} />
          Submit Application
        </motion.button>
      </form>
    </>
  );
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'bharat@bikertechie.com',
    link: 'mailto:bharat@bikertechie.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat, 9AM - 7PM IST',
    description: 'Available for consultations',
  },
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/biker-techie/' },
  { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/bikertechie_' },
];

export const Contact = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6"
            >
              <MessageSquare size={16} />
              Get in Touch
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Conversation</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Ready to transform your business with cloud and AI solutions? 
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 relative" data-testid="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side Info */}
            <motion.div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-violet-400 hover:text-violet-300 transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                      <p className="text-slate-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a 
                      key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Custom Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-6 md:p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xl">
                <CustomForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;