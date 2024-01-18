import loginImg from "../_assets/img/loginImg.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex flex-col p-6">
      <div className="mt-6 mb-4">
        <a
          className="inline w-auto min-w-[250px] px-10 py-3 transition-all rounded-md sm:w-auto border border-1 border-gray-900"
          href=""
        >
          Create Account
        </a>
      </div>

      <div className="flex flex-row">
        {/* Left */}
        <div className="container mx-auto bg-white flex flex-col mt-24 text-gray-700">
          <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-16">
            <h1 className="text-4xl font-semibold">Login</h1>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <input
              className="mb-4 p-4 appearance-none block w-full bg-gray-100 placeholder-gray-400 rounded"
              type="text"
              placeholder="Email"
            />
            <input
              className="mb-4 p-4 appearance-none block w-full bg-gray-100 placeholder-gray-400 rounded"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center">
              <div className="w-1/2 flex items-center">
                <small className="text-gray-500">Forgot Password?</small>
              </div>
              <button
                className="ml-auto w-1/4 bg-red-400 text-white p-2 rounded font-medium"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <Image className="w-1/2" src={loginImg} alt="Login Image" width={850} />
      </div>
    </div>
  );
};

export default LoginPage;
