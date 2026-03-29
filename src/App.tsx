/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Ticket, ArrowRight, ArrowUpRight } from 'lucide-react';

// --- Dummy Data ---

const SPEAKERS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Designer @ Stripe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder @ Framer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-square',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Lead Engineer @ Vercel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-square',
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Indie Maker',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 6,
    name: 'Tom Wilson',
    role: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    aspectRatio: 'aspect-[4/5]',
  },
];

const SCHEDULE_DAY_1 = [
  {
    id: 1,
    time: '09:00',
    duration: '45 min',
    title: 'Registration & Coffee',
    subtitle: '',
    desc: 'Grab your badge, a coffee, and meet your fellow attendees before the keynote begins.',
    avatars: [],
  },
  {
    id: 2,
    time: '10:00',
    duration: '60 min',
    title: 'The Future of Interfaces',
    subtitle: 'Keynote by Marcus Chen',
    desc: 'Exploring how AI and spatial computing will fundamentally change how we interact with digital products over the next decade.',
    avatars: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'],
  },
  {
    id: 3,
    time: '11:30',
    duration: '45 min',
    title: 'Building for the Web',
    subtitle: 'Panel Discussion',
    desc: 'A deep dive into modern web architecture, performance, and the tools shaping the future of frontend development.',
    avatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    ],
  },
  {
    id: 4,
    time: '13:00',
    duration: '90 min',
    title: 'Lunch Break',
    subtitle: '',
    desc: 'Enjoy a catered lunch from local food trucks and network with other attendees.',
    avatars: [],
  },
];

// --- Components ---

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#b0a3d4] flex flex-col justify-between p-6 md:p-12 overflow-hidden selection:bg-black selection:text-[#b0a3d4]">
      {/* Navigation */}
      <nav className="flex justify-between items-center z-10 relative">
        <div className="border border-black px-3 py-1 text-sm font-bold tracking-widest uppercase">
          Keynote
        </div>
        <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 font-medium hover:bg-gray-800 transition-colors">
          <Ticket className="w-4 h-4" /> Buy tickets
        </button>
      </nav>

      {/* Massive Text Mask */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        {/* 
          Using a background image clipped to text to replicate the effect in Image 2.
          The image is a placeholder face to match the vibe.
        */}
        <h1
          className="text-[18vw] font-black tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-cover bg-center select-none"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Fallback for browsers that don't support background-clip: text
            color: 'black',
          }}
        >
          Offscreen
        </h1>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col md:flex-row items-center justify-between text-white text-2xl md:text-4xl font-light z-10 relative w-full gap-4 md:gap-0">
        <span className="shrink-0">01/02.07</span>
        <div className="hidden md:block h-px bg-white/40 flex-1 mx-8"></div>
        <span className="shrink-0">2026</span>
        <div className="hidden md:block h-px bg-white/40 flex-1 mx-8"></div>
        <span className="shrink-0">Amsterdam</span>
      </div>

      {/* Floating Badges (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-2 z-20">
        <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
          Get template <ArrowUpRight className="w-3 h-3" />
        </button>
        <div className="bg-black/10 backdrop-blur-md border border-black/10 text-black text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2">
          Made in Framer
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="bg-[#b0a3d4] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            About
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Creatives.<br />
            Conversations.<br />
            <span className="text-[#b0a3d4]">Connections.</span>
          </h2>
          
          <div className="lg:pt-4 flex flex-col gap-8">
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
              This isn't your typical creative event. Think live talks, real connections, design jams, and no awkward networking. We bring together the brightest minds in design and tech for two days of inspiration.
            </p>
            <button className="flex items-center gap-2 text-white font-medium hover:text-[#b0a3d4] transition-colors w-fit group">
              Read our story 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
            alt="Audience at event" 
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="bg-[#b0a3d4] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">
            Speakers
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Let the pro's<br />do the talking
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl">
            Learn from indie founders, digital artists, and product designers at the top of their game. No fluff, just real insights.
          </p>
        </div>

        {/* Masonry Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="break-inside-avoid group cursor-pointer">
              <div className={`relative overflow-hidden rounded-2xl mb-4 bg-gray-900 ${speaker.aspectRatio}`}>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                {/* Purple overlay tint on hover */}
                <div className="absolute inset-0 bg-[#b0a3d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-[#b0a3d4] transition-colors">{speaker.name}</h3>
              <p className="text-gray-500 font-medium">{speaker.role}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <button className="border border-white/20 text-white rounded-full px-8 py-4 font-medium hover:bg-white hover:text-black transition-all">
             View all speakers
           </button>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-800 mb-16 md:mb-24">
          <button className="px-8 py-4 border-b-2 border-white text-white text-xl font-medium">
            Day 1
          </button>
          <button className="px-8 py-4 border-b-2 border-transparent text-gray-600 hover:text-white text-xl font-medium transition-colors">
            Day 2
          </button>
        </div>

        {/* Schedule List */}
        <div className="space-y-0">
          {SCHEDULE_DAY_1.map((item, index) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12 ${
                index !== SCHEDULE_DAY_1.length - 1 ? 'border-b border-gray-800/50' : ''
              } group hover:bg-white/[0.02] transition-colors -mx-6 px-6 rounded-2xl`}
            >
              <div className="text-gray-400 flex flex-row md:flex-col gap-4 md:gap-1 items-baseline md:items-start">
                <div className="text-2xl font-medium text-white group-hover:text-[#b0a3d4] transition-colors">{item.time}</div>
                <div className="text-sm uppercase tracking-wider">{item.duration}</div>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-[#b0a3d4] text-lg font-medium mb-4">{item.subtitle}</p>
                )}
                <p className="text-gray-400 text-lg font-light mb-8 max-w-2xl leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Avatars */}
                {item.avatars.length > 0 && (
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {item.avatars.map((avatar, i) => (
                        <img 
                          key={i} 
                          src={avatar} 
                          alt="Speaker" 
                          className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Speaker(s)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#b0a3d4] text-black px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-2xl font-black tracking-tighter uppercase">Offscreen</div>
      <div className="flex gap-6 font-medium">
        <a href="#" className="hover:opacity-70 transition-opacity">Twitter</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
      </div>
      <div className="text-sm font-medium opacity-70">
        © 2026 Offscreen Event. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased">
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
  );
}
