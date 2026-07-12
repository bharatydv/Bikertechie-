import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ShieldCheck, Zap, TrendingDown, ArrowUpRight, Cpu, Layers } from 'lucide-react';

const CASE_STUDIES_DATA = [
  {
    id: 'gcp-migration',
    title: 'Enterprise SaaS GCP Migration',
    client: 'Global Logistics Inc.',
    description: 'Migrated a legacy on-prem VM cluster hosting monolithic logistics applications to a serverless Google Cloud Run and GKE stack, enabling automated scaling.',
    before: '8 monolithic VMs with manual node capacity scaling.',
    after: 'GCP Cloud Run and Kubernetes hosting dynamically autoscaled.',
    impact: ['-58% Cloud Hosting Spend', '99.99% Latency SLA Met', 'Zero deployment downtime'],
    costChart: [
      { name: 'On-Prem', Cost: 12000 },
      { name: 'Month 1', Cost: 7500 },
      { name: 'Month 2', Cost: 6200 },
      { name: 'Month 3', Cost: 5040 }
    ],
    latencyChart: [
      { name: 'Before', ms: 1400 },
      { name: 'GCP Run', ms: 220 }
    ]
  },
  {
    id: 'ai-agent',
    title: 'Autonomous AI Support Agent',
    client: 'Fintech Spark',
    description: 'Developed and deployed an LLM support assistant with memory storage connected to slack & live website widgets. Integrated custom MongoDB storage for chat logs and user histories.',
    before: '4 agents answering repetitive payment questions manually.',
    after: 'AI agent resolved 78% of tier-1 support queries instantly.',
    impact: ['78% Resolution rate', 'Average response time < 2s', 'Support queue backlog eliminated'],
    costChart: [
      { name: 'Manual', Cost: 9800 },
      { name: 'Month 1', Cost: 2400 },
      { name: 'Month 2', Cost: 2150 },
      { name: 'Month 3', Cost: 2050 }
    ],
    latencyChart: [
      { name: 'Before', ms: 24000 }, // 4 hours avg response
      { name: 'AI Bot', ms: 180 }
    ]
  }
];

export const CaseStudies = () => {
  const [activeCaseId, setActiveCaseId] = useState('gcp-migration');
  const activeCase = CASE_STUDIES_DATA.find(c => c.id === activeCaseId);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 text-white" data-testid="case-studies-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            Success Stories
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Enterprise Solutions</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Read about our successfully deployed AI integrations, DevOps infrastructure setups, and cloud migrations.
          </p>
        </div>

        {/* Case Toggle Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {CASE_STUDIES_DATA.map(c => (
            <div
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between ${
                activeCaseId === c.id
                  ? 'bg-gradient-to-br from-violet-950/20 to-cyan-950/20 border-violet-500/50 shadow-lg'
                  : 'bg-slate-900/20 border-white/5 hover:border-slate-800'
              }`}
            >
              <div>
                <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">{c.client}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">{c.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{c.description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-violet-400 font-semibold mt-4">
                View Detailed Metrics
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Active Case Study Details */}
        <motion.div
          key={activeCaseId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Main writeup */}
          <div className="lg:col-span-3 bg-slate-900/20 border border-white/5 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{activeCase.client}</span>
                  <h2 className="text-2xl font-bold text-white">{activeCase.title}</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                  <h4 className="text-xs font-bold text-red-400 mb-2 flex items-center gap-1.5">
                    <TrendingDown size={14} />
                    Legacy Infrastructure (Before)
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{activeCase.before}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-violet-500/10">
                  <h4 className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                    <Zap size={14} />
                    BikerTechie Stack (After)
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{activeCase.after}</p>
                </div>
              </div>

              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Key Solutions & ROI Impact</h4>
              <ul className="space-y-2">
                {activeCase.impact.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold">Similar Project Needs?</h4>
                <p className="text-[10px] text-slate-500">Reach out to plan your custom architecture today.</p>
              </div>
              <motion.a
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-xs font-bold shadow-lg shadow-violet-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Free consultation
              </motion.a>
            </div>
          </div>

          {/* Recharts Analytics Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Cost chart card */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/5 shadow-2xl h-[230px] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Layers size={14} className="text-violet-400" />
                  Monthly Spending Optimization ($)
                </h4>
              </div>
              <div className="flex-1 w-full min-h-[140px] text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activeCase.costChart}>
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} labelStyle={{ color: '#fff' }} />
                    <Area type="monotone" dataKey="Cost" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorCost)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Latency chart card */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/5 shadow-2xl h-[230px] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Cpu size={14} className="text-cyan-400" />
                  Average Response Latency (ms)
                </h4>
              </div>
              <div className="flex-1 w-full min-h-[140px] text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeCase.latencyChart}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} labelStyle={{ color: '#fff' }} />
                    <Bar dataKey="ms" fill="#06b6d4" radius={[8, 8, 0, 0]} maxBarSize={45} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default CaseStudies;
