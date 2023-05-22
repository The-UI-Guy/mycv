import { Button } from 'antd';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Gallery.css';

function CarouselFadeExample({className, Slide1Text, Slide1Type, BtnText }) {
  return (
    <Carousel className={className} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Slide1Text}</h3>
          <p>{Slide1Type}</p>
          <Button>{BtnText}</Button>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default CarouselFadeExample;