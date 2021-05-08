import React from "react";
import "./index.scss";

const CreditCard = ({ formValues, cardType }) => {
  const { cardName, cardNumber, month, year } = formValues;
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
          {cardNumber
            ? cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
            : "xxxx xxxx xxxx xxxx"}
        </div>
        <div className="nombre">{cardName ? cardName : "-- -- --"}</div>
        <div className="cardDate">
          {month}/{year}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
