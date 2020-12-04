import React from "react";

function CurrencyDropdown(props) {
  const rates = props.data;
  return (
    <select>
      {Object.keys(rates).map((currency) => (
        <option key={currency}>{currency}</option>
      ))}
    </select>
  );
}

export default CurrencyDropdown;
