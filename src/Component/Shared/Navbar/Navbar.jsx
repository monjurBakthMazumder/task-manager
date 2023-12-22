import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";

const Navbar = () => {
  const { user } = UseAuth();

  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/Profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2 mb-2">
      <div className="mr-auto">
        <Link to={"/"} className="text-xl md:text-2xl font-bold">
          Task Manager
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="">
        {!user && (
          <Link to={"/login"} className="btn btn-primary btn-sm rounded-none">
            Login
          </Link>
        )}
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
