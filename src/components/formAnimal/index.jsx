import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import connection from "../../api/connection";
import './style.css';


function FormAnimal() {

    const [title, setTitle] = useState()
    const [form, setForm] = useState({
        title: '',
        description: '',
        cep: '',
        city: '',
        district: '',
        street: '',
    })

    function getEnderess(cep) {
        setForm({
            ...form,
            cep
        })

        cep = cep.replace('-', '')

        if (cep.length == 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resp => {
                    setForm({
                        ...form,
                        cep: resp.data.cep,
                        city: resp.data.localidade,
                        district: resp.data.bairro,
                        street: resp.data.logradouro
                    })
                })
                .catch(err => {
                    console.log('err', err)
                })
        }
    }

    function clean(e){
        e.preventDefault()
        setForm({
            title: '',
            description: '',
            cep: '',
            city: '',
            district: '',
            street: '',
        })
    }

    function submitForm(e){
        e.preventDefault()
        console.log(localStorage.getItem('token'))
        console.log(form)
        connection.post(`/posts`, {
            title: form.title,
            description: form.description,
            cep: form.cep,
            city: form.city,
            district: form.district,
            street: form.street,
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(resp => {
            console.log(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="formDiv">
            <h1 className="text-4xl py-3">Registre um animal</h1>
            <div className="cardForm">
                <form className="form flex flex-col items-center gap-2 relative" onSubmit={e=>submitForm(e)}>
                    <div></div>
                    <label class="text-white-700 flex w-full justify-start px-6" for="title">
                        Título
                    </label>
                    <input
                        required
                        class="block bg-gray-200 text-gray-700 border rounded py-3 px-4 w-11/12 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text" placeholder="Cachoro branco achado em..."
                        value={form.title}
                        onChange={e => setForm({
                            ...form,
                            title: e.target.value
                        })}
                    />
                    <label class="text-white-700 flex w-full justify-start px-6" for="grid-first-name">
                        Descrição
                    </label>
                    <textarea
                        required
                        class="block bg-gray-200 text-gray-700 border rounded py-3 px-4 w-11/12 h-32  leading-tight focus:outline-none focus:bg-white" placeholder="Descreva o cachorro..."
                        value={form.description}
                        onChange={e => setForm({
                            ...form,
                            description: e.target.value
                        })}
                    ></textarea>
                    <div class="flex sm:flex-col md:flex-row gap-2 w-11/12 ">
                        <div className="w-full flex flex-col gap-2">
                            <label for="cep" class="text-white-700 ">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="00000-000" maxLength={9} required
                                value={form.cep}
                                onChange={e => getEnderess(e.target.value)} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label for="city" class="block text-white-700 ">Cidade</label>
                            <input
                                type="text"
                                id="city"
                                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Praia Grande"
                                required
                                value={form.city}
                                onChange={e => setForm({
                                    ...form,
                                    city: e.target.value
                                })} grid
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label for="district" class="block text-white-700">Bairro</label>
                            <input
                                type="text"
                                id="district"
                                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Caiçara"
                                required
                                value={form.district}
                                onChange={e => setForm({
                                    ...form,
                                    district: e.target.value
                                })}
                            />
                        </div>
                    </div>

                    <label class="text-white-700 flex w-full justify-start px-6" for="title">
                        Rua
                    </label>
                    <input
                        class="block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb- w-11/12 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text"
                        placeholder="Rua Afonso..."
                        value={form.street}
                        onChange={e => setForm({
                            ...form,
                            street: e.target.value
                        })}
                    />
                    <div className="flex justify-between w-11/12 ">
                        <button 
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-20 rounded"
                            onClick={e=>clean(e)}>
                            Limpar
                        </button>
                        <button 
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-20 rounded"
                            >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormAnimal