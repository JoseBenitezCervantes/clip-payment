import React, { useState } from "react";
import CreditCard from "./CreditCard";
import FormData from "./FormData";
import "./index.scss";
import { useForm } from "../../hooks/useFetch";

const Payment = () => {
  const initialForm = {
    name: "",
    number: "",
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
        <FormData {...{ formValues, handleInputChange, setCardType }} />
      </div>
    </div>
  );
};

export default Payment;
