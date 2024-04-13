import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
  <aside>
    <h1 className=" text-lg md:text-xl lg:text-2xl flex gap-0 text-green-500 font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-2000 my-8 underline ">Haven<span  className="text-pink-500">Homes</span></h1>
    <p className="font-bold text-lg md:text-xl  my-4">
    HavenHomes: Your Sanctuary in Every Step <br/>It has been serving you since 2010
    </p> 
    <p className="text-sm md:text-lg lg:text-xl">Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-6">
     <p className="text-2xl"><FaGithub/></p>
     <p className="text-2xl"><FaFacebook/></p>
     <p className="text-2xl"><FaTwitter/></p>
    </div>
  </nav>
</footer>
    );
};

export default Footer;