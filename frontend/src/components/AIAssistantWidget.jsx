import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Calendar, Cpu, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_BOT_RESPONSES = {
  welcome: "Hi! I am the BikerTechie AI Assistant. I can help answer questions about our Cloud Architectures, AI Automation systems, and book meetings. What are you looking to build today?",
  ai: "We build custom LLM agents, multi-agent workflows, and document QA pipelines. Check out our Services page, or run a quick scan on our Cloud Security & SEO Auditor page!",
  cloud: "We design highly scalable GCP systems (GKE, Cloud Run, Cloud Functions) using Terraform. You can build and test systems live in our Interactive Sandbox!",
  developer: "BikerTechie specializes in modern React, FastAPI, Node.js, and serverless stack architectures.",
  meeting: "I can help you schedule a 30-minute discovery call with our team. Please click the calendar icon or head over to the Contact page to schedule directly.",
  careers: "We are currently looking for Cloud Architects and Full-Stack AI Engineers. Visit our Careers page to apply!",
  default: "That sounds interesting! Our consultants can help design that solution. Would you like to schedule a quick meeting or explore our Interactive Sandbox?"
};

export const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: MOCK_BOT_RESPONSES.welcome, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // User Message
    const userMsg = { id: String(Date.now()), sender: 'user', text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Bot Response Logic
    setTimeout(() => {
      let replyText = MOCK_BOT_RESPONSES.default;
      const lowerText = text.toLowerCase();

      if (lowerText.includes('ai') || lowerText.includes('bot') || lowerText.includes('agent')) {
        replyText = MOCK_BOT_RESPONSES.ai;
      } else if (lowerText.includes('cloud') || lowerText.includes('gcp') || lowerText.includes('sandbox') || lowerText.includes('architect')) {
        replyText = MOCK_BOT_RESPONSES.cloud;
      } else if (lowerText.includes('dev') || lowerText.includes('react') || lowerText.includes('fastapi')) {
        replyText = MOCK_BOT_RESPONSES.developer;
      } else if (lowerText.includes('meet') || lowerText.includes('call') || lowerText.includes('schedule') || lowerText.includes('book')) {
        replyText = MOCK_BOT_RESPONSES.meeting;
      } else if (lowerText.includes('career') || lowerText.includes('job') || lowerText.includes('work')) {
        replyText = MOCK_BOT_RESPONSES.careers;
      }

      setMessages((prev) => [
        ...prev,
        { id: String(Date.now() + 1), sender: 'bot', text: replyText, timestamp: new Date() }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white flex items-center justify-center shadow-xl shadow-violet-500/20 border border-white/10"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="absolute bottom-18 right-0 w-[360px] h-[480px] rounded-3xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-violet-950/50 to-cyan-950/50 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                  <Bot size={16} className="text-violet-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">AI Solution Architect</h4>
                  <span className="text-[10px] text-cyan-400 font-medium">BikerTechie Assistant</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 max-w-[80%] ${
                    msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    msg.sender === 'user' 
                      ? 'bg-cyan-500/20 border-cyan-500/30' 
                      : 'bg-violet-500/20 border-violet-500/30'
                  }`}>
                    {msg.sender === 'user' ? <User size={12} className="text-cyan-400" /> : <Bot size={12} className="text-violet-400" />}
                  </div>
                  <div className={`rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600/20 text-white border border-cyan-500/20'
                      : 'bg-slate-900/60 text-slate-300 border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 items-center text-slate-500 text-[10px] self-start ml-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Panel */}
            <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/5 bg-slate-900/10">
              <button 
                onClick={() => handleSendMessage("Deploy an AI agent workflow")}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-violet-500/20 text-[10px] text-slate-300 border border-white/5 hover:border-violet-500/30 transition-all"
              >
                🤖 AI Agents
              </button>
              <button 
                onClick={() => navigate('/playground')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-[10px] text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                ⚙️ Cloud Sandbox
              </button>
              <button 
                onClick={() => navigate('/audit')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 text-[10px] text-slate-300 border border-white/5 hover:border-amber-500/30 transition-all"
              >
                🛡️ Cloud Audit
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-500/20 text-[10px] text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                📅 Book Meeting
              </button>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-slate-900/50 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask our AI architect..."
                className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500/50"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all flex items-center justify-center flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistantWidget;
