import React, { useRef, useState, useEffect } from "react";
import getPosts from "../../helpers/getPosts"
import CarouselImagesAnimals from "../carousel-images-animals";

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
       <div>
            <CarouselImagesAnimals />
       </div>
    )
  
    
    
}

export default PostCard