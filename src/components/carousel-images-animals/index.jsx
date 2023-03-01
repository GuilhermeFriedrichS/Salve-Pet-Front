import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Navigation } from "swiper";

export default function CarouselImagesAnimals() {
  return (
    <div className="main-corousel-images-animals">
      <Swiper
            navigation={true}
            grabCursor={true}
            modules={[Navigation]}
            className="CarouselImagesAnimals"
        >
            <SwiperSlide className="images-animals">
                <div className="div-img-animals">
                    <img src="/img/cachorroDeOculos.jpg" className="img1-carousel-animals" />
                </div>
            </SwiperSlide>

            <SwiperSlide className="images-animals">
                <div className="div-img-animals">
                    <img src="/img/cachorroDeOculos.jpg" className="img1-carousel-animals" />  
                </div>
            </SwiperSlide>

            <SwiperSlide className="images-animals">
                <div className="div-img-animals">
                     <img src="/img/cachorroDeOculos.jpg" className="img1-carousel-animals" /> 
                </div>
            </SwiperSlide>

            <SwiperSlide className="images-animals">
                <div className="div-img-animals">
                     <img src="/img/cachorroDeOculos.jpg" className="img1-carousel-animals" /> 
                </div>
            </SwiperSlide>
           
      </Swiper>
    </div>
  );
}
