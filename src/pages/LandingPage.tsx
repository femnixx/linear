import Bar from "../components/Bar"

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-[#7877C64D]/30 to-[#FFFFFF]/0">
        <Bar></Bar>
        {/* title card */}
        <div>
          {/* introducing linear heights */}
          <div className="flex justify-center items-center">
            <p>Introducing Linear Insights</p>
            <p> -&gt; </p>
          </div>
          <p className="mt-3">Linear is a better way <br /> to build products</p>
          <p className="mt-3">Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps.</p>
          <p></p>
        </div>
        <button><div className="flex gap-x-1.5">
          <p>Get Started</p>
        <p> &gt; </p>
          </div></button>
          <p className="mt-13">Image</p>
        <p>Powering the world's best product teams. From next-gen startups to established enterprises.</p>
        <div>
          logos
        </div>
    </div>
  )
}

export default LandingPage