import React from 'react'
import { CONTACT } from '../site'

export const Footer = () => (
  <footer id="contact" className="mt-12 bg-paper-100 border-t border-ink-900/10 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <img src="./kisra-lockup-ku.svg" alt="کیسرا تێک" className="h-9 w-auto mb-4" />
        <p className="text-ink-700 leading-7">
          سیستەم و ئەپ بۆ بزنسەکان. یەک ئەندازیار، هەموو بەرهەمەکە: دیزاین، کۆد، دامەزراندن و پشتگیری.
        </p>
        <p className="text-ink-500 mt-2">کوردستان — عێراق</p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <a
          href={CONTACT.whatsapp}
          className="bg-gold-500 hover:bg-gold-600 text-ink-900 font-bold py-3 px-6 rounded-xl transition-colors duration-150"
        >
          واتسئاپ <span className="font-latin" dir="ltr">{CONTACT.phone}</span>
        </a>
        <a href={`mailto:${CONTACT.email}`} className="font-latin text-teal-600 hover:underline" dir="ltr">
          {CONTACT.email}
        </a>
      </div>
    </div>
    <div className="border-t border-ink-900/10">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between gap-3 text-sm text-ink-500">
        <p className="font-latin" dir="ltr">© {new Date().getFullYear()} Kisra Tech Solutions</p>
        <nav className="flex gap-5">
          <a className="hover:text-ink-900" href="./privacy-policy.html">سیاسەتی تایبەتێتی</a>
          <a className="hover:text-ink-900 font-latin" href="./privacy-policy.html#policy-en">Privacy policy</a>
        </nav>
      </div>
    </div>
  </footer>
)
