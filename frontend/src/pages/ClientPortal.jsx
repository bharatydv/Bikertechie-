import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Activity, Clock, ShieldCheck, User, LogOut, Lock, AlertCircle, RefreshCw, Send, CheckCircle2, ChevronRight } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

const TIMELINE_STEPS = [
  { name: 'Requirements & Scope', status: 'complete' },
  { name: 'GCP Cloud Architecture Design', status: 'complete' },
  { name: 'Core API & Database Setup', status: 'complete' },
  { name: 'AI Model Pipeline & Fine-Tuning', status: 'current' },
  { name: 'Frontend Integration & QA', status: 'pending' },
  { name: 'Production Launch & Handover', status: 'pending' }
];

export const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [portalData, setPortalData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Live telemetry mock values
  const [telemetry, setTelemetry] = useState({ cpu: 34, latency: 42, reqs: 18 });

  // Add Ticket state
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('DevOps');
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'client@bikertechie.com' && password === 'bikertechie') {
      setIsLoggedIn(true);
      fetchPortalData();
    } else {
      setLoginError('Invalid credentials. Use client@bikertechie.com / bikertechie.');
    }
  };

  const fetchPortalData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/portal/status`);
      setPortalData(response.data);
      setTelemetry(prev => ({
        ...prev,
        latency: response.data.api_latency_ms
      }));
    } catch (err) {
      console.error("Failed to load portal data", err);
      // Fallback local state if backend fails
      setPortalData({
        project_name: "BikerTechie Enterprise AI Pipeline",
        progress_percentage: 68,
        current_phase: "API Integration & Core Testing",
        uptime_percentage: 99.98,
        active_tickets: [
          { id: "TKT-1082", subject: "Configure CORS headers for staging environments", status: "In Progress", category: "DevOps", created_at: "2026-07-10T14:22:00Z" },
          { id: "TKT-1085", subject: "GCP Pub/Sub worker node scaling bottleneck", status: "Open", category: "Infrastructure", created_at: "2026-07-11T09:15:00Z" }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  // Simulating real-time telemetry fluctuations
  useEffect(() => {
    if (!isLoggedIn) return;
    const interval = setInterval(() => {
      setTelemetry({
        cpu: Math.floor(25 + Math.random() * 20),
        latency: Math.floor(35 + Math.random() * 15),
        reqs: Math.floor(10 + Math.random() * 15)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!ticketSubject.trim()) return;

    const newTicket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: ticketSubject,
      status: "Open",
      category: ticketCategory,
      created_at: new Date().toISOString()
    };

    setPortalData(prev => ({
      ...prev,
      active_tickets: [newTicket, ...prev.active_tickets]
    }));

    setTicketSubject('');
    setTicketSuccess(true);
    setTimeout(() => setTicketSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24 text-white" data-testid="client-portal-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {!isLoggedIn ? (
          /* Login Form */
          <div className="max-w-md mx-auto bg-slate-900/30 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                <Lock size={20} className="text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold">Client Portal Login</h2>
              <p className="text-slate-500 text-xs mt-1">Access your project status dashboard & support logs.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  {loginError}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Client Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@bikertechie.com"
                  required
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-xs outline-none focus:border-violet-500/50"
                />
              </div>

              <div className="space-y-1.5 font-sans">
                <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full bg-[#030712] border border-slate-800 rounded-xl px-4 py-3 text-xs outline-none focus:border-violet-500/50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-violet-500/15"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 border-t border-white/5 pt-4 text-center">
              <span className="text-[10px] text-slate-500">Test Credentials:</span>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">client@bikertechie.com / bikertechie</p>
            </div>
          </div>
        ) : (
          /* Logged In Dashboard */
          <div>
            {/* Header / Brand */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <User size={18} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">Welcome Back</span>
                  <h2 className="text-xl font-bold text-white">Global Logistics Client</h2>
                </div>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="self-start sm:self-center px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 flex items-center gap-1.5 transition-all"
              >
                <LogOut size={12} />
                Log Out
              </button>
            </div>

            {loading || !portalData ? (
              <div className="h-[200px] flex items-center justify-center">
                <RefreshCw size={24} className="text-violet-400 animate-spin" />
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Panel: Project Status & Telemetry */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Active Project Card */}
                  <div className="p-6 rounded-3xl bg-slate-900/20 border border-white/5 backdrop-blur-md">
                    <span className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase mb-1.5 block">Project Overview</span>
                    <h3 className="text-lg font-bold text-white mb-2">{portalData.project_name}</h3>
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Status: {portalData.current_phase}</span>
                      <span className="font-bold text-white">{portalData.progress_percentage}% Done</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-1000"
                        style={{ width: `${portalData.progress_percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="text-[10px] uppercase font-semibold">Active CPU Load</span>
                        <Activity size={14} className="text-violet-400 animate-pulse" />
                      </div>
                      <div className="mt-4">
                        <span className="text-2xl font-extrabold">{telemetry.cpu}%</span>
                        <p className="text-[9px] text-slate-500 mt-1">GCP Server Auto-scaling active</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="text-[10px] uppercase font-semibold">API Latency</span>
                        <Clock size={14} className="text-cyan-400" />
                      </div>
                      <div className="mt-4">
                        <span className="text-2xl font-extrabold">{telemetry.latency}ms</span>
                        <p className="text-[9px] text-slate-500 mt-1">Global average response</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="text-[10px] uppercase font-semibold">System Uptime</span>
                        <ShieldCheck size={14} className="text-emerald-400" />
                      </div>
                      <div className="mt-4">
                        <span className="text-2xl font-extrabold">{portalData.uptime_percentage}%</span>
                        <p className="text-[9px] text-slate-500 mt-1">SLA guarantee target 99.9%</p>
                      </div>
                    </div>

                  </div>

                  {/* Project Timeline Steps */}
                  <div className="p-6 rounded-3xl bg-slate-900/20 border border-white/5 backdrop-blur-md">
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Deliverable Timeline</h3>
                    <div className="relative pl-6 border-l-2 border-slate-800 space-y-6">
                      {TIMELINE_STEPS.map((step) => (
                        <div key={step.name} className="relative">
                          {/* Indicator Dot */}
                          <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-4 ${
                            step.status === 'complete' ? 'bg-cyan-500 border-slate-950' :
                            step.status === 'current' ? 'bg-violet-500 border-slate-950 animate-ping' :
                            'bg-slate-800 border-slate-950'
                          }`} />
                          {step.status === 'current' && (
                            <div className="absolute -left-[31px] w-4 h-4 rounded-full border-4 bg-violet-500 border-slate-950" />
                          )}
                          <div className="pl-4">
                            <h4 className={`text-xs font-bold leading-none ${
                              step.status === 'complete' ? 'text-slate-300' :
                              step.status === 'current' ? 'text-violet-400' :
                              'text-slate-600'
                            }`}>
                              {step.name}
                            </h4>
                            <span className="text-[9px] text-slate-500 capitalize mt-1 block">{step.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Panel: Support Tickets */}
                <div className="lg:col-span-1 space-y-6">
                  
                  {/* Create Ticket */}
                  <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/5 shadow-xl">
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Request Support</h3>
                    
                    <form onSubmit={handleCreateTicket} className="space-y-4">
                      {ticketSuccess && (
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="flex-shrink-0" />
                          Ticket logged successfully!
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Subject</label>
                        <input
                          type="text"
                          value={ticketSubject}
                          onChange={(e) => setTicketSubject(e.target.value)}
                          placeholder="Brief issue description..."
                          required
                          className="w-full bg-[#030712] border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none focus:border-violet-500/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Category</label>
                        <select
                          value={ticketCategory}
                          onChange={(e) => setTicketCategory(e.target.value)}
                          className="w-full bg-[#030712] border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none focus:border-violet-500/50 text-slate-300"
                        >
                          <option value="DevOps">DevOps & Cloud</option>
                          <option value="Database">Database</option>
                          <option value="AI Models">AI Models</option>
                          <option value="Frontend">Frontend UI</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-slate-900 border border-white/10 hover:border-violet-500/40 text-white py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Send size={12} />
                        Submit Ticket
                      </button>
                    </form>
                  </div>

                  {/* Active Tickets List */}
                  <div className="p-6 rounded-3xl bg-slate-900/20 border border-white/5 backdrop-blur-md">
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support Ticket Logs</h3>
                    <div className="space-y-3">
                      {portalData.active_tickets.map((t) => (
                        <div key={t.id} className="p-3.5 rounded-2xl bg-slate-950/40 border border-white/5 text-xs flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2 mb-1.5">
                            <span className="font-mono text-[9px] text-slate-500">{t.id}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${
                              t.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                              t.status === 'In Progress' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                              'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            }`}>
                              {t.status}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-300 leading-snug mb-1">{t.subject}</h4>
                          <div className="flex justify-between items-center text-[9px] text-slate-500">
                            <span>Category: {t.category}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ClientPortal;
