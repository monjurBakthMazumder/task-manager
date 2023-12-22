import Loading from "../../../Component/Loading/Loading";
import UseAuth from "../../../Hook/UseAuth";
import useGetStats from "../../../Hook/useGetStats";
import BarCh from "./BarCh";
import Chart from "./Chart";

const Profile = () => {
  const { user } = UseAuth();
  const { stats, isPending } = useGetStats();
  const pieChartData = [
    { name: "Total ToDo", value: stats?.todo },
    { name: "Total Ongoing", value: stats?.ongoing },
    { name: "Total Complete", value: stats?.completed },
  ];
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className=" flex flex-col justify-center p-5 md:p-10 text-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-5 md:my-10">
            <div className="p-5 md:p-10 border shadow-lg" data-aos="zoom-in">
              <h1 className="text-6xl sm:text-7xl lg:text-68xl font-bold">
                {stats?.todo}
              </h1>
              <p className="text-lg lg:text-xl ">ToDo list</p>
            </div>
            <div className="p-5 md:p-10 border shadow-lg" data-aos="zoom-in">
              <h1 className="text-6xl sm:text-7xl lg:text-68xl font-bold">
                {stats?.ongoing}
              </h1>
              <p className="text-lg lg:text-xl ">Ongoing list</p>
            </div>
            <div className="p-5 md:p-10 border shadow-lg" data-aos="zoom-in">
              <h1 className="text-6xl sm:text-7xl lg:text-68xl font-bold">
                {stats?.completed}
              </h1>
              <p className="text-lg lg:text-xl ">Complete list</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Chart pieChartData={pieChartData} />
            <BarCh stats={stats} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
