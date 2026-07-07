import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Phone, MapPin } from 'lucide-react';

const LOGO_URL = "/assets/logo.png";
const GCP_BADGE = "/assets/gcp_partner_badge.png";

const footerLinks = {
  services: [
    { name: 'AI Automation', path: '/services#ai-automation' },
    { name: 'Cloud Consulting', path: '/services#cloud-consulting' },
    { name: 'Web Development', path: '/services#web-development' },
    { name: 'Marketing & SEO', path: '/services#marketing' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  training: [
    { name: 'Cloud Foundations', path: '/training' },
    { name: 'Cloud Architect', path: '/training' },
    { name: 'DevOps & Kubernetes', path: '/training' },
    { name: 'AI on Cloud', path: '/training' },
  ],
};

export const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ✅ PERFECT 5 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="group relative inline-block mb-3">
              {/* Logo glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/40 to-cyan-500/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img 
                src={LOGO_URL} 
                alt="BikerTechie" 
                className="h-12 relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 25px rgba(124, 58, 237, 0.7))"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </a>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold text-lg">Biker</span>
              <span className="text-white font-bold text-lg">Techie</span>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              Your Cloud & AI consulting partner for scalable digital growth.
            </p>

            <img 
              src={GCP_BADGE} 
              alt="Google Cloud Partner" 
              className="h-9 bg-white p-1 rounded mb-4"
            />

            {/* Social */}
            <div className="flex gap-2">
              <motion.a 
                href="mailto:bharat@bikertechie.com"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-violet-500/20"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail size={16} />
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/company/biker-techie/" 
                target="_blank"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-violet-500/20"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin size={16} />
              </motion.a>

              <motion.a 
                href="https://www.instagram.com/bikertechie_" 
                target="_blank"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-violet-500/20"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Instagram size={16} />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleLinkClick(e, link.path)} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleLinkClick(e, link.path)} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training (RESTORED ✅) */}
          <div>
            <h3 className="text-white font-semibold mb-2">Training</h3>
            <ul className="space-y-1 text-sm text-slate-400">
              {footerLinks.training.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleLinkClick(e, link.path)} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>

            <div className="space-y-2 text-sm text-slate-400 mb-4">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-400" />
                Siddharth Nagar, UP, India 272207 
              </p>

              <p className="flex items-center gap-2">
                <Mail size={14} className="text-violet-400" />
                contact@bikertechie.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={14} className="text-violet-400" />
                +91 8195898448
              </p>
            </div>

            <motion.button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>

        </div>



      </div>
    </footer>
  );
};

export default Footer;