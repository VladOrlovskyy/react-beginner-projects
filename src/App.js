import React, { useState } from 'react';
import './index.scss';

function CurrencyConverter() {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    const currencies = ['UA', 'USD', 'EUR', 'GBP', 'JPY', 'TRY', 'MXN', 'NOK']; // Додайте потрібні валюти

    const convertCurrency = () => {
        const conversionRates = {
            UA: { USD: 0.037, EUR: 0.031, GBP: 0.027, JPY: 4.58, TRY: 0.49, MXN: 0.76, NOK: 0.33 },
            USD: { EUR: 0.84, GBP: 0.72, JPY: 109.36, UA: 27.0, TRY: 13.24, MXN: 20.54, NOK: 8.84 },
            EUR: { USD: 1.19, GBP: 0.86, JPY: 130.95, UA: 32.14, TRY: 15.80, MXN: 24.50, NOK: 10.55 },
            GBP: { USD: 1.39, EUR: 1.16, JPY: 151.49, UA: 37.20, TRY: 18.29, MXN: 28.36, NOK: 12.21 },
            JPY: { USD: 0.0091, EUR: 0.0076, GBP: 0.0066, UA: 0.22, TRY: 0.11, MXN: 0.17, NOK: 0.074 },
            TRY: { USD: 0.075, EUR: 0.063, GBP: 0.055, JPY: 8.93, UA: 2.05, MXN: 1.55, NOK: 0.67 },
            MXN: { USD: 0.049, EUR: 0.041, GBP: 0.035, JPY: 6.04, UA: 1.32, TRY: 0.64, NOK: 0.43 },
            NOK: { USD: 0.113, EUR: 0.095, GBP: 0.082, JPY: 13.50, UA: 3.03, TRY: 1.49, MXN: 2.32 }
        };
        setResult(amount * conversionRates[fromCurrency][toCurrency]);
    };


    return (
        <div>
            <h2>Currency Converter</h2>
            <div>
                <label>From:</label>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>To:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <button onClick={convertCurrency}>Convert</button>
            </div>
            <div>
                <h3>Result: {result.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default CurrencyConverter;