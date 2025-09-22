import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-3xl font-extrabold text-white tracking-tight hover:text-yellow-300 transition-colors duration-200">🧮 Calculator Tools</Link>
      <nav>
        <ul className="flex gap-4 text-lg">
          <li>
            <Link href="/age-calculator" className="px-4 py-2 rounded-lg text-white hover:bg-blue-700 hover:text-yellow-300 transition-colors duration-200">Age</Link>
          </li>
          <li>
            <Link href="/pregnancy-due-date" className="px-4 py-2 rounded-lg text-white hover:bg-pink-600 hover:text-yellow-300 transition-colors duration-200">Pregnancy</Link>
          </li>
          <li>
            <Link href="/ai-text-to-emoji" className="px-4 py-2 rounded-lg text-white hover:bg-yellow-500 hover:text-blue-900 transition-colors duration-200">Text-to-Emoji</Link>
          </li>
          <li>
            <Link href="/time-zone-converter" className="px-4 py-2 rounded-lg text-white hover:bg-blue-400 hover:text-blue-900 transition-colors duration-200">Time Zone</Link>
          </li>
          <li>
            <Link href="/instagram-hashtag-generator" className="px-4 py-2 rounded-lg text-white hover:bg-pink-400 hover:text-blue-900 transition-colors duration-200">Hashtags</Link>
          </li>
          <li>
            <Link href="/youtube-earnings-estimator" className="px-4 py-2 rounded-lg text-white hover:bg-red-500 hover:text-yellow-300 transition-colors duration-200">YouTube Earnings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
