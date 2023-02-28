import { useEffect, useState } from "react"
import getPosts from "../../helpers/getPosts"
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
            <img src={'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?w=826&t=st=1677580168~exp=1677580768~hmac=3d33d8d9953e7c605517ab59cb5dfae5ba9d4c8ff652c7c5a374238d493102c9'} alt="public/img/backgroundsignin.jpg" />
            <h1><b>{post.title}</b></h1>
            <h3><b>Onde foi encontrado: </b> {post.street}, {post.district}, {post.city}</h3>
            
            <p>{post.description}</p>
        </div>
    )
  
    
    
}

export default PostCard