import React from "react";
import Hero from "../../../component/Home/Hero";
import About from "../../../component/Home/About";
import Service from "../../../component/Home/Service";
import NewCase from "../../Home/NewCase";
import WhyChoose from "../../Home/WhyChoose"
import Customer from "../../Home/Customer"
import News from "../../Home/Blog"



function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <WhyChoose />
      <NewCase />
      <Customer />
      <News />
     

    </>
  );
}

export default Home;
