import { render } from "@testing-library/react";
import App from "./App";
import axios from "axios";

test("connected to exchange rate API", () => {
  const rateApi = "https://api.exchangeratesapi.io/latest?base=USD";
  const axiosSpy = jest.spyOn(axios, "get");
  render(<App />);

  expect(axiosSpy).toBeCalledWith(rateApi);
});
