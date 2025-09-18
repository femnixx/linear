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
          <p>Linear is a better way <br /> to build products</p>
          <p>Meet the new standard for modern software development. <br /> Streamline issues, sprints, and product roadmaps.</p>
        </div>
    </div>
  )
}

export default LandingPage