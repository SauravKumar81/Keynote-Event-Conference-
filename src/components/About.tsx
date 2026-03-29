import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="bg-[#b0a3d4] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">About</span>
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
              Read our story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" alt="Audience at event" className="w-full h-[50vh] md:h-[70vh] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </div>
    </section>
  );
}