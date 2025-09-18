
const Bar = () => {
  return (
    <div className="flex justify-between">
      {/* lg screens and above */}
      <div className="max-lg:hidden">
        {/* main bar */}
        <div className="flex">
        <p>Linear</p>
        <p>Features</p>
        <p>Method</p>
        <p>Customers</p>
        <p>Changelog</p>
        <p>Integrations</p>
        <p>Pricing</p>
        </div>
        {/* login and signup */}
        <div className="flex">
          Log in
          <div>
            Sign up
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Bar