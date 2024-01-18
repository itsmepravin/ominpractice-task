const SinglePost = () => {
  return (
    <div className="flex gap-4 bg-white shadow-lg sm:rounded-lgm p-6 rounded-xl mb-4">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="self-center">
        <button
          className="ml-auto bg-red-400 text-white px-7 py-2 rounded-full font-medium shadow-lg hover:text-gray-700"
          type="submit"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
