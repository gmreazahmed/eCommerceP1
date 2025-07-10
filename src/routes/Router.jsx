import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../component/common/Login";
import Signup from "../component/common/Signup";
import NotFound from "../component/common/NotFound";
import About from './../pages/About';
import Products from "../products/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/>},
      { path: "/about", element: <About/>},
      { path: "/products", element: <Products/>},
      
    ]
  },
  { path: "/login", element: <Login/>},
  { path: "/signup", element: <Signup />},
  { path: "*", element: <NotFound />},
  
]);
