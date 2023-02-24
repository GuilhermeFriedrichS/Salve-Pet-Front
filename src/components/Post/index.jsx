import axios from "axios"
import { useEffect, useState } from "react"
import './index.css'

function Post(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts()
    }, [])

    
    function getPosts(){
        axios.get("http://localhost:3000/posts")
        .then(resp => {
            console.log(resp.data)
            setPosts(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    function limitText(text, max){
        return text.slice(0, max) + (text.length > max ? "..." : "");
    }
    
    return(
        <>
            {
                posts.map(post => (

                    <a key={post.id} href="#" className="no-underline flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-30 rounded-t-lg rounded-b-lg h-30 " src="/images/Solid_black.png" alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{limitText(post.title, 24)}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{limitText(post.description, 181)}</p>
                        </div>
                    </a>
                ))
            }
        </>
    )
}

export default Post