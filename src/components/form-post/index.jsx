import React, { useState } from "react";
import connection from "../../api/connection";


function FormPost() {
    const [file, setFile] = useState()
    
    function fileInput(e) {
        e.preventDefault()
        console.log(getBase64(e.target[0].files[0]))
    }

    function getBase64(file) {
        var reader = new FileReader();
        console.log(reader.readAsDataURL(file))
        reader.readAsDataURL(file);
        reader.onload = function () {
            connection.post('/posts', {"base64": reader.result})
                .then((resp)=>{
                    console.log(resp)
                })
                .catch((err)=>{
                    console.log(err)
                })
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    return (
            <div>
                <form onSubmit={fileInput}>
                    <input type='file'></input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
 
     
    )
}

export default FormPost