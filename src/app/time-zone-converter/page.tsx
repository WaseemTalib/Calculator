"use client";

import { useState } from "react";
import timezones from "./timezones.json";

const zones = timezones;

export default function TimeZoneConverter() {
  const [fromZone, setFromZone] = useState(zones[0].name);
  const [toZone, setToZone] = useState(zones[1].name);
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  function handleConvert(e: React.FormEvent) {
    e.preventDefault();
  if (!time) return setResult("");
  // Parse time as HH:mm
  const [h, m] = time.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return setResult("Invalid time format");
  // Find offsets
  const fromOffset = zones.find(z => z.name === fromZone)?.offset ?? 0;
  const toOffset = zones.find(z => z.name === toZone)?.offset ?? 0;
  const utc = h - fromOffset;
  const toH = (utc + toOffset + 24) % 24;
  setResult(`${String(toH).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Time Zone Converter</h1>
      <form onSubmit={handleConvert} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label className="block mb-2 font-medium text-gray-700">From Time Zone</label>
        <select value={fromZone} onChange={e => setFromZone(e.target.value)} className="w-full border border-blue-300 rounded-lg px-3 py-2 mb-4">
          {zones.map(z => <option key={z.name} value={z.name}>{z.name}</option>)}
        </select>
        <label className="block mb-2 font-medium text-gray-700">To Time Zone</label>
        <select value={toZone} onChange={e => setToZone(e.target.value)} className="w-full border border-blue-300 rounded-lg px-3 py-2 mb-4">
          {zones.map(z => <option key={z.name} value={z.name}>{z.name}</option>)}
        </select>
        <label className="block mb-2 font-medium text-gray-700">Time (HH:mm)</label>
        <input
          type="text"
          value={time}
          onChange={e => setTime(e.target.value)}
          placeholder="e.g. 14:30"
          className="w-full border border-blue-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg placeholder:text-gray-800 text-gray-900 bg-blue-50 transition-all duration-200 shadow-sm"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Convert Time</button>
      </form>
      {result && (
        <div className="text-lg text-blue-700 font-semibold">Converted Time: {result}</div>
      )}
    </section>
  );
}
