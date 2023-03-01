import React from "react";
import './styles.css';


function FormLogin() {
    return (
            <body>
                <main className="centralizar-tudo">
                    <div className="conteudo-form-cardOne"> 
                        <h1  className="h1-cardOne">Conecte-se</h1>
                            <input  type="text" 
                                    name="email" 
                                    placeholder="Digite o email" 
                                    required="required" 
                                    className="inputCardone"/>

                            <input type="password" 
                                    name="senha"
                                    placeholder="Digite a senha"
                                    required="required"
                                    className="inputCardone" />

                            <button type="submit" id="btn-cardone" className="hvr-grow" >Entrar</button>
                            <div className="a-form-cardone">
                                <a href="/changepassword" className="href-form-cardone">Esqueceu sua senha?</a>
                            </div>
                            <div className="hr-form-cardone">
                                <hr className="hr-form-signin"/>
                            </div>
                            <button type="submit" id="btn-create-account" className="hvr-grow">Registra-se</button>
                        </div>
                </main>
            </body>
 
     
    )
}

export default FormLogin