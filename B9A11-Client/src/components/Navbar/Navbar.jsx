import { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";



const Navbar = () => {


const handleSignOut = () => {
  logOut()
    .then()
    .catch((error) => alert(error));
};
  const { user, logOut } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/alljobs"}>All Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>

      {user?.email ? (
        <>
          <li>
            <NavLink to={"/addjob"}>Add a Job</NavLink>
          </li>
          <li>
            <NavLink to={"/myjobs"}>My Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/appliedjobs"}>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"userprofile"}>User Profile</NavLink>
          </li>
        </>
      ) : null}
    </>
  );



  

  return (
    <div className="navbar bg-transparent  rounded-3xl px-3 z-10 my-8">
      <div className="navbar-start">
        <div className="dropdown">
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
            {navItems}
          </ul>
        </div>
        <div className="flex-1">
          <NavLink to={"/"} className="heading text-3xl">
            Job<strong className="text-[#2a68ff] px-0 m-0">Hunt</strong>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* theme controler */}
        <div className="mr-1 flex items-center justify-center ">
          <label className="swap swap-rotate cursor-pointer">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-2 h-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* sun icon path */}
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-2 h-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* moon icon path */}
            </svg>
          </label>
          
          <ThemeSwitcher />
        </div>
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div
              tabIndex={0}
              // role="button"
              className=" btn-circle avatar tooltip tooltip-bottom hidden md:block"
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full ">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/sqK4TMj/user.png"
                  }
                />
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="btn  px-5 py-2 bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]"
            >
              Logout
            </button>

            {/* Render logout button outside dropdown for larger screens */}
          </div>
        ) : (
          <Link to="/login">
            <button className="btn px-5 py-2  bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff]">
              LogIn
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
