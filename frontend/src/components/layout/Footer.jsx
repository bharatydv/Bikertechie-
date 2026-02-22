import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ArrowUpRight, Cloud, Briefcase } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/yu9n15sm_WhatsApp%20Image%202026-02-22%20at%201.57.18%20PM.jpeg";
const GCP_BADGE = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/o5mb40lt_image.png";

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
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10" data-testid="footer">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent" />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block mb-6" 
              data-testid="footer-logo"
            >
              <motion.img 
                src={LOGO_URL} 
                alt="BikerTechie" 
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your certified Cloud & AI consulting partner for scalable digital growth. 
              We help businesses transform with enterprise-level cloud solutions, intelligent 
              automation, and strategic digital strategies.
            </p>
            
            {/* Google Cloud Partner Badge */}
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={GCP_BADGE} 
                alt="Google Cloud Partner" 
                className="h-12 w-auto rounded-lg bg-white p-1"
                data-testid="gcp-badge"
              />
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a 
                href="mailto:bharat@bikertechie.com" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-email-link"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/biker-techie/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-linkedin-link"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/bikertechie_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Cloud size={16} className="text-violet-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Briefcase size={16} className="text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-white font-semibold mb-4">Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} BikerTechie. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Empowering businesses with</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-medium">cloud excellence</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
