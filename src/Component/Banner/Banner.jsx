import { Link } from "react-router-dom";
import img from "../../assets/1.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl"   data-aos="zoom-in">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold">
            Effortless task mastery begins here
          </h1>
          <p className="text-xs md:text-base my-3">
            Efficiently organize tasks with our user-friendly task manager.
            Streamline productivity, set deadlines, and achieve goals
            effortlessly on our website.
          </p>
          <Link
            to={"/dashboard/dashboard"}
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
