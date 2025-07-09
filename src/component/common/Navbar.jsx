// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold">React Router</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>

          {/* Auth Buttons */}
          <div className="ml-4 space-x-2">
            <Link to="/login">
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-1 rounded">Sign Up</button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block">Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="bg-gray-700 w-full py-1 rounded mt-2">Login</button>
          </Link>
          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="bg-blue-600 w-full py-1 rounded">Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
