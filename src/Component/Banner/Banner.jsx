import { Link } from "react-router-dom";
import img from "../../assets/1.jpg";
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="relative">
      <img src={img} alt="banner" />
      <div className="absolute h-full w-full flex flex-col justify-center items-center top-0 bg-black bg-opacity-50 text-white text-center p-5 md:p-10">
        <div className=" md:max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold">
            Effortless task mastery begins here
          </h1>
          <p className="text-xs md:text-base my-3">
            Efficiently organize tasks with our user-friendly task manager.
            Streamline productivity, set deadlines, and achieve goals
            effortlessly on our website.
          </p>
          <Link
            to={"/dashboard/create"}
            className="btn btn-primary md:btn-lg rounded-none"
          >
            Let&#39;s Explore <FaArrowRight className="text-xl " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
