import Bar from "../components/Bar"

const LandingPage = () => {
  return (
    <div className="">
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
    </div>
  )
}

export default LandingPage