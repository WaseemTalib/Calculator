"use client";

// Type for window.gtag
interface WindowWithGtag extends Window {
  gtag?: (
    event: string,
    action: string,
    params: Record<string, unknown>
  ) => void;
}

import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState<{ total: number; perPerson: number } | null>(null);
  const [error, setError] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!bill) {
      setError("Please enter a bill amount.");
      setResult(null);
      return;
    }
    const billNum = parseFloat(bill);
    if (isNaN(billNum) || billNum <= 0) {
      setError("Bill amount must be greater than 0.");
      setResult(null);
      return;
    }
    if (isNaN(tip) || tip < 0 || tip > 100) {
      setError("Tip percentage must be between 0 and 100.");
      setResult(null);
      return;
    }
    if (isNaN(people) || people < 1) {
      setError("Number of people must be at least 1.");
      setResult(null);
      return;
    }
    const tipAmount = billNum * (tip / 100);
    const total = billNum + tipAmount;
    const perPerson = total / people;
    setResult({ total, perPerson });
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-green-500 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">Tip Calculator</h1>
      <form
        onSubmit={e => {
          if (
            typeof window !== "undefined" &&
            typeof (window as WindowWithGtag).gtag === "function"
          ) {
            const gtag = (window as WindowWithGtag).gtag;
            if (gtag) {
              gtag("event", "cta_click", {
                event_category: "Tip Calculator",
                event_label: "Calculate Tip",
              });
            }
          }
          handleSubmit(e);
        }}
        className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-teal-100"
      >
        {error && (
          <div className="text-red-600 font-semibold mb-4 text-center">{error}</div>
        )}
        <label htmlFor="bill" className="block mb-2 font-semibold text-teal-700">Bill Amount</label>
        <input
          id="bill"
          type="text"
          inputMode="decimal"
          pattern="^\d*(\.\d{0,2})?$"
          value={bill}
          onChange={e => {
            // Only allow numbers and decimal
            const val = e.target.value;
            if (val === "" || /^\d*(\.\d{0,2})?$/.test(val)) {
              setBill(val);
            }
          }}
          placeholder="$ Enter bill amount"
          className="w-full border-2 border-teal-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-teal-700 text-lg placeholder:text-gray-800 text-gray-900 bg-teal-50 transition-all duration-200 shadow-sm"
          required
        />
        <label htmlFor="tip" className="block mb-2 font-semibold text-teal-700">Tip Percentage</label>
        <input
          id="tip"
          type="number"
          min="0"
          max="100"
          value={tip}
          onChange={e => {
            const val = e.target.value;
            if (val === "" || (/^\d{0,3}$/.test(val) && Number(val) <= 100)) {
              setTip(val === "" ? 0 : Number(val));
            }
          }}
          placeholder="% Enter tip percentage"
          className="w-full border-2 border-teal-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-teal-700 text-lg placeholder:text-gray-800 text-gray-900 bg-teal-50 transition-all duration-200 shadow-sm"
          required
        />
        <label htmlFor="people" className="block mb-2 font-semibold text-teal-700">Number of People</label>
        <input
          id="people"
          type="number"
          min="1"
          value={people}
          onChange={e => {
            const val = e.target.value;
            if (val === "" || (/^\d+$/.test(val) && Number(val) >= 1)) {
              setPeople(val === "" ? 1 : Number(val));
            }
          }}
          placeholder="Enter number of people"
          className="w-full border-2 border-teal-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-teal-700 text-lg placeholder:text-gray-800 text-gray-900 bg-teal-50 transition-all duration-200 shadow-sm"
          required
        />
        <button type="submit" className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-teal-400 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 mt-2">Calculate Tip</button>
      </form>
      {result && (
        <div className="text-xl text-green-700 font-bold mb-2 animate-fade-in">Total: ${result.total.toFixed(2)}</div>
      )}
      {result && (
        <div className="text-lg text-teal-700">Per Person: ${result.perPerson.toFixed(2)}</div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
