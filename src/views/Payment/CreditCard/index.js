import React from "react";
import "./index.scss";

const CreditCard = ({ formValues, cardType }) => {
  const { name, number, month, year } = formValues;
  return (
    <div className="boxCard">
      <div className="grid-container">
        <div className="chip">
          <img
            className="chipImg"
            src="https://i.ibb.co/34nqcWK/chip.png"
            alt="chip"
          />
        </div>
        <div className="brand">{cardType}</div>
        <div className="cardNumber">
          {number
            ? number.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
            : "xxxx xxxx xxxx xxxx"}
        </div>
        <div className="nombre">{name ? name : "-- -- --"}</div>
        <div className="cardDate">
          {month}/{year}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
