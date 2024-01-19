import SingleFollower from "./SingleFollower";

const Followers = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[500px] pt-12 gap-12">
      <SingleFollower applyBorder={false} following={false} />
      <SingleFollower applyBorder={false} following={false} />
      <SingleFollower applyBorder={false} following={false} />
    </div>
  );
};

export default Followers;
