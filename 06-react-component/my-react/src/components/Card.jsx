import React from "react";
import "./../main.css";

function Card({ name, description, img }) {
  return (
    <>
      <div className="card">
        <img
          src={`src/public/assets/${img}`}
          alt={description}
          className="card-img"
        />
        <span className="card-name">{name}</span>
      </div>
    </>
  );
}

export default Card;
