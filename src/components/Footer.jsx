import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10" dir="rtl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} MiniPOS — سیستەمی فرۆشتنی بچووک</p>
        <nav className="flex gap-6 text-sm">
          <a className="hover:text-white" href="./privacy-policy.html">سیاسەتی تایبەتێتی</a>
          <a className="hover:text-white" href="./privacy-policy.html#policy-en">Privacy policy</a>
          <a className="hover:text-white" href="mailto:arkan.leki@gmail.com">پەیوەندی</a>
        </nav>
      </div>
    </footer>
  )
}
