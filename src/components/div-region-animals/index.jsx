import React from "react";
import './styles.css';


function DivBusca(props) {
    return (
        <div className="container-region-animals">
            <div className="main-region-animals">
                <h1 className="h1-region-animals">Encontre seu Pet aqui</h1>
                <div className="filtro">
                    <input placeholder="Pesquisar" className="input-region-animals"/>
                    <button className="hvr-grow" id="button-region-animals">Filtrar</button>
                </div>
            </div>
        </div>
    )
}

export default DivBusca

