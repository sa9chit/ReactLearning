export const Login = () => {
  return (
    <div className="text-white h-full w-full bg-gray-400 flex items-center justify-center">
      <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 w-[60vw] shadow-2xl shadow-gray-950 h-[60vh]">
        <div className="text-center mb-10">
          <h1 className="text-3xl text-white font-bold tracking-widest mb-2">
            LOGIN
          </h1>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        </div>

        <form className="space-y-6 flex flex-col justify-around h-[50vh] ">
        <div className="flex w-full justify-center p-4">
  <input
    type="text"
    placeholder="Username"
    className="w-[70%] h-[5vh] bg-white/5 rounded-lg border-0 text-white placeholder-gray-400 focus:outline-2 focus:outline-purple-500 focus:bg-white/10 transition-all duration-300"
  />
</div>


          <div className="flex w-full justify-center">
            <input
              type="password"
              placeholder="Password"
              className="w-[70%] h-[5vh] py-3 bg-white/5 rounded-lg border-0 text-white placeholder-gray-400 focus:outline-2 focus:outline-purple-500 focus:bg-white/10 transition-all duration-300"
            />
          </div>

          <div className="w-full text-center">
            <button
              type="submit"
              className="w-[10vw]  py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold tracking-widest uppercase hover:from-pink-600 hover:to-purple-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign In
            </button>
          </div>

          <div className="text-center mt-6 space-y-3">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 text-sm transition-colors"
            >
              Forgot Password?
            </a>
            <br />
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 text-sm transition-colors"
            >
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
