import React from "react";
import Hero from "../../../component/Home/Hero";
import About from "../../../component/Home/About";
import Service from "../../../component/Home/Service";
import NewCase from "../../Home/NewCase";
import WhyChoose from "../../Home/WhyChoose"
import Footer from "../../Layout/Footer";
import Customer from "../../Home/Customer"
import News from "../../Home/News"


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
      <Footer />
     
    </>
  );
}

export default Home;
