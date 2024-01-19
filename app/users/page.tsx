import SingleFollower from "../_components/Followers/SingleFollower";

const UsersPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between items-center w-[500px] pt-12 gap-12">
        <SingleFollower applyBorder={true} following={true} />
        <SingleFollower applyBorder={true} following={false} />
        <SingleFollower applyBorder={true} following={true} />
      </div>
    </div>
  );
};

export default UsersPage;
