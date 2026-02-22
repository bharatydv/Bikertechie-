import { motion } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, Users, Rocket, Heart, Coffee,
  ArrowRight, CheckCircle, Sparkles, Zap, Globe, Building2,
  GraduationCap, Award, Linkedin
} from 'lucide-react';
import { Button } from '../components/ui/button';

const benefits = [
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Work on cutting-edge cloud and AI projects with industry leaders'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Free certifications, training programs, and skill development'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote-friendly culture, and mental health support'
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'Collaborative environment with talented, passionate individuals'
  },
  {
    icon: Award,
    title: 'Competitive Package',
    description: 'Industry-standard salary, performance bonuses, and equity options'
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Work with international clients and diverse teams worldwide'
  },
];

const openPositions = [
  {
    title: 'Senior Cloud Architect',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    skills: ['GCP', 'Kubernetes', 'Terraform', 'Python'],
    description: 'Design and implement scalable cloud solutions for enterprise clients.'
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Automation',
    location: 'Remote',
    type: 'Full-time',
    skills: ['Python', 'TensorFlow', 'Vertex AI', 'MLOps'],
    description: 'Build intelligent automation systems and machine learning pipelines.'
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    skills: ['React', 'Node.js', 'Python', 'MongoDB'],
    description: 'Create modern web applications and SaaS platforms for our clients.'
  },
  {
    title: 'Cloud Training Instructor',
    department: 'Training',
    location: 'Remote',
    type: 'Part-time / Full-time',
    skills: ['GCP Certified', 'Teaching', 'Cloud Architecture'],
    description: 'Deliver engaging cloud training programs and mentor aspiring professionals.'
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    skills: ['SEO', 'Google Ads', 'Analytics', 'Content Strategy'],
    description: 'Drive digital growth strategies and performance marketing campaigns.'
  },
];

const values = [
  { title: 'Innovation First', description: 'We embrace new technologies and creative solutions' },
  { title: 'Client Success', description: 'Your growth is our measure of success' },
  { title: 'Continuous Learning', description: 'We never stop improving and evolving' },
  { title: 'Transparency', description: 'Open communication and honest relationships' },
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

export const Careers = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="careers-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="careers-hero">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              <Sparkles size={16} className="animate-pulse" />
              We're Hiring!
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 animate-gradient">Cloud Technology</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Join a team of passionate innovators working on transformative cloud and AI projects. 
              We're looking for curious minds who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 relative" data-testid="why-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Why BikerTechie</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              More Than Just a Workplace
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives and innovation flourishes.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-violet-500/30 transition-all duration-500"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <benefit.icon size={24} className="text-violet-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Culture</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Values That Drive Us
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                At BikerTechie, we're not just building technology—we're building careers, 
                relationships, and a better future for businesses worldwide. Our culture 
                is rooted in collaboration, continuous improvement, and genuine care for 
                our team and clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-slate-900/30 border border-white/5"
                  >
                    <h4 className="text-white font-medium text-sm mb-1">{value.title}</h4>
                    <p className="text-slate-500 text-xs">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '50+', label: 'Projects Delivered', icon: Rocket },
                  { value: '98%', label: 'Client Satisfaction', icon: Heart },
                  { value: '24/7', label: 'Support Culture', icon: Users },
                  { value: '100%', label: 'Remote Friendly', icon: Globe },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 text-center"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                  >
                    <stat.icon size={24} className="text-violet-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative" data-testid="positions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Open Positions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find Your Perfect Role
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our current openings and take the next step in your career journey.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                data-testid={`position-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {position.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <motion.a
                      href="mailto:bharat@bikertechie.com?subject=Job Application"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative" data-testid="careers-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 md:p-16 text-center relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 left-1/4 w-40 h-40 bg-violet-500/30 rounded-full blur-[80px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-[80px]"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Don't See a Perfect Fit?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and 
                let's explore how you can contribute to our growing team.
              </p>
              <motion.a
                href="mailto:bharat@bikertechie.com?subject=General Application"
                className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Your Resume
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
