import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
/* import { Carousel } from 'react-responsive-carousel';
 */import Carousel from 'react-bootstrap/Carousel';
 import "../App.css";


function CarouselComponent() {
    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel"
          src="https://wallpapercave.com/wp/wp6476461.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src="https://wallpapertops.com/walldb/original/1/7/0/346555.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src="https://i.imgur.com/v0ae8WM.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;

// Language: javascript