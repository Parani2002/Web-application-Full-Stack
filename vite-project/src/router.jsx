import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";

import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout />,
        children:[
            {
                path:'/',
                element:<Navigate to="/users"/>,
            },
            {
                path:'/dashboard',
                element:<Dashboard /> mmmm
            },
            {
                path:'/users',
                element:<Users />
        
            }

        ]
    },
    {
        path:"/",
        element:<GuestLayout />,
        children:[
            {
                path:'/login',
                element:<Login />
        
            },
            {
                path:'/signup',
                element:<Signup />
        
            },

        ]
    },
    
  
    {
        path:'*',
        element:<NotFound />

    }



])

export default routes;