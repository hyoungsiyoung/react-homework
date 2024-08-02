import React from "react";
import PropTypes from "prop-types";
import "./../main.css";

function Card({ name, description, img }) {
  return (
    <div className="card">
      <img
        src={`src/public/assets/${img}`}
        alt={description}
        className="card-img"
      />
      <span className="card-name">{name}</span>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
