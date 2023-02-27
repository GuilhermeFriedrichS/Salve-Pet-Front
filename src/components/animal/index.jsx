import { useEffect, useState } from "react"
import getPosts from "../../helpers/getPosts"
import './index.css'

function PostPage(){
    const [post, setPost] = useState([])

    useEffect(()=>{
        let id = +window.location.pathname.split("/posts/")[1]
        getPosts(id)
            .then(resp => {
                console.log(resp)
                setPost(resp)
            })
            .catch(err => {
                console.log(err )
            })
    }, [])

    return(
        <div>

        </div>
    )
  
    
    
}

export default PostPage