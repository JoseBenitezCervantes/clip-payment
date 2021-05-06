import React from "react";
import "./index.scss";

    const CreditCard = () => {
  return (
    <div className="boxCard">
      <div className="grid-container">
        <div className="chip">
          <img className="chipImg" src='https://i.ibb.co/34nqcWK/chip.png' alt="chip" />
        </div>
        <div className="brand">VISA</div>
        <div className="cardNumber">5656 7677 9998 6443</div>
        <div className="nombre">Jose Alberto Benitez Cervantez</div>
        <div className="cardDate">12/24</div>
      </div>
    </div>
  );
};

export default CreditCard;
