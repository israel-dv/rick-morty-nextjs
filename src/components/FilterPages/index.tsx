import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

import List from 'assets/icons/list.svg'
interface FilterPagesProps {
  options: Array<string>
  title: string
  setTitle(title: any): void
}

const FilterPages: React.FC<FilterPagesProps> = ({
  options,
  title,
  setTitle,
}: FilterPagesProps) => {
  const dropDownRef: any = useRef(undefined)

  const [isActive, setActive] = useState(() => false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e: any) => {
    if (dropDownRef.current.contains(e.target)) return
    setActive(false)
  }

  return (
    <div className="relative inline-block" ref={dropDownRef}>
      <div
        className={`flex justify-between h-8 w-32 px-4 py-2 text-sm text-gray-400 items-center border rounded-md bg-blue-1000 border-blue-900 fill-current ${
          isActive && 'border-indigo-50 text-indigo-50'
        }`}
        onClick={() => setActive(!isActive)}
      >
        <button onClick={() => setActive(!isActive)}>{title}</button>
        <List />
      </div>
      <div
        className={`absolute bg-gray-200 origin-top mt-1 w-full rounded-lg border-1 shadow-2xl px-3 py-4 ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        {options.map((title) => (
          <Link key={title} href={`/${title.toLocaleLowerCase()}`}>
            <a
              className="flex items-center justify-center w-full h-8 text-xs"
              onClick={() => setTitle(title)}
            >
              {title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FilterPages
