import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Code, TrendingUp, Search, Bot, Workflow, 
  Database, Server, Shield, Zap, Globe, Smartphone, ShoppingCart,
  BarChart3, Target, Megaphone, LineChart, MapPin, FileSearch,
  ArrowRight, CheckCircle, Layers, GitBranch, Lock, HardDrive
} from 'lucide-react';
import { Button } from '../components/ui/button';

const SERVER_ROOM = "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const ABSTRACT_CUBE = "https://images.pexels.com/photos/28428592/pexels-photo-28428592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const aiServices = [
  { icon: Workflow, title: 'Business Process Automation', desc: 'Streamline operations with intelligent workflows' },
  { icon: Bot, title: 'AI Chatbots', desc: 'Customer service automation that scales' },
  { icon: Brain, title: 'AI Agents', desc: 'Autonomous agents for complex tasks' },
  { icon: Database, title: 'Machine Learning Deployment', desc: 'Production-ready ML pipelines' },
  { icon: BarChart3, title: 'Data Intelligence Systems', desc: 'Turn data into actionable insights' },
  { icon: Target, title: 'AI-based Lead Systems', desc: 'Intelligent lead generation and scoring' },
];

const webServices = [
  { icon: Globe, title: 'Business Websites', desc: 'Professional corporate web presence' },
  { icon: Layers, title: 'School & College Websites', desc: 'Educational institution platforms' },
  { icon: ShoppingCart, title: 'E-commerce Platforms', desc: 'Full-featured online stores' },
  { icon: Code, title: 'SaaS Applications', desc: 'Scalable software as a service' },
  { icon: Smartphone, title: 'Custom Web Applications', desc: 'Tailored business solutions' },
  { icon: Zap, title: 'Landing Pages', desc: 'High-converting campaign pages' },
];

const cloudServices = [
  { icon: Layers, title: 'Cloud Architecture Design', desc: 'Scalable infrastructure blueprints' },
  { icon: Server, title: 'Cloud Migration', desc: 'Seamless transition to cloud' },
  { icon: HardDrive, title: 'Infrastructure Setup', desc: 'Production-ready environments' },
  { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines' },
  { icon: Database, title: 'Kubernetes Deployment', desc: 'Container orchestration at scale' },
  { icon: Lock, title: 'Security & IAM', desc: 'Enterprise security implementation' },
];

const marketingServices = [
  { icon: Megaphone, title: 'Performance Marketing', desc: 'ROI-focused advertising campaigns' },
  { icon: Target, title: 'Paid Ads Strategy', desc: 'Google & Meta ads optimization' },
  { icon: LineChart, title: 'Funnel Strategy', desc: 'Conversion-optimized funnels' },
  { icon: BarChart3, title: 'Conversion Optimization', desc: 'Data-driven CRO strategies' },
];

const seoServices = [
  { icon: FileSearch, title: 'Technical SEO', desc: 'Site structure and performance' },
  { icon: Globe, title: 'On-Page SEO', desc: 'Content and keyword optimization' },
  { icon: MapPin, title: 'Local SEO', desc: 'Geographic targeting' },
  { icon: Search, title: 'Google Business Optimization', desc: 'GMB profile management' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const Services = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="services-hero">
        <div className="absolute inset-0">
          <div className="bg-orb-violet top-0 right-1/4" />
          <div className="bg-orb-cyan bottom-0 left-1/4" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
              <Layers size={16} />
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise-Grade <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              From AI automation to cloud infrastructure, we deliver comprehensive solutions 
              that transform businesses and drive sustainable growth.
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
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6">
                <Brain size={28} className="text-violet-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                AI Automation
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Transform your business operations with intelligent automation. Our AI solutions 
                reduce operational costs, increase efficiency, and enable smarter decision-making 
                at scale.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-white font-semibold">Business Benefits:</h3>
                <ul className="space-y-3">
                  {['Reduced operational cost by up to 60%', 'Increased efficiency and productivity', 'Scalable automation that grows with you', 'Smarter, data-driven decision-making'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle size={18} className="text-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" data-testid="ai-cta">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2">
                  Automate My Business
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {aiServices.map((service, idx) => (
                <div 
                  key={service.title}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 card-hover"
                >
                  <service.icon size={24} className="text-violet-400 mb-3" />
                  <h4 className="text-white font-medium mb-1">{service.title}</h4>
                  <p className="text-slate-500 text-sm">{service.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-24 relative bg-gradient-to-b from-cyan-500/5 to-transparent" data-testid="web-dev-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4"
            >
              {webServices.map((service, idx) => (
                <div 
                  key={service.title}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 card-hover"
                >
                  <service.icon size={24} className="text-cyan-400 mb-3" />
                  <h4 className="text-white font-medium mb-1">{service.title}</h4>
                  <p className="text-slate-500 text-sm">{service.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Code size={28} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Web Development
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Custom web solutions built for performance, security, and scalability. 
                From business websites to complex SaaS platforms, we deliver modern 
                applications that drive results.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-white font-semibold">Every Project Includes:</h3>
                <ul className="space-y-3">
                  {['Mobile responsive design', 'SEO optimized structure', 'Fast loading performance', 'Secure cloud deployment', 'Scalable architecture'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle size={18} className="text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" data-testid="web-cta">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2">
                  Build My Website
                  <ArrowRight size={18} />
                </Button>
              </Link>
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
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Cloud size={28} className="text-blue-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Cloud Consulting
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Expert Google Cloud consulting for enterprises seeking scalable, secure 
                infrastructure. We design, migrate, and optimize cloud systems that 
                drive efficiency and reduce costs.
              </p>
              <p className="text-lg text-violet-300 font-medium mb-6 italic">
                "We design scalable, secure cloud systems for growing businesses."
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-white font-semibold">Our Cloud Services:</h3>
                <ul className="space-y-3">
                  {['Cloud Architecture Design', 'Seamless Cloud Migration', 'Cost Optimization (40% avg. savings)', 'Backup & Disaster Recovery'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle size={18} className="text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" data-testid="cloud-cta">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2">
                  Talk to Cloud Expert
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 mb-6">
                <img 
                  src={SERVER_ROOM} 
                  alt="Cloud Infrastructure" 
                  className="w-full h-auto opacity-80"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cloudServices.slice(0, 4).map((service, idx) => (
                  <div 
                    key={service.title}
                    className="p-4 rounded-xl bg-slate-900/50 border border-white/10"
                  >
                    <service.icon size={20} className="text-blue-400 mb-2" />
                    <h4 className="text-white font-medium text-sm">{service.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section id="marketing" className="py-24 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="marketing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={28} className="text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Marketing
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Performance-driven marketing strategies that generate leads, optimize 
              conversions, and scale your business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketingServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 card-hover text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon size={24} className="text-teal-400" />
                </div>
                <h4 className="text-white font-medium mb-2">{service.title}</h4>
                <p className="text-slate-500 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section id="seo" className="py-24 relative" data-testid="seo-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <Search size={28} className="text-green-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                SEO & Digital Growth
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Comprehensive SEO strategies to improve your visibility, drive organic 
                traffic, and establish your brand as an authority in your industry.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {seoServices.map((service) => (
                  <div key={service.title} className="p-4 rounded-xl bg-slate-900/50 border border-white/10">
                    <service.icon size={20} className="text-green-400 mb-2" />
                    <h4 className="text-white font-medium text-sm">{service.title}</h4>
                    <p className="text-slate-500 text-xs">{service.desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" data-testid="seo-cta">
                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all flex items-center gap-2">
                  Grow My Business
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={ABSTRACT_CUBE} 
                  alt="Digital Growth" 
                  className="w-full h-auto opacity-80"
                />
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
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized solution 
              that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" data-testid="services-final-cta">
                <Button className="h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/training" data-testid="services-training-link">
                <Button variant="outline" className="h-14 px-10 rounded-full border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all">
                  Explore Training
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
