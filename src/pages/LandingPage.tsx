import Bar from "../components/Bar";
const LandingPage = () => {
  return (
   <>
  <div className="relative min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] overflow-hidden">
  {/* <!-- Glow effect --> */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

  {/* <!-- Content --> */}
  <Bar></Bar>
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
    <h1 className="text-4xl font-bold">Linear is a better way to build products</h1>
    <p className="mt-4 text-lg text-gray-300">Meet the new standard for modern software development.</p>
    <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg">
      Get Started
    </button>
  </div>
</div>
   </>
  )
}

export default LandingPage