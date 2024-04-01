'use client'

import { useState } from 'react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/16/solid'

const NavBarDetails = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Products',
    path: '/products'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

type AchorProps = {
  href: string
  title: string
}

export const Anchor = ({ href, title }: AchorProps) => {
  return (
    <a
      className="h-auto w-auto rounded-md bg-white p-2 hover:bg-slate-300 transition-all duration-300 px-4"
      href={href}
    >
      {title}
    </a>
  )
}

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between h-16 px-4 text-black cursor-pointer bg-slate-200">
      <h1 className="font-bold text-lg">Code Commerce</h1>
      <ul className="hidden md:flex items-center justify-center gap-2">
        {NavBarDetails.map((item, index) => (
          <li key={index}>
            <Anchor href={item.path} title={item.title} />
          </li>
        ))}
      </ul>
      <div className="h-6 w-6 md:hidden">
        {isSidebarOpen ? (
          <XMarkIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        ) : (
          <Bars3BottomLeftIcon
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
      </div>
      <ul
        className={`${
          isSidebarOpen ? 'left-0' : '-left-[100%]'
        } md:hidden fixed top-16 left-0 h-screen w-1/2 bg-slate-200 flex flex-col items-start justify-start p-4 gap-4 ease-in-out duration-300
        }`}
      >
        {NavBarDetails.map((item, index) => (
          <li key={index}>
            <Anchor href={item.path} title={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
