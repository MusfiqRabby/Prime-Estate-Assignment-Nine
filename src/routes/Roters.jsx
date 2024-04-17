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
import Contact from "../pages/ExtraRoute/Contact";
import PrivateRoute from "../pages/Navbar/PrivateRoute";

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
          element: <PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
          loader: () => fetch('../fakeData.json')
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      
      ]
    },
  ]);

  export default router