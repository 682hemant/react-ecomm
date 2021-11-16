import React from "react";

import img1 from "../assets/images/shop_carousel1.jpeg.jpeg";
import CarouselSlide from "../components/Carousel";

const carouselData = [
  {
    img1: img1,
    heading: "30% off on shoes",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img1: img1,
    heading: "flat 50% off on bags",
    text: "Baggit, Butterfly and many more..",
  },
  {
    img1: img1,
    heading: "Buy Phone and get Netflix subscription free",
    text: "Redmi Note 9 Pro, Honor 20i and more",
  },
];

const CarouselContainer = () => {
  return (
    <section>
      <CarouselSlide carouselData={carouselData} />
    </section>
  );
};
export default CarouselContainer;
