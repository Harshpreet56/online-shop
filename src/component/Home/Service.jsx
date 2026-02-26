import React from "react";

function Service() {
  const services = [
    {
      id: 1,
      title: "Consumer Products",
      img: "Images/counstal.webp",
      digit: "01",
    },
    {
      id: 2,
      title: "Audit Marketing",
      img: "Images/counstal.webp",
      digit: "02",
    },
    {
      id: 3,
      title: "Financial Consulting",
      img: "Images/counstal.webp",
      digit: "03",
    },
    {
      id: 4,
      title: "Business Strategy",
      img: "Images/counstal.webp",
      digit: "04",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-gray-500 text-lg uppercase tracking-widest">
          Our Services List
        </p>
        <h2 className="text-4xl font-bold text-blue-900 mt-2">
          What We’re Offering
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white p-8 rounded-xl border border-gray-200 
                       transition-all duration-300 ease-in-out 
                       hover:bg-yellow-400 hover:-translate-y-3 hover:shadow-2xl h-65"
          >
            {/* Service Title */}
            <h3
              className="text-xl font-semibold text-blue-900 
                         transition-colors duration-300 
                         group-hover:text-black"
            >
              {item.title}
            </h3>

            <div className="flex items-center">
              <div className="mt-17 flex justify-center">
                <img
                  className="h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <span
                className="absolute bottom-6 right-6 text-6xl font-extrabold 
                         text-gray-100 transition-all duration-300
                         group-hover:text-blue-900 group-hover:scale-110"
              >
                {item.digit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
