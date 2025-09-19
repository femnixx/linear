import Bar from "../components/Bar";
const LandingPage = () => {
  return (
   <>
  <div className="relative min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] overflow-hidden">
  {/* <!-- Glow effect --> */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

  {/* <!-- Content --> */}
  <Bar></Bar>
  <div className="relative flex flex-col justify-center min-h-screen text-white">
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center justify-center gap-x-3 bg-white/5 w-fit rounded-full px-3 py-1">
        <p className="text-xs ">Introducing Linear Insights</p>
        <div className="rounded-full px-1 bg-white/5 flex items-center justify-center"><p>-&gt;</p></div>
      </div>
    </div>
    <h1 className="text-4xl font-bold text-center mx-3 mt-6">Linear is a better way to build products</h1>
    <p className="mt-4 text-gray-300 text-center">Meet the new standard for modern software development.</p>
    <div className="w-full flex justify-center">
      <button className=" text-sm w-fit mt-6 px-6 py-3 bg-gradient-to-r from-[#455EB5] via-[#5643CC] to-[#673FD7] rounded-full shadow-lg">
        Get Started &gt;
      </button>
    </div>
  </div>
</div>
   </>
  )
}

export default LandingPage