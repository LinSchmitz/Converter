import React, { useEffect, useState } from 'react';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        'https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD'
      );
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCur}
        onChange={e => setFromCur(Number(e.target.value))}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={e => setToCur(Number(e.target.value))}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
