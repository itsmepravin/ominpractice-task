import loginImg from "../_assets/img/loginImg.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="pl-12">
      <div className="text-red-400 font-bold text-3xl mb-4 lg:mb-0 hover:text-red-400 hover:cursor-pointer pl-6 mt-6">
        TweetX{" "}
      </div>
      <div className="flex flex-col p-6">
        <div className="mt-6 mb-4">
          <a
            className="inline w-auto min-w-[250px] px-10 py-3 transition-all rounded-xl sm:w-auto border border-1 border-gray-400 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white"
            href=""
          >
            Create Account
          </a>
        </div>

        <div className="flex flex-row">
          {/* Left */}
          <div className="container mx-auto bg-white flex flex-col mt-24 text-gray-700">
            <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-16">
              <h1 className="text-2xl font-semibold text-gray-600">Login</h1>
            </div>
            <div className="w-3/4 flex flex-col gap-4">
              <input
                className="mb-4 p-4 appearance-none block w-full bg-gray-100 placeholder-gray-400 rounded-lg"
                type="text"
                placeholder="Email"
              />
              <input
                className="mb-4 p-4 appearance-none block w-full bg-gray-100 placeholder-gray-400 rounded-lg"
                type="password"
                placeholder="Password"
              />
              <div className="flex items-center">
                <div className="w-1/2 flex items-center">
                  <small className="text-gray-500">Forgot Password ?</small>
                </div>
                <button
                  className="ml-auto w-1/4 bg-red-400 text-white p-2 rounded font-medium shadow-lg"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <Image
            className="w-3/6"
            src={loginImg}
            alt="Login Image"
            width={825}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
