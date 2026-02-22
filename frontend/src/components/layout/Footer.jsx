import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, ArrowUpRight, Cloud } from 'lucide-react';

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

  return (
    <footer className="relative bg-slate-950 border-t border-white/10" data-testid="footer">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6" data-testid="footer-logo">
              <img src={LOGO_URL} alt="BikerTechie" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your certified Cloud & AI consulting partner for scalable digital growth. 
              Empowering businesses with enterprise-level cloud solutions.
            </p>
            
            {/* Google Cloud Partner Badge */}
            <div className="mb-6">
              <img 
                src={GCP_BADGE} 
                alt="Google Cloud Partner" 
                className="h-12 w-auto rounded-lg bg-white p-1"
                data-testid="gcp-badge"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="mailto:bharat@bikertechie.com" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-email-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/biker-techie/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-linkedin-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/bikertechie_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
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
                  <Link 
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
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
                  <Link 
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            {currentYear} BikerTechie. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Built with</span>
            <span className="text-violet-400">enterprise excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
