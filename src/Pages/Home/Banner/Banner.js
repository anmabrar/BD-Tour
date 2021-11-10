import React from 'react';
import { Carousel } from 'react-bootstrap';
import tour001 from '../../../images/Tour001.jpg'
import tour002 from '../../../images/Tour002.jpg'
import tour003 from '../../../images/Tour003.jpg'



const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={tour001}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={tour002}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tour003}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;