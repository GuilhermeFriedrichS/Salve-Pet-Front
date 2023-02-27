import React from "react";
import './styles.css';


function CardAnimals() {
  return (
    <div className="card">
      <img
        src="/img/backgroundsignin.jpg"
        alt="placeholder"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Cachorro caramelo</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum felis eu tellus iaculis, sed sollicitudin ex suscipit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum felis eu tellus iaculis, sed sollicitudin ex suscipit.
        </p>
        <a href="#" className="card-button">
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default CardAnimals;
