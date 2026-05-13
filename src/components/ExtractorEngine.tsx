import { useState } from 'react';
import { Globe, Image as ImageIcon, UploadCloud } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function ExtractorEngine() {
  const [activeTab, setActiveTab] = useState<'url' | 'image'>('url');
  const [url, setUrl] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full z-10 px-4"
    >
      <div className="bg-[#161616]/40 backdrop-blur-xl border border-[#262626] rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex border-b border-[#262626]">
          <button
            onClick={() => setActiveTab('url')}
            className={cn(
              "flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors",
              activeTab === 'url' ? "border-b-2 border-accent-indigo bg-accent-indigo/5 text-white" : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            <Globe className="w-4 h-4" /> Website URL
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={cn(
              "flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors",
              activeTab === 'image' ? "border-b-2 border-accent-indigo bg-accent-indigo/5 text-white" : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            <ImageIcon className="w-4 h-4" /> Upload Image
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'url' ? (
              <motion.div
                key="url"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="url"
                  placeholder="https://example.com/typography-page"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-[#0A0A0A] border border-[#262626] rounded-xl px-5 py-4 text-zinc-300 focus:outline-none focus:border-accent-indigo transition-all"
                />
                <button className="bg-accent-indigo hover:bg-[#4F46E5] px-8 py-4 sm:py-0 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                  Analyze Site
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="border border-[#262626] border-dashed hover:border-accent-indigo/50 rounded-xl p-8 sm:p-12 text-center transition-colors cursor-pointer group bg-[#0A0A0A]/50"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 bg-accent-indigo/10 rounded-full flex items-center justify-center group-hover:bg-accent-indigo/20 transition-colors">
                    <UploadCloud className="w-6 h-6 text-accent-indigo group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-300 mb-1">Upload Image</p>
                    <p className="text-xs text-zinc-500">Drag & drop your screenshot here or <span className="text-accent-indigo">Browse Files</span></p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
