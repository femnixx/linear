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
            <div className="bg-white/7 p-2 mx-5 rounded-xl mt-5 flex flex-col justify-center items-center text-center">
              <img src={keyboard} alt="" className="bg-white/10 p-0.5 rounded-lg"/>
              <div className="flex items-center justify-end gap-x-3">

                <div className="flex gap-x-1">
                  <p className="text-[10px]">^K</p>
                  <p className="text-[10px]">Opens command line</p>
                </div>

                <div className="flex gap-x-1">
                  <p className="text-[10px]">^I</p>
                  <p className="text-[10px]">Assign issue to me</p>
                </div>
              </div>
              <p className="font-bold mt-5">Built for your keyboard</p>
              <p className="text-xs mt-1.5">Fly through your tasks with rapid-fire keyboards hortcuts for everything. Literally everything.</p>
            </div>
            
            {/* lightning */}
            <div className="bg-white/7 p-5 mx-5 rounded-xl mt-5 flex flex-col gap-y-2">
              <img src={lightning} alt="" />
              <div className="-mt-15">
                <p className="text-center font-bold">Breathtakingly fast</p>
                <p className="text-center text-xs">Built for speed with 50ms interactions and real-time sync.</p>
              </div>
            </div>

            {/* circleshadow */}
            <div className="text-center bg-white/10 rounded-xl p-5 m-5 flex items-center justify-center flex-col">
              <img src={circleshadow} alt="" className="h-fit"/>
              <div className="-mt-25 w-3/4 gap-y-2 flex flex-col">
                <p className="font-bold">Designed for modern software teams</p>
                <p className="text-xs">Comes with built-in workflows that create focus and routine.</p>
              </div>
            </div>

            {/* commandline */}
            <div className="p-2 bg-white/10 text-center m-5 flex flex-col items-center justify-center gap-y-2 rounded-xl">
              <p className="font-bold">Meet your command line</p>
              <p className="text-center text-xs">Complete any action in seconds with the global command menu.</p>
              <img src={commandline} alt="" className="mt-5"/>
            </div>
          </div>
    </div>
  );
};

export default LandingPage772;
