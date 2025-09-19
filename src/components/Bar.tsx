
const Bar = () => {
  return (
    <div className="flex justify-between text-white">
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
      {/* sm-md screens */}
      <div className="flex justify-between items-center w-full">
        <p>-</p>  
        {/* login and signin */}
        <div className="gap-x-3 flex">
        <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Bar