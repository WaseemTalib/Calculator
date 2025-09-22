
"use client";
import { useState } from "react";

function generateHashtags(text: string): string[] {
  // Remove stopwords and generate hashtags for each word
  const stopwords = ["the", "and", "a", "an", "of", "in", "on", "for", "with", "to", "at", "by", "from", "is", "are", "was", "were", "be", "been", "has", "have", "had", "it", "this", "that", "as", "but", "or", "so", "if", "then", "than", "too", "very", "can", "will", "just", "not", "do", "does", "did", "you", "your", "i", "me", "my", "we", "us", "our", "they", "them", "their", "he", "she", "him", "her", "his", "its", "which", "who", "whom", "what", "when", "where", "why", "how"];
  return text
    .split(/\s+/)
    .map(w => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(w => w && !stopwords.includes(w.toLowerCase()))
    .map(w => `#${w}`);
}

export default function InstagramHashtagGenerator() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return setTags([]);
    setTags(generateHashtags(input));
    setCopied(false);
  }

  function handleCopy() {
    if (tags.length === 0) return;
    navigator.clipboard.writeText(tags.join(" ")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <section className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-pink-700">Instagram Hashtag Generator</h1>
      <form onSubmit={handleGenerate} className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label htmlFor="topic" className="block mb-2 font-medium text-gray-700">Enter Topic or Sentence</label>
        <textarea
          id="topic"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your topic or sentence..."
          className="w-full border border-pink-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg placeholder:text-gray-800 text-gray-900 bg-pink-50 transition-all duration-200 shadow-sm"
          rows={3}
          required
        />
        <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition">Generate Hashtags</button>
      </form>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold shadow cursor-pointer select-none">{tag}</span>
          ))}
        </div>
      )}
      {tags.length > 0 && (
        <button
          onClick={handleCopy}
          className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition mb-2"
        >
          {copied ? "Copied!" : "Copy All Hashtags"}
        </button>
      )}
    </section>
  );
}
