import React from "react";
import { Link } from "react-router-dom";
import './styles.css';


function CardSearchAnimals() {
    return (
        <div className="container-overflor">
            <div className="hvr-grow" id="container-search-animals">
                        <Link className="hvr-grow" id="main-search-animals" to="/animalregistration">
                        <h1 className="h1-search-animals">
                            Cadastre um pet aqui
                        </h1>
                        </Link>
            </div>
        </div>

 
     
    )
}

export default CardSearchAnimals