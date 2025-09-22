"use client";

import { useState } from "react";

const emojiMap: Record<string, string> = {
  happy: "😊",
  love: "❤️",
  fire: "🔥",
  party: "🎉",
  sad: "😢",
  food: "🍔",
  money: "💸",
  travel: "✈️",
  sun: "☀️",
  star: "⭐",
  cool: "😎",
  music: "🎵",
  heart: "💖",
  strong: "💪",
  wow: "🤩",
  coffee: "☕",
  rain: "🌧️",
  book: "📚",
  cake: "🎂",
  flower: "🌸",
  car: "🚗",
  phone: "📱",
  computer: "💻",
  tree: "🌳",
  gift: "🎁",
  smile: "😄",
  laugh: "😂",
  angry: "😡",
  sleep: "😴",
  work: "💼",
  run: "🏃",
  swim: "🏊",
  bike: "🚴",
  movie: "🎬",
  art: "🎨",
  science: "🔬",
  rocket: "🚀",
  globe: "🌍",
  win: "🏆",
  idea: "💡",
  light: "💡",
  dark: "🌑",
    // removed duplicate dog and cat
};

function textToEmoji(text: string): string {
  // Extract emojis for matched words only
  const emojis = text
    .split(/\s+/)
    .map(word => emojiMap[word.toLowerCase()])
    .filter(Boolean);
  return emojis.length > 0 ? emojis.join(" ") : "No emojis found for your input.";
}

export default function AITextToEmoji() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleConvert(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return setOutput("");
    setOutput(textToEmoji(input));
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">AI Text-to-Emoji Converter</h1>
      <form onSubmit={handleConvert} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label htmlFor="text" className="block mb-2 font-medium text-gray-700">Enter Text</label>
        <textarea
          id="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full border border-yellow-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg placeholder:text-gray-800 text-gray-900 bg-yellow-50 transition-all duration-200 shadow-sm"
          rows={3}
          required
        />
        <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition">Convert to Emoji</button>
      </form>
      {output && (
        <div className="text-lg text-yellow-700 font-semibold">{output}</div>
      )}
    </section>
  );
}
