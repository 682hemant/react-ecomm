import React from 'react';
import img1 from '../assets/images/shop_carousel1.jpeg.jpeg';
import { Img } from '../assets/styles/Img.styles';
import CarouselIndicatorButton from './shared/CarouselIndicatorButton';
import IndicatorSpan from './shared/IndicatorSpan';

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ paddingTop: 3.5 + "rem" }}>
        <div className="carousel-indicators">
          <CarouselIndicatorButton
            activeClass="active"
            ariaCurrentSlide="true"
            dataBsTarget="carouselExampleIndicators"
            dataBsSlideTo="0"
            ariaLabel="Slide 1"
          />
          <CarouselIndicatorButton
            dataBsTarget="carouselExampleIndicators"
            dataBsSlideTo="1"
            ariaLabel="Slide 2"
          />
          <CarouselIndicatorButton
            dataBsTarget="carouselExampleIndicators"
            dataBsSlideTo="2"
            ariaLabel="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <Img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <Img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <CarouselIndicatorButton
          activeClass="carousel-control-prev"
          dataBsTarget="carouselExampleIndicators"
          dataBsSlideTo="prev">
          <IndicatorSpan activeClass="carousel-control-prev-icon" ariaHidden="true"/>
          <IndicatorSpan activeClass="visually-hidden">Previous</IndicatorSpan>
        </CarouselIndicatorButton>
        <CarouselIndicatorButton
          activeClass="carousel-control-next"
          dataBsTarget="carouselExampleIndicators"
          dataBsSlideTo="next">
          <IndicatorSpan 
          activeClass="carousel-control-next-icon" 
          ariaHidden="true"/>
          <IndicatorSpan 
          activeClass="visually-hidden"
          >Next</IndicatorSpan>
        </CarouselIndicatorButton>
      </div>
    </div>
  )
}

export default Carousel
