import React, { useState } from "react";
import "./index.scss";
import creditCardType from "credit-card-type";
import Swal from "sweetalert2";
import { setPayment } from "../../../misc/fetchCustom";

const FormData = ({ formValues, handleInputChange, reset, setCardType }) => {
  const [isCardValid, setIsCardValid] = useState(true);

  const isValidData = () => {
    //Funcion para validar que los datos esten correctos
    const { cardName, cardNumber, cvv, month, year } = formValues;
    let isValidData = true;
    if (
      !(
        cardNumber &&
        cardNumber.toString().length > 15 &&
        cardNumber.toString().length < 18
      )
    ) {
      return false;
    }
    if (
      !(
        !!month &&
        month !== "0" &&
        !!year &&
        year !== "0" &&
        !!cvv &&
        cardName.length > 0 &&
        cvv.length > 0 &&
        cvv.length < 5
      )
    ) {
      return false;
    }
    return isValidData;
  };

  const onChangeCard = (e) => {
    const cardSize = e.target.value.toString().length;

    //Valida que el BIN sea valido
    const visaCards = creditCardType(e.target.value);
    const cardType = visaCards.length ? visaCards[0].type : false;
    cardType ? setIsCardValid(true) : setIsCardValid(false);

    //Valida que solo se puedan ingresar menos de 18 numeros
    if (cardSize < 18 && cardType) {
      handleInputChange(e);
      setCardType(cardType);
    }
  };

  const onChangeCvv = (e) => {
    //Valida que solo se puedan ingresar menos de 17 numeros
    const cvvSize = e.target.value.toString().length;
    if (cvvSize < 5) {
      handleInputChange(e);
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    //Si los datos son validos se hace el pago
    if (isValidData()) {
      setPayment(formValues, reset);
    } else {
      Swal.fire("Incomplete data", "Check your bank details", "question");
    }
  };

  return (
    <div>
      <form>
        <p>
          {isCardValid ? (
            <label for="number">Card Number</label>
          ) : (
            <label for="number" className="errorLabel">
              * Card Number Invalid *
            </label>
          )}
          <input
            type="number"
            id="number"
            required
            onChange={(e) => onChangeCard(e)}
            placeholder="xxxx xxxx xxxx xxxx"
            name="cardNumber"
            value={formValues.cardNumber}
          />
        </p>
        <p>
          <label for="name">Card Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleInputChange}
            name="cardName"
            value={formValues.cardName}
          />
        </p>
        <p>
          <div className="dateContent">
            <div>
              <p>
                <label for="name">Expiration Date</label>
              </p>
              <select
                id="month"
                value={formValues.month}
                onChange={handleInputChange}
                name="month"
              >
                <option value="0">Month</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                id="year"
                value={formValues.year}
                onChange={handleInputChange}
                name="year"
              >
                <option value="0">Year</option>
                <option value="2021">21</option>
                <option value="2023">22</option>
                <option value="2023">23</option>
                <option value="2024">24</option>
                <option value="2025">25</option>
                <option value="2026">26</option>
                <option value="2027">27</option>
                <option value="2028">28</option>
                <option value="2029">29</option>
                <option value="2030">30</option>
              </select>
            </div>
            <div>
              <p>
                <label for="cvv">CVV</label>
              </p>
              <input
                type="password"
                id="cvv"
                required
                onChange={(e) => onChangeCvv(e)}
                name="cvv"
                value={formValues.cvv}
              />
            </div>
          </div>
        </p>
        <button type="submit" id="submit" onClick={(e) => onClickSubmit(e)}>
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
};

export default FormData;
