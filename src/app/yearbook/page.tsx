'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, ExternalLink, Camera, Trophy, Users } from 'lucide-react';

const YEARBOOK_CHAPTERS = [
  {
    year: '2024-25',
    title: 'The Year of Resilience',
    description: 'A comprehensive record of every record broken, every medal won, and the spirit of sportsmanship that defined the year.',
    image: '/france_v_united_states_mens_football_olympic_games_paris_2024_day_2_021cda8c42.jpg',
    stats: [
      { label: 'Events', value: '120+' },
      { label: 'Athletes', value: '3500+' },
      { label: 'Gold Medals', value: '42' }
    ]
  },
  {
    year: '2023-24',
    title: 'Until Victory Always',
    description: 'Looking back at the transition year where campus sports returned to its full glory with record-breaking participation.',
    image: '/Sally-Pearson-100-meter-hurdles-2012-Olympics.webp',
    stats: [
      { label: 'Events', value: '110+' },
      { label: 'Athletes', value: '3200+' },
      { label: 'Gold Medals', value: '38' }
    ]
  }
];

const MEMORIES = [
  { image: '/149487696.1535742278.webp', caption: 'Inter-IIT Badminton Finals' },
  { image: '/Sally-Pearson-100-meter-hurdles-2012-Olympics.webp', caption: 'Athletics Meet 2024' },
  { image: '/swimming.jpeg', caption: 'Aquatics GC Highlights' },
  { image: '/hhl1cdernwjvt7cvwax2.avif', caption: 'The Winning Moment' },
];

export default function YearbookPage() {
  return (
    <div className="min-h-screen bg-cream text-[#111111] selection:bg-accent selection:text-white">
      <Navbar />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
            {/* Hero Section */}
            <div className="mb-24">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif-display text-[clamp(60px,10vw,120px)] leading-[0.9] uppercase tracking-tighter"
              >
                Sports <br /> <span className="normal-case tracking-normal">Yearbook.</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xs border-l-2 border-accent/20 pl-8 pb-4"
            >
              <p className="font-iitb-text text-lg text-[#111111]/60 leading-relaxed">
                Capturing the sweat, the tears, and the triumphs of every season since 1958.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Yearbook Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-40">
          <div className="max-w-[1400px] mx-auto">
            {YEARBOOK_CHAPTERS.map((chapter, idx) => (
              <motion.div 
                key={chapter.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center mb-40 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 relative group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl">
                    <Image 
                      src={chapter.image} 
                      alt={chapter.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  {/* Floating Year Tag */}
                  <div className="absolute -top-6 -right-6 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex items-center justify-center rotate-12 shadow-xl">
                    <span className="font-condensed font-black text-2xl md:text-3xl text-white tracking-widest">{chapter.year}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="font-mono-custom text-xs font-black text-accent uppercase tracking-[0.3em]">Latest Edition</span>
                    <h2 className="font-serif-display text-5xl md:text-7xl leading-none">{chapter.title}</h2>
                    <p className="font-iitb-text text-xl text-[#111111]/50 leading-relaxed max-w-lg">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#111111]/10">
                    {chapter.stats.map(stat => (
                      <div key={stat.label}>
                        <div className="font-condensed font-black text-4xl text-[#111111]">{stat.value}</div>
                        <div className="font-mono-custom text-[9px] uppercase tracking-widest text-accent font-black mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 pt-8">
                    <a 
                      href="https://gymkhana.iitb.ac.in/sports/yearbook.pdf" 
                      target="_blank"
                      className="inline-flex items-center gap-4 bg-[#111111] text-white px-10 py-5 rounded-full font-condensed font-black text-lg uppercase tracking-widest hover:bg-accent transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                      Download PDF <Download size={20} />
                    </a>
                    <button className="inline-flex items-center gap-4 border-2 border-[#111111]/10 px-10 py-5 rounded-full font-condensed font-black text-lg uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
                      Read Online <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Scrapbook Grid */}
        <section className="bg-[#111111] py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F5F0E8] to-transparent opacity-100" />
          
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
              <div>
                <span className="font-mono-custom text-accent text-xs tracking-[0.4em] uppercase font-black mb-6 block">Visual Archive</span>
                <h2 className="font-serif-display text-5xl md:text-7xl text-[#F5F0E8] leading-tight">
                  The Scrapbook <br /> <span className="text-accent">Memories.</span>
                </h2>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl">
                   <Camera className="text-accent" size={18} />
                   <span className="font-mono-custom text-[10px] text-white/60 uppercase tracking-widest font-black">5000+ Photos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MEMORIES.map((memory, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative aspect-square group overflow-hidden rounded-3xl ${i % 2 === 0 ? 'mt-12' : ''}`}
                >
                  <Image 
                    src={memory.image} 
                    alt={memory.caption} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-condensed font-black uppercase tracking-widest text-sm">{memory.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <button className="font-mono-custom text-xs text-accent uppercase tracking-[0.3em] font-black border-b-2 border-accent/30 pb-2 hover:border-accent transition-all">
                View Entire Gallery ↗
              </button>
            </div>
          </div>
        </section>

        {/* Historical Archive */}
        <section className="py-40 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto text-center">
            <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-8">
               <Trophy className="text-accent" size={32} />
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl mb-12">Older Editions</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {['2022-23', '2021-22', '2020-21', '2019-20', '2018-19'].map(year => (
                 <button key={year} className="px-8 py-4 bg-white border border-[#111111]/05 rounded-2xl font-condensed font-black text-lg uppercase tracking-widest hover:bg-[#111111] hover:text-[#F5F0E8] transition-all transform hover:-translate-y-1">
                   {year}
                 </button>
               ))}
            </div>
            <div className="mt-16 flex items-center justify-center gap-4 text-[#111111]/40">
               <Users size={20} />
               <span className="font-mono-custom text-[11px] uppercase tracking-widest font-bold">Archives dating back to 1958</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
