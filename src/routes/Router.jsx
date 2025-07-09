import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../component/common/Login";
import Signup from "../component/common/Signup";
import NotFound from "../component/common/NotFound";
import About from './../pages/About';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/>},
      { index: "/about", element: <About/>},
      
    ]
  },
  { path: "/login", element: <Login/>},
  { path: "/signup", element: <Signup />},
  { path: "*", element: <NotFound />},
  
]);
