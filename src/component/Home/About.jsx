import React from "react";

function About() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2">
          <img
            className="w-full h-100 sm:h-125 object-cover rounded-lg"
            src="Images/ourcounst.webp"
            alt="Main"
          />
          <div className="absolute -bottom-10 left-6 sm:left-10">
            <img
              className="w-40 sm:w-52 rounded-lg shadow-lg"
              src="Images/ourcounst1.webp"
              alt="Secondary"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
          <p className="text-gray-500 text-base sm:text-lg">
            Our Company Introduction
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-blue-950 font-semibold my-4">
            We Ensure Only <br />
            Quality Consulting <br />
            Services for our Clients
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Quis aliqua sunt nisi consectetur anim ullamco ea deserunt non
            voluptate nisi sit elit exercitation eu lorem. Mollit occaecat nisi
            occaecat fugiat ullamco.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <div className="flex items-center gap-3">
              <img className="h-14" src="Images/counstal.webp" alt="" />
              <p className="text-blue-700 font-bold text-lg">
                Qualified <br /> Consultants
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="h-14" src="Images/counstal.webp" alt="" />
              <p className="text-blue-700 font-bold text-lg">
                Trusted <br /> Since 1987
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;