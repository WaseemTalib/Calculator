import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Calculator Tools</h1>
      <p className="text-xl text-gray-700 mb-10">Free, fast & accurate online calculators. Choose a tool below:</p>
      <div className="grid gap-8 sm:grid-cols-3">
        <a href="/age-calculator" className="group block rounded-2xl p-7 shadow-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">🎂</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-900 transition-colors">Age Calculator</h2>
          <p className="text-gray-700">Find your exact age in years, months, and days.</p>
        </a>
        <a href="/pregnancy-due-date" className="group block rounded-2xl p-7 shadow-xl border-2 border-pink-100 bg-gradient-to-br from-pink-50 via-white to-pink-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">🤰</span>
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2 group-hover:text-pink-800 transition-colors">Pregnancy Due Date</h2>
          <p className="text-gray-700">Calculate your expected due date and trimester info.</p>
        </a>
        <a href="/ai-text-to-emoji" className="group block rounded-2xl p-7 shadow-xl border-2 border-yellow-100 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">😃✨</span>
          </div>
          <h2 className="text-2xl font-bold text-yellow-700 mb-2 group-hover:text-yellow-900 transition-colors">AI Text-to-Emoji</h2>
          <p className="text-gray-700">Convert plain text to emoji-rich text.</p>
        </a>
        <a href="/time-zone-converter" className="group block rounded-2xl p-7 shadow-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-200 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">🌍⏰</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-900 transition-colors">Time Zone Converter</h2>
          <p className="text-gray-700">Convert time between cities or zones.</p>
        </a>
        <a href="/instagram-hashtag-generator" className="group block rounded-2xl p-7 shadow-xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 via-white to-pink-200 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">#️⃣📸</span>
          </div>
          <h2 className="text-2xl font-bold text-pink-700 mb-2 group-hover:text-pink-900 transition-colors">Instagram Hashtag Generator</h2>
          <p className="text-gray-700">Generate hashtags for your topic.</p>
        </a>
        <a href="/youtube-earnings-estimator" className="group block rounded-2xl p-7 shadow-xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-red-200 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">💰📺</span>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mb-2 group-hover:text-red-900 transition-colors">YouTube Earnings Estimator</h2>
          <p className="text-gray-700">Estimate YouTube monthly earnings.</p>
        </a>
      </div>
    </section>
  );
}
