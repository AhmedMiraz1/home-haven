import { Link, NavLink } from "react-router-dom";
import 'animate.css';
    


const Navbar = () => {
   
    return (
        <div className="navbar bg-blue-100 px-8 md:px-12 lg:px-16 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
            Home
          </NavLink>
          <NavLink to='/about' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          About
          </NavLink>
          <NavLink to='/blog' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          Blog
          </NavLink>
          <NavLink to='/contact' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
         Contact
          </NavLink>
          <NavLink to='/updateProfile' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold ': 'font-bold' }>
          Update Profile
          </NavLink>
            </ul>
          </div>
          <Link to= '/' className="btn btn-ghost text-lg md:text-xl lg:text-2xl flex gap-0 text-primary font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-1000">Haven<span className="text-pink-500">Homes</span></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold  text-xl': 'font-bold text-xl' }>
            Home
          </NavLink>
          <NavLink to='/about' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          About
          </NavLink>
          <NavLink to='/blog' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          Blog
          </NavLink>
          <NavLink to='/contact' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
         Contact
          </NavLink>
          <NavLink to='/updateProfile' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold text-xl ': 'font-bold text-xl' }>
          Update Profile
          </NavLink>
           
          </ul>
        </div>
        
        <div className="navbar-end">
        
          <Link to= '/login' className="btn">LogIn</Link>
        </div>
      </div>
    );
};

export default Navbar;