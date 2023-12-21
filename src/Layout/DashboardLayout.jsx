import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import toast from "react-hot-toast";

const DashboardLayout = () => {
  const { logoutUser } = UseAuth();
  const logOutSuccessToast = () => toast.success("Logout successfully");
  const logOutErrorToast = () => toast.error("Something went wrong");
  const navigate = useNavigate();
  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        logOutSuccessToast();
        navigate('/');
      })
      .catch(() => {
        logOutErrorToast();
      });
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden mr-auto"
        >
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
        </label>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/"} className="text-xl md:text-2xl font-bold">
              Task Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/create"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/toDoList"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              ToDo list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/ongoingList"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Ongoing list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/completedList"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Completed list
            </NavLink>
          </li>
          <li>
            <>
              <button onClick={handleLogOut}>Log out</button>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
