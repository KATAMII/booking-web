import React from "react";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured"
import Testimonials from "./Testimonials"
import Footer from "../../components/Footer";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
