import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, Brain, Code, TrendingUp, Search, Shield, Zap, Users, 
  ArrowRight, CheckCircle, Star, ChevronRight, Award, Target,
  Server, Database, Globe, Cpu, Sparkles, Play
} from 'lucide-react';
import { Button } from '../components/ui/button';

const HERO_BG = "https://images.pexels.com/photos/28428585/pexels-photo-28428585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const GCP_BADGE = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/o5mb40lt_image.png";

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Transform repetitive tasks into intelligent workflows. Our AI solutions learn, adapt, and scale with your business needs.',
    color: 'violet',
  },
  {
    icon: Cloud,
    title: 'Cloud Consulting',
    description: 'Design cloud architectures that actually work. Google Cloud certified experts who understand real-world infrastructure challenges.',
    color: 'cyan',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build digital products that users love. From sleek websites to complex SaaS platforms—performance and design, unified.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Data-driven campaigns that convert. Performance marketing strategies refined through continuous testing and optimization.',
    color: 'teal',
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    description: 'Get found by the customers who need you. Technical SEO, content strategy, and visibility optimization that drives organic traffic.',
    color: 'violet',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Certified Experts', description: 'Google Cloud certified team with real enterprise experience—not just certifications.' },
  { icon: Target, title: 'Results-Driven', description: 'Every solution measured by business impact. We succeed when you succeed.' },
  { icon: Shield, title: 'Secure & Compliant', description: 'Enterprise-grade security built-in. Your data protection is non-negotiable.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile methodology for rapid deployment. Quick iterations, continuous improvement.' },
];

const testimonials = [
  {
    quote: "BikerTechie helped us reduce cloud costs by 40% while improving performance. Their team actually understands business needs, not just technology.",
    author: "Rajesh Kumar",
    role: "CTO, TechStart Solutions",
    rating: 5,
  },
  {
    quote: "The AI automation they built increased our team's productivity dramatically. What used to take hours now happens automatically. Game changer.",
    author: "Priya Sharma",
    role: "Operations Director, InnovateCo",
    rating: 5,
  },
  {
    quote: "Professional, knowledgeable, and genuinely invested in our success. They're not just vendors—they're partners who care about outcomes.",
    author: "Amit Patel",
    role: "Founder, DataDriven Inc",
    rating: 5,
  },
];

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '98%', label: 'Happy Clients' },
  { value: '40%', label: 'Avg. Cost Savings' },
  { value: '24/7', label: 'Support Ready' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const Home = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712]" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${HERO_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
          
          {/* Animated orbs */}
          <motion.div 
            className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-violet-300 text-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(124, 58, 237, 0.4)' }}
              >
                <Sparkles size={16} className="animate-pulse" />
                Google Cloud Consulting Partner
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Your Certified Cloud & AI</span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Consulting Partner
              </motion.span>
              <br />
              <span className="text-white">for Real Business Growth</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto"
            >
              Cloud Consulting • AI Automation • Web Development • Marketing & SEO
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-base text-slate-500 mb-10 max-w-xl mx-auto"
            >
              We help businesses build scalable infrastructure, automate with intelligence, 
              and grow faster. No buzzwords—just solutions that work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                data-testid="hero-cta-consultation"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/services"
                onClick={(e) => handleNavClick(e, '/services')}
                data-testid="hero-cta-project"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See What We Build
                <ChevronRight size={18} />
              </motion.a>
            </motion.div>

            {/* GCP Badge */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-12 flex justify-center"
            >
              <motion.img 
                src={GCP_BADGE} 
                alt="Google Cloud Partner" 
                className="h-14 w-auto rounded-lg bg-white p-2"
                data-testid="hero-gcp-badge"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-slate-950/50 relative overflow-hidden" data-testid="stats-section">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 relative" data-testid="about-snapshot-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Technology Partners Who Actually Get It
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We started BikerTechie because we saw too many businesses struggling with 
                technology that didn't fit their needs. Cookie-cutter solutions. Vendors who 
                didn't listen. Projects that went over budget and under-delivered.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                So we built something different. A consulting practice where every solution 
                is designed around your specific challenges. Where we measure success by your 
                business outcomes, not just technical metrics.
              </p>
              <ul className="space-y-3 mb-8">
                {['Google Cloud Certified Team', 'Real Enterprise Experience', 'AI/ML Implementation Expertise', 'End-to-End Project Delivery'].map((item, idx) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3 text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle size={18} className="text-cyan-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                data-testid="about-learn-more"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                Our Story
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Server, label: 'Infrastructure', desc: 'Scalable Systems' },
                  { icon: Database, label: 'Data', desc: 'Analytics & ML' },
                  { icon: Globe, label: 'Web', desc: 'Modern Apps' },
                  { icon: Cpu, label: 'AI', desc: 'Automation' },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.label}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div whileHover={{ rotate: 10 }}>
                      <item.icon size={32} className="text-violet-400 mb-3" />
                    </motion.div>
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Solutions That Actually Solve Problems
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Not just technology for technology's sake. Every service we offer is designed 
              to create measurable business value.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-500"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ y: -8 }}
              >
                {/* Hover glow */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      service.color === 'violet' ? 'bg-violet-500/10' :
                      service.color === 'cyan' ? 'bg-cyan-500/10' :
                      service.color === 'blue' ? 'bg-blue-500/10' : 'bg-teal-500/10'
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon size={28} className={`${
                      service.color === 'violet' ? 'text-violet-400' :
                      service.color === 'cyan' ? 'text-cyan-400' :
                      service.color === 'blue' ? 'text-blue-400' : 'text-teal-400'
                    }`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <motion.a 
                    href="/services"
                    onClick={(e) => handleNavClick(e, '/services')}
                    className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/services"
              onClick={(e) => handleNavClick(e, '/services')}
              data-testid="view-all-services"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium transition-all"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Services
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Why BikerTechie</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine deep technical expertise with genuine business understanding.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-violet-500/20 transition-all text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon size={24} className="text-violet-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Highlight */}
      <section className="py-24 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="training-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-3xl border border-white/10 bg-slate-900/30 p-8 md:p-12 overflow-hidden relative"
            whileHover={{ borderColor: 'rgba(124, 58, 237, 0.3)' }}
          >
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Level Up Your Team</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Cloud & AI Training That Actually Prepares You
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Our training programs go beyond theory. Learn from practitioners who've 
                  built real systems, with hands-on labs and projects that prepare you for 
                  actual work—not just exams.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Live Instructor-Led Sessions', 'Real-World Projects', 'Certification Guidance', 'Interview Preparation'].map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle size={18} className="text-cyan-400" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="/training"
                  onClick={(e) => handleNavClick(e, '/training')}
                  data-testid="training-cta"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium transition-all"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Training
                  <ArrowRight size={18} />
                </motion.a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Cloud Foundations', 'Cloud Architect', 'DevOps & K8s', 'AI on Cloud'].map((course, idx) => (
                  <motion.div 
                    key={course}
                    className="p-5 rounded-2xl bg-slate-950/50 border border-white/10 hover:border-cyan-500/30 transition-all"
                    whileHover={{ y: -3, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-2">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="text-white font-medium text-sm">{course}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Client Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don't Take Our Word For It
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Here's what our clients say about working with us.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-violet-500/20 transition-all"
                data-testid={`testimonial-${index}`}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative" data-testid="final-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-0 left-1/4 w-40 h-40 bg-violet-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, 20, 0], scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Something Great?
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Let's talk about your challenges and explore how we can help. 
                No pressure, no sales pitch—just an honest conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  data-testid="final-cta-consultation"
                  className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base transition-all"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Free Consultation
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="/services"
                  onClick={(e) => handleNavClick(e, '/services')}
                  data-testid="final-cta-services"
                  className="inline-flex items-center gap-2 h-14 px-10 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
