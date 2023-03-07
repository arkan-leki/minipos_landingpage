import React from 'react'

export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-6" >
      <div className="container mx-auto px-4">
       
        <h1 className="text-4xl font-bold flex-row flex items-center" dir='ltr'>
        <img src="hero.png" alt="fav"  className='w-10' />MINIPOS APP</h1>
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
