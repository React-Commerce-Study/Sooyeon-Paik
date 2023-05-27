import React from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import CarouselImg1 from '../../assets/carousel-image1.jpg';
import CarouselImg2 from '../../assets/carousel-image2.jpg';
import CarouselImg3 from '../../assets/carousel-image3.jpg';
import CarouselImg4 from '../../assets/carousel-image4.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  const images = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4];

  const handleSlideChange = (swiper) => {
    if (swiper.isBeginning && swiper.realIndex === swiper.slides.length - 1) {
      swiper.slideTo(0); // 마지막 슬라이드에서 이전 버튼을 누르면 처음 슬라이드로 이동
    } else if (swiper.isEnd && swiper.realIndex === 0) {
      swiper.slideTo(swiper.slides.length - 1); // 처음 슬라이드에서 다음 버튼을 누르면 마지막 슬라이드로 이동
    }
  };

  return (
    <CarouselWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.section`
  width: 100vw;
`;

const CarouselImage = styled.img`
  display: block;
  height: 500px;
  object-fit: cover;
`;
