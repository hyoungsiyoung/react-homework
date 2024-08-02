import React from "react";
import Card from "./Card.jsx";
import "../main.css";

function CardList() {
  return (
    <>
      <ul className="card-list">
        <li>
          <Card
            name="재벌집 막내아들"
            img="poster-1.png"
            description="poster-1"
          />
        </li>
        <li>
          <Card
            name="환혼 빛과 그림자"
            img="poster-2.png"
            description="poster-2"
          />
        </li>
        <li>
          <Card
            name="술꾼 도시 여자들2"
            img="poster-3.png"
            description="poster-3"
          />
        </li>
        <li>
          <Card
            name="캐나다 체크인"
            img="poster-4.png"
            description="poster-4"
          />
        </li>
      </ul>
    </>
  );
}

export default CardList;
