import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ToDoList from "../Pages/Dashboard/ToDoList/ToDoList";
import OngoingList from "../Pages/Dashboard/OngoingList/OngoingList";
import CompletedList from "../Pages/Dashboard/CompletedList/CompletedList";
import PrivateRoute from "./PrivateRoute";
import CreateList from "../Pages/Dashboard/CreateList/CreateList";
import UpdateList from "../Pages/Dashboard/UpdateList/UpdateList";
import DetailsList from "../Pages/Dashboard/DetailsList/DetailsList";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create",
        element: (
          <PrivateRoute>
            <CreateList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <PrivateRoute>
            <UpdateList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/details/:id",
        element: (
          <PrivateRoute>
            <DetailsList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/toDoList",
        element: (
          <PrivateRoute>
            <ToDoList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/ongoingList",
        element: (
          <PrivateRoute>
            <OngoingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/completedList",
        element: (
          <PrivateRoute>
            <CompletedList />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default Route;
