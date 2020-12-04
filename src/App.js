import logo from "./logo.svg";
import "./App.css";
import CurrencyDropdown from "./components/currencyDropdown";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const exchangeUrl = "https://api.exchangeratesapi.io/latest?base=USD";
    axios.get(exchangeUrl);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CurrencyDropdown data={{ CAD: 1.2944637825 }} />
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
