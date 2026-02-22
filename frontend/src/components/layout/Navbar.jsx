import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/yu9n15sm_WhatsApp%20Image%202026-02-22%20at%201.57.18%20PM.jpeg";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-violet-500/10' 
            : 'bg-slate-950/70 backdrop-blur-md'
        } border border-white/10`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="navbar-logo">
              <img 
                src={LOGO_URL} 
                alt="BikerTechie Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/contact" data-testid="navbar-cta">
                <Button className="h-10 px-6 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-2" data-testid="mobile-cta">
                <Button className="w-full h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
