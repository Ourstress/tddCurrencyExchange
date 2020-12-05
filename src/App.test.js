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

// Removed previous tests here that were testing useState because they were messy and redundant

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
