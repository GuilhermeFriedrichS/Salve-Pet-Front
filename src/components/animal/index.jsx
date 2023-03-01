import React, { useRef, useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import getPosts from "../../helpers/getPosts"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Import Swiper styles
import 'swiper/css';
import './style.css'

function PostCard(){
    const [post, setPost] = useState([])

    useEffect(()=>{
        let id = +window.location.pathname.split("/posts/")[1]
        getPosts(id)
            .then(resp => {
                console.log(resp)
                setPost(resp)
            })
            .catch(err => {
                window.location.href = window.location.origin + "/home"
            })
    }, [])

    return(
        <>
            <div className="swiperDiv">
                <Swiper 
                    navigation={true}
                    pagination={true} 
                    modules={[Pagination, Navigation]} 
                    className="animalSwiper">
                    <SwiperSlide><img className="swiperImage" src="/img/backgroundchangepassword.jpg"></img></SwiperSlide>
                    <SwiperSlide><img src="/img/backgroundchangepassword.jpg"></img></SwiperSlide>
                </Swiper>
            </div>
            
        </>
    )
  
    
    
}

export default PostCard