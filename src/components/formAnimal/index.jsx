import React, { useState } from "react";
import connection from "../../api/connection";
import './style.css';


function FormAnimal() {

    const [title, setTitle] = useState()

    return (
            <div className="formDiv">
                <h1 className="title">Registre um animal</h1>
                <div className="cardForm">
                    <form className="form">
                        <label class="block text-white-700" for="title">
                            Título
                        </label>
                        <input class="block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 ml-2 w-11/12 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Cachoro branco achado na rua..."/>
                        <label class="block text-white-700" for="grid-first-name">
                            Descrição
                        </label>
                        <textarea class="block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 ml-2 w-11/12 h-32 max-w-lg leading-tight focus:outline-none focus:bg-white" placeholder="Descreva o cachorro..."></textarea>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </form>
                </div>
                    
            </div>
    )
}

export default FormAnimal