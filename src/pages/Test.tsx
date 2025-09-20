export default function FogGlowDemo() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0b0f17] flex items-center justify-center overflow-hidden">

      {/* Fog layers */}
      

      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-white text-4xl font-bold mb-2">Fog + Glow + Stacking</h1>
        <p className="text-white/70">Purplish-black background with drifting fog</p>
      </div>

      {/* Glowing orb */}
      <div className="absolute z-10 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl shadow-[0_0_120px_60px_rgba(0,191,255,0.2)] "></div>
    </div>
  );
}
