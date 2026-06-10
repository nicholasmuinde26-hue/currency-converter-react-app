import React from 'react'


const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // ✅ Memoize conversion based on amount + fromCurrency
  const convertedBase = useMemo(() => {
    console.log("Recalculating base conversion...");
    return amount * rates[fromCurrency];
  }, [amount, fromCurrency]);

  // ✅ Final conversion depends on toCurrency only
  const convertedAmount = (convertedBase / rates[toCurrency]).toFixed(2);

  return (
    <div className="converter">
      <h1>Currency Converter</h1>

      {/* Input for amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />

      {/* Select for fromCurrency */}
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      {/* Select for toCurrency */}
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      {/* Display converted amount */}
      <p>
        Converted Amount: {convertedAmount} {toCurrency}
      </p>
    </div>
  );
}








function App() {
  return (
    <div>
      <h1>Welcome to the Currency Converter App</h1>
      <CurrencyConverter />
    
    </div>
  )
}

export default App
