import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/images/shop_carousel1.jpeg.jpeg';
import { Img } from '../assets/styles/Img.styles';

const CarouselSlide = () => {
  const carouselData = [
    {
      img1: img1,
      heading: "30% off on shoes",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img1: img1,
      heading: "flat 50% off on bags",
      text: "Baggit, Butterfly and many more.."
    },
    {
      img1: img1,
      heading: "Buy Phone and get Netflix subscription free",
      text: "Redmi Note 9 Pro, Honor 20i and more"
    },
  ]

  return (
    <Carousel style={{ paddingTop: "3.5rem" }}>
      {carouselData.map((item, idx) => <Carousel.Item key={idx}>
        <Img src={item.img1} className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselSlide