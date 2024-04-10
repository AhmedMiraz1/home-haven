import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="font-poppins">
          
           <Navbar/> 
           
      <div className="container mx-auto px-8 min-h-[calc(100vh-437px)]">
      <Outlet/>
      </div>
           
             <Footer/>
            
        </div>
    );
};

export default MainLayout;