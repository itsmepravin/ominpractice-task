const SamplePage = () => {
  const repeatArr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="mt-6 mb-4">
          <a
            className="inline w-auto min-w-[250px] px-10 py-3 text-white transition-all rounded-md shadow-xl sm:w-auto bg-red-400"
            href=""
          >
            Write
          </a>
        </div>

        {/* Users */}
        {repeatArr.map((e) => {
          return (
            <div className="flex gap-4 bg-white shadow-lg sm:rounded-lgm p-6 rounded-lg mb-4">
              <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://i.ibb.co/xCvndYT/Screenshot-from-2024-01-05-12-39-14.png"
                />
              </div>
              <div className="px-4 py-6 sm:p-0 flex flex-col">
                <h2 className="text-xl font-medium leading-6 text-gray-500">
                  Arjun Reddy
                </h2>
                <div className="mt-1 max-w-xl text-sm text-gray-400 self-end">
                  <p>10 mins ago</p>
                </div>
                <div className="mt-2 max-w-xl text-sm text-gray-400 ">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SamplePage;
