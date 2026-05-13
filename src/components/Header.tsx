import { Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 sm:px-10 border-b border-[#262626] bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight"
        >
          Font<span className="text-accent-indigo">Extractor</span>
        </motion.div>
      </div>
      <nav className="flex items-center gap-8 text-sm text-zinc-400 font-medium">
        <a href="#how-it-works" className="hover:text-accent-mint transition-colors hidden sm:block">
          How it Works
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
