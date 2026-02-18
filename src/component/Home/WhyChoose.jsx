import React from 'react'

function WhyChoose() {
  return (
      <div>
            <section>
        <div className="why-choose flex gap-6 mb-3">
          <div className="choospic ">
            <img
              className="h-110 w-2xl m-3 object-cover"
              src="Images/choose.webp"
              alt=""
            />
          </div>
          <div className="choose p-4">
            <p className='text-2xl mt-4'>Why Choose Us</p>
            <h2 className="text-blue-900 text-[50px] font-bold leading-normal ">
              The Largest Business Experts
            </h2>
            <p className=" text-[25px] leading-normal mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="coustomer flex text-[25px] gap-3">
              <span className="rounded-3xl h-10 p-2 text-2xl bg-yellow-500 ">01</span>
              <div>
                <h4>Customer Experience</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Dolor sit amet, adipsicing elit.
                </p>
              </div>
            </div>
            <div className="coustomer flex text-[25px] gap-3 leading-normal">
              <span className="rounded-3xl h-10 p-2 text-2xl bg-yellow-500">02</span>
              <div>
                <h4>Customer Experience</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Dolor sit amet, adipsicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default WhyChoose