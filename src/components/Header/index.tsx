import Image from 'next/image'
import Link from 'next/link'

import Dropdown from 'components/Dropdown'
import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="absolute bg-blue-950 h-20 flex  items-center justify-between fh:px-10 shadow-md top-0 w-screen iphone:px-3">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/navbarlogo.png"
              width={70}
              height={70}
              alt="rick and morty"
            />
          </a>
        </Link>
        <div className="flex">
          <Dropdown />
          <input className="ml-2 bg-blue-1000 opacity-75 h-8 focus:outline-none px-3 rounded-md text-white text-xs focus:border-indigo-50" />
        </div>
      </div>
    </div>
  )
}

export default Header
