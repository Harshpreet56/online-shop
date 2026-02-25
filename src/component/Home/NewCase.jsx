import React from "react";

function NewCase() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <p className="text-gray-500">Recent Cases</p>
        <h2 className="font-bold text-3xl">New Case Studies</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 px-6">
        <div className="group relative overflow-hidden cursor-pointer ">
          <img
            src="Images/business.webp"
            alt="Business Growth"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#182e65] via-[#182e65]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold leading-tight">
              Business <br /> Growth
            </h3>
          </div>
        </div>

        <div className="group relative overflow-hidden cursor-pointer">
          <img
            className="w-full h-87.5 object-cover transition-transform duration-500 group-hover:scale-110"
            src="Images/business.webp"
            alt="Business Growth"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#182e65] via-[#182e65]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold leading-tight">
              Business <br /> Growth
            </h3>
          </div>
        </div>

        <div className="group relative overflow-hidden cursor-pointer">
          <img
            className="w-full h-87.5 object-cover transition-transform duration-500 group-hover:scale-110"
            src="Images/business.webp"
            alt="Business Growth"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#182e65] via-[#182e65]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold leading-tight">
              Business <br /> Growth
            </h3>
          </div>
        </div>

        <div className="group relative overflow-hidden cursor-pointer">
          <img
            className="w-full h-87.5 object-cover transition-transform duration-500 group-hover:scale-110"
            src="Images/business.webp"
            alt="Business Growth"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#182e65] via-[#182e65]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold leading-tight">
              Business <br /> Growth
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCase;
