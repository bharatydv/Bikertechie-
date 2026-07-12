import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Code, TrendingUp, Search, Bot, Workflow, 
  Database, Server, Shield, Zap, Globe, Smartphone, ShoppingCart,
  BarChart3, Target, Megaphone, LineChart, MapPin, FileSearch,
  ArrowRight, CheckCircle, Layers, GitBranch, Lock, HardDrive,
  Cpu, Users, MessageSquare, PieChart, Lightbulb, Rocket
} from 'lucide-react';


const aiServices = [
  { icon: Workflow, title: 'Business Process Automation', desc: 'Streamline repetitive tasks and workflows with intelligent automation that learns and adapts' },
  { icon: Bot, title: 'AI Chatbots', desc: 'Deploy conversational AI that handles customer queries 24/7 with human-like responses' },
  { icon: Brain, title: 'AI Agents', desc: 'Build autonomous agents that can perform complex multi-step tasks independently' },
  { icon: Database, title: 'Machine Learning Deployment', desc: 'Production-ready ML pipelines with continuous training and model monitoring' },
  { icon: BarChart3, title: 'Data Intelligence Systems', desc: 'Transform raw data into actionable business insights with predictive analytics' },
  { icon: Target, title: 'AI-based Lead Systems', desc: 'Intelligent lead scoring and qualification that identifies high-value prospects' },
  
];

const aiBusinessBenefits = [
  'Reduce operational costs by up to 60%',
  'Increase team productivity and efficiency',
  'Scale automation without adding headcount',
  'Make smarter, data-driven decisions',
  '24/7 operations without human intervention',
  'Faster processing and response times',
];

const webServices = [
  { icon: Globe, title: 'Business Websites', desc: 'Professional corporate websites that establish credibility and drive conversions' },
  { icon: Layers, title: 'School & College Websites', desc: 'Feature-rich educational platforms with student portals, LMS integration, and more' },
  { icon: ShoppingCart, title: 'E-commerce Platforms', desc: 'Full-featured online stores with payment integration, inventory management, and analytics' },
  { icon: Code, title: 'SaaS Applications', desc: 'Scalable software-as-a-service platforms built for growth and multi-tenancy' },
  
];

const webFeatures = [
  'Mobile responsive design for all devices',
  'SEO optimized structure and content',
  'Fast loading performance (<3s)',
  'Secure HTTPS deployment',
  'Scalable cloud architecture',
  'Analytics and conversion tracking',
];

const cloudServices = [
  { icon: Layers, title: 'Cloud Architecture Design', desc: 'Design scalable, cost-effective infrastructure that grows with your business' },
  { icon: Server, title: 'Cloud Migration', desc: 'Seamless transition from on-premise to cloud with minimal downtime' },
  { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines for faster, more reliable releases' },
  { icon: Database, title: 'Kubernetes Deployment', desc: 'Container orchestration for microservices at enterprise scale' },
  { icon: Lock, title: 'Security & IAM', desc: 'Identity management and security controls that protect your data' },
  { icon: PieChart, title: 'Cost Optimization', desc: 'Reduce cloud spend by 30-40% through right-sizing and reserved capacity' },
];

const marketingServices = [
  { icon: Megaphone, title: 'Performance Marketing', desc: 'ROI-focused advertising campaigns on Google, Meta, LinkedIn, and more' },
  { icon: Target, title: 'Paid Ads Strategy', desc: 'Data-driven ad strategies that maximize conversions and minimize cost per acquisition' },
  { icon: LineChart, title: 'Funnel Strategy', desc: 'End-to-end conversion funnels designed to turn visitors into customers' },
  { icon: BarChart3, title: 'Conversion Optimization', desc: 'A/B testing and CRO strategies that improve your conversion rates' },
  { icon: Users, title: 'Lead Generation Systems', desc: 'Multi-channel lead gen that fills your pipeline with qualified prospects' },
  { icon: Lightbulb, title: 'Brand Growth Planning', desc: 'Strategic brand positioning and growth roadmaps for market expansion' },
];

const seoServices = [
  { icon: FileSearch, title: 'Technical SEO', desc: 'Site structure, speed optimization, and crawlability improvements' },
  { icon: Globe, title: 'On-Page SEO', desc: 'Content optimization, keyword strategy, and meta tag implementation' },
  { icon: MapPin, title: 'Local SEO', desc: 'Geographic targeting and local search optimization for physical businesses' },
  { icon: Rocket, title: 'Google Business Optimization', desc: 'GMB profile setup and optimization for local visibility' },
  { icon: Zap, title: 'Website Speed Optimization', desc: 'Performance tuning for faster load times and better user experience' },
  { icon: MessageSquare, title: 'Content Strategy', desc: 'SEO-driven content planning that attracts and engages your target audience' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export const Services = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="services-hero">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              <Layers size={16} />
              Our Services
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              From AI automation to cloud infrastructure, we deliver comprehensive solutions 
              that transform businesses and drive sustainable growth. Every solution is designed 
              to create measurable business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section id="ai-automation" className="py-24 relative" data-testid="ai-automation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Brain size={32} className="text-violet-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                AI Automation
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Automate the work that slows you down.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our AI solutions adapt to your workflows, scale with your business, and run 24/7—so you can focus on growth, not operations.
              </p>
              
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Business Benefits:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aiBusinessBenefits.map((item, idx) => (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <CheckCircle size={16} className="text-violet-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                data-testid="ai-cta"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Automate My Business
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {aiServices.map((service, idx) => (
                <motion.div 
                  key={service.title}
                  variants={fadeInUp}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <service.icon size={24} className="text-violet-400 mb-3" />
                  <h4 className="text-white font-medium mb-2">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-24 relative bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" data-testid="web-dev-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4"
            >
              {webServices.map((service, idx) => (
                <motion.div 
                  key={service.title}
                  variants={fadeInUp}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <service.icon size={24} className="text-cyan-400 mb-3" />
                  <h4 className="text-white font-medium mb-2">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6"
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <Code size={32} className="text-cyan-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Web Development
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Make your first impression count.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We build high-performance websites and scalable digital products—from sleek business sites to advanced SaaS platforms. Designed for speed, optimized for growth, and built to convert.
              </p>
              
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Every Project Includes:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {webFeatures.map((item, idx) => (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                data-testid="web-cta"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Build My Website
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Consulting Section */}
      <section id="cloud-consulting" className="py-24 relative" data-testid="cloud-consulting-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Cloud size={32} className="text-blue-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cloud Consulting
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
              Scale with secure cloud solutions.
We design, migrate, and optimize cloud infrastructure to boost efficiency and cut costs by up to 40%.
              </p>
              <motion.p 
                className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-medium mb-6 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "We design scalable, secure cloud systems for growing businesses."
              </motion.p>
              <p className="text-slate-400 leading-relaxed mb-8">
              From build to scale.
We create cloud-native and hybrid solutions, then optimize and maintain them for long-term success.
              </p>
              
              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                data-testid="cloud-cta"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Talk to Cloud Expert
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cloudServices.map((service, idx) => (
                  <motion.div 
                    key={service.title}
                    variants={fadeInUp}
                    className="p-4 rounded-xl bg-slate-900/50 border border-white/10 hover:border-blue-500/30 transition-all"
                    whileHover={{ y: -2 }}
                  >
                    <service.icon size={20} className="text-blue-400 mb-2" />
                    <h4 className="text-white font-medium text-sm">{service.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section id="marketing" className="py-24 relative bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" data-testid="marketing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <TrendingUp size={32} className="text-teal-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Marketing
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Performance-driven marketing strategies that generate leads, optimize 
              conversions, and scale your business growth. Every campaign is measured 
              by ROI, not vanity metrics.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketingServices.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-teal-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              data-testid="marketing-cta"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium transition-all"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Grow My Business
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SEO Section */}
<section id="seo" className="py-24 relative bg-slate-900 text-white" data-testid="seo-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side - Only Heading, Description, CTA */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-6"
          whileHover={{ rotate: -5, scale: 1.05 }}
        >
          <Search size={32} className="text-green-400" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          SEO & Digital Growth
        </h2>

        <p className="text-slate-400 leading-relaxed mb-6">
          Get found by the customers who need you. Our comprehensive SEO strategies 
          improve your visibility, drive organic traffic, and establish your brand 
          as an authority in your industry.
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">
          From technical SEO audits to content strategy, we cover all aspects of 
          search optimization. Our approach combines data-driven analysis with 
          creative content that resonates with your audience.
        </p>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          onClick={(e) => handleNavClick && handleNavClick(e, '/contact')}
          data-testid="seo-cta"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium transition-all"
          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          Improve My Rankings
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>

      {/* Right Side - Services Grid */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {seoServices.map((service) => (
            <motion.div
              key={service.title + "-right"}
              variants={fadeInUp}
              className="p-4 rounded-xl bg-slate-800/50 border border-white/10 hover:border-green-500/30 transition-all flex flex-col gap-2"
              whileHover={{ y: -2 }}
            >
              <service.icon size={24} className="text-green-400 mb-2" />
              <h4 className="text-white font-medium text-sm">{service.title}</h4>
              <p className="text-slate-400 text-xs mt-1">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 relative" data-testid="services-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-16 text-center relative overflow-hidden"
          >
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a customized solution 
                that drives real results. No pressure—just an honest conversation about your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  data-testid="services-final-cta"
                  className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base transition-all"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <ArrowRight size={20} />
                </motion.a>
                {/* 
                <motion.a
                  href="/training"
                  onClick={(e) => handleNavClick(e, '/training')}
                  data-testid="services-training-link"
                  className="inline-flex items-center gap-2 h-14 px-10 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Training
                </motion.a>
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
