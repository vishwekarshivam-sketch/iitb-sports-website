'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Featured · September 2024',
    title: 'Lakshya Sen Electrifies IIT Bombay',
    excerpt: "The campus was buzzing as we had the incredible opportunity to host one of India's finest badminton players for an electrifying session. The event delivered on its promise of speed, precision, and power — 500+ attendees witnessed greatness on our own court.",
    imageText: 'BADMINTON',
    image: '/149487696.1535742278.webp',
    date: 'SEPT 2024',
    tags: ['World-Class Demo', '500+ Attendees'],
    featured: true
  },
  {
    id: 2,
    category: 'May 2024',
    title: 'Inter-Hostel Football Showdown',
    excerpt: 'The annual hostel championship returned with record participation across all 14 hostels. Finals went into penalty shootout.',
    imageText: 'FOOTBALL',
    image: '/france_v_united_states_mens_football_olympic_games_paris_2024_day_2_021cda8c42.jpg',
    date: 'MAY 2024',
    tags: ['Inter-Hostel', 'GC Points']
  },
  {
    id: 3,
    category: 'August 2024',
    title: 'UG Sports Orientation',
    excerpt: 'The new undergraduate batch was officially welcomed to the vibrant world of IITB sports.',
    imageText: 'RUNNING',
    image: '/Athletics.jpg',
    date: 'AUG 2024',
    tags: ['Orientation', 'BlackCats']
  },
  {
    id: 4,
    category: 'July 2024',
    title: 'PG Mania 2025',
    excerpt: 'The ultimate test of skill and teamwork for the PG community across weekend showdowns.',
    imageText: 'YEARBOOK',
    image: '/swimming.jpeg',
    date: 'JULY 2024',
    tags: ['PG Exclusive']
  }
];

const SportBadge = ({ text }: { text: string }) => (
  <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
    <div className="h-px w-8 bg-accent/60" />
    <span className="font-mono-custom text-[9px] text-white uppercase tracking-[0.3em] font-black drop-shadow-md">
      {text}
    </span>
  </div>
);

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-cream-topo text-[#111111] selection:bg-accent selection:text-black font-iitb-text">
      <Navbar />
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />

      {/* Hero Section */}
      <section className="relative bg-[#111111] pt-48 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
               backgroundSize: '80px 80px' 
             }} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-serif-display text-[clamp(64px,12vw,160px)] leading-[0.85] uppercase tracking-[-0.04em] text-[#F5F0E8] mb-12">
              SPORTS<br />
              <span className="text-accent normal-case tracking-normal">Gazette.</span>
            </h1>
            <p className="font-mono-custom text-[#F5F0E8]/40 text-xs tracking-[0.2em] uppercase font-bold max-w-sm leading-relaxed border-l border-accent/30 pl-6">
              Official records, highlights, and insights from the heart of the IIT Bombay sports community.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
           <div className="font-condensed font-black text-[120px] text-white/[0.02] leading-none uppercase tracking-tighter">
             Volume 24
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-auto">
          
          {/* 1. Featured Card (Span 12 for impact) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-white border border-[#111111]/05 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-[32px] overflow-hidden flex flex-col lg:flex-row group"
          >
            <div className="lg:w-3/5 relative overflow-hidden bg-[#0d0d0d] min-h-[400px]">
              <Image 
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <SportBadge text={BLOG_POSTS[0].imageText} />
              
              <div className="absolute bottom-8 left-8 z-20">
                <span className="font-mono-custom text-xs text-white/60 uppercase tracking-[0.2em] font-black">{BLOG_POSTS[0].date}</span>
              </div>
            </div>
            
            <div className="lg:w-2/5 p-10 md:p-14 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none hidden md:block">
                <div className="font-condensed font-black text-8xl uppercase tracking-tighter">01</div>
              </div>
              
              <h3 className="font-serif-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] text-[#111111] tracking-[-0.02em]">
                {BLOG_POSTS[0].title}.
              </h3>
              <p className="text-[#555] text-lg leading-relaxed mb-10 flex-1">
                {BLOG_POSTS[0].excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {BLOG_POSTS[0].tags.map(t => (
                  <span key={t} className="text-[9px] font-mono-custom uppercase tracking-widest border border-[#111111]/10 px-4 py-2 rounded-full text-[#111111]/60 font-bold">{t}</span>
                ))}
              </div>
              
              <Link href="/blogs/1" className="inline-flex items-center gap-4 font-mono-custom text-xs font-black uppercase tracking-[0.2em] text-[#111111] hover:text-accent transition-colors group/link">
                READ THE FULL STORY 
                <div className="w-10 h-px bg-[#111111]/20 group-hover/link:bg-accent group-hover/link:w-14 transition-all" />
              </Link>
            </div>
          </motion.div>

          {/* 2. Secondary Card (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white border border-[#111111]/05 shadow-sm hover:shadow-xl transition-all duration-700 rounded-[24px] overflow-hidden flex flex-col group"
          >
            <div className="h-[400px] relative overflow-hidden bg-[#0a1a0d]">
              <Image 
                src={BLOG_POSTS[1].image}
                alt={BLOG_POSTS[1].title}
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <SportBadge text={BLOG_POSTS[1].imageText} />
              
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif-display text-3xl md:text-4xl text-white leading-[0.95] mb-2 tracking-tight">
                  {BLOG_POSTS[1].title}.
                </h3>
              </div>
            </div>
            <div className="p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-custom text-[10px] tracking-[0.3em] uppercase font-black text-[#111111]/40">{BLOG_POSTS[1].date}</span>
                <div className="flex gap-2">
                  {BLOG_POSTS[1].tags.map(t => (
                    <span key={t} className="font-mono-custom text-[9px] uppercase tracking-widest text-[#111111]/40 font-bold italic">#{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-[#555] leading-relaxed mb-8">
                {BLOG_POSTS[1].excerpt}
              </p>
              <Link href="/blogs/2" className="font-mono-custom text-[10px] font-black uppercase tracking-[0.25em] text-[#111111] hover:text-accent transition-all flex items-center gap-3">
                VIEW SHOWDOWN <ChevronRight />
              </Link>
            </div>
          </motion.div>

          {/* 3. Small Cards (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#111111]/05 shadow-sm hover:shadow-xl transition-all duration-500 rounded-[24px] overflow-hidden group flex-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={BLOG_POSTS[2].image}
                  alt={BLOG_POSTS[2].title}
                  fill
                  className="object-cover opacity-85 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <SportBadge text={BLOG_POSTS[2].imageText} />
              </div>
              <div className="p-8">
                <span className="font-mono-custom text-[9px] tracking-[0.3em] uppercase font-black mb-3 block text-[#111111]/40">{BLOG_POSTS[2].date}</span>
                <h3 className="font-serif-display text-2xl text-[#111111] mb-4 leading-tight">{BLOG_POSTS[2].title}.</h3>
                <Link href="/blogs/1" className="font-mono-custom text-[9px] font-black uppercase tracking-[0.2em] border-b border-accent/20 pb-0.5 hover:border-accent transition-all">
                  LEARN MORE
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent p-10 rounded-[24px] flex flex-col justify-center relative overflow-hidden shadow-xl shadow-accent/10"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <span className="font-mono-custom text-black text-[10px] tracking-[0.4em] uppercase font-black mb-6">NEWSLETTER</span>
              <h3 className="font-condensed font-black text-4xl mb-8 leading-[0.9] uppercase tracking-tighter text-black">
                Never miss<br />a highlight.
              </h3>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Your IITB Email" 
                  className="bg-black/10 border-b border-black/20 py-3 px-1 font-mono-custom text-xs placeholder:text-black/30 focus:outline-none focus:border-black transition-all"
                />
                <button className="bg-black text-white font-mono-custom text-[11px] uppercase tracking-widest py-4 px-8 rounded-full hover:bg-[#222] transition-colors self-start">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>

          {/* 4. Full Width Reveal (Span 12) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 relative h-[500px] rounded-[32px] overflow-hidden group"
          >
            <Image 
              src={BLOG_POSTS[3].image}
              alt={BLOG_POSTS[3].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            
            <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent" />
                </div>
                <h3 className="font-serif-display text-4xl md:text-6xl text-[#F5F0E8] leading-[0.95] mb-8">
                  {BLOG_POSTS[3].title}.
                </h3>
                <p className="text-[#F5F0E8]/60 text-lg mb-10 max-w-xl">
                  {BLOG_POSTS[3].excerpt}
                </p>
                <Link href="/yearbook" className="inline-flex items-center gap-4 font-mono-custom text-xs font-black uppercase tracking-[0.3em] text-accent group/btn">
                  EXPLORE ARCHIVES
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 transition-transform">
    <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
