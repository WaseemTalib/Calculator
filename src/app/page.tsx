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
        <a href="/tip-calculator" className="group block rounded-2xl p-7 shadow-xl border-2 border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
          <div className="flex justify-center mb-3">
            <span className="text-4xl">💸</span>
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-2 group-hover:text-green-900 transition-colors">Tip Calculator</h2>
          <p className="text-gray-700">Quickly split bills and calculate tips.</p>
        </a>
      </div>
    </section>
  );
}
