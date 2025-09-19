import menubutton from "../assets/menubutton.svg"

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
      <div className="flex justify-between items-center w-full mt-5 mx-5">
        <button className="hover:cursor-pointer border-white/30 border-2 rounded-full p-1 bg-white/20"><img src={menubutton} alt="menu hamburger" /> </button> 
        {/* login and signin */}
        <div className="gap-x-3 flex">
        <button className="text-sm">Login</button>
          <button className="text-sm bg-gradient-to-r from-[#455EB5] via-[#5643CC] to-[#673FD7] px-2 py-1 rounded-full">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Bar