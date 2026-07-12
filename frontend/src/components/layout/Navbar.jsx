import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "/assets/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-violet-500/20' 
            : 'bg-slate-950/70 backdrop-blur-md'
        } border border-white/10`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-3 group relative" 
              data-testid="navbar-logo"
            >
              {/* Logo glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img 
                src={LOGO_URL} 
                alt="BikerTechie Logo" 
                className="h-10 w-auto relative z-10 drop-shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.6))"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <motion.span 
                className="text-white font-bold text-lg hidden sm:block relative z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Biker</span>
                <span className="text-white">Techie</span>
              </motion.span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full border border-violet-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Empty space where Get Started was */}
            <div className="hidden md:block w-10" />

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              data-testid="mobile-menu-toggle"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-40 bg-slate-950/98 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 md:hidden shadow-2xl shadow-violet-500/10"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-5 py-4 rounded-2xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-white bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
