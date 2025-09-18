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
        </div>
    </div>
  )
}

export default LandingPage