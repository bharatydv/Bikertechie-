import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, Brain, Code, Target, Shield, Zap, Users, Award,
  ArrowRight, CheckCircle, Sparkles, Rocket, Eye, Heart
} from 'lucide-react';
import { Button } from '../components/ui/button';

const TEAM_IMAGE = "https://images.pexels.com/photos/7647938/pexels-photo-7647938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const GCP_BADGE = "https://customer-assets.emergentagent.com/job_enterprise-growth-ai/artifacts/o5mb40lt_image.png";

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that impact your bottom line.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security in every solution we deliver.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology for competitive advantage.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work as an extension of your team, not just vendors.'
  },
];

const expertise = [
  { icon: Cloud, title: 'Cloud Architecture', description: 'Google Cloud Platform expertise' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Intelligent automation solutions' },
  { icon: Code, title: 'Web Development', description: 'Modern scalable applications' },
  { icon: Rocket, title: 'Digital Growth', description: 'Marketing & SEO strategies' },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'Started with a vision for enterprise cloud consulting' },
  { year: '2021', title: 'Google Cloud Partner', description: 'Achieved official Google Cloud partnership' },
  { year: '2022', title: 'AI Division', description: 'Expanded into AI automation solutions' },
  { year: '2023', title: 'Training Launch', description: 'Launched comprehensive training programs' },
  { year: '2024', title: 'Enterprise Growth', description: 'Scaled to serve enterprise clients globally' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const About = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0">
          <div className="bg-orb-violet top-0 left-1/4" />
          <div className="bg-orb-cyan bottom-0 right-1/4" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
              <Sparkles size={16} />
              About BikerTechie
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your End-to-End Technology & <span className="gradient-text">Growth Partner</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We are a certified Cloud & AI consulting company helping businesses transform 
              digitally with enterprise-grade solutions that scale.
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
                Building the Future of Enterprise Technology
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                BikerTechie was founded with a singular vision: to democratize enterprise-level 
                technology solutions for businesses of all sizes. We believe that every organization 
                deserves access to the same powerful cloud infrastructure, AI capabilities, and 
                digital strategies that drive Fortune 500 companies.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our team combines deep technical expertise with strategic business acumen. We don't 
                just implement technology—we partner with you to understand your challenges, identify 
                opportunities, and deliver solutions that create lasting value.
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={GCP_BADGE} 
                  alt="Google Cloud Partner" 
                  className="h-14 w-auto rounded-lg bg-white p-2"
                />
                <div>
                  <div className="text-white font-medium">Certified Partner</div>
                  <div className="text-slate-500 text-sm">Google Cloud Platform</div>
                </div>
              </div>
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
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-slate-400 text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="founder-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Founder & Cloud Specialist
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Bharat</h3>
                <p className="text-violet-400 font-medium mb-4">Founder & Cloud Architect</p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  A Google Cloud certified professional with extensive experience in enterprise 
                  cloud architecture, AI implementation, and digital transformation. Bharat has 
                  helped numerous organizations migrate to the cloud, optimize their infrastructure, 
                  and leverage AI for business growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Google Cloud', 'AI/ML', 'DevOps', 'Kubernetes', 'Web Development'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '100+', label: 'Trained' },
                  { value: '5+', label: 'Years' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-slate-950/50 border border-white/5 text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6">
                <Eye size={28} className="text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the most trusted technology partner for businesses seeking digital 
                transformation, making enterprise-grade cloud and AI solutions accessible 
                to organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Heart size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To empower businesses with scalable, secure, and innovative technology 
                solutions that drive growth, efficiency, and competitive advantage in 
                the digital economy.
              </p>
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
              Our Core Competencies
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Deep expertise across the technology spectrum to deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Why Trust Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Enterprise Mindset, Partner Approach
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We bring enterprise-level expertise with a partner mindset. We understand that 
                technology investments must deliver ROI, and we're committed to your success 
                as much as you are.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Google Cloud certified team with enterprise experience',
                  'Proven track record of successful deployments',
                  'Transparent communication and project management',
                  'Post-implementation support and optimization',
                  'Continuous learning and technology updates'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
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
                { value: '40%', label: 'Avg. Cost Reduction' },
              ].map((stat, idx) => (
                <div 
                  key={stat.label}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" data-testid="about-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with enterprise-grade 
              cloud and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" data-testid="about-cta-contact">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2">
                  Get in Touch
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services" data-testid="about-cta-services">
                <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
