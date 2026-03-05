import React from "react";

function Hero() {
  return (
    <>
      <section className="bg-[url('/Images/homebg.webp')]  h-166 bg-cover bg-center flex items-center w-auto">
      <div className="max-w-8xl px-6 py-20 text-white mt-75 sm:mt-0">
  <h4 className="text-base sm:text-lg md:text-xl mb-4">
    Helping businesses since 1987
  </h4>

  <h1
    className="font-bold leading-tight 
               text-3xl 
               sm:text-4xl 
               md:text-5xl 
               lg:text-6xl"
  >
    Reach the <br />
    Limits with <br />
    Consulting Agency
  </h1>

  <div className="flex gap-4 mt-8">
    <button className="px-6 py-3 bg-blue-950 hover:bg-blue-900 transition text-white font-medium cursor-pointer">
      CASE STUDIES
    </button>

    <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium cursor-pointer">
      CONTACT NOW
    </button>
  </div>
</div>
      </section>

      <section>
        <div
          className="flex flex-col md:flex-row justify-between items-center 
                        bg-yellow-500 
                        px-6 py-6 md:px-12 
                        text-lg md:text-xl font-medium gap-4"
        >
          <h4 className="text-center md:text-left">
            Linoor Finance & Consultation HTML Template
          </h4>

          <button className="bg-blue-950 hover:bg-blue-900 transition text-white px-6 py-3 cursor-pointer">
            Purchase Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
