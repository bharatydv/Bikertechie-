import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, Brain, Code, TrendingUp, Search, Shield, Zap, Users, 
  ArrowRight, CheckCircle, Star, ChevronRight, Award, Target,
  Server, Database, Globe, Cpu
} from 'lucide-react';
import { Button } from '../components/ui/button';

const HERO_BG = "https://images.pexels.com/photos/28428585/pexels-photo-28428585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const GCP_BADGE = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/o5mb40lt_image.png";

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent automation solutions that transform your business operations with AI-powered workflows.',
    color: 'violet',
  },
  {
    icon: Cloud,
    title: 'Cloud Consulting',
    description: 'Expert Google Cloud architecture, migration, and optimization for enterprise-scale infrastructure.',
    color: 'cyan',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications, SaaS platforms, and e-commerce solutions built for performance.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Performance marketing, funnel optimization, and strategic growth planning.',
    color: 'teal',
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    description: 'Technical SEO, content strategy, and digital presence optimization for visibility.',
    color: 'violet',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Certified Experts', description: 'Google Cloud certified professionals with enterprise experience' },
  { icon: Target, title: 'Results-Driven', description: 'Focused on measurable business outcomes and ROI' },
  { icon: Shield, title: 'Secure & Compliant', description: 'Industry-standard security practices and compliance' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile methodology for rapid deployment and iterations' },
];

const testimonials = [
  {
    quote: "BikerTechie transformed our cloud infrastructure. Their expertise in GCP helped us reduce costs by 40%.",
    author: "Rajesh Kumar",
    role: "CTO, TechStart Solutions",
    rating: 5,
  },
  {
    quote: "The AI automation solutions they built increased our team's productivity by 3x. Highly recommended!",
    author: "Priya Sharma",
    role: "Operations Director, InnovateCo",
    rating: 5,
  },
  {
    quote: "Professional, knowledgeable, and delivers on time. Our go-to partner for all cloud initiatives.",
    author: "Amit Patel",
    role: "Founder, DataDriven Inc",
    rating: 5,
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '40%', label: 'Avg. Cost Reduction' },
  { value: '24/7', label: 'Support Available' },
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
  return (
    <div className="min-h-screen bg-[#030712]" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        {/* Background */}
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
          <div className="bg-orb-violet top-20 -left-40" />
          <div className="bg-orb-cyan bottom-20 -right-40" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
                <Cloud size={16} />
                Google Cloud Consulting Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Certified Cloud & AI</span>
              <br />
              <span className="gradient-text">Consulting Partner</span>
              <br />
              <span className="text-white">for Scalable Digital Growth</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto"
            >
              Cloud Consulting | AI Automation | Web Development | Marketing & SEO
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-base text-slate-500 mb-10 max-w-xl mx-auto"
            >
              Empowering enterprises with scalable cloud infrastructure, intelligent automation, 
              and strategic digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" data-testid="hero-cta-consultation">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium text-base hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services" data-testid="hero-cta-project">
                <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/5 text-white font-medium text-base hover:bg-white/10 transition-all flex items-center gap-2">
                  Start Your Project
                  <ChevronRight size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* GCP Badge */}
            <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
              <img 
                src={GCP_BADGE} 
                alt="Google Cloud Partner" 
                className="h-14 w-auto rounded-lg bg-white p-2"
                data-testid="hero-gcp-badge"
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
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-violet-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-slate-950/50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
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
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your End-to-End Technology & Growth Partner
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                BikerTechie is a certified Cloud & AI consulting company delivering enterprise-level 
                solutions for digital transformation. We combine deep technical expertise with 
                strategic business acumen to help organizations scale efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                {['Google Cloud Certified Team', 'Enterprise Architecture Experience', 'AI/ML Implementation Expertise', 'End-to-End Project Delivery'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle size={18} className="text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" data-testid="about-learn-more">
                <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                  Learn More About Us
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
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
                  <div 
                    key={item.label}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 card-hover"
                  >
                    <item.icon size={32} className="text-violet-400 mb-3" />
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
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
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From cloud infrastructure to AI automation, we deliver end-to-end solutions 
              that drive business growth and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 card-hover"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === 'violet' ? 'bg-violet-500/10' :
                  service.color === 'cyan' ? 'bg-cyan-500/10' :
                  service.color === 'blue' ? 'bg-blue-500/10' : 'bg-teal-500/10'
                }`}>
                  <service.icon size={28} className={`${
                    service.color === 'violet' ? 'text-violet-400' :
                    service.color === 'cyan' ? 'text-cyan-400' :
                    service.color === 'blue' ? 'text-blue-400' : 'text-teal-400'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" data-testid="view-all-services">
              <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
                View All Services
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
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
              Enterprise Excellence, Delivered
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Highlight */}
      <section className="py-24 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="training-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-8 md:p-12 overflow-hidden relative">
            <div className="bg-orb-violet -top-40 -right-40 opacity-50" />
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Training Programs</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Cloud & AI Training Programs
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Upskill your team with our comprehensive training programs. From cloud fundamentals 
                  to advanced certifications, we prepare you for the future of technology.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Live Instructor-Led Classes', 'Hands-on Labs & Projects', 'Certification Guidance', 'Interview Preparation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle size={18} className="text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/training" data-testid="training-cta">
                  <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                    Explore Training
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Cloud Foundations', 'Cloud Architect', 'DevOps & K8s', 'AI on Cloud'].map((course, idx) => (
                  <div 
                    key={course}
                    className="p-5 rounded-2xl bg-slate-950/50 border border-white/10"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">{String(idx + 1).padStart(2, '0')}</div>
                    <div className="text-white font-medium text-sm">{course}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/10"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative" data-testid="final-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="bg-orb-violet top-0 left-1/4" />
            <div className="bg-orb-cyan bottom-0 right-1/4" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital transformation goals 
                with enterprise-grade cloud and AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" data-testid="final-cta-consultation">
                  <Button className="h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/services" data-testid="final-cta-services">
                  <Button variant="outline" className="h-14 px-10 rounded-full border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
