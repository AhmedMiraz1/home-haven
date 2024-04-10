import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorElement from "../components/ErrorElement";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([

    {
        path: '/',
        element : <MainLayout/>,
        errorElement:<ErrorElement/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/contact',
                element: <Contact/>
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