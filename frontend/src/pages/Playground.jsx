import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Globe, HelpCircle, HardDrive, Cpu, Terminal, ArrowRight, Download, RefreshCw, Layers } from 'lucide-react';

const NODE_TYPES = {
  client: { name: 'Web Client', icon: Globe, desc: 'React Frontend served via Cloud Storage CDN.', cost: 5 },
  apigw: { name: 'API Gateway', icon: Layers, desc: 'Google Cloud API Gateway for security & routing.', cost: 12 },
  serverless: { name: 'Cloud Run', icon: Cpu, desc: 'FastAPI backend in serverless container.', cost: 20 },
  mongodb: { name: 'MongoDB Atlas', icon: Database, desc: 'Managed NoSQL database instance.', cost: 15 },
  gcs: { name: 'Cloud Storage', icon: HardDrive, desc: 'Object storage for assets & static builds.', cost: 3 },
  pubsub: { name: 'Pub/Sub', icon: Server, desc: 'Asynchronous event messaging system.', cost: 8 }
};

const TEMPLATES = {
  web: {
    name: 'Serverless Web App',
    nodes: ['client', 'apigw', 'serverless', 'mongodb'],
    terraform: `resource "google_cloud_run_service" "api" {
  name     = "bikertechie-backend"
  location = "us-central1"
  template {
    spec {
      containers {
        image = "gcr.io/bikertechie/app:latest"
      }
    }
  }
}

resource "google_apikeys_key" "gateway" {
  name         = "api-gw-key"
  display_name = "BikerTechie API Gateway Key"
}`
  },
  ai: {
    name: 'Event-Driven AI Pipeline',
    nodes: ['client', 'apigw', 'pubsub', 'serverless', 'mongodb'],
    terraform: `resource "google_pubsub_topic" "ai_tasks" {
  name = "ai-processing-tasks"
}

resource "google_pubsub_subscription" "ai_sub" {
  name  = "ai-task-sub"
  topic = google_pubsub_topic.ai_tasks.name
}

resource "google_cloud_run_service" "ai_worker" {
  name     = "ai-model-worker"
  location = "us-central1"
}`
  }
};

export const Playground = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('web');
  const [activeNodes, setActiveNodes] = useState(TEMPLATES.web.nodes);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeTab, setActiveTab] = useState('canvas'); // 'canvas' | 'terraform' | 'pricing'

  const handleTemplateChange = (key) => {
    setSelectedTemplate(key);
    setActiveNodes(TEMPLATES[key].nodes);
  };

  const toggleNode = (nodeKey) => {
    if (activeNodes.includes(nodeKey)) {
      setActiveNodes(activeNodes.filter(n => n !== nodeKey));
    } else {
      setActiveNodes([...activeNodes, nodeKey]);
    }
  };

  const calculateTotalCost = () => {
    return activeNodes.reduce((total, key) => total + (NODE_TYPES[key]?.cost || 0), 0);
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24 text-white" data-testid="playground-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            Architecture Sandbox
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Cloud Architecture</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Drag, toggle, or select templates to build scalable Google Cloud infrastructure. Live price and Terraform IaC config outputs.
          </p>
        </div>

        {/* Toolbar & Templates */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/30 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs font-medium uppercase">Active Template:</span>
            {Object.keys(TEMPLATES).map(key => (
              <button
                key={key}
                onClick={() => handleTemplateChange(key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedTemplate === key
                    ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg'
                    : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {TEMPLATES[key].name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveNodes([])}
              className="px-3 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white text-xs flex items-center gap-1.5 transition-all"
            >
              <RefreshCw size={12} />
              Reset Canvas
            </button>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Node Toggles Panel */}
          <div className="lg:col-span-1 bg-slate-900/20 border border-white/5 p-6 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-1.5">
                <Layers size={16} className="text-violet-400" />
                Infrastructure Components
              </h3>
              <p className="text-slate-500 text-xs mb-6">
                Click to add or remove services from your current architecture stack.
              </p>

              <div className="space-y-3">
                {Object.keys(NODE_TYPES).map(key => {
                  const node = NODE_TYPES[key];
                  const Icon = node.icon;
                  const isActive = activeNodes.includes(key);
                  return (
                    <div
                      key={key}
                      onClick={() => toggleNode(key)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border-violet-500/50 shadow-md shadow-violet-500/5'
                          : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${
                          isActive ? 'bg-violet-500/20 border-violet-400' : 'bg-slate-900 border-white/5'
                        }`}>
                          <Icon size={14} className={isActive ? 'text-violet-400' : 'text-slate-500'} />
                        </div>
                        <div>
                          <p className="text-xs font-bold">{node.name}</p>
                          <p className="text-[10px] text-slate-500">{node.cost}$ / month</p>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isActive ? 'border-violet-500 bg-violet-600' : 'border-slate-700'
                      }`}>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Budget Card */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-violet-950/20 to-cyan-950/20 border border-white/5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Estimated Cost</span>
                <span className="text-cyan-400 text-xs font-bold">GCP Savings Audit</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">${calculateTotalCost()}</span>
                <span className="text-slate-500 text-xs">/ month</span>
              </div>
            </div>
          </div>

          {/* Interactive Viewer Section */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Navigation Tabs */}
            <div className="flex bg-slate-950/80 border border-white/10 rounded-2xl p-1 self-start">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'canvas' ? 'bg-slate-900 text-white border border-white/5 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Visual Canvas
              </button>
              <button
                onClick={() => setActiveTab('terraform')}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'terraform' ? 'bg-slate-900 text-white border border-white/5 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Terraform IaC Config
              </button>
            </div>

            {/* Canvas Viewer */}
            <div className="h-[400px] bg-slate-950 border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]">
              {activeTab === 'canvas' ? (
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6">
                  {activeNodes.length === 0 ? (
                    <div className="text-center">
                      <Layers size={40} className="text-slate-700 mx-auto mb-2" />
                      <p className="text-slate-500 text-xs">No active nodes in configuration. Add components on the left.</p>
                    </div>
                  ) : (
                    activeNodes.map((key, index) => {
                      const node = NODE_TYPES[key];
                      const Icon = node.icon;
                      return (
                        <div key={key} className="flex flex-col md:flex-row items-center gap-4">
                          {index > 0 && (
                            <div className="rotate-90 md:rotate-0 flex items-center justify-center">
                              <ArrowRight size={18} className="text-cyan-500 animate-pulse" />
                            </div>
                          )}
                          <motion.div
                            whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                            onMouseEnter={() => setHoveredNode(key)}
                            onMouseLeave={() => setHoveredNode(null)}
                            className="p-4 w-36 rounded-2xl bg-slate-900/50 border border-white/10 text-center flex flex-col items-center justify-center cursor-help transition-all shadow-xl shadow-black/40"
                          >
                            <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-3">
                              <Icon size={18} className="text-violet-400" />
                            </div>
                            <h4 className="text-xs font-bold text-white leading-tight mb-1">{node.name}</h4>
                            <span className="text-[9px] text-slate-500">GCP Resource</span>
                          </motion.div>
                        </div>
                      );
                    })
                  )}

                  {/* Hover Details Overlay */}
                  <AnimatePresence>
                    {hoveredNode && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900 border border-violet-500/30 shadow-2xl backdrop-blur-xl"
                      >
                        <h4 className="text-xs font-bold text-violet-400 mb-1">{NODE_TYPES[hoveredNode].name}</h4>
                        <p className="text-[10px] text-slate-400 leading-snug">{NODE_TYPES[hoveredNode].desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="w-full h-full p-6 font-mono text-xs overflow-y-auto leading-relaxed text-slate-300">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
                    <span className="text-[10px] text-slate-500 flex items-center gap-1.5">
                      <Terminal size={12} />
                      main.tf
                    </span>
                    <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                      <Download size={12} />
                      Download TF Script
                    </button>
                  </div>
                  <pre className="text-emerald-400 select-all">{TEMPLATES[selectedTemplate]?.terraform || '# Config is dynamically generated'}</pre>
                </div>
              )}
            </div>

            {/* Quick Consultation CTA */}
            <div className="p-6 rounded-3xl bg-slate-900/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold">Need a Custom Enterprise Architecture?</h4>
                <p className="text-slate-400 text-xs">Let our GCP-certified Cloud Architects review your architecture for free.</p>
              </div>
              <motion.a
                href="/contact"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-xs font-bold flex items-center gap-1 shadow-lg shadow-violet-500/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Architecture Review
                <ArrowRight size={14} />
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Playground;
