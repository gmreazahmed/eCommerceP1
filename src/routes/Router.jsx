import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import Home from "../pages/Home";
import About from './../pages/About';
import Products from "../products/Products";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/>},
      { path: "/about", element: <About/>},
      { path: "/products", element: <Products/>},
      { path: "/contact", element: <Contact/>},
      
    ]
  },
  { path: "/login", element: <Login/>},
  { path: "/signup", element: <Signup />},
  { path: "*", element: <NotFound />},
  
]);
