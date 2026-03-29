export default function Footer() {
  return (
    <footer className="bg-[#b0a3d4] text-black px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-2xl font-black tracking-tighter uppercase">Offscreen</div>
      <div className="flex gap-6 font-medium">
        <a href="#" className="hover:opacity-70 transition-opacity">Twitter</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
      </div>
      <div className="text-sm font-medium opacity-70">© 2026 Offscreen Event. All rights reserved.</div>
    </footer>
  );
}