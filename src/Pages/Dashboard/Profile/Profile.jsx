import UseAuth from "../../../Hook/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  return (
    <div className=" flex flex-col justify-center items-center h-screen p-5 md:p-10 text-center">
      <div
        className=" flex flex-col justify-center items-center p-5 md:p-10 border shadow-lg"
        data-aos="zoom-in"
      >
        <div className=" max-w-[200px] w-full">
          <img
            src={user?.photoURL}
            alt={`image of ${user?.displayName}`}
            className="w-full rounded-xl"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl my-3 font-bold">
          {user?.displayName}
        </h1>
        <p className="text-lg lg:text-xl  font-bold">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
