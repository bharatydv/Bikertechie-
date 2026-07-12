import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, X, Mail, BookOpen } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'fastapi-gcp-run',
    title: 'Scaling FastAPI on Google Cloud Run',
    summary: 'A step-by-step technical guide to containerizing FastAPI, configuring CPU/Memory allocations, and auto-scaling based on concurrency parameters in GCP.',
    content: `FastAPI has become the standard for writing fast, modern Python backend APIs. However, hosting it efficiently requires a serverless setup that scales down to zero when idle and scales up rapidly under load. In this post, we explain why Google Cloud Run is the perfect compute choice and how to optimize it.

### Step 1: Dockerizing FastAPI
Use a multi-stage slim Python base image to minimize size and build times:
\`\`\`dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
\`\`\`

### Step 2: Optimizing Concurrency
By default, Cloud Run handles concurrency using a single instance capacity. Setting container concurrency to 80 or 100 allows a single container instance to process multiple requests concurrently, optimizing RAM utilization and reducing cold starts.

### Step 3: Database Connection Limits
FastAPI endpoints executing queries against MongoDB Atlas require proper client pooling. Initialize the client globally during startup rather than per-request to prevent exhausting database sockets.`,
    category: 'Cloud Run',
    author: 'Bharat Pandey, Cloud Architect',
    date: 'July 10, 2026',
    readTime: '6 min read'
  },
  {
    id: 'custom-llm-agents',
    title: 'Designing Custom LLM Agents with System Prompt Memory',
    summary: 'How to structure conversational memory context windows, prevent context length limits, and log chat queries for multi-agent support pipelines.',
    content: `Building AI applications goes beyond querying standard GPT endpoints. Enterprise support agents need custom guidelines, system roles, and historical memory.

### Context Window Optimization
Passing the entire chat history in every prompt consumes unnecessary tokens. Implementing a sliding window memory format (keeping the last 5 messages) paired with an automated summarizer of older conversations ensures the assistant retains context without hitting token budget limits.

### Custom Tool Calls
Use structured tool definitions. For example, if the user asks "What is the status of ticket TKT-1082?", the LLM should parse this and trigger a DB search function rather than hallucinating answers.`,
    category: 'AI Agents',
    author: 'Mayank Kumar, Lead AI Engineer',
    date: 'July 05, 2026',
    readTime: '8 min read'
  },
  {
    id: 'mongodb-index-opt',
    title: 'MongoDB Index Optimization for High-Throughput Aggregations',
    summary: 'Deep dive into database indexes, compound indexing strategies, and diagnosing slow pipeline operations in motor/pymongo databases.',
    content: `Slow page load speeds are almost always caused by database queries running without appropriate indexing. Here is how BikerTechie optimizes MongoDB operations.

### Diagnosing Slow Queries
Use the \`.explain()\` modifier on query cursors to evaluate index usage. If you see "COLLSCAN" (Collection Scan) instead of "IXSCAN" (Index Scan), MongoDB is reading every single document in the collection.

### Compound Indexes
If your application frequently filters by client status and dates, create a compound index:
\`\`\`javascript
db.status_checks.createIndex({ client_name: 1, timestamp: -1 })
\`\`\`
This matches the sort and filter hierarchy and allows indexes to resolve queries instantly.`,
    category: 'MongoDB',
    author: 'Amit Mishra, Senior DBA',
    date: 'June 28, 2026',
    readTime: '5 min read'
  }
];

export const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readPostId, setReadPostId] = useState(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const categories = ['All', 'Cloud Run', 'AI Agents', 'MongoDB'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activePost = BLOG_POSTS.find(p => p.id === readPostId);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setEmailSubscribed(true);
    setSubEmail('');
    setTimeout(() => setEmailSubscribed(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24 text-white" data-testid="blog-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Title */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            Technical Insights
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">
            The BikerTechie <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Engineering Blog</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Read engineering documentation, tech case studies, and cloud integration guidelines written directly by our practitioners.
          </p>
        </div>

        {/* Search Bar & Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/30 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 text-slate-500" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search engineering logs..."
              className="w-full bg-[#030712] border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs outline-none focus:border-violet-500/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg'
                    : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Articles & Newsletter */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Articles list */}
          <div className="lg:col-span-2 space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="p-8 text-center bg-slate-900/10 border border-white/5 rounded-3xl">
                <p className="text-slate-500 text-xs">No matching articles found.</p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <div
                  key={post.id}
                  className="p-6 rounded-3xl bg-slate-900/20 border border-white/5 hover:border-slate-800 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 text-[10px] text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span>·</span>
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 text-[8px] font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white hover:text-cyan-400 cursor-pointer" onClick={() => setReadPostId(post.id)}>
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{post.summary}</p>
                  </div>

                  <button
                    onClick={() => setReadPostId(post.id)}
                    className="self-start text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 group transition-colors"
                  >
                    Read Article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Sidebar Newsletter Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/5 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Subscribe to Tech Logs</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  Get monthly engineering summaries, Docker templates, and Terraform scripts delivered straight to your inbox.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  {emailSubscribed && (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-medium">
                      Subscribed! Thanks for reading.
                    </div>
                  )}
                  <input
                    type="email"
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="w-full bg-[#030712] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-violet-500/50"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 font-bold py-2.5 rounded-xl text-xs shadow-lg shadow-violet-500/15"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Reader Panel Overlay Modal */}
      <AnimatePresence>
        {readPostId && activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-3xl h-[80vh] bg-slate-900 border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-slate-950/20">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <BookOpen size={16} className="text-violet-400" />
                  <span>Technical Article</span>
                </div>
                <button
                  onClick={() => setReadPostId(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {activePost.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {activePost.date}
                    </span>
                    <span>·</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 font-bold uppercase text-[8px]">
                      {activePost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{activePost.title}</h2>
                </div>

                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-white/5 pt-6 font-sans">
                  {activePost.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
