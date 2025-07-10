// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-6 px-[36px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[128px] flex items-center justify-between">
      {/* Logo */}
      <div className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] font-bold text-blue-600">
        <Link to="/">MyShop</Link>
      </div>

      {/* Menu Center */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>

      {/* Login/Signup Right */}
      <div className="space-x-3">
        <Link
          to="/login"
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
