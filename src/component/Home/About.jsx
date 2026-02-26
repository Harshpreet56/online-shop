import React from "react";

function About() {
  return (
    <>
      <section className="flex ml-14 gap-9 ">
        <div className="pic relative">
          <img className=" h-160 w-2xl" src="Images/ourcounst.webp" alt="" />
          <div className="pic2 absolute top-97 -left-13.25">
            <img src="Images/ourcounst1.webp" alt="" />
          </div>
        </div>
        <div className="ourcompany">
          <p className="text-gray-500 text-[21px]  ">Our Company Introduction </p>
          <h2 className="text-6xl leading-[1.2]  text-blue-950 mb-2  font-medium">
            We Ensure Only <br /> Quality Consulting <br /> Services for our
            Clients
          </h2>
          <p className="text-[21px] leading-loose text-gray-500">
            Quis aliqua sunt nisi consectetur anim ullamco ea deserunt non
            <br />
            voluptate nisi sit elit exercitation eu lorem. Mollit occaecat nisi
            <br />
            occaecat fugiat ullamco.
          </p>
          <div className="quality flex justify-between mt-5">
            <div className="consulators flex items-center gap-2">
              <img className="h-22" src="Images/counstal.webp" alt="" />
              <p className="text-blue-700 font-bold text-xl">
                Qualified <br /> Consulants
              </p>
            </div>
            <div className="trust flex items-center gap-2 ">
              <img className="h-22" src="Images/counstal.webp" alt="" />
              <p className="text-blue-700 font-bold text-xl">
                Trusted <br /> Since 1987{" "}
              </p>
            </div>
          </div>
          <div className="user flex gap-3 items-center mt-7 font-bold">
            <img
              className="rounded-4xl
            "
              src="Images/ceopic.webp"
              alt=""
            />
            <p className="text-gray-800">
              Christine Eve <br />
              <span className=" text-gray-500">Co Founder & Consultant</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
