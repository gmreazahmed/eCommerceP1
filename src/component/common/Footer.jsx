// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">MyShop</h2>
          <p className="text-sm">
            Your one-stop shop for all your needs. We deliver quality products
            at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@myshop.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
