import React from 'react'

const NAV = [
  { href: '#products', label: 'بەرهەمەکان' },
  { href: '#download', label: 'دابەزاندن' },
  { href: '#contact', label: 'پەیوەندی' },
]

export const Header = () => (
  <header className="sticky top-0 z-10 bg-paper-50/95 backdrop-blur border-b border-ink-900/10">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
      <a href="#top" aria-label="کیسرا تێک">
        <img src="./kisra-lockup-ku.svg" alt="کیسرا تێک" className="h-8 w-auto" />
      </a>
      <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-ink-700">
        {NAV.map(({ href, label }) => (
          <a key={href} href={href} className="hover:text-gold-700 transition-colors duration-150">
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
)
