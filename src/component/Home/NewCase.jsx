import React from "react";

function NewCase() {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="text-center mb-10 md:mb-12 px-4">
        <p className="text-gray-500">Recent Cases</p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          New Case Studies
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6">
        
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden cursor-pointer rounded-lg"
          >
            <img
              className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              src="Images/business.webp"
              alt="Business Growth"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#182e65] via-[#182e65]/30 to-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                Business <br /> Growth
              </h3>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default NewCase;