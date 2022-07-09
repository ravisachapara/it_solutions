import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const HeroImage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='hero-bg-img'>
      <Carousel variant="dark" className='container'>
        <Carousel.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className='hero-slide-img d-none d-sm-block'>
              <img
                className="d-block w-100"
                src="/images/banner-4.png"
                alt="First slide"
              />
            </div>
            <div className='hero-slide-text p-5'>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className='hero-slide-img d-none d-sm-block'>
              <img
                className="d-block w-100"
                src="/images/banner-5.png"
                alt="First slide"
              />
            </div>
            <div className='hero-slide-text p-5'>
              <h1>Second slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroImage