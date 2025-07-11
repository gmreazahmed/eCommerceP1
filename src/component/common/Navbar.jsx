// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart, UserCircle2 } from "lucide-react";
import { useUserStore } from "../../store/userStore";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default function Navbar() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
    setProfileOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Logo */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
          <Link to="/">MyShop</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Right - Buttons / Icons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link to="/cart" className="text-gray-700 hover:text-blue-600">
                <ShoppingCart size={24} />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  <UserCircle2 size={28} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                    <div className="px-4 py-2 text-sm border-b text-gray-800">
                      <p>{user.displayName || "No Name"}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className="border-t pt-4 space-y-2">
            {user ? (
              <>
                <div className="text-sm">
                  <p className="font-semibold">{user.displayName || "No Name"}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <Link
                    to="/cart"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-blue-600"
                  >
                    <ShoppingCart size={20} />
                    Cart
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center border px-4 py-2 rounded hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
