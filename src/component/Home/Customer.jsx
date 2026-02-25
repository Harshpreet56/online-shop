import React from "react";
import { FaStar } from "react-icons/fa";

function Customers() {
  return (
    <section className="bg-[#f4f6fb] py-20">
      <div className="text-center mb-9">
        <p className=" text-2xl">Coustmer Feedback</p>
        <h2 className=" text-5xl text-blue-900 font-bold">
          What are you saying
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <div className="flex gap-1 text-yellow-400 mb-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-500 leading-8 text-lg">
            I was impressed by the company services, lorem ipsum is simply free
            text used by copytyping refreshing. Neque porro est qui dolorem
            ipsum quia.
          </p>

          <div className="border-b border-gray-200 my-8"></div>

          <div className="flex items-center gap-4">
            <img
              src="/Images/eve.webp"
              alt="Christine Eve"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-blue-900 text-lg">
                Christine Eve
              </h4>
              <p className="text-gray-400 text-sm">Customers</p>
            </div>
          </div>
        </div>


        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <div className="flex gap-1 text-yellow-400 mb-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-500 leading-8 text-lg">
            I was impressed by the company services, lorem ipsum is simply free
            text used by copytyping refreshing. Neque porro est qui dolorem
            ipsum quia.
          </p>

          <div className="border-b border-gray-200 my-8"></div>

          <div className="flex items-center gap-4">
            <img
              src="/Images/eve.webp"
              alt="Christine Eve"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-blue-900 text-lg">
                Christine Eve
              </h4>
              <p className="text-gray-400 text-sm">Customers</p>
            </div>
          </div>
        </div>

       
        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
          <div className="flex gap-1 text-yellow-400 mb-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-500 leading-8 text-lg">
            I was impressed by the company services, lorem ipsum is simply free
            text used by copytyping refreshing. Neque porro est qui dolorem
            ipsum quia.
          </p>

          <div className="border-b border-gray-200 my-8"></div>

          <div className="flex items-center gap-4">
            <img
              src="/Images/eve.webp"
              alt="Christine Eve"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-blue-900 text-lg">
                Christine Eve
              </h4>
              <p className="text-gray-400 text-sm">Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
