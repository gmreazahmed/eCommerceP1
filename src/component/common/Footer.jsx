// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10">
      <div className="mx-auto px-[36px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[128px] grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
        {/* Logo and Description */}
        <div>
          <div className="text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[36px] font-bold text-blue-600">
            <Link to="/">MyShop</Link>
          </div>
          <p className="text-sm">
            Your one-stop shop for all your needs. We deliver <br/> quality products 
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
