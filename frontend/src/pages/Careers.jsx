import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';

const openPositions = [
  {
    title: 'Video Editor',
    department: 'Creative',
    location: 'Remote',
    type: 'Part-time / Full-time',
    skills: ['Premiere Pro', 'After Effects', 'YouTube Editing', 'Reels/Shorts'],
    description: 'Edit engaging videos for YouTube, ads, and social media platforms.'
  },
  {
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Remote / On-site',
    type: 'Full-time',
    skills: ['Lead Generation', 'Client Handling', 'CRM', 'Closing Deals'],
    description: 'Identify leads, connect with clients, and close deals for our services.'
  },
  {
    title: 'Web Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: 'Build modern, responsive, and high-performance websites for clients.'
  },
  {
    title: 'Online Teacher',
    department: 'Training',
    location: 'Remote',
    type: 'Part-time',
    skills: ['Teaching', 'Communication', 'Cloud / AI Basics'],
    description: 'Teach students online and help them build real-world technical skills.'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const Careers = () => {
  return (
    <div className="min-h-screen bg-[#030712] pt-20">

      {/* HERO */}
      <section className="py-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 mb-4 text-sm">
            <Sparkles size={14} />
            We're Hiring!
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Build the Future With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Biker Techie 
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Join our team and work on exciting digital, creative, and tech projects.
          </p>
        </div>
      </section>

      {/* JOBS */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl text-white mb-2">
              Open Positions
            </h2>
            <p className="text-slate-400 text-sm">
              Apply now and grow with us.
            </p>
          </div>

          {/* ✅ GAP FIXED HERE */}
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-4">

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mb-2">
                      {position.description}
                    </p>

                    <div className="flex gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {position.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
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

                  <div className="flex items-center">
                    <a
                      href="mailto:hr@bikertechie.com?subject=Job Application"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm"
                    >
                      Apply
                      <ArrowRight size={14} />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl sm:text-3xl text-white mb-2">
          Don't See a Perfect Fit?
        </h2>

        <p className="text-slate-400 mb-4 text-sm">
          Send your resume at <span className="text-violet-400">hr@bikertechie.com</span> and we’ll connect with you.
        </p>

        <a
          href="mailto:hr@bikertechie.com?subject=General Application"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm"
        >
          Send Resume
        </a>
      </section>

    </div>
  );
};

export default Careers;