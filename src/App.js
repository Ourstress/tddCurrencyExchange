import logo from "./logo.svg";
import "./App.css";
import CurrencyDropdown from "./components/currencyDropdown";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [rates, setRates] = useState({ CAD: 1.2944637825 });
  useEffect(() => {
    const exchangeUrl = "https://api.exchangeratesapi.io/latest?base=USD";
    axios.get(exchangeUrl).then((response) => setRates(response.data));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CurrencyDropdown data={rates} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
