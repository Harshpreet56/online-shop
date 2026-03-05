import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Logout from "../Auth/Logout";

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="hidden md:block w-full bg-blue-900 text-white z-50">
        <div
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-3 
                        flex flex-col md:flex-row justify-between items-center gap-3 text-sm sm:text-base"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 justify-center md:justify-start">
            <IoMdMail className="text-yellow-400" />
            <span className="hover:text-yellow-400 cursor-pointer break-all">
              needhelp@linoor.com
            </span>

            <FaLocationDot className="text-yellow-400" />
            <span className="hover:text-yellow-400 cursor-pointer">
              Suite 20 Golden Street USA
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <span className="hover:text-yellow-400 text-center">
              Welcome to Amazing Consulting Agency
            </span>
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 z-9999
        ${
          isScrolled
            ? "fixed top-0 bg-blue-900 shadow-lg"
            : isHome
              ? "absolute top-auto bg-transparent"
              : "relative bg-black"
        }`}
      >
        <nav
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10
                        flex justify-between items-center py-4 text-white"
        >
          <img
            className="h-8 sm:h-9 md:h-10"
            src="/Images/logo1.webp"
            alt="logo"
            onClick={() => navigate("/")}
          />

          <div className="hidden lg:flex gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-400">
              About
            </Link>
            <Link to="/service" className="hover:text-yellow-400">
              Service
            </Link>
            <Link to="/protfolio" className="hover:text-yellow-400">
              Portfolio
            </Link>
            <Link to="/shop" className="hover:text-yellow-400">
              Shop
            </Link>
            <Link to="/blog" className="hover:text-yellow-400">
              Blog
            </Link>
            <Link to="/cart" className="hover:text-yellow-400">
              Cart
            </Link>
            <Link to="/login" className="hover:text-yellow-400">
              <Logout />
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-blue-900 px-6 pb-6">
            <div className="flex flex-col gap-4 text-white text-lg font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/About" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/Service" onClick={() => setMenuOpen(false)}>
                Service
              </Link>
              <Link to="/Protfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/Shop" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/Cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Logout />
              </Link>
            </div>
          </div>
        )}
      </div>

      {isScrolled && <div className="h-22.5"></div>}
    </>
  );
}

export default Navbar;
