const SingleFollowing = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex gap-4 items-center">
        <img
          className="object-cover w-16 h-16 rounded-full"
          src="https://i.ibb.co/xCvndYT/Screenshot-from-2024-01-05-12-39-14.png"
        />
        <div>
          <h2 className="text-xl text-gray-700">Pravin Singh</h2>
          <small className="text-gray-400">Following: 200</small>
        </div>
      </div>
      <div>
        <button
          className="ml-auto bg-white text-gray-500 px-7 py-2 rounded font-medium shadow-lg hover:text-gray-700"
          type="submit"
        >
          Following
        </button>
      </div>
    </div>
  );
};

export default SingleFollowing;
