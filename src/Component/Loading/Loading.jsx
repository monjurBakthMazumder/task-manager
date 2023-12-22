import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center w-full">
      <ClockLoader color="#0000ff" size={100} />
    </div>
  );
};

export default Loading;
