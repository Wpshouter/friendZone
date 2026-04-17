
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const links = <>
                <li><NavLink className={({ isActive }) => (isActive ? "bg-emerald-900 btn text-white lg:btn-primary justify-start " : "hover:bg-emerald-700 ")} to={"/"}><IoHomeOutline className='text-md'/> Home</NavLink></li>
                 <li><NavLink className={({ isActive }) => (isActive ? "bg-emerald-900 btn text-white lg:btn-primary justify-start" : "hover:bg-emerald-700 ")} to={"/timeline"} ><RiTimeLine className='text-md' /> TimeLine</NavLink></li>
                   <li><NavLink className={({ isActive }) => (isActive ? "bg-emerald-900 btn text-white lg:btn-primary justify-start" : "hover:bg-emerald-700 ")} to={"/stats"}  ><ImStatsDots className='text-md' /> Stats</NavLink></li>
                </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 lg:px-15">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 text-left">
             {links}
      </ul>
    </div>
    <Link to="/" className="text-xl"><img src="/assets/logo.png" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal px-1 items-center gap-3 hidden lg:flex">
     {links}
    </ul>
    {/* <a className="btn">Button</a> */}
  </div>
</div>
    );
};

export default Navbar;