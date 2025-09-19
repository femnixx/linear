import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Frame from "../assets/Frame.png";
import Bar from "../components/Bar";
import LandingPage772 from "./LandingPage772";

gsap.registerPlugin(useGSAP);

const LandingPage = () => {
  return (
   <>
  <div className="relative min-h-screen bg-gradient-to-b from-[#000212] to-[#1a1a2e] overflow-x-hidden">
  {/* <!-- Glow effect --> */}
  <div className="absolute inset-0.5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_90%)] pointer-events-none"></div>

  {/* <!-- Content --> */}
  <Bar></Bar>
  <div className="flex flex-col justify-center mt-8 text-white">
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center justify-center gap-x-3 bg-white/5 w-fit rounded-full pl-3 pr-1.5 py-1">
        <p className="text-xs">Introducing Linear Insights</p>
        <div className="rounded-full px-2.5 bg-white/5 flex items-center justify-center"><p>-&gt;</p></div>
      </div>
    </div>
    <h1 className="text-3xl font-bold text-center mx-3 mt-6">Linear is a better way to build products</h1>
    <p className="mt-2 text-gray-300 text-center text-sm">Meet the new standard  for modern <br></br> software development.</p>
    <div className="w-full flex justify-center">
      <button className=" text-sm w-fit mt-4 px-3 py-2.5 bg-gradient-to-r from-[#455EB5] via-[#5643CC] to-[#673FD7] rounded-full shadow-lg">
        Get Started &gt;
      </button>
    </div>
    <img src={Frame} alt="frame " className="mt-8 mx-5 shadow-lg shadow-white/10"/>
    <div className="text-center gap-y-0.5 flex flex-col mt-8 my-2">
      <p className="text-xs text-[#B4BCD0]">Powering the world's best product teams.</p>
      <p className="text-sm">From next-gen startups to established enterprises.</p>
    </div>
    <div className="flex gap-x-5 mb-2">
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
      <p>LOGO</p>
    </div>
    <LandingPage772></LandingPage772>
  </div>
</div>
   </>
  )
}

export default LandingPage