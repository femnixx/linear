import circleshadow from "../assets/circleshadow.svg";
import commandline from "../assets/commandline.svg";
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
            
            {/* keyboard */}
            <div className="bg-white/7 p-3 mx-5 rounded-xl mt-5 ">
              <img src={keyboard} alt="" />
              <div className="flex x-scr gap-x-1 justify-end">
              <div className="flex pr-1 gap-x-0.5 text-xs bg-white/10 rounded-full px-2">
                <p className="text-[12px]">K</p>
                <p className="text-[10px]">Opens command line</p>
              </div>
              <div className="flex gap-x-1 pr-1 text-xs bg-white/10 rounded-full px-2">
                <p className="text-[12px]">I</p>
                <p className="text-[10px]">Assign issue to me</p>
              </div>
              </div>
              <p>Built for your keyboard</p>
              <p>Fly through your tasks with rapid-fire keyboards hortcuts for everything. Literally everything.</p>
            </div>
            
            {/* lightning */}
            <div className="bg-white/7 p-5 mx-5 rounded-xl mt-5">
              <img src={lightning} alt="" />
              <p className="text-center font-bold">Breathtakingly fast</p>
              <p className="text-center text-xs">Built for speed with 50ms interactions and real-time sync.</p>
            </div>

            {/* circleshadow */}
            <div className="text-center bg-white/10 rounded-xl p-5 m-5">
              <img src={circleshadow} alt="" className="h-fit"/>
              <div className="-mt-25">
                <p className="font-bold">Designed for modern software teams</p>
                <p className="text-xs">Comes with built-in workflows that create focus and routine.</p>
              </div>
            </div>

            {/* commandline */}
            <div className="">
              <img src={commandline} alt="" />
            </div>
          </div>
    </div>
  );
};

export default LandingPage772;
