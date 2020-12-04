import { render } from "@testing-library/react";
import CurrencyDropdown from "./currencyDropdown";

const rates = {
  CAD: 1.2944637825,
  HKD: 7.7519476214,
  ISK: 128.7916459473,
  PHP: 48.0556936847,
  DKK: 6.1692358694,
  HUF: 296.2042101774,
  CZK: 21.8887783855,
  GBP: 0.7499585612,
  RON: 4.0372948782,
  SEK: 8.5208851318,
  IDR: 14209.4977623073,
  INR: 73.73570363,
  BRL: 5.2181335985,
  RUB: 75.6832421681,
  HRK: 6.258909332,
  JPY: 104.5333996353,
  THB: 30.2502900713,
  CHF: 0.8966517487,
  EUR: 0.8287750704,
  MYR: 4.0774904691,
  BGN: 1.6209182828,
  TRY: 7.8377258412,
  CNY: 6.5641471905,
  NOK: 8.8681418863,
  NZD: 1.4202718382,
  ZAR: 15.3803248798,
  USD: 1,
  MXN: 20.0977125808,
  SGD: 1.340626554,
  AUD: 1.3578650754,
  ILS: 3.2906514172,
  KRW: 1102.4365987071,
  PLN: 3.711503398,
};

test("select and option elements rendered", () => {
  const { container } = render(<CurrencyDropdown data={rates} />);
  const selectElement = container.querySelector("select");
  const expectedNumberOfOptions = 33;
  const totalOptionElements = selectElement.querySelectorAll("option");
  expect(totalOptionElements.length).toEqual(expectedNumberOfOptions);
});

// add h2 element to display currently selected currency in future and h3 element to display base currency - USD
test("h2 and h3 elements rendered and h3 element displays USD", () => {
  const { container } = render(<CurrencyDropdown data={rates} />);
  const baseCurrencyElement = container.querySelector("h3");
  expect(container.querySelector("h2")).toBeTruthy();
  expect(baseCurrencyElement).toBeTruthy();
  expect(baseCurrencyElement.innerHTML).toContain("USD");
});
