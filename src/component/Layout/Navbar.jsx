import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between bg-blue-900 p-4 text-white text-lg">
        <div className="space-x-4 flex items-center">
          <IoMdMail />
          <span>needhelp@linoor.com</span>
          <FaLocationDot />
          <span>Suite 20 Golden Street USA</span>
        </div>

        <div className="flex items-center space-x-4">
          <span>Welcome to Amazing Consulting Agency</span>
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 z-50
          ${isScrolled
            ? "fixed top-0 bg-blue-900 shadow-lg"
            : isHome
            ? "absolute top-[72px] bg-transparent"
            : "relative bg-black"}
        `}
      >
        <nav className="flex justify-between items-center px-6 py-4 text-xl max-w-7xl mx-auto">
          <img className="h-10" src="/Images/logo1.webp" alt="logo" />

          <div className="space-x-6 font-medium text-white">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/About" className="hover:text-yellow-400">About</Link>
            <Link to="/Service" className="hover:text-yellow-400">Service</Link>
            <Link to="/Portfolio" className="hover:text-yellow-400">Portfolio</Link>
            <Link to="/Shop" className="hover:text-yellow-400">Shop</Link>
            <Link to="/Blog" className="hover:text-yellow-400">Blog</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;