import React from "react";

function Hero() {
  return (
    <>
      
      <section className="bg-[url('/Images/homebg.webp')]  h-screen bg-cover bg-center flex items-center  ">
        <div className="home  text-2xl text-white  ml-5">
          <h4>Helping businesses since 1987</h4>
          <h2 className="text-8xl ">
            Reach the <br />
            Limits with <br />
            Consulting Agency
          </h2>
          <div className="button text-lg gap-7 mt-5 ">
            <button className="border-black  m-1 p-5 bg-blue-950 text-white">
              CASE STUDIES
            </button>
            <button className="border-black  m-1 p-5 bg-yellow-500 text-white">
              CONTACT NOW
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="linoor flex justify-between bg-yellow-500 p-8 text-2xl font-medium items-center ">
          <h4>Linoor Finance & Consultation HTML Template</h4>
          <button className=" bg-blue-950 text-white m-1 p-4 ">
            purchase now
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
