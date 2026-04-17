'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, CheckCircle2, XCircle, AlertCircle, Search, Filter, ChevronRight, Smartphone } from 'lucide-react';
import Image from 'next/image';

type CourtStatus = 'Available' | 'Occupied' | 'Maintenance' | 'Reserved';

type Court = {
  id: string;
  name: string;
  sport: string;
  status: CourtStatus;
  location: string;
  nextAvailable?: string;
  occupancy?: number; // percentage
  lastUpdated: string;
};

const COURTS: Court[] = [
  {
    id: 'b-1',
    name: 'Badminton Court 1',
    sport: 'Badminton',
    status: 'Occupied',
    location: 'New SAC Indoor Hall',
    nextAvailable: '18:30',
    occupancy: 100,
    lastUpdated: '5 mins ago',
  },
  {
    id: 'b-2',
    name: 'Badminton Court 2',
    sport: 'Badminton',
    status: 'Available',
    location: 'New SAC Indoor Hall',
    occupancy: 0,
    lastUpdated: '2 mins ago',
  },
  {
    id: 'bb-1',
    name: 'Basketball Court 1',
    sport: 'Basketball',
    status: 'Reserved',
    location: 'Outdoor Sports Complex',
    nextAvailable: '20:00',
    occupancy: 0,
    lastUpdated: '15 mins ago',
  },
  {
    id: 'bb-2',
    name: 'Basketball Court 2',
    sport: 'Basketball',
    status: 'Occupied',
    location: 'Outdoor Sports Complex',
    nextAvailable: '19:15',
    occupancy: 80,
    lastUpdated: '10 mins ago',
  },
  {
    id: 'tt-1',
    name: 'Table Tennis Table 1',
    sport: 'Table Tennis',
    status: 'Available',
    location: 'Old SAC',
    occupancy: 0,
    lastUpdated: 'Just now',
  },
  {
    id: 'sq-1',
    name: 'Squash Court 1',
    sport: 'Squash',
    status: 'Maintenance',
    location: 'New SAC',
    lastUpdated: '1 hour ago',
  },
  {
    id: 'vb-1',
    name: 'Volleyball Court',
    sport: 'Volleyball',
    status: 'Available',
    location: 'Outdoor Complex',
    occupancy: 0,
    lastUpdated: '8 mins ago',
  },
  {
    id: 'tn-1',
    name: 'Tennis Court 1',
    sport: 'Lawn Tennis',
    status: 'Occupied',
    location: 'Tennis Hub',
    nextAvailable: '19:30',
    occupancy: 100,
    lastUpdated: '12 mins ago',
  },
];

const STATUS_COLORS: Record<CourtStatus, string> = {
  Available: '#1D9E75',
  Occupied: '#E24B4A',
  Maintenance: '#888780',
  Reserved: '#EF9F27',
};

const STATUS_ICONS: Record<CourtStatus, any> = {
  Available: CheckCircle2,
  Occupied: XCircle,
  Maintenance: AlertCircle,
  Reserved: Clock,
};

export default function CourtStatusPage() {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 24) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sports = Array.from(new Set(COURTS.map(c => c.sport)));

  const filteredCourts = COURTS.filter(court => {
    const matchesFilter = filter === 'All' || court.sport === filter;
    const matchesSearch = court.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          court.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          court.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: COURTS.length,
    available: COURTS.filter(c => c.status === 'Available').length,
    occupied: COURTS.filter(c => c.status === 'Occupied').length,
    maintenance: COURTS.filter(c => c.status === 'Maintenance').length,
  };

  return (
    <div className="min-h-screen bg-cream text-[#111111] selection:bg-accent selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#111111] pt-48 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C4622D 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif-display text-[clamp(56px,10vw,140px)] text-[#F5F0E8] uppercase leading-[0.85] tracking-[-0.03em] mb-12">
              COURT<br />
              <span className="normal-case tracking-normal text-accent">Status.</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div className="flex flex-col">
                <span className="font-condensed font-black text-6xl text-accent">{stats.available}</span>
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">AVAILABLE NOW</span>
              </div>
              <div className="flex flex-col">
                <span className="font-condensed font-black text-6xl text-[#F5F0E8]">{stats.occupied}</span>
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">CURRENTLY IN USE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-condensed font-black text-6xl text-white/20">{stats.maintenance}</span>
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-2">MAINTENANCE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section 
        className={`sticky z-30 px-6 md:px-12 lg:px-24 py-4 md:py-6 bg-[#F5F0E8]/80 backdrop-blur-xl border-b border-[#111111]/05 transition-all duration-500 ${
          isNavVisible ? 'top-20' : 'top-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
            <button 
              onClick={() => setFilter('All')}
              className={`font-mono-custom text-[10px] uppercase tracking-[0.2em] font-black px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                filter === 'All' ? 'bg-accent text-white shadow-md' : 'bg-white border border-[#111111]/10 hover:border-accent/40'
              }`}
            >
              ALL FACILITIES
            </button>
            {sports.map(sport => (
              <button 
                key={sport}
                onClick={() => setFilter(sport)}
                className={`font-mono-custom text-[10px] uppercase tracking-[0.2em] font-black px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                  filter === sport ? 'bg-accent text-white shadow-md' : 'bg-white border border-[#111111]/10 hover:border-accent/40'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111111]/30 group-focus-within:text-accent transition-colors" />
            <input 
              type="text"
              placeholder="Search by name or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#111111]/10 rounded-full py-3 pl-12 pr-6 font-mono-custom text-[11px] tracking-wider focus:outline-none focus:border-accent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-[1400px] mx-auto">
          {filteredCourts.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCourts.map((court) => {
                  const StatusIcon = STATUS_ICONS[court.status];
                  const color = STATUS_COLORS[court.status];
                  
                  return (
                    <motion.div
                      layout
                      key={court.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group relative bg-white border border-[#111111]/05 rounded-[24px] p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all overflow-hidden"
                    >
                      {/* Status Indicator Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: color }} />
                      
                      <div className="flex flex-col h-full">
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex flex-col gap-1">
                            <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] font-black text-accent">
                              {court.sport}
                            </span>
                            <h3 className="font-serif-display text-2xl text-[#111111] group-hover:text-accent transition-colors">
                              {court.name}
                            </h3>
                          </div>
                          <div 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono-custom text-[9px] uppercase tracking-[0.15em] font-black border"
                            style={{ color: color, borderColor: `${color}30`, backgroundColor: `${color}08` }}
                          >
                            <StatusIcon size={12} strokeWidth={3} />
                            {court.status}
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3 text-[#111111]/60">
                            <MapPin size={16} className="text-accent" />
                            <span className="font-mono-custom text-[11px] uppercase tracking-wider font-bold">
                              {court.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[#111111]/60">
                            <Clock size={16} className="text-accent" />
                            <span className="font-mono-custom text-[11px] uppercase tracking-wider font-bold">
                              Updated {court.lastUpdated}
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-[#111111]/05 flex items-center justify-between">
                          {court.status === 'Available' ? (
                            <button className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.2em] font-black text-accent hover:gap-3 transition-all">
                              BOOK NOW <ChevronRight size={14} />
                            </button>
                          ) : court.nextAvailable ? (
                            <div className="flex flex-col">
                              <span className="font-mono-custom text-[8px] uppercase tracking-widest text-[#111111]/40 font-bold">NEXT OPENING</span>
                              <span className="font-condensed font-black text-xl text-[#111111]">{court.nextAvailable}</span>
                            </div>
                          ) : (
                            <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] font-black text-[#111111]/30">
                              NO BOOKINGS TODAY
                            </span>
                          )}
                          
                          {court.occupancy !== undefined && court.occupancy > 0 && (
                            <div className="flex flex-col items-end">
                              <span className="font-mono-custom text-[8px] uppercase tracking-widest text-[#111111]/40 font-bold">CAPACITY</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-1 bg-[#111111]/05 rounded-full overflow-hidden">
                                  <div className="h-full bg-accent" style={{ width: `${court.occupancy}%` }} />
                                </div>
                                <span className="font-condensed font-black text-sm text-[#111111]">{court.occupancy}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#111111]/05 rounded-full mb-6">
                <Search className="w-8 h-8 text-[#111111]/20" />
              </div>
              <h3 className="font-serif-display text-2xl text-[#111111] mb-2">No facilities match your search</h3>
              <p className="font-mono-custom text-[11px] uppercase tracking-[0.2em] text-[#111111]/40 font-bold">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* App Promo Section (Derived from JSON) */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111111] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/05 blur-[120px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="text-accent" size={24} />
                <span className="font-mono-custom text-accent text-xs tracking-[0.4em] uppercase font-black">
                  THE SPORTS APP
                </span>
              </div>
              <h2 className="font-serif-display text-[clamp(48px,6vw,84px)] text-[#F5F0E8] leading-[0.95] mb-8">
                Your Arena,<br />
                <span className="text-accent">Anywhere.</span>
              </h2>
              <p className="text-[#F5F0E8]/60 text-lg leading-relaxed mb-12 max-w-xl">
                Experience the future of sports management at IIT Bombay with our comprehensive mobile application. 
                Get real-time court availability, instant booking, and live tournament updates right on your device.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-2xl">
                <div className="bg-white/05 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-condensed font-black text-accent text-xl uppercase mb-2">Real-Time Booking</h4>
                  <p className="text-white/40 text-xs leading-relaxed font-mono-custom tracking-wider">Reserve any facility in seconds with live status updates.</p>
                </div>
                <div className="bg-white/05 p-8 rounded-3xl border border-white/10">
                  <h4 className="font-condensed font-black text-accent text-xl uppercase mb-2">Live GC Scores</h4>
                  <p className="text-white/40 text-xs leading-relaxed font-mono-custom tracking-wider">Stay updated with tournament brackets and match schedules.</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/05 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Smartphone size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono-custom font-bold text-white/40 uppercase tracking-widest leading-none mb-1">DOWNLOAD FOR</span>
                    <span className="text-white font-condensed font-black text-lg tracking-tight">iOS APP STORE</span>
                  </div>
                </div>
                <div className="bg-white/05 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Smartphone size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono-custom font-bold text-white/40 uppercase tracking-widest leading-none mb-1">DOWNLOAD FOR</span>
                    <span className="text-white font-condensed font-black text-lg tracking-tight">GOOGLE PLAY</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
