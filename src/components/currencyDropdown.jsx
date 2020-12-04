import React from "react";

function CurrencyDropdown(props) {
  const rates = props.data;
  return (
    <section>
      <h2></h2>
      <h3>USD</h3>
      <select>
        {Object.keys(rates).map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </section>
  );
}

export default CurrencyDropdown;
