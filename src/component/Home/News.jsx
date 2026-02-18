import React from "react";
import { FaUserCircle, FaComments } from "react-icons/fa";

function BlogSection() {
  return (
    <section className="bg-[#f4f6fb] py-20">
      <div className="text-center mb-9">
        <p className=" text-2xl">Form the Blog</p>
        <h2 className=" text-5xl text-blue-900 font-bold"> New & Artical </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="relative">
          {/* Image */}
          <div className="relative">
            <img
              src="/Images/blog.webp"
              alt="blog"
              className="w-full h-64 object-cover"
            />

            {/* Date Badge */}
            <div className="absolute bottom-10 right-4 bg-yellow-400 text-black px-4 py-2 text-sm font-semibold">
              SEP 16
            </div>
          </div>

          {/* Content Box */}
          <div className="bg-white shadow-md px-8 py-10 relative -mt-12 mx-6">
            <h3 className="text-2xl font-bold text-blue-900 leading-snug">
              Made two Companies <br /> Stronger than Ever
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut
              labore.
            </p>

            <div className="border-b border-gray-200 my-6"></div>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-yellow-500" />
                <span>by Admin</span>
              </div>

              <div className="flex items-center gap-2">
                <FaComments className="text-yellow-500" />
                <span>2 comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <div className="relative">
            <img
              src="/Images/blog.webp"
              alt="blog"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-10 right-4 bg-yellow-400 text-black px-4 py-2 text-sm font-semibold">
              SEP 16
            </div>
          </div>

          <div className="bg-white shadow-md px-8 py-10 relative -mt-12 mx-6">
            <h3 className="text-2xl font-bold text-blue-900 leading-snug">
              Made two Companies <br /> Stronger than Ever
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut
              labore.
            </p>

            <div className="border-b border-gray-200 my-6"></div>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-yellow-500" />
                <span>by Admin</span>
              </div>

              <div className="flex items-center gap-2">
                <FaComments className="text-yellow-500" />
                <span>2 comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <div className="relative">
            <img
              src="/Images/blog.webp"
              alt="blog"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-10 right-4 bg-yellow-400 text-black px-4 py-2 text-sm font-semibold">
              SEP 16
            </div>
          </div>

          <div className="bg-white shadow-md px-8 py-10 relative -mt-12 mx-6">
            <h3 className="text-2xl font-bold text-blue-900 leading-snug">
              Made two Companies <br /> Stronger than Ever
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut
              labore.
            </p>

            <div className="border-b border-gray-200 my-6"></div>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-yellow-500" />
                <span>by Admin</span>
              </div>

              <div className="flex items-center gap-2">
                <FaComments className="text-yellow-500" />
                <span>2 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
