import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import CarouselImg1 from '../../assets/carousel-image1.jpg';
import CarouselImg2 from '../../assets/carousel-image2.jpg';
import CarouselImg3 from '../../assets/carousel-image3.jpg';
import CarouselImg4 from '../../assets/carousel-image4.jpg';
import PrevArrow from '../../assets/icon-swiper-1.svg';
import NextArrow from '../../assets/icon-swiper-2.svg';

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4];

  const handlePrev = () => {
    setImgIndex((prevIndex) => (prevIndex - 1) + images.length % images.length);
    if(imgIndex == 0) {
      setImgIndex(images.length-1);
    }
  }

  const handleNext = () => {
    setImgIndex((nextIndex) => (nextIndex + 1) % images.length);
  }


  const autoRotate = () => {
    const IntervalId = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000);

    return () => clearInterval(IntervalId);
  }

  useEffect(() => {
    const clearAutoRotate = autoRotate();
    return () => clearAutoRotate();
  }, []);


  return (
    <CarouselWrapper>
      <button onClick={handlePrev} className="prevBtn" type="button"></button>
      <CarouselImage src={images[imgIndex]} alt="배너 이미지"/>
      <button onClick={handleNext} className="nextBtn" type="button"></button>
    </CarouselWrapper>
  )
  
}

const CarouselWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

 button {
  position: absolute;
  padding: 20px;
  width: 70px;
  height: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: no-repeat center center/cover;
 }

 .prevBtn {
  background-image: url(${PrevArrow});
  left: 40px;
 }

 .nextBtn {
  right: 40px;
  background-image: url(${NextArrow});
 }
`;

const CarouselImage = styled.img`
  max-width: 1280px;
  max-height: 500px;
  object-fit: cover;
`;

