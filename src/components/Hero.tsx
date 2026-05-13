import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="text-center z-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 text-white"
      >
        Typography, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-mint">Decoded.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-400 text-lg max-w-2xl mx-auto"
      >
        Instant font extraction from any website URL or image.{' '}
        <span className="text-zinc-200">Completely free, no account required.</span>
      </motion.p>
    </div>
  );
}
