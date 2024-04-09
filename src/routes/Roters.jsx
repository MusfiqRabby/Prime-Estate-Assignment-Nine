import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import UserProfile from "../pages/userProfile/UserProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import NotFound from "../pages/Navbar/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/update profile',
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: '/user profile',
            element: <UserProfile></UserProfile>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router