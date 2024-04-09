import { Link, NavLink } from "react-router-dom";
import 'animate.css';


const Navbar = () => {
    const navLinks = 
    <>
    <li><NavLink className={({isActive})=> isActive? 'text-pink-600 font-bold text-xl ': 'font-bold text-xl text-blue-950' }  to = '/'>Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? 'text-pink-600 font-bold text-xl ': 'font-bold text-xl text-blue-950' } to = '/updateProfile'> Update Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-100 px-8 md:px-12 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to= '/' className="btn btn-ghost text-lg md:text-xl lg:text-2xl flex gap-0 text-primary font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-1000">Haven<span className="text-pink-500">Homes</span></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
          { navLinks}
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;