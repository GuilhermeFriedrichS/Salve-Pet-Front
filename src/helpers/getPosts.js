import connection from "../api/connection"

async function getPosts(id){
    return new Promise ((resolve, reject) => {
        connection.get(`/posts/${id ? id : ''}`)
        .then(resp => {
            resolve(resp.data)
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    }) 
}

export default getPosts