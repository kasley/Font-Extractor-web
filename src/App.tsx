/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header"
import Hero from "./components/Hero"
import ExtractorEngine from "./components/ExtractorEngine"
import ResultsPreview from "./components/ResultsPreview"
import Features from "./components/Features"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col font-sans overflow-x-hidden relative">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-between py-10 px-6 sm:px-10 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex flex-wrap gap-4 p-20 text-4xl font-serif">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0
        </div>
        
        <div className="w-full max-w-3xl flex flex-col items-center justify-center space-y-12 mb-16 pt-10">
          <Hero />
          <ExtractorEngine />
        </div>
        
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 z-10 lg:mb-10">
          <div className="md:col-span-8">
            <ResultsPreview />
          </div>
          <div className="md:col-span-4">
            <Features />
          </div>
        </div>
      </main>

      <footer className="h-12 border-t border-[#262626] bg-[#0A0A0A] flex items-center justify-between px-6 sm:px-10 text-[10px] uppercase tracking-[0.2em] text-zinc-600 relative z-10 w-full shrink-0">
        <div className="hidden sm:block">Engine Version: 4.2.0-STABLE</div>
        <div className="flex gap-4 sm:gap-6">
          <span className="text-accent-indigo">API Status: Optimal</span>
          <span className="hidden sm:block">System Load: 12%</span>
        </div>
        <div>&copy; 2024 FONTEXTRACTOR PRO</div>
      </footer>
    </div>
  )
}
