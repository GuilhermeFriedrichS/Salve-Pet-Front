import React from "react";
import limitText from "../../helpers/limitText";
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
        <h2 title={props.title}
            className="card-title-animals">{props.title}
        </h2>
        <p  
            className="card-text-animals">
            {props.description}
        </p>
        <a href="#" className="card-button-animals">
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default CardAnimals;
