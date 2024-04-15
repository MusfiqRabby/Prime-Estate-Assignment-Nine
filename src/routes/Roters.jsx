import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import NotFound from "../pages/Navbar/NotFound";
import Details from "../pages/Home/Details";

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
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/card/:id',
          element: <Details></Details>,
          loader: () => fetch('../fakeData.json')
        }
      
      ]
    },
  ]);

  export default router