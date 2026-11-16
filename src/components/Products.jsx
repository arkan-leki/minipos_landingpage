import React from 'react'
import { PRODUCTS } from '../site'

const Gallery = ({ name, screens }) => (
  <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 snap-x">
    {screens.map((src) => (
      <img
        key={src}
        src={src}
        alt={`شاشەیەکی ${name}`}
        className="snap-start shrink-0 h-72 sm:h-96 w-auto rounded-2xl border border-ink-900/10"
      />
    ))}
  </div>
)

const ProductCard = ({ product }) => (
  <article className="min-w-0 bg-white rounded-[20px] border border-ink-900/10 p-5 sm:p-8">
    <div className="flex items-center gap-4 mb-5">
      <img src={product.icon} alt="" className="w-16 h-16 rounded-2xl" />
      <div>
        <h3 className="font-latin font-extrabold text-2xl text-ink-900" dir="ltr">
          {product.name} <span className="text-base font-medium text-ink-500">v{product.version}</span>
        </h3>
        <p className="text-teal-700 font-semibold">{product.audience}</p>
      </div>
    </div>
    <p className="leading-8 text-ink-700 mb-4">{product.summary}</p>
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 text-ink-900">
      {product.features.map((feature) => (
        <li key={feature} className="flex gap-2 items-start">
          <span className="text-teal-600 font-bold">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Gallery name={product.name} screens={product.screens} />
  </article>
)

const DownloadRow = ({ product }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-[20px] border border-ink-900/10 p-5">
    <div className="flex items-center gap-3">
      <img src={product.icon} alt="" className="w-12 h-12 rounded-xl" />
      <div>
        <p className="font-latin font-bold text-ink-900" dir="ltr">{product.name} {product.version}</p>
        <p className="text-sm text-ink-500">ئەندرۆید · نزیکەی <span className="font-latin">{product.sizeMb}</span> مێگابایت · بەخۆڕایی</p>
      </div>
    </div>
    <div className="flex flex-col items-start sm:items-end gap-2">
      <div className="flex flex-wrap gap-2">
        {product.playLive && (
          <a
            href={product.play}
            className="bg-gold-500 hover:bg-gold-600 text-ink-900 font-bold py-3 px-6 rounded-xl transition-colors duration-150"
          >
            <span className="font-latin">Google Play</span>
          </a>
        )}
        <a
          href={product.download}
          className={
            product.playLive
              ? 'border border-ink-900/20 hover:border-ink-900/40 text-ink-900 font-semibold py-3 px-6 rounded-xl transition-colors duration-150'
              : 'bg-gold-500 hover:bg-gold-600 text-ink-900 font-bold py-3 px-6 rounded-xl transition-colors duration-150'
          }
        >
          دابەزاندنی <span className="font-latin">APK</span>
        </a>
      </div>
      {product.downloadAll && (
        <a href={product.downloadAll} className="text-sm text-teal-600 hover:underline">
          مۆبایلی کۆن؟ وەشانی گشتی دابەزێنە
        </a>
      )}
    </div>
  </div>
)

export const Products = () => (
  <>
    <section id="products" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-16">
      <h2 className="font-kufi font-bold text-2xl sm:text-3xl text-ink-900 mb-8">بەرهەمەکان</h2>
      <div className="grid grid-cols-1 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    <section id="download" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-16">
      <h2 className="font-kufi font-bold text-2xl sm:text-3xl text-ink-900 mb-3">دابەزاندن</h2>
      <p className="text-ink-700 mb-6 leading-7">
        فایلەکە دابەزێنە و بیکەرەوە. ئەگەر مۆبایلەکەت پرسیاری کرد، ڕێگە بە دامەزراندن لەم سەرچاوەیە بدە.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {PRODUCTS.map((product) => (
          <DownloadRow key={product.id} product={product} />
        ))}
      </div>
    </section>
  </>
)
