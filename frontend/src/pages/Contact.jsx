import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Instagram, Clock,
  ArrowRight, CheckCircle, MessageSquare
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'bharat@bikertechie.com',
    link: 'mailto:bharat@bikertechie.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat, 9AM - 7PM IST',
    description: 'Available for consultations',
  },
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/biker-techie/' },
  { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/bikertechie_' },
];

const whyContact = [
  'Free initial consultation',
  'Expert advice on cloud & AI solutions',
  'Custom quotes for your project',
  'Training program inquiries',
  'Partnership opportunities',
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.message.length < 10) {
      toast.error('Please provide more details in your message');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" data-testid="contact-hero">
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
              <MessageSquare size={16} />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Ready to transform your business with cloud and AI solutions? 
              We're here to help. Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 relative" data-testid="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-violet-400 hover:text-violet-300 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                      <p className="text-slate-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                      aria-label={social.name}
                      data-testid={`social-${social.name.toLowerCase()}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Contact */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
                <h3 className="text-white font-medium mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {whyContact.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                      <CheckCircle size={16} className="text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-slate-900/50 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-slate-400 mb-8">
                  Tell us about your project or inquiry. We'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        data-testid="contact-name"
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
                        data-testid="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-slate-300 mb-2 block">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                        data-testid="contact-phone"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-300 mb-2 block">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="h-12 bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                        data-testid="contact-company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-300 mb-2 block">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, services you need, or any questions you have..."
                      className="min-h-[160px] bg-slate-950/50 border-white/10 focus:border-violet-500 text-white placeholder:text-slate-500"
                      required
                      data-testid="contact-message"
                    />
                    <p className="text-slate-500 text-xs mt-2">Minimum 10 characters required</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto h-12 px-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2"
                    data-testid="contact-submit"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative" data-testid="contact-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 border border-white/10 p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prefer a Direct Conversation?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free consultation call to discuss your requirements in detail.
            </p>
            <a href="mailto:bharat@bikertechie.com" data-testid="email-direct-cta">
              <Button className="h-12 px-8 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 mx-auto">
                <Mail size={18} />
                Email Us Directly
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
