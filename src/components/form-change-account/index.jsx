import React from "react";
import './styles.css';


function FormChangeAccount() {
    return (
            <body>
                <main className="main-card-change-account">
                    <h1  className="h1-card-change-account">Encontre sua conta</h1>
                    <div className="conteudo-form-card-change-account"> 
                        <input type="text" 
                                name="email" 
                                placeholder="Digite o email" 
                                required="required" 
                                className="inputcard-change-account"/>
                    </div>
                        <button type="submit" id="btn-card-change-account" className="hvr-grow" >Buscar</button>
                        <a href="/" className="href-chage-password">
                            <p className="p-form-change-account">
                                Já possui uma conta? Entrar agora
                            </p>
                            </a>
                        <hr className="hr-form-signin" />
                        <button type="submit" id="btn-create-account" className="hvr-grow">Registra-se</button>
                </main>
            </body>
 
     
    )
}

export default FormChangeAccount