'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SPORTS = [
  { id: 'aquatics', name: 'Aquatics', bg: 'bg-[#1a4a6e]', label: 'Main Pool · 50×25m', rotation: -2, year: '3 GOLDS', achievement: 'Inter-IIT Champions' },
  { id: 'athletics', name: 'Athletics', bg: 'bg-[#4a1a1a]', label: 'Main Track · 400m', rotation: 1, year: '1st PLACE', achievement: 'Overall Champions' },
  { id: 'cricket', name: 'Cricket', bg: 'bg-[#2d5a27]', label: 'GC Season · 2024', rotation: 1.5, year: 'EST. 1958', achievement: 'Historical Legacy' },
  { id: 'football', name: 'Football', bg: 'bg-[#1a3a1a]', label: 'Turf A · Astroturf', rotation: -1, year: 'PRO LEVEL', achievement: 'Daily Sessions' },
  { id: 'badminton', name: 'Badminton', bg: 'bg-[#3a1a4a]', label: 'SAC · Court 1–6', rotation: 2, year: '500+ DAILY', achievement: 'Active Community' },
  { id: 'basketball', name: 'Basketball', bg: 'bg-[#6e2d1a]', label: 'Indoor Arena', rotation: -1.5, year: '24/7 LIGHTS', achievement: 'Midnight Ball' },
  { id: 'hockey', name: 'Hockey', bg: 'bg-[#1a3a5c]', label: 'Pro Astroturf', rotation: 1, year: 'INTER-IIT', achievement: 'Tactical Play' },
  { id: 'tabletennis', name: 'Table Tennis', bg: 'bg-[#5c3a1a]', label: 'SAC Facilities', rotation: -0.5, year: '12 TABLES', achievement: 'Precision Sport' },
];

export default function SportsDirectoryPage() {
  return (
    <div className="min-h-screen bg-cream text-[#111111] selection:bg-accent selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />

      {/* Page Header */}
      <header className="bg-[#1C1C1E] pt-48 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-8"
            >
              <span className="font-mono-custom text-accent text-xs tracking-[0.4em] uppercase font-black mb-8 block underline decoration-accent/20 underline-offset-8">THE DIRECTORY</span>
              <h1 className="font-serif-display text-[clamp(64px,10vw,160px)] uppercase leading-[1.0] tracking-[-0.03em] text-[#F5F0E8]">
                EVERY<br />
                <span className="text-accent normal-case">Sport.</span><br />
                ONE CAMPUS.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-4 lg:text-right"
            >
              <div className="inline-block border border-accent/30 px-6 py-4 rounded-2xl mb-8">
                <span className="font-mono-custom text-accent text-[10px] uppercase tracking-[0.2em] font-black">14 SPORTS · 4 CLUBS</span>
              </div>
              <p className="text-xl leading-[1.7] text-[#F5F0E8]/50 max-w-sm ml-auto">
                From the Olympic pool to the cricket crease — explore every team and facility at IIT Bombay.
              </p>
            </motion.div>
          </div>

          <div className="mt-24 h-px w-full bg-white/08 flex items-center justify-center">
            <div className="bg-[#1C1C1E] px-8 py-2 font-mono-custom text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">SCROLL TO EXPLORE</div>
          </div>
        </div>
      </header>

      {/* Sport List */}
      <main className="py-24 pb-32">
        {SPORTS.map((sport, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.section
              key={sport.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b border-[#111111]/08 last:border-0"
            >
              {/* Background number */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-6' : 'left-6'} font-condensed font-black text-[200px] text-[#111111]/[0.025] leading-none select-none pointer-events-none`}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              <div className={`relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row items-center gap-10 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 0, zIndex: 50 }}
                  style={{ rotate: sport.rotation }}
                  className={`relative shrink-0 w-full md:w-[340px] aspect-[4/3] ${sport.bg} shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden group/card cursor-pointer transition-all duration-700`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
                  <div className="absolute inset-0 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-700">
                    <span className="font-condensed font-black text-8xl text-white/10 uppercase tracking-tighter">{sport.name[0]}</span>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-3 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-400">
                    <span className="font-mono-custom text-accent text-[9px] uppercase tracking-[0.4em] font-black mb-1">STATUS: ACTIVE</span>
                    <h4 className="font-condensed font-black text-xl text-white uppercase tracking-wider">{sport.achievement}</h4>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`flex flex-1 min-w-0 flex-col ${isEven ? 'items-start' : 'items-end text-right'}`}>
                  <div className={`flex items-center gap-3 mb-4 ${isEven ? '' : 'flex-row-reverse'}`}>
                    <span className="font-mono-custom text-accent text-[10px] uppercase tracking-[0.3em] font-black">{sport.label}</span>
                    <div className="h-px w-8 bg-accent/30" />
                  </div>
                  <span className="font-mono-custom text-[#111111]/25 text-[10px] tracking-[0.4em] uppercase font-black mb-3">{sport.year}</span>
                  <h2 className="font-serif-display text-[clamp(48px,5vw,80px)] uppercase tracking-[-0.02em] leading-[0.9] mb-6">
                    {sport.name}
                  </h2>
                  <Link href={`/sports/${sport.id}`} className="group/link inline-flex items-center gap-4">
                    <span className="font-mono-custom text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-accent/20 group-hover/link:border-accent transition-colors pb-1">EXPLORE FACILITY</span>
                    <div className="w-10 h-10 rounded-full border-2 border-[#111111]/08 flex items-center justify-center group-hover/link:bg-accent group-hover/link:border-accent group-hover/link:text-black transition-all">
                      <span className="text-base">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.section>
          );
        })}
      </main>

      {/* More Sports Grid */}
      <section className="bg-[#111111] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="mb-20">
              <span className="font-mono-custom text-accent text-xs tracking-[0.4em] uppercase font-black mb-8 block">CLUB DIRECTORY</span>
              <h2 className="font-serif-display text-5xl md:text-7xl text-[#F5F0E8] leading-[1.1]">
                Also at <span className="underline decoration-accent decoration-4 underline-offset-[16px]">IIT Bombay.</span>
              </h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {['Squash', 'Lawn Tennis', 'Athletics', 'Weightlifting', 'Volleyball', 'Indian Games', 'Board Games', 'Adventure Club', 'Chess Club', 'Yogastha'].map(s => {
               const href = s.toLowerCase() === 'athletics' ? '/sports/athletics' : (s.toLowerCase() === 'aquatics' ? '/sports/aquatics' : '#');
               return (
                 <motion.a
                   key={s}
                   href={href}
                   whileHover={{ scale: 1.02, backgroundColor: '#C4622D', color: '#111111' }}
                   className="flex items-center justify-between border-2 border-white/10 px-8 py-8 rounded-2xl group transition-all"
                 >
                   <span className="font-condensed font-black text-xl md:text-2xl uppercase tracking-wider text-[#F5F0E8]">{s}</span>
                   <span className="font-mono-custom text-[10px] text-[#F5F0E8] opacity-0 group-hover:opacity-60 transition-opacity">↗</span>
                 </motion.a>
               );
             })}
           </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
