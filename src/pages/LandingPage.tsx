import Bar from "../components/Bar"

const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
        <Bar></Bar>
        {/* title card */}
        <div>
          {/* introducing linear heights */}
          <div className="flex">
            <p>Introducing Linear Insights</p>
            <p> -&gt; </p>
          </div>
        </div>
    </div>
  )
}

export default LandingPage