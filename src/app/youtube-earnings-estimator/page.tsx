"use client";
import { useState } from "react";


export default function YouTubeEarningsEstimator() {
  const [views, setViews] = useState("");
  const [cpm, setCpm] = useState("");
  const [result, setResult] = useState<string>("");

  function handleEstimate(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder logic: simple calculation
    const v = parseInt(views.replace(/,/g, ""), 10);
    const c = parseFloat(cpm);
    if (isNaN(v) || isNaN(c) || v <= 0 || c <= 0) return setResult("Invalid input");
    setResult(`$${((v / 1000) * c).toFixed(2)}`);
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-red-700">YouTube Earnings Estimator</h1>
      <form onSubmit={handleEstimate} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label htmlFor="views" className="block mb-2 font-medium text-gray-700">Monthly Views</label>
        <input
          id="views"
          type="text"
          value={views}
          onChange={e => setViews(e.target.value.replace(/[^\d,]/g, ""))}
          placeholder="e.g. 100,000"
          className="w-full border border-red-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg placeholder:text-gray-800 text-gray-900 bg-red-50 transition-all duration-200 shadow-sm"
          required
        />
        <label htmlFor="cpm" className="block mb-2 font-medium text-gray-700">CPM Estimate ($)</label>
        <input
          id="cpm"
          type="text"
          value={cpm}
          onChange={e => setCpm(e.target.value.replace(/[^\d.]/g, ""))}
          placeholder="e.g. 2.50"
          className="w-full border border-red-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg placeholder:text-gray-800 text-gray-900 bg-red-50 transition-all duration-200 shadow-sm"
          required
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">Estimate Earnings</button>
      </form>
      {result && (
        <div className="text-lg text-red-700 font-semibold">Estimated Monthly Earnings: {result}</div>
      )}
    </section>
  );
}
