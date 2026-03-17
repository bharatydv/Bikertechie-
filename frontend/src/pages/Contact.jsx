import { motion } from 'framer-motion';
import { 
  Mail, Clock, Linkedin, Instagram, MessageSquare, MapPin, Phone
} from 'lucide-react';

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
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
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
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <motion.div 
                    key={info.title} 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-violet-400 hover:text-violet-300 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                      <p className="text-slate-500 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                      aria-label={social.name}
                      data-testid={`social-${social.name.toLowerCase()}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <motion.div 
                  className="p-5 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-white font-medium mb-2">Free Consultation</h3>
                  <p className="text-slate-400 text-sm">
                    Get expert advice on your cloud and AI requirements. No strings attached.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-white font-medium mb-2">Quick Response</h3>
                  <p className="text-slate-400 text-sm">
                    We typically respond within 24 hours. For urgent inquiries, use WhatsApp.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Google Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-white/10 overflow-hidden">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-slate-400 mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>
                
                {/* Google Form Embed */}
                <div className="relative w-full rounded-xl overflow-hidden bg-white" data-testid="google-form-container">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSegzWPr1BNtEsqkCFPVw2R0sjtQ4kYEXTLcYOk__fTFSEjt0w/viewform?embedded=true" 
                    width="100%" 
                    height="1304" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="Contact Form"
                    className="w-full min-h-[1304px]"
                    style={{ border: 'none' }}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA Section */}
      <section className="py-16 relative" data-testid="contact-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 text-center relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 left-1/4 w-40 h-40 bg-violet-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prefer a Direct Conversation?
              </h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Click the WhatsApp button for instant replies, or email us directly.
              </p>
              <motion.a 
                href="mailto:bharat@bikertechie.com" 
                data-testid="email-direct-cta"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Email Us Directly
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
