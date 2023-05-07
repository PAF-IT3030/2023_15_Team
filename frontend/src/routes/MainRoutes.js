import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";



const MainRoutes = 
 createBrowserRouter ([
  
  {
    path: "/Home",
    element: <MainLayout/>,
    children: [
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/Home/Profile",
        element: <Profile/>
      }

    ]},

     {   
        path: "/SignUp",
        element: <SignUp/>,
      },
     {
      path: "/",
      element: <SignIn/>,
     }
  ])
        

export default MainRoutes;