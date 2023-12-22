import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
