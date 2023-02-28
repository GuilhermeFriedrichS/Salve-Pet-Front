import { useEffect, useState } from "react"
import connection from "../../api/connection"
import getPosts from "../../helpers/getPosts"
import limitText from "../../helpers/limitText"
import './index.css'

function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts()
            .then(resp => {
                setPosts(resp)
            })
            .catch(err => {
                console.log(err )
            })
    }, [])

    
    
    
    
    return(
        <>
            {
                posts.map(post => (

                    <a key={post.id} href={`/posts/` + post.id} className="no-underline flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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

export default Posts