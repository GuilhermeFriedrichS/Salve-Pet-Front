import { useEffect, useState } from "react"
import getPosts from "../../helpers/getPosts"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
                console.log(err)
            })
    }, [])

    return(
        <div className="animal-card">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
            <h1><b>{post.title}</b></h1>
            <h3><b>Onde foi encontrado: </b> {post.street}, {post.district}, {post.city}</h3>
            
            <p>{post.description}</p>
        </div>
    )
  
    
    
}

export default PostCard