import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
