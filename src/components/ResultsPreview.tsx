import { motion } from 'motion/react';

const MOCK_RESULTS = [
  { id: 1, name: 'Inter Tight', weight: '700 (Bold)', selector: 'H1, H2', preview: 'The quick brown fox jumps over...' },
  { id: 2, name: 'Playfair Display', weight: '400 (Regular)', selector: 'Body, P', preview: 'Grumpy wizards make toxic brew...' },
];

export default function ResultsPreview() {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent-mint mb-1">Live Results Preview</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {MOCK_RESULTS.map((font, idx) => (
          <motion.div
            key={font.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            className="bg-[#111111] border border-[#262626] p-4 rounded-xl flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <span className={`text-lg transition-colors text-white ${font.name.includes('Playfair') ? 'font-serif' : 'font-black'}`}>{font.name}</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#262626] text-zinc-400 rounded-full">
                {font.selector}
              </span>
            </div>

            <div className="text-xs text-zinc-500">Weight: {font.weight}</div>

            <div className="mt-2 p-2 bg-[#0A0A0A] border border-[#262626] rounded text-sm text-zinc-300">
              <span className={font.name.includes('Playfair') ? '' : 'italic'}>{font.preview}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
