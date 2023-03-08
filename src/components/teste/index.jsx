import axios from "axios";
import React, { useEffect, useState } from "react";
import connection from "../../api/connection";
import CardChangeAccount from "../card-change-account";

import './styles.css'

function FormPost() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [files, setFiles] = useState()
    const [file64, setFile64] = useState('')

    function getEnderess(cepValue){
        setCep(cepValue)

        if(cep.replace("-", '').length == 7){
            axios.get(`https://viacep.com.br/ws/${cepValue.replace("-", '')}/json/`)
                .then(resp => {
                    console.log(resp.data)
                    setCep(resp.data.cep)
                    setCity(resp.data.localidade)
                    setDistrict(resp.data.bairro)
                })
                .catch(err => {
                    
                })
            console.log("a")
        }
    }
    
    function submitForm(e){
        e.preventDefault()
        getBase64(files)
        console.log(file64)
        connection.post('/posts', {
            title,
            description,
            cep,
            street,
            district,
            city,
            teste: 1,
            image: files
        })
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setFile64(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    return (
            <div className="teste">
            </div>
 
     
    )
}

export default FormPost