import { Ticket, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#b0a3d4] flex flex-col justify-between p-6 md:p-12 overflow-hidden selection:bg-black selection:text-[#b0a3d4]">
      <nav className="flex justify-between items-center z-10 relative">
        <div className="border border-black px-3 py-1 text-sm font-bold tracking-widest uppercase">Keynote</div>
        <button className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 font-medium hover:bg-gray-800 transition-colors">
          <Ticket className="w-4 h-4" /> Buy tickets
        </button>
      </nav>

      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        <h1 className="text-[18vw] font-black tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-cover bg-center select-none" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'black' }}>
          Offscreen
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-white text-2xl md:text-4xl font-light z-10 relative w-full gap-4 md:gap-0">
        <span className="shrink-0">01/02.07</span>
        <div className="hidden md:block h-px bg-white/40 flex-1 mx-8"></div>
        <span className="shrink-0">2026</span>
        <div className="hidden md:block h-px bg-white/40 flex-1 mx-8"></div>
        <span className="shrink-0">Amsterdam</span>
      </div>


    </section>
  );
}