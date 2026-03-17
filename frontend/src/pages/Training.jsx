import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, GraduationCap, Award, BookOpen, Users, Clock, Video,
  ArrowRight, CheckCircle, Star, Laptop, Brain, Server, GitBranch,
  Target, Zap, MessageSquare, Globe, Shield, Database
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const courses = [
  {
    id: 'cloud-foundations',
    icon: Cloud,
    title: 'Cloud Foundations',
    description: 'Master cloud computing fundamentals with hands-on Google Cloud Platform experience. Perfect for beginners starting their cloud journey.',
    duration: '4 weeks',
    level: 'Beginner',
    color: 'violet',
    price: 'Contact for pricing',
    topics: [
      'Introduction to Cloud Computing',
      'GCP Console & Cloud Shell',
      'Compute Engine Fundamentals',
      'Cloud Storage & Databases',
      'Networking Basics',
      'IAM & Security Fundamentals',
      'Hands-on Labs & Projects',
    ],
    outcomes: [
      'Understand cloud computing concepts',
      'Navigate GCP Console confidently',
      'Deploy basic cloud resources',
      'Manage storage and databases',
      'Implement basic security',
    ],
  },
  {
    id: 'cloud-engineer',
    icon: Server,
    title: 'Associate Cloud Engineer',
    description: 'Comprehensive preparation for the Google Cloud Associate Cloud Engineer certification. Industry-recognized credential for cloud professionals.',
    duration: '8 weeks',
    level: 'Intermediate',
    color: 'cyan',
    price: 'Contact for pricing',
    topics: [
      'Setting up Cloud Solution Environment',
      'Planning & Configuring Cloud Solutions',
      'Deploying & Implementing Solutions',
      'Ensuring Successful Operation',
      'Configuring Access & Security',
      'Practice Exams & Certification Prep',
      'Real-world Project Implementation',
    ],
    outcomes: [
      'Pass ACE certification exam',
      'Design cloud solutions',
      'Deploy production workloads',
      'Manage cloud resources efficiently',
      'Implement security best practices',
    ],
  },
  {
    id: 'cloud-architect',
    icon: Laptop,
    title: 'Professional Cloud Architect',
    description: 'Advanced cloud architecture design and implementation strategies for experienced professionals seeking the PCA certification.',
    duration: '12 weeks',
    level: 'Advanced',
    color: 'blue',
    price: 'Contact for pricing',
    topics: [
      'Enterprise Architecture Design',
      'High Availability & Disaster Recovery',
      'Security Architecture & Compliance',
      'Cost Optimization Strategies',
      'Migration Planning & Execution',
      'Multi-cloud & Hybrid Solutions',
      'Case Studies & Architecture Reviews',
    ],
    outcomes: [
      'Pass PCA certification exam',
      'Design enterprise architectures',
      'Implement HA/DR solutions',
      'Optimize cloud costs',
      'Lead migration projects',
    ],
  },
  {
    id: 'devops-k8s',
    icon: GitBranch,
    title: 'DevOps & Kubernetes',
    description: 'Master CI/CD pipelines, containerization, and Kubernetes orchestration. Essential skills for modern cloud-native development.',
    duration: '8 weeks',
    level: 'Intermediate',
    color: 'teal',
    price: 'Contact for pricing',
    topics: [
      'Docker Fundamentals & Best Practices',
      'Kubernetes Architecture & Concepts',
      'GKE Deployment & Management',
      'CI/CD with Cloud Build',
      'GitOps & Infrastructure as Code',
      'Monitoring & Observability',
      'Production Deployment Strategies',
    ],
    outcomes: [
      'Containerize applications',
      'Deploy on Kubernetes',
      'Build CI/CD pipelines',
      'Implement GitOps workflows',
      'Monitor production systems',
    ],
  },
  {
    id: 'ai-cloud',
    icon: Brain,
    title: 'AI on Cloud',
    description: 'Implement AI and machine learning solutions on Google Cloud Platform using Vertex AI, BigQuery ML, and other ML services.',
    duration: '10 weeks',
    level: 'Advanced',
    color: 'violet',
    price: 'Contact for pricing',
    topics: [
      'Introduction to ML on GCP',
      'Vertex AI Platform Deep Dive',
      'BigQuery ML for Analytics',
      'AutoML for Quick Deployments',
      'TensorFlow on Cloud',
      'AI APIs & Pre-trained Models',
      'MLOps & Model Monitoring',
    ],
    outcomes: [
      'Build ML pipelines on GCP',
      'Deploy models with Vertex AI',
      'Use BigQuery ML for analytics',
      'Implement MLOps practices',
      'Integrate AI APIs',
    ],
  },
  {
    id: 'corporate-training',
    icon: Users,
    title: 'Corporate & College Training',
    description: 'Customized training programs for organizations and educational institutions. Tailored curriculum to meet your specific learning objectives.',
    duration: 'Custom',
    level: 'All Levels',
    color: 'cyan',
    price: 'Custom Quote',
    topics: [
      'Tailored Curriculum Design',
      'Group Sessions & Workshops',
      'Hands-on Labs & Projects',
      'Assessment & Certification',
      'Flexible Scheduling',
      'On-site & Remote Options',
      'Post-training Support',
    ],
    outcomes: [
      'Team skill development',
      'Consistent knowledge base',
      'Practical experience',
      'Certification readiness',
      'Ongoing support',
    ],
  },
];

const features = [
  { icon: Video, title: 'Live Instructor-Led', desc: 'Real-time interaction with expert instructors who have hands-on industry experience' },
  { icon: Laptop, title: 'Hands-on Labs', desc: 'Practical experience with real GCP environments—learn by doing, not just watching' },
  { icon: BookOpen, title: 'Real-World Projects', desc: 'Portfolio-worthy projects that demonstrate your skills to future employers' },
  { icon: Award, title: 'Certification Guidance', desc: 'Structured preparation with practice exams and exam-taking strategies' },
  { icon: Users, title: 'Interview Preparation', desc: 'Technical interview coaching, mock sessions, and resume optimization' },
  { icon: Clock, title: 'Lifetime Access', desc: 'Access to course materials, updates, and community forever' },
];

const whyLearnWithUs = [
  { 
    icon: Target, 
    title: 'Industry Practitioners', 
    desc: 'Learn from engineers who build and maintain production systems daily'
  },
  { 
    icon: Zap, 
    title: 'Practical Focus', 
    desc: '70% hands-on labs, 30% theory—because skills beat knowledge'
  },
  { 
    icon: MessageSquare, 
    title: 'Small Batches', 
    desc: 'Limited class sizes ensure personalized attention and better learning'
  },
  { 
    icon: Globe, 
    title: 'Job Assistance', 
    desc: 'Resume reviews, mock interviews, and placement support included'
  },
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

export const Training = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience_level: '',
    message: '',
  });

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.course) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/training/enroll`, formData);
      toast.success('Enrollment submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience_level: '',
        message: '',
      });
    } catch (error) {
      console.error('Enrollment error:', error);
      toast.error('Failed to submit enrollment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="training-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="training-hero">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GraduationCap size={16} />
              Training Programs
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud & AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Training Programs</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Upskill yourself or your team with comprehensive training programs designed by 
              industry practitioners. Learn by doing, not just watching—70% of our curriculum 
              is hands-on labs and real projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 border-y border-white/5 bg-slate-950/50" data-testid="training-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ y: -3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-500/20 transition-colors"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon size={22} className="text-violet-400" />
                </motion.div>
                <h3 className="text-white font-medium text-sm mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-20 relative" data-testid="why-learn-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Why BikerTechie</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Training That Actually Prepares You
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We're not just trainers—we're practitioners who build production systems every day. 
              Learn from experience, not textbooks.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyLearnWithUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon size={26} className="text-violet-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 relative bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" data-testid="courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From beginner to advanced, we have programs designed for every skill level. 
              Each course includes hands-on labs, real projects, and certification guidance.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                className="group relative p-6 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                data-testid={`course-${course.id}`}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative">
                  <motion.div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                      course.color === 'violet' ? 'bg-violet-500/10' :
                      course.color === 'cyan' ? 'bg-cyan-500/10' :
                      course.color === 'blue' ? 'bg-blue-500/10' : 'bg-teal-500/10'
                    }`}
                    whileHover={{ rotate: 5 }}
                  >
                    <course.icon size={24} className={`${
                      course.color === 'violet' ? 'text-violet-400' :
                      course.color === 'cyan' ? 'text-cyan-400' :
                      course.color === 'blue' ? 'text-blue-400' : 'text-teal-400'
                    }`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock size={14} />
                      {course.duration}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      course.level === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                      course.level === 'Advanced' ? 'bg-red-500/10 text-red-400' : 'bg-violet-500/10 text-violet-400'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-white text-sm font-medium">What You'll Learn:</h4>
                    {course.topics.slice(0, 4).map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-slate-400 text-xs">
                        <CheckCircle size={12} className="text-cyan-400 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                    {course.topics.length > 4 && (
                      <div className="text-slate-500 text-xs">+{course.topics.length - 4} more topics</div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-violet-400 font-medium text-sm">{course.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-24 relative" data-testid="enrollment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4 block">Enroll Now</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Start Your Cloud Journey Today
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Fill out the enrollment form and our team will contact you with course 
                details, batch schedules, and pricing information. Have questions? 
                Reach out on WhatsApp for instant replies.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Personalized learning paths based on your goals',
                  'Flexible batch timings (weekday & weekend)',
                  'Career counseling and guidance included',
                  'Placement assistance for job seekers',
                  '100% practical, project-based learning',
                  'Lifetime access to course materials',
                ].map((item, idx) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3 text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '500+', label: 'Students Trained' },
                  { value: '95%', label: 'Pass Rate' },
                  { value: '4.8/5', label: 'Rating' },
                ].map((stat) => (
                  <motion.div 
                    key={stat.label}
                    className="p-4 rounded-xl bg-slate-900/50 border border-white/10 text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/50 border border-white/10" data-testid="enrollment-form">
                <h3 className="text-xl font-semibold text-white mb-6">Enrollment Form</h3>
                
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 mb-2 block">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      required
                      data-testid="enrollment-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300 mb-2 block">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      required
                      data-testid="enrollment-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-300 mb-2 block">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      data-testid="enrollment-phone"
                    />
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-2 block">Select Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleSelectChange('course', value)}>
                      <SelectTrigger className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white" data-testid="enrollment-course">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10">
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id} className="text-white hover:bg-white/10">
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-slate-300 mb-2 block">Experience Level</Label>
                    <Select value={formData.experience_level} onValueChange={(value) => handleSelectChange('experience_level', value)}>
                      <SelectTrigger className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white" data-testid="enrollment-experience">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10">
                        <SelectItem value="beginner" className="text-white hover:bg-white/10">Beginner - New to cloud</SelectItem>
                        <SelectItem value="intermediate" className="text-white hover:bg-white/10">Intermediate - Some experience</SelectItem>
                        <SelectItem value="advanced" className="text-white hover:bg-white/10">Advanced - Working professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300 mb-2 block">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements, preferred batch timing, or questions..."
                      className="min-h-[100px] bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      data-testid="enrollment-message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                    data-testid="enrollment-submit"
                    whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Enroll Now'}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" data-testid="training-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-violet-600/20 border border-white/10 p-12 md:p-16 text-center relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 left-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-40 h-40 bg-violet-500/30 rounded-full blur-[60px]"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Have Questions About Training?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Contact us for customized corporate training packages or any queries 
                about our certification programs. We're happy to help!
              </p>
              <motion.a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                data-testid="training-contact-cta"
                className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
