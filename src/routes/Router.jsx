import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorElement from "../components/ErrorElement";
import Blog from "../pages/Blog";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HouseDetails from "../pages/HouseDetails";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element : <MainLayout/>,
        errorElement:<ErrorElement/>,
        children : [
            {
                path: '/',
                element: <Home/>,
               
            },
            {
                path:'/house/:id',
                element:<PrivateRoute> <HouseDetails/></PrivateRoute>,
                loader: ()=> fetch("/residential.json")
                

            },
           
            {
                path: '/blog',
                element: <Blog/>
            },
            
            {
                path: '/updateProfile',
                element: <UpdateProfile/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])


export default router