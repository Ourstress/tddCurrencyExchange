import React, { useState } from "react";

function CurrencyDropdown(props) {
  const rates = props.data;
  const [selectedRate, setSelectedRate] = useState(0);
  return (
    <section>
      <h2 id="selectedCurrency">{selectedRate}</h2>
      <h3>USD</h3>
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
