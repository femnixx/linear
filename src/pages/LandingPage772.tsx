import circleshadow from "../assets/circleshadow.svg";
import keyboard from "../assets/keyboard.svg";
import lightning from "../assets/lightning.svg";


const LandingPage772 = () => {
  return (
    <div className="relative bg-[#000212] w-full h-screen overflow-x-hidden">
      <div className="flex gap-x-5 mt-3 justify-center">
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
    </div>
        {/* Fog effect and line */}
        <div>
          <div className="">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
                bg-[radial-gradient(ellipse_at_center,rgba(120,120,200,0.3),transparent_70%)] 
                blur-3xl opacity-70 pointer-events-none">
</div>

          </div>
        </div>
      <div></div>
      <div className="relative mt-20"> 
          <p className="text-center">curve here</p>
        {/* Text Content */}
        <p className="text-white text-center text-2xl font-semibold mt-4 mx-5">
          Unlike any tool you've used before
        </p>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-5 text-sm">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
        
      </div>
      <div className=" flex flex-col">
            <div className="bg-white/7 p-5 mx-5 rounded-xl">
              <img src={keyboard} alt="" />
              <p>Built for your keyboard</p>
              <p>Fly through your tasks with rapid-fire keyboards hortcuts for everything. Literally everything.</p>
            </div>
            <div>
              <img src={lightning} alt="" />
            </div>
            <div>
              <img src={circleshadow} alt="" />
            </div>
          </div>
    </div>
  );
};

export default LandingPage772;
