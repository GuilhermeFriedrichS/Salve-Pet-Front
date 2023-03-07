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

                <CardChangeAccount></CardChangeAccount>

                <form className="w-full max-w-lg" onSubmit={e=>submitForm(e)}>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Titulo
                            </label>    
                            <input value={title} onChange={(e=> setTitle(e.target.value))} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Pastor alemão encontrado na Tupy"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Descrição
                            </label>  
                            <textarea value={description} onChange={(e=> setDescription(e.target.value))} id="message" rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" placeholder="Descreva as características do animal..."></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Envie uma imagem
                            </label>                                  
                            <input   onChange={e=> setFiles(e.target.files[0])} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 mb-2 leading-tight" id="file_input" type="file"/>
                        </div>  
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                CEP
                            </label>
                            <input value={cep} onChange={(e=> getEnderess(e.target.value))} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-city" type="text" placeholder="00000-000"/>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Cidade
                            </label>
                            <div className="relative">
                                <input value={city} onChange={(e=> setCity(e.target.value))} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-city" type="text" placeholder="Praia Grande"/>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Bairro
                            </label>
                            <input value={district} onChange={(e=> setDistrict(e.target.value))} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-zip" type="text" placeholder="Tupy  "/ >
                        </div>
                        <div className="w-full px-3">
                            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Rua
                            </label>    
                            <input value={street} onChange={(e=> setStreet(e.target.value))} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Av. Afonso..."/>
                        </div>
                    </div>
                    <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Submit"></input>
                </form>
            </div>
 
     
    )
}

export default FormPost