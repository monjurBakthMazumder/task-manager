import Loading from "../../../Component/Loading/Loading";
import useGetStats from "../../../Hook/useGetStats";
import BarCh from "../Profile/BarCh";
import Chart from "../Profile/Chart";

const Dashboard = () => {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start">
            Dashboard
          </h1>
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

export default Dashboard;
