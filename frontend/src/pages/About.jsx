import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, Brain, Code, Target, Shield, Zap, Users, Award,
  ArrowRight, CheckCircle, Sparkles, Rocket, Eye, Heart, Linkedin
} from 'lucide-react';
import { Button } from '../components/ui/button';

const TEAM_IMAGE = "https://images.pexels.com/photos/7647938/pexels-photo-7647938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const GCP_BADGE = "/assets/gcp_partner_badge.png";

const founders = [
  {
    name: 'Shyam',
    role: 'Founder & CEO',
    description: 'Innovation leader specializing in AI/ML and scalable cloud infrastructure. Shyam brings a unique blend of technical expertise and business acumen, having led numerous enterprise digital transformation projects.',
    linkedin: 'https://www.linkedin.com/in/shyam-prakash-mishra/',
    skills: ['AI/ML Strategy', 'Cloud Architecture', 'Business Development', 'Team Leadership'],
    image: null, // Will use initials
  },
  {
    name: 'Bharat',
    role: 'Co-Founder',
    description: 'Tech visionary with 3+ years in cloud architecture and enterprise solutions. Bharat has helped organizations across industries modernize their infrastructure and leverage cloud-native technologies.',
    linkedin: 'https://www.linkedin.com/in/bharat-yadav-977197200/',
    skills: ['Google Cloud', 'DevOps', 'Kubernetes', 'Web Development'],
    image: null, // Will use initials
  },
];

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every solution we build is measured by real business outcomes.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security embedded in everything we create.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work as an extension of your team, invested in your success.'
  },
];

const expertise = [
  { icon: Cloud, title: 'Cloud Architecture', description: 'Google Cloud Platform mastery' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Intelligent automation at scale' },
  { icon: Code, title: 'Web Development', description: 'Modern, performant applications' },
  { icon: Rocket, title: 'Digital Growth', description: 'Strategic marketing & SEO' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const About = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              About BikerTechie
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your End-to-End Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Growth Partner</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We're not just consultants—we're partners invested in your digital transformation journey. 
              From cloud infrastructure to AI automation, we deliver solutions that drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 relative" data-testid="company-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Building Tomorrow's Technology Today
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                BikerTechie was born from a simple observation: too many businesses struggle to 
                harness the full potential of cloud technology and AI. We founded this company 
                to bridge that gap—bringing enterprise-level expertise to organizations ready 
                to transform.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                What sets us apart isn't just our technical knowledge—it's our commitment to 
                understanding your business challenges first. We design solutions that solve 
                real problems, not just implement technology for its own sake. Every project 
                we take on is measured by the tangible value it creates for our clients.
              </p>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={GCP_BADGE} 
                  alt="Google Cloud Partner" 
                  className="h-14 w-auto rounded-lg bg-white p-2"
                />
                <div>
                  <div className="text-white font-medium">Certified Partner</div>
                  <div className="text-slate-500 text-sm">Google Cloud Platform</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={TEAM_IMAGE} 
                  alt="BikerTechie Team" 
                  className="w-full h-auto"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">5+</div>
                <div className="text-slate-400 text-sm">Years Building Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 relative bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" data-testid="founders-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Founders
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence in cloud technology and training.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-500 relative overflow-hidden"
                data-testid={`founder-${founder.name.toLowerCase()}`}
              >
                {/* Background glow effect */}
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative flex flex-col sm:flex-row gap-6">
                  {/* Avatar with initials */}
                  <motion.div 
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  >
                    <span className="text-3xl font-bold text-white">
                      {founder.name.charAt(0)}
                    </span>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-medium mb-3">
                      {founder.role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {founder.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {founder.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* LinkedIn */}
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin size={16} className="text-violet-400" />
                      Connect on LinkedIn
                      <ArrowRight size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-[40px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To become the most trusted technology partner for businesses navigating 
                  digital transformation. We envision a world where every organization—regardless 
                  of size—has access to enterprise-grade cloud and AI solutions that drive 
                  meaningful growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px]"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Heart size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To empower businesses with scalable, secure, and innovative technology 
                  solutions that create lasting value. We're committed to delivering not 
                  just technical excellence, but genuine partnerships built on trust, 
                  transparency, and shared success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 relative" data-testid="expertise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We're Great At
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Deep expertise across the technology spectrum, delivering comprehensive solutions 
              that address your most complex challenges.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300 text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon size={28} className="text-violet-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Principles We Live By
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 relative" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                We're Different—Here's How
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We bring the technical depth of a specialized firm with the strategic 
                perspective of a business partner. Our team has walked in your shoes—we 
                understand the pressures of digital transformation and the importance of 
                getting it right.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Google Cloud certified professionals with hands-on enterprise experience',
                  'Proven methodology refined through 50+ successful projects',
                  'Transparent pricing and clear communication throughout',
                  'Ongoing support and optimization after launch',
                  'Dedicated to staying current with rapidly evolving technology'
                ].map((item, idx) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-3 text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '24/7', label: 'Support Available' },
                { value: '40%', label: 'Avg. Cost Savings' },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 text-center"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */} 
<section className="py-20 relative" data-testid="about-cta">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-16 text-center relative overflow-hidden"
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
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's have a conversation about your goals and how we can help you achieve them.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <motion.a
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all"
            data-testid="about-cta-contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Conversation
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="/services"
            onClick={(e) => handleNavClick(e, '/services')}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all"
            data-testid="about-cta-services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Our Services
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="/training"
            onClick={(e) => handleNavClick(e, '/training')}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium hover:shadow-[0_0_30px_rgba(80,250,255,0.5)] transition-all"
            data-testid="about-cta-training"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Training & Certificates
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default About;
