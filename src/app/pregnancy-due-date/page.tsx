"use client";
// ...existing code...
"use client";

import { useState } from "react";

function getDueDate(lastPeriod: string) {
  const lmp = new Date(lastPeriod);
  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280); // 40 weeks
  return dueDate;
}

function getTrimesterInfo(lastPeriod: string) {
  const lmp = new Date(lastPeriod);
  const today = new Date();
  const daysPregnant = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24));
  if (daysPregnant < 0) return "Not pregnant yet.";
  if (daysPregnant < 91) return "First Trimester";
  if (daysPregnant < 189) return "Second Trimester";
  if (daysPregnant < 280) return "Third Trimester";
  return "Past due date.";
}

export default function PregnancyDueDateCalculator() {
  const [lmp, setLmp] = useState("");
  const [result, setResult] = useState<{ dueDate: string; trimester: string } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!lmp) return setResult(null);
    const dueDate = getDueDate(lmp);
    const trimester = getTrimesterInfo(lmp);
    setResult({
      dueDate: dueDate.toLocaleDateString(),
      trimester,
    });
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-pink-700">Pregnancy Due Date Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label htmlFor="lmp" className="block mb-2 font-medium text-gray-700">Last Period Date</label>
        <input
          id="lmp"
          type="date"
          value={lmp}
          onChange={e => setLmp(e.target.value)}
          placeholder="YYYY-MM-DD"
          className="w-full border border-pink-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-700 text-lg placeholder:text-gray-800 text-gray-900 bg-pink-50 transition-all duration-200 shadow-sm"
          required
        />
        <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition">Calculate Due Date</button>
      </form>
      {result && (
        <div className="text-lg text-green-700 font-semibold mb-2">Expected Due Date: {result.dueDate}</div>
      )}
      {result && (
        <div className="text-md text-gray-700">Trimester: {result.trimester}</div>
      )}
    </section>
  );
}
