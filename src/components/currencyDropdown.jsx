import React, { useState } from "react";

function CurrencyDropdown(props) {
  const rates = props.data;
  const [selectedRate, setSelectedRate] = useState("");
  return (
    <section>
      <h3>1 USD</h3>
      <h2 id="selectedCurrency">
        {Object.keys(rates).length !== 0
          ? selectedRate
            ? `${rates[selectedRate]} ${selectedRate}`
            : `${rates[Object.keys(rates)[0]]} ${Object.keys(rates)[0]}`
          : ""}
      </h2>
      <select
        onChange={(e) => {
          setSelectedRate(e.target.value);
        }}
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency} id={currency}>
            {currency}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CurrencyDropdown;
