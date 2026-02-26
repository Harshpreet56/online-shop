import React from "react";

function WhyChoose() {
  return (
    <>
      <section>
        <div className="why-choose flex gap-25 mb-3 mr-6">
          <div className="choospic ">
            <img
              className="h-140 w-2xl m-3 object-cover"
              src="Images/choose.webp"
              alt=""
            />
          </div>
          <div className=" pt-18 w-[40%]">
            <div className="choose p-4 ">
              <p className="text-2xl ">Why Choose Us</p>
              <h2 className="text-blue-900 text-[50px] font-bold leading-normal ">
                The Largest Business Experts
              </h2>
              <p className=" text-[21px] leading-9 mb-4 text-yellow-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="coustomer flex text-[19px] gap-3 leading-9">
                <span className="rounded-3xl h-13 p-3 items-center text-2xl bg-yellow-500 ">
                  01
                </span>
                <div>
                  <h4 className="text-blue-950 font-bold">
                    Customer Experience
                  </h4>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Dolor sit amet, adipsicing elit.
                  </p>
                </div>
              </div>
              <div className="coustomer flex text-[19px] gap-3 leading-9">
                <span className="rounded-3xl h-13 p-3 text-2xl bg-yellow-500">
                  02
                </span>
                <div>
                  <h4 className="text-blue-950 font-bold">
                    Customer Experience
                  </h4>
                  <p className="text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Dolor sit amet, adipsicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
