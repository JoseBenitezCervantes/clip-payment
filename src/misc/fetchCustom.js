import Swal from "sweetalert2";

const setPayment = (formValues, reset) => {
  //Construccion de la peticion
  const raw = JSON.stringify({
    cardName: formValues.cardName,
    cardNumber: formValues.cardNumber,
    cvv: formValues.cvv,
    expiration: `${formValues.month}-${formValues.year}`,
  });

  //popup de loading
  Swal.fire({
    title: "Please Wait!",
    html: "Payment in process",
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  //Solo se uso timeout para ver popup el loading
  setTimeout(async () => {
    const response = await fetch(`${process.env.REACT_APP_FETCH_APP}/payment`, {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.statusCode === 200) {
      Swal.fire("Payment Approved", "Succesful transaction!", "success");
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check your data!",
      });
    }
  }, 1000);
};

export { setPayment };
