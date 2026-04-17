'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Calendar, Clock, Share2, ArrowLeft, Bookmark, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    category: 'Featured Story',
    title: 'Lakshya Sen Electrifies IIT Bombay',
    excerpt: "The campus was buzzing as we had the incredible opportunity to host one of India's finest badminton players for an electrifying session. The event delivered on its promise of speed, precision, and power — 500+ attendees witnessed greatness on our own court.",
    content: `
      <p>The air in the New SAC Indoor Hall was thick with anticipation. Even before the clock struck five, the stands were packed with students, faculty, and local enthusiasts, all waiting for a glimpse of the man who has redefined Indian badminton on the global stage: Lakshya Sen.</p>
      
      <p>As he stepped onto the court, a roar erupted that could likely be heard across the entire campus. But the noise quickly faded into a focused silence as Lakshya began his warm-up. Every stroke was a masterclass in economy of motion—minimum effort for maximum devastating effect.</p>
      
      <h3>The Exhibition Match</h3>
      <p>The highlight of the evening was an exhibition match between Lakshya and our own Inter-IIT team captain. While the difference in professional level was evident, the rally intensity was staggering. Lakshya showcased his signature defensive retrievals and that lightning-fast smash that has troubled even the world's top seeds.</p>
      
      <blockquote>"The energy here at IIT Bombay is incredible. It's heartening to see so much passion for sports in an institute known for its academic rigor. Sports and academics are two sides of the same coin of excellence." — Lakshya Sen</blockquote>
      
      <h3>Inspiring the Next Generation</h3>
      <p>Following the match, Lakshya spent nearly an hour in a candid Q&A session. He spoke about the mental fortitude required at the highest level, his recovery routines, and the sacrifice involved in representing the nation. For the hundreds of students present, it wasn't just about watching a star; it was about understanding the discipline required to reach the pinnacle of any field.</p>
      
      <p>As the event concluded with a commemorative plaque presentation by the Dean of Student Affairs, the impact was clear. The "Lakshya Effect" had taken root at IIT Bombay, leaving us inspired to push our limits on and off the court.</p>
    `,
    image: '/149487696.1535742278.webp',
    date: 'September 18, 2024',
    readTime: '6 min read',
    author: 'Sports Council Media',
    tags: ['Badminton', 'Campus Event', 'Inter-IIT'],
    imageText: 'BADMINTON'
  },
  {
    id: '2',
    category: 'Tournament Report',
    title: 'Inter-Hostel Football Showdown',
    excerpt: 'The annual hostel championship returned with record participation across all 14 hostels. Finals went into penalty shootout.',
    content: `
      <p>The rain didn't dampen the spirits; it only added to the drama. The 2024 Inter-Hostel Football General Championship reached its fever pitch this weekend at the Main Ground.</p>
      <p>Hostel 8 and Hostel 3 faced off in a final that will be talked about for semesters to come...</p>
    `,
    image: '/france_v_united_states_mens_football_olympic_games_paris_2024_day_2_021cda8c42.jpg',
    date: 'May 12, 2024',
    readTime: '4 min read',
    author: 'Football Council',
    tags: ['Football', 'GC', 'Inter-Hostel'],
    imageText: 'FOOTBALL'
  }
];

export default function ArticlePage() {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find the post or fallback to the first one for demo
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream text-[#111111] selection:bg-accent selection:text-black font-iitb-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-70 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </motion.div>

        <motion.div 
          style={{ opacity: headerOpacity }}
          className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20 max-w-[1400px] mx-auto z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <Link href="/blogs" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="h-px w-12 bg-accent/60" />
            <span className="font-mono-custom text-accent text-[10px] tracking-[0.4em] uppercase font-black">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-serif-display text-[clamp(48px,8vw,100px)] leading-[0.9] text-[#F5F0E8] uppercase tracking-[-0.04em] mb-10 max-w-5xl">
            {post.title}.
          </h1>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <User size={14} />
              </div>
              <span className="font-mono-custom text-[10px] text-white/60 uppercase tracking-widest font-bold">{post.author}</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <Calendar size={14} />
              <span className="font-mono-custom text-[10px] uppercase tracking-widest font-bold">{post.date}</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <Clock size={14} />
              <span className="font-mono-custom text-[10px] uppercase tracking-widest font-bold">{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Article Body */}
      <section className="relative z-20 -mt-10 px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 bg-white rounded-[32px] p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/5">
             <div 
               className="prose prose-xl prose-iitb max-w-none"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />
             
             <div className="mt-20 pt-12 border-t border-[#111111]/05 flex flex-wrap items-center justify-between gap-8">
               <div className="flex items-center gap-4">
                 <span className="font-mono-custom text-[10px] text-[#111111]/40 uppercase tracking-widest font-black">TAGGED IN:</span>
                 <div className="flex flex-wrap gap-2">
                   {post.tags.map(t => (
                     <span key={t} className="text-[9px] font-mono-custom uppercase tracking-widest border border-[#111111]/10 px-4 py-2 rounded-full text-[#111111]/60 font-bold hover:border-accent hover:text-accent cursor-pointer transition-colors">
                       {t}
                     </span>
                   ))}
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <button className="w-12 h-12 rounded-full border border-[#111111]/10 flex items-center justify-center text-[#111111]/40 hover:text-accent hover:border-accent transition-all">
                   <Share2 size={18} />
                 </button>
                 <button className="w-12 h-12 rounded-full border border-[#111111]/10 flex items-center justify-center text-[#111111]/40 hover:text-accent hover:border-accent transition-all">
                   <Bookmark size={18} />
                 </button>
               </div>
             </div>
          </div>

          {/* Side Rail */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-[#111111] rounded-[24px] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <span className="font-mono-custom text-accent text-[9px] tracking-[0.4em] uppercase font-black mb-6 block">NEXT UP</span>
               <h4 className="font-serif-display text-2xl mb-8 leading-tight uppercase">Inter-Hostel Football Showdown.</h4>
               <Link href="/blogs/2" className="inline-flex items-center gap-3 font-mono-custom text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:gap-5 transition-all">
                 READ ARTICLE <span>→</span>
               </Link>
            </div>

            <div className="border border-[#111111]/05 rounded-[24px] p-10 bg-white">
               <span className="font-mono-custom text-[#111111]/40 text-[9px] tracking-[0.4em] uppercase font-black mb-8 block">THE GAZETTE</span>
               <div className="space-y-8">
                 <div className="group cursor-pointer">
                    <span className="font-mono-custom text-accent text-[8px] tracking-[0.2em] uppercase font-black block mb-2">AUGUST 2024</span>
                    <h5 className="font-serif-display text-lg text-[#111111] group-hover:text-accent transition-colors leading-tight">UG Sports Orientation: A New Beginning.</h5>
                 </div>
                 <div className="h-px w-full bg-[#111111]/05" />
                 <div className="group cursor-pointer">
                    <span className="font-mono-custom text-accent text-[8px] tracking-[0.2em] uppercase font-black block mb-2">JULY 2024</span>
                    <h5 className="font-serif-display text-lg text-[#111111] group-hover:text-accent transition-colors leading-tight">PG Mania 2025: Weekend Warriors.</h5>
                 </div>
               </div>
            </div>

            <div className="p-10">
               <span className="font-mono-custom text-accent text-[9px] tracking-[0.4em] uppercase font-black mb-6 block">CREDITS</span>
               <div className="space-y-4">
                 <div className="flex flex-col">
                   <span className="font-mono-custom text-[8px] text-[#111111]/40 uppercase tracking-widest font-bold">WRITER</span>
                   <span className="font-condensed font-black text-sm uppercase">Ishaan Gupta</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="font-mono-custom text-[8px] text-[#111111]/40 uppercase tracking-widest font-bold">PHOTOGRAPHY</span>
                   <span className="font-condensed font-black text-sm uppercase">IITB Sports Media Team</span>
                 </div>
               </div>
            </div>
          </aside>

        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .prose-iitb h3 {
          font-family: var(--font-iitb-heading), sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          font-size: 2rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #111;
        }
        .prose-iitb p {
          color: #444;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }
        .prose-iitb blockquote {
          border-left: 4px solid var(--color-accent);
          padding-left: 2rem;
          font-family: var(--font-iitb-display-text), serif;
          font-style: italic;
          font-size: 1.5rem;
          color: #111;
          margin: 4rem 0;
        }
      `}</style>
    </div>
  );
}
