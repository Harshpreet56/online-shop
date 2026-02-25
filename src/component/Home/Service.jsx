import React from "react";

function Service() {
  return (
    <>
      <section className="py-20 bg-gray-100 ">
        <div className="mt-16 mb-14 text-center">
          <p className="text-gray-500 text-xl ">Our Services List</p>
          <h1 className="font-bold text-3xl text-blue-900">
            What We’re Offering
          </h1>
        </div>
        <div className=" mx-auto  gap-8 px-6 flex justify-evenly ">
          <div
            className=" w-75 group relative p-10 bg-white border border-gray-200 
                       hover:bg-yellow-400 hover:border-black
                       transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <h3
              className="text-2xl font-semibold text-blue-900 
                           group-hover:text-black transition-colors duration-300"
            >
              {" "}
              Consumer <br />
              Products{" "}
            </h3>
            <div
              className="mt-16 text-5xl text-black 
                            group-hover:text-black transition-colors duration-300"
            >
              {" "}
              <img className="h-24" src="Images/counstal.webp" alt="" />
            </div>
            <span
              className="absolute bottom-6 right-6 text-6xl font-bold 
                             text-gray-200 group-hover:text-blue-900 
                             transition-colors duration-300"
            >
              1
            </span>
          </div>
          <div
            className="w-75 group relative p-10 bg-white border border-gray-200 
                       hover:bg-yellow-400 hover:border-black
                       transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <h3
              className="text-xl font-semibold text-blue-900 
                           group-hover:text-black transition-colors duration-300"
            >
              {" "}
              Audit <br /> Marketing
            </h3>
            <div
              className="mt-16 text-5xl text-black 
                            group-hover:text-black transition-colors duration-300"
            >
              {" "}
              <img className="h-24" src="Images/counstal.webp" alt="" />
            </div>
            <span
              className="absolute bottom-6 right-6 text-6xl font-bold 
                             text-gray-200 group-hover:text-blue-900 
                             transition-colors duration-300"
            >
              2
            </span>
          </div>
          <div
            className=" w-75 group relative p-10 bg-white border border-gray-200 
                       hover:bg-yellow-400 hover:border-black
                       transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <h3
              className="text-xl font-semibold text-blue-900 
                           group-hover:text-black transition-colors duration-300"
            >
              Advice <br /> Banking
            </h3>
            <div
              className="mt-16 text-5xl text-black 
                            group-hover:text-black transition-colors duration-300"
            >
              {" "}
              <img className="h-24" src="Images/counstal.webp" alt="" />
            </div>
            <span
              className="absolute bottom-6 right-6 text-6xl font-bold 
                             text-gray-200 group-hover:text-blue-900 
                             transition-colors duration-300"
            >
              3
            </span>
          </div>
          <div
            className=" w-75 group relative p-10 bg-white border border-gray-200 
                       hover:bg-yellow-400 hover:border-black
                       transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <h3
              className="text-xl font-semibold text-blue-900 
                           group-hover:text-black transition-colors duration-300"
            >
              {" "}
              Marketing <br /> Rule
            </h3>
            <div
              className="mt-16 text-5xl text-black 
                            group-hover:text-black transition-colors duration-300"
            >
              {" "}
              <img className="h-24" src="Images/counstal.webp" alt="" />
            </div>
            <span
              className="absolute bottom-6 right-6 text-6xl font-bold 
                             text-gray-200 group-hover:text-blue-900 
                             transition-colors duration-300"
            >
              4
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
