import { SCHEDULE_DAY_1 } from '../data/eventData';

export default function Schedule() {
  return (
    <section className="bg-[#050505] text-white px-6 py-24 md:px-12 md:py-32 selection:bg-[#b0a3d4] selection:text-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center border-b border-gray-800 mb-16 md:mb-24">
          <button className="px-8 py-4 border-b-2 border-white text-white text-xl font-medium">Day 1</button>
          <button className="px-8 py-4 border-b-2 border-transparent text-gray-600 hover:text-white text-xl font-medium transition-colors">Day 2</button>
        </div>

        <div className="space-y-0">
          {SCHEDULE_DAY_1.map((item, index) => (
            <div key={item.id} className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12 ${index !== SCHEDULE_DAY_1.length - 1 ? 'border-b border-gray-800/50' : ''} group hover:bg-white/[0.02] transition-colors -mx-6 px-6 rounded-2xl`}>
              <div className="text-gray-400 flex flex-row md:flex-col gap-4 md:gap-1 items-baseline md:items-start">
                <div className="text-2xl font-medium text-white group-hover:text-[#b0a3d4] transition-colors">{item.time}</div>
                <div className="text-sm uppercase tracking-wider">{item.duration}</div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{item.title}</h3>
                {item.subtitle && <p className="text-[#b0a3d4] text-lg font-medium mb-4">{item.subtitle}</p>}
                <p className="text-gray-400 text-lg font-light mb-8 max-w-2xl leading-relaxed">{item.desc}</p>
                {item.avatars.length > 0 && (
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {item.avatars.map((avatar, i) => (
                        <img key={i} src={avatar} alt="Speaker" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" />
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