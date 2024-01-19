import SingleFollowing from "./SingleFollowing";

const Followers = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[500px] pt-12 gap-12">
      <SingleFollowing />
      <SingleFollowing />
      <SingleFollowing />
    </div>
  );
};

export default Followers;
