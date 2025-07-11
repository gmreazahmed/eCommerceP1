// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Discover the Best Deals on Quality Products
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Shop smart, live better. Browse through our wide range of collections tailored just for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-lg hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image
        <div className="w-full">
          <img
            src="https://via.placeholder.com/600x400?text=Product+Showcase"
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div> */}
      </div>
    </section>
  );
}
