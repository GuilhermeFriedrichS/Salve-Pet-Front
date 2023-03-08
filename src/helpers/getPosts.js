import connection from "../api/connection"

async function getPosts(id){
    let token = localStorage.getItem('token')
    return new Promise ((resolve, reject) => {
        connection.get(`/posts/${id ? id : ''}`, {
            headers: {
                Authorization: token
            }
        })
        .then(resp => {
            resolve(resp.data)
        })
        .catch(err => {
            console.log(err.response.status)
            if(err.response.status == 401) {
                localStorage.clear()
                window.location.href = window.location.href
            }
        })
    }) 

}



export default getPosts