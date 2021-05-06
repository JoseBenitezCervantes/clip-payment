import React from "react";
import CreditCard from "./CreditCard";
import FormData from "./FormData";
import "./index.scss";
const Payment = () => {
  return (
    <div className="box">
      <CreditCard />
      <div className="content">
        <FormData/>
      </div>
    </div>
  );
};

export default Payment;
