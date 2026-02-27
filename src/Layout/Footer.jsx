// import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300">
      
    
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
            About Us
          </h3>
          <p className="text-white leading-7">
            We are a leading consulting firm with a track record of helping
            businesses grow since 1987. From strategy to execution, we’ve got
            your back.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
            Contact Info
          </h3>
          <div className="space-y-3 text-white">
            <p>
              <span className="text-white font-medium">Phone:</span> +91 9876543210
            </p>
            <p>
              <span className="text-white font-medium">Email:</span> info@yourcompany.com
            </p>
            <p>
              <span className="text-white font-medium">Location:</span> 123 Business Street, Mumbai, India
            </p>
          </div>
        </div>

      </section>

    
      <section className="bg-blue-950 py-4 text-center text-sm md:text-base">
        <p>© 2026 Your Company Name. All Rights Reserved.</p>
      </section>

    </footer>
  );
}

export default Footer;
