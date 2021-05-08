import React, { useState } from "react";
import CreditCard from "./CreditCard";
import FormData from "./FormData";
import "./index.scss";
import { useForm } from "../../hooks/useForm";

const Payment = () => {
  const initialForm = {
    cardName: "",
    cardNumber: "",
    cvv: "",
    month: 0,
    year: 0,
  };
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const [cardType, setCardType] = useState("");
  return (
    <div className="box">
      <CreditCard {...{ formValues, cardType }} />
      <div className="content">
        <FormData {...{ formValues, handleInputChange, reset, setCardType }} />
      </div>
    </div>
  );
};

export default Payment;
