import React from 'react'

export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-6" >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold" dir='ltr'>MINIPOS APP</h1>
        <nav className="mt-6">
          <ul className="flex flex-row gap-4">
            <li>
              <a
                className="hover:text-gray-200 transition-colors duration-300"
                href="#features"
              >
                تایبەتمەندی
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-200 transition-colors duration-300"
                href="#pricing"
              >
                نرخ
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-200 transition-colors duration-300"
                href="#contact"
              >
                پەیوەندیبکە
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
