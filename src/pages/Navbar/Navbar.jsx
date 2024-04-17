import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";


const Navbar = () => {


  const { logOut, user } = useContext(AuthContext);

  const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/update profile'>Update Profile</NavLink></li>
    <li> <NavLink to='/contact'>Contact</NavLink> </li>
  </>


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Prime-Estate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end ">

        {
          user ?
            <>
              <div className="dropdown dropdown-end btn btn-circle tooltip tooltip-primary tooltip-left" data-tip={user?.displayName || 'user name not found'}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user?.photoURL || "https://i.ibb.co/cv8B8ws/19021605.jpg"} />
                  </div>
                </label>
              </div>
              <button
                onClick={logOut}
                className="btn btn-sm font-bold text-black hover:hover:bg-cyan-500 btn-ghost">Logout</button>
            </>
            :
            <Link to='/login'>
              <button className="btn btn-sm font-bold btn-ghost text-black hover:bg-cyan-500 ">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;