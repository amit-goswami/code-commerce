import React from 'react'

const Options = [{ name: 'Phones' }, { name: 'Macbooks' }, { name: 'Tables' }]

export const NavBar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex items-center justify-between">
      <nav className="flex w-full screen-max-width">
        <img src="assets/images/apple.svg" alt="logo" className="h-6 w-4" />
        <ul className="flex items-center justify-center flex-1 max-sm:hidden">
          {Options.map((option) => (
            <li key={option.name}>
              <a
                href="#"
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src="assets/images/search.svg" alt="logo" className="h-6 w-4" />
          <img src="assets/images/bag.svg" alt="logo" className="h-6 w-4" />
        </div>
      </nav>
    </header>
  )
}
