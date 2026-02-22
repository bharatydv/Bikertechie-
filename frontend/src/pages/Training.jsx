import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, GraduationCap, Award, BookOpen, Users, Clock, Video,
  ArrowRight, CheckCircle, Star, Laptop, Brain, Server, GitBranch
} from 'lucide-react';
import { Button } from '../components/ui/button';
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
    description: 'Master cloud computing fundamentals with hands-on Google Cloud Platform experience.',
    duration: '4 weeks',
    level: 'Beginner',
    color: 'violet',
    topics: ['Cloud Concepts', 'GCP Console', 'Compute Engine', 'Cloud Storage', 'Networking Basics'],
  },
  {
    id: 'cloud-engineer',
    icon: Server,
    title: 'Associate Cloud Engineer',
    description: 'Prepare for the Google Cloud Associate Cloud Engineer certification.',
    duration: '8 weeks',
    level: 'Intermediate',
    color: 'cyan',
    topics: ['Compute', 'Storage', 'Networking', 'IAM', 'Monitoring', 'Certification Prep'],
  },
  {
    id: 'cloud-architect',
    icon: Laptop,
    title: 'Professional Cloud Architect',
    description: 'Advanced cloud architecture design and implementation strategies.',
    duration: '12 weeks',
    level: 'Advanced',
    color: 'blue',
    topics: ['Solution Design', 'High Availability', 'Security', 'Cost Optimization', 'Migration'],
  },
  {
    id: 'devops-k8s',
    icon: GitBranch,
    title: 'DevOps & Kubernetes',
    description: 'Master CI/CD pipelines, containerization, and Kubernetes orchestration.',
    duration: '8 weeks',
    level: 'Intermediate',
    color: 'teal',
    topics: ['Docker', 'Kubernetes', 'CI/CD', 'GitOps', 'Cloud Build', 'GKE'],
  },
  {
    id: 'ai-cloud',
    icon: Brain,
    title: 'AI on Cloud',
    description: 'Implement AI and machine learning solutions on Google Cloud Platform.',
    duration: '10 weeks',
    level: 'Advanced',
    color: 'violet',
    topics: ['Vertex AI', 'BigQuery ML', 'AutoML', 'TensorFlow', 'AI APIs'],
  },
  {
    id: 'corporate-training',
    icon: Users,
    title: 'Corporate & College Training',
    description: 'Customized training programs for organizations and educational institutions.',
    duration: 'Custom',
    level: 'All Levels',
    color: 'cyan',
    topics: ['Tailored Curriculum', 'Group Sessions', 'Hands-on Labs', 'Assessment'],
  },
];

const features = [
  { icon: Video, title: 'Live Instructor-Led Classes', desc: 'Real-time interaction with expert instructors' },
  { icon: Laptop, title: 'Hands-on Labs', desc: 'Practical experience with real cloud environments' },
  { icon: BookOpen, title: 'Real-World Projects', desc: 'Portfolio-worthy projects for career advancement' },
  { icon: Award, title: 'Certification Guidance', desc: 'Structured preparation for Google Cloud certifications' },
  { icon: Users, title: 'Interview Preparation', desc: 'Technical interview coaching and mock sessions' },
  { icon: Clock, title: 'Lifetime Access', desc: 'Access to course materials and community forever' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const Training = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience_level: '',
    message: '',
  });

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
          <div className="bg-orb-violet top-0 left-1/4" />
          <div className="bg-orb-cyan bottom-0 right-1/4" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6">
              <GraduationCap size={16} />
              Training Programs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud & AI <span className="gradient-text">Training Programs</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Upskill your team with comprehensive training programs designed by industry experts. 
              From cloud fundamentals to advanced certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-white/5" data-testid="training-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon size={22} className="text-violet-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 relative" data-testid="courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider mb-4 block">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From beginner to advanced, we have programs designed for every skill level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-3xl bg-slate-900/50 border border-white/10 card-hover"
                data-testid={`course-${course.id}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                  course.color === 'violet' ? 'bg-violet-500/10' :
                  course.color === 'cyan' ? 'bg-cyan-500/10' :
                  course.color === 'blue' ? 'bg-blue-500/10' : 'bg-teal-500/10'
                }`}>
                  <course.icon size={24} className={`${
                    course.color === 'violet' ? 'text-violet-400' :
                    course.color === 'cyan' ? 'text-cyan-400' :
                    course.color === 'blue' ? 'text-blue-400' : 'text-teal-400'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{course.description}</p>
                
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

                <div className="space-y-2 mb-6">
                  {course.topics.slice(0, 3).map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle size={14} className="text-cyan-400" />
                      {topic}
                    </div>
                  ))}
                  {course.topics.length > 3 && (
                    <div className="text-slate-500 text-sm">+{course.topics.length - 3} more topics</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-24 relative bg-gradient-to-b from-violet-500/5 to-transparent" data-testid="enrollment-section">
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
                details, schedules, and pricing information.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Personalized learning paths',
                  'Flexible batch timings',
                  'Career counseling included',
                  'Placement assistance available',
                  '100% practical learning approach'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle size={18} className="text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
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
                        <SelectItem value="beginner" className="text-white hover:bg-white/10">Beginner</SelectItem>
                        <SelectItem value="intermediate" className="text-white hover:bg-white/10">Intermediate</SelectItem>
                        <SelectItem value="advanced" className="text-white hover:bg-white/10">Advanced</SelectItem>
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
                      placeholder="Any specific requirements or questions..."
                      className="min-h-[100px] bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      data-testid="enrollment-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2"
                    data-testid="enrollment-submit"
                  >
                    {isSubmitting ? 'Submitting...' : 'Enroll Now'}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </Button>
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
            className="rounded-3xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-violet-600/20 border border-white/10 p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Have Questions About Our Training?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for customized corporate training packages or any queries 
              about our certification programs.
            </p>
            <Link to="/contact" data-testid="training-contact-cta">
              <Button className="h-14 px-10 rounded-full bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all flex items-center gap-2 mx-auto">
                Contact Us
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
