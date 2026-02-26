import React from "react";
import { FaUserCircle, FaComments } from "react-icons/fa";

function Blog() {
  const Blodata = [
    {
      id: 1,
      title: "Made two Companies Stronger than Ever",
      desc: "Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut labore.",
      date: "SEP 16",
      comments: "2 comment ",
      author: "Admin",
      img: "/Images/blog.webp",
    },
    {
      id: 2,
      title: "Business Growth Strategy",
      desc: "Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut labore.",
      date: "SEP 18",
      comments: "5 comment",
      author: "Admin",
      img: "/Images/blog.webp",
    },
    {
      id: 3,
      title: "Consulting that Drives Results",
      desc: "Lorem ipsum dolor sit amet, conse elit sed do eiusmod tempor ut labore.",
      date: "SEP 20",
      comments: "3 comment",
      author: "Admin",
      img: "/Images/blog.webp",
    },
  ];
  return (
    <section className="bg-[#f4f6fb] py-20">
      <div className="text-center mb-9">
        <p className=" text-2xl">Form the Blog</p>
        <h2 className=" text-5xl text-blue-900 font-bold"> New & Artical </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {Blodata.map((blog) => (
          <div key={blog.id} className="relative group cursor-pointer">
            <div className="relative">
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-10 right-6 bg-yellow-400 text-black px-4 py-2 text-sm font-semibold">
                {blog.date}
              </div>
            </div>
            <div className="bg-white shadow-md px-8 py-10 relative -mt-12 mx-6">
              <h3 className="text-2xl font-bold text-blue-900 leading-snug">
                {blog.title}
              </h3>
              <p className="text-gray-500 mt-4 leading-7">
               {blog.desc}
              </p>
              <div className="border-b border-gray-200 my-6"></div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-yellow-500" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments className="text-yellow-500" />
                  <span>{blog.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
