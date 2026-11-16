import React from 'react'
import { CONTACT } from '../site'

export const Hero = () => (
  <section id="top" className="max-w-6xl mx-auto px-4 pt-14 pb-12 sm:pt-20 sm:pb-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-gold-700 font-semibold mb-3">کیسرا تێک — سیستەمەکانی فرۆشتن</p>
        <h1 className="font-kufi font-bold text-3xl sm:text-5xl leading-[1.5] text-ink-900 mb-5">
          سیستەمی فرۆشتن بۆ دوکانەکەت، بەبێ ئینتەرنێت
        </h1>
        <p className="text-lg leading-8 text-ink-700 mb-8">
          ئەپی خۆماڵی بۆ مارکێت و دوکان: پسوولە چاپ دەکات، کۆگا و قەرز دەژمێرێت، بە کوردی کار دەکات.
          بەخۆڕاییە.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#download"
            className="bg-gold-500 hover:bg-gold-600 text-ink-900 font-bold py-3 px-6 rounded-xl transition-colors duration-150"
          >
            دابەزاندنی بەخۆڕایی
          </a>
          <a
            href={CONTACT.whatsapp}
            className="border border-ink-900/20 hover:border-ink-900/40 text-ink-900 font-semibold py-3 px-6 rounded-xl transition-colors duration-150"
          >
            واتسئاپ <span className="font-latin" dir="ltr">{CONTACT.phone}</span>
          </a>
        </div>
      </div>
      <img
        src="./handheld.png"
        alt="MiniPOS لەسەر ئامێری فرۆشتن، پسوولە چاپ دەکات"
        className="mx-auto w-64 sm:w-80 h-auto"
      />
    </div>
  </section>
)
