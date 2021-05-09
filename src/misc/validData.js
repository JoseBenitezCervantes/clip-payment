const isValidData = (formValues) => {
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

export { isValidData };
