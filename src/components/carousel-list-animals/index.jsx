import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import getFullEnderess from '../../helpers/getFullEnderess'

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import CardAnimals from "../card-dogs-list";
import getPosts from "../../helpers/getPosts";

export default function CarouselListAnimals() {

  const [animals, setAnimals] = useState([])
    useEffect(()=>{
        getPosts()
            .then(resp => {
                console.log(resp)
                setAnimals(resp)
            })
            .catch(err => {
                console.log(err )
            })
    }, [])

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-list-animals"
      >
        {
          animals.map((animal) => (
            <SwiperSlide className="carousel-list-animals"><CardAnimals title={animal.title} description={getFullEnderess(animal)} /></SwiperSlide>
          ))
        }
       
      </Swiper>
    </>
  );
}
