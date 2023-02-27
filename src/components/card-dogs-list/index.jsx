import React from "react";
import './styles.css';


function CardAnimals(props) {
  return (
    <div className="card-animals">
      <img
        src="/img/backgroundsignin.jpg"
        alt="placeholder"
        className="card-image-animals"
        />
      <div className="card-content-animals">
        <h2 className="card-title-animals">Viralata caramelo</h2>
        <p className="card-text-animals">
          Rua Amapola, 999 - Praia grande, Jardim Real
        </p>
        <a href="#" className="card-button-animals">
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default CardAnimals;
