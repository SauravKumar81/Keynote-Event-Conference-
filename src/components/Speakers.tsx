import { SPEAKERS } from '../data/eventData';

export default function Speakers() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="bg-[#b0a3d4] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8">Speakers</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">Let the pro's<br />do the talking</h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl">
            Learn from indie founders, digital artists, and product designers at the top of their game. No fluff, just real insights.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="break-inside-avoid group cursor-pointer">
              <div className={`relative overflow-hidden rounded-2xl mb-4 bg-gray-900 ${speaker.aspectRatio}`}>
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#b0a3d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-[#b0a3d4] transition-colors">{speaker.name}</h3>
              <p className="text-gray-500 font-medium">{speaker.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="border border-white/20 text-white rounded-full px-8 py-4 font-medium hover:bg-white hover:text-black transition-all">View all speakers</button>
        </div>
      </div>
    </section>
  );
}