import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';


function FormChangeAccount() {
    return (
            <body>
                <div className="container-main-changepassword">
                    <main className="main-card-change-account">
                        <h1 className="h1-card-change-account">Encontre sua conta</h1>
                        <div className="conteudo-form-card-change-account"> 
                            <input type="text" 
                                name="email" 
                                placeholder="Digite o email" 
                                required="required" 
                                className="inputcard-change-account"/>
                        </div>
                        <button type="submit" id="btn-card-change-account" className="hvr-grow" >Buscar</button>
                            <Link to="/" className="href-chage-password">
                                <p className="p-form-change-account">
                                    Já possui uma conta? Entrar agora
                                </p>
                            </Link>
                        <hr className="hr-form-change-account" />
                        <button type="submit" id="btn-change-account" className="hvr-grow">Registra-se</button>
                    </main>
                </div>
            </body>
 
     
    )
}

export default FormChangeAccount