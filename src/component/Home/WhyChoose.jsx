import React from "react";

function WhyChoose() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-87.5 sm:h-112.5 md:h-137.5 object-cover rounded-lg"
            src="Images/choose.webp"
            alt="Why Choose Us"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
            The Largest Business Experts
          </h2>

          <p className="text-base sm:text-lg text-yellow-500 leading-relaxed mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          {/* Feature 1 */}
          <div className="flex items-start gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-xl font-bold">
              01
            </span>
            <div>
              <h4 className="text-blue-950 font-bold text-lg">
                Customer Experience
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Dolor sit amet, adipisicing elit.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-xl font-bold">
              02
            </span>
            <div>
              <h4 className="text-blue-950 font-bold text-lg">
                Business Growth Strategy
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Dolor sit amet, adipisicing elit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;