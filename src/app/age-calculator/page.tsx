"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function calculateAge(dateString: string) {
    const birthDate = new Date(dateString);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return `${years} years, ${months} months, ${days} days`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return setResult(null);
    setResult(calculateAge(dob));
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Age Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label htmlFor="dob" className="block mb-2 font-medium text-gray-700">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={e => setDob(e.target.value)}
          placeholder="YYYY-MM-DD"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg placeholder:text-gray-800 text-gray-900 bg-blue-50 transition-all duration-200 shadow-sm"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Calculate Age</button>
      </form>
      {result && (
        <div className="text-lg text-green-700 font-semibold">You are {result} old.</div>
      )}
    </section>
  );
}
