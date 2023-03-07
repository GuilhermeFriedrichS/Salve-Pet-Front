import React, { useState } from "react";
import connection from "../../api/connection";
import './styles.css';


function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(e){
        e.preventDefault()
        connection.post(('/auth/sign_in'), {
            email,
            password
        }).then(resp=>{
            console.log(resp.headers)
            localStorage.setItem('token', resp.headers.authorization)
            window.location.href = 'home'
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
            <body>
                <main className="centralizar-tudo">
                    <div className="conteudo-form-cardOne"> 
                        <h1  className="h1-cardOne">Conecte-se</h1>
                            <form onSubmit={login}>
                                <input type="text" 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        name="email" 
                                        placeholder="Digite o email" 
                                        required="required" 
                                        className="inputCardone"/>

                                <input type="password" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        name="senha"
                                        placeholder="Digite a senha"
                                        required="required"
                                        className="inputCardone" />

                                <button type="submit" id="btn-cardone" className="hvr-grow" >Entrar</button>
                            </form>
                            <a href="/changepassword" className="href-form-cardone">Esqueceu sua senha?</a>
                            <hr className="hr-form-signin"/>
                            <a href="" class="w3-btn w3-black">
                                <button type="submit" id="btn-create-account" className="hvr-grow">Registra-se</button>
                            </a>
                        </div>
                </main>
            </body>
 
     
    )
}

export default FormLogin