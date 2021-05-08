import React, { useState } from "react";
import "./index.scss";
import creditCardType from "credit-card-type";
import Swal from "sweetalert2";

const FormData = ({ formValues, handleInputChange, setCardType }) => {
  const [isCardValid, setIsCardValid] = useState(true);

  const isValidData = () => {
    const { name, number, cvv, month, year } = formValues;
    let isValidData = true;
    if (!(number && number.toString().length > 15 && number.toString().length < 18)) 
    {
      return false;
    } 
    if (!(!!month && !!year && !!cvv && name.length > 0 && cvv.length > 0 && cvv.length < 5)) {
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

    if (true) {
      Swal.fire({
        title: 'Please Wait!',
        html: 'Payment in process',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    });

    setTimeout(() => {
      Swal.close();
      Swal.fire("Approved payment", "Succesful transaction!", "success");
    }, 2000);
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
            name="number"
            value={formValues.number}
          />
        </p>
        <p>
          <label for="name">Card Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleInputChange}
            name="name"
          />
        </p>
        <p>
          <div className="dateContent">
            <div>
              <p>
                <label for="name">Expiration Date</label>
              </p>
              <select onClick={handleInputChange} name="month">
                <option value="0">Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select onClick={handleInputChange} name="year">
                <option value="0">Year</option>
                <option value="21">21</option>
                <option value="23">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
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
