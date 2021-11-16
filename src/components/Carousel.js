import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import { Img } from "../assets/styles/Img.styles";

const CarouselSlide = ({ carouselData }) => {
  return (
    <CarouselContainer>
      <Carousel>
        {carouselData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Img src={item.img1} className="d-block w-100" alt="..." />
            <Carousel.Caption>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselSlide;

const CarouselContainer = styled.div`
  padding-top: 3.5rem;
`;
