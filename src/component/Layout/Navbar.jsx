import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();
  // const ShopPage = location.pathname === "/Shop";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <header
  className={`fixed top-0 w-full z-50 transition-all duration-300
    ${ShopPage ? "bg-black text-white" : "bg-black text-white"}
  `}
> */}
      <header>
        <div>
          <div className="flex justify-between bg-blue-900 p-4 text-white text-lg">
            <div className="space-x-4 flex items-center">
              <IoMdMail />
              <a href="#">needhelp@linoor.com</a>
              <FaLocationDot />
              <a href="#">Suite 20 Golden Street USA</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#">Welcome to Amazing Consulting Agency</a>
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>

          <div
            className={`w-full transition-all duration-300 ${
              isScrolled
                ? "fixed top-0 left-0 bg-blue-900 z-50"
                : "absolute bg-black-500 text-black "
            }
            `}
          >
            <nav className="flex justify-between items-center px-6 py-4 text-xl z-">
              <div>
                <img className="h-10" src="Images/logo1.webp" alt="logo" />
              </div>

              <div className="space-x-6 font-medium text-white ">
                <a href="/" className="hover:text-blue-600 transition">
                  Home
                </a>
                <a href="/About" className="hover:text-blue-600 transition">
                  About Us
                </a>
                <a href="/Service" className="hover:text-blue-600 transition">
                  Service
                </a>
                <a href="/Protfoli" className="hover:text-blue-600 transition">
                  Portfolio
                </a>
                <a href="/Shop" className="hover:text-blue-600 transition">
                  Shop
                </a>
                <a href="/blog" className="hover:text-blue-600 transition">
                  Blog
                </a>
              </div>
            </nav>
          </div>

          {isScrolled && <div className="h-2"></div>}
        </div>
      </header>
    </>
  );
}

export default Navbar;
