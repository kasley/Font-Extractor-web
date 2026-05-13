import { Zap, ScanText } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deep-scan analysis in < 2s.',
    colorClass: 'text-accent-indigo',
    bgClass: 'bg-accent-indigo/10'
  },
  {
    icon: ScanText,
    title: 'OCR Detection',
    description: 'Identify fonts from static images.',
    colorClass: 'text-accent-mint',
    bgClass: 'bg-accent-mint/10'
  }
];

export default function Features() {
  return (
    <section id="how-it-works" className="flex flex-col gap-4">
        {FEATURES.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
            className="bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-[#262626] p-5 rounded-2xl flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-lg ${feature.bgClass} flex items-center justify-center ${feature.colorClass}`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{feature.title}</div>
              <div className="text-xs text-zinc-500">{feature.description}</div>
            </div>
          </motion.div>
        ))}
    </section>
  );
}
