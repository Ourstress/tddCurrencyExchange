import { render, screen, waitFor } from "@testing-library/react";
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

// Check that useState is linked to UI by mocking some values for useState
test("useState linked to UI", () => {
  const useStateSpy = jest
    .spyOn(React, "useState")
    .mockImplementation(() => [
      { FakeCurrencyInitials: 123.111999 },
      jest.fn(),
    ]);
  render(<App />);
  expect(useStateSpy).toBeCalledTimes(1);
  expect(screen.getByText("FakeCurrencyInitials")).toBeInTheDocument();
  useStateSpy.mockRestore();
});

// Check that data from axios is being stored in useState by mocking axios.get
test("data from axios stored in useState hook", async () => {
  const axiosSpy = jest
    .spyOn(axios, "get")
    .mockReturnValue(
      Promise.resolve({ data: { rates: { FakeCurrencyInitials: 123.111999 } } })
    );
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText("FakeCurrencyInitials")).toBeInTheDocument()
  );
  axiosSpy.mockRestore();
});
