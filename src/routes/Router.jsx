import React from "react";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/>},
      
    ]
  },
  { path: "/login", element: <Login/>},
  { path: "/signup", element: <Signup />},
  { path: "*", element: <NotFound />},

  
]);
