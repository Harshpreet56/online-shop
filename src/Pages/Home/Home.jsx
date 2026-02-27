import React from "react";
import Hero from "../../component/Home/Hero";
import About from "../../component/Home/About";
import Service from "../../component/Home/Service";
import NewCase from "../../component/Home/NewCase";
import WhyChoose from "../../component/Home/WhyChoose"
import Customer from "../../component/Home/Customer"
import News from "../../component/Home/Blog"



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
