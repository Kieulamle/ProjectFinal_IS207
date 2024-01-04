import React from "react";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import Feedback from "../components/Home/Feedback";
import Intro from "../components/Home/Intro";
import Products from "../components/Home/Products";
import "swiper/css/bundle";
export default function Home() {
  return (
    <>
      <Intro />
      <Products />
      <Blog />
      <Contact />
      <Feedback />
    </>
  );
}
