import React from 'react'

const CarouselIndicatorButton = ({dataBsTarget,dataBsSlideTo,ariaLabel,activeClass,ariaCurrentSlide,children}) => {
  return (
    <div>
      <button 
      className={activeClass}
      type="button" 
      data-bs-target={`#${dataBsTarget}`} 
      data-bs-slide-to={dataBsSlideTo} 
      aria-label={ariaLabel}
      aria-current={ariaCurrentSlide}
      >{children}</button>
    </div>
  )
}

export default CarouselIndicatorButton
