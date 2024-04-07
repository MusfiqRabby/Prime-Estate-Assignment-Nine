import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import UserProfile from "../pages/userProfile/UserProfile";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/update profile',
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: '/user profile',
            element: <UserProfile></UserProfile>
        }
      ]
    },
  ]);

  export default router