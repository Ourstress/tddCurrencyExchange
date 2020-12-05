import "./App.css";
import CurrencyDropdown from "./components/currencyDropdown";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [rates, setRates] = useState({});
  useEffect(() => {
    const exchangeUrl = "https://api.exchangeratesapi.io/latest?base=USD";
    axios.get(exchangeUrl).then((response) => setRates(response.data.rates));
  });
  return (
    <div className="App">
      <CurrencyDropdown data={rates} />
    </div>
  );
}

export default App;
