'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { InstagramIcon, LinkedinIcon, FacebookIcon } from '@/components/SocialIcons';
import Link from 'next/link';

const CYCLING_WORDS = [
  'CRICKET',
  'FOOTBALL',
  'BADMINTON',
  'SQUASH',
  'ATHLETICS',
  'SWIMMING',
  'BASKETBALL',
  'VOLLEYBALL',
  'SPORTS',
];

export default function LandingPage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [hasStartedCycling, setHasStartedCycling] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStartedCycling(true);
    }, 1200);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStartedCycling || isFinished) return;

    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev === CYCLING_WORDS.length - 1) {
          setIsFinished(true);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 540);

    return () => clearInterval(interval);
  }, [hasStartedCycling, isFinished]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white selection:bg-accent selection:text-black">
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. Top-Left Corner — Logo Mark */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute top-5 left-6 md:top-7 md:left-8 z-20 flex items-center gap-4 px-5 py-2.5 bg-black/10 backdrop-blur-md rounded-xl group transition-all hover:bg-black/20"
      >
        <div className="relative h-11 w-11 md:h-13 md:w-13">
          <Image
            src="/assets/iit-bombay-sports-logo-nav.svg"
            alt="IIT Bombay Sports"
            fill
            priority
            className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div className="flex flex-col leading-none border-l border-white/10 pl-4">
          <span className="text-[11px] md:text-[13px] font-black tracking-[0.3em] text-white uppercase mb-1">
            IIT Bombay
          </span>
        </div>
      </motion.div>

      {/* 3. Top-Right Corner - Legal Links */}
      <nav className="absolute top-8 right-8 z-30 flex gap-8 text-[13px] font-medium tracking-[0.2em] pointer-events-auto">
        <Link href="/terms" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 decoration-accent transition-all">
          TERMS
        </Link>
        <Link href="/terms" className="opacity-60 hover:opacity-100 hover:underline underline-offset-4 decoration-accent transition-all">
          PRIVACY POLICY
        </Link>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-12 md:px-16 md:py-16">
        
        <div className="mt-16 flex flex-col items-start">
          <div className="flex flex-col leading-[0.96] uppercase text-[15vw] md:text-[11vw] font-hero">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WELCOME TO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              IIT BOMBAY
            </motion.span>
            <div className="relative h-[1.1em] w-screen overflow-hidden">
              <AnimatePresence initial={false}>
                {hasStartedCycling ? (
                  <motion.span
                    key={CYCLING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-0 block whitespace-nowrap"
                  >
                    {CYCLING_WORDS[wordIndex]}
                    {isFinished && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-accent ml-2 inline-block align-top origin-left"
                      >
                        *
                      </motion.span>
                    )}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </div>
            
            {/* Tagline Animation */}
            <div className="h-12 overflow-hidden mt-0 -translate-y-4">
              <AnimatePresence>
                {isFinished && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="font-serif-italic text-2xl md:text-3xl text-white/70 italic tracking-tight"
                  >
                    *Until victory always.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-5 flex items-center gap-5 pl-1"
          >
            <Link 
              href="https://www.instagram.com/iitbombaysports" 
              target="_blank"
              className="opacity-65 hover:opacity-100 hover:text-accent transition-all"
            >
              <InstagramIcon size={28} />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/iit-bombay-sports/?originalSubdomain=in" 
              target="_blank"
              className="opacity-65 hover:opacity-100 hover:text-accent transition-all"
            >
              <LinkedinIcon size={28} />
            </Link>
            <Link 
              href="https://www.facebook.com/iitbombaysports/" 
              target="_blank"
              className="opacity-65 hover:opacity-100 hover:text-accent transition-all"
            >
              <FacebookIcon size={28} />
            </Link>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
