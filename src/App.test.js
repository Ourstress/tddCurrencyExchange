import { render } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import * as React from "react";

test("connected to exchange rate API", () => {
  const rateApi = "https://api.exchangeratesapi.io/latest?base=USD";
  const axiosSpy = jest.spyOn(axios, "get");
  render(<App />);
  expect(axiosSpy).toBeCalledWith(rateApi);
  axiosSpy.mockRestore();
});

// Following test on axios,get, I want to test that useState was implemented as a preliminary to storing data through useState
test("useState implemented", () => {
  const useStateSpy = jest.spyOn(React, "useState");
  render(<App />);
  expect(useStateSpy).toBeCalled();
  useStateSpy.mockRestore();
});
