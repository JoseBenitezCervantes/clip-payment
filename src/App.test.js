import { isValidData } from "./misc/validData";

const data = {
  cardName: "jose alberto benitez",
  cardNumber: "37979469475897897",
  cvv: "1245",
  month: "03",
  year: "2026",
};

test("Los datos deben ser validos",() => { expect(isValidData(data)).toBe(true)});
