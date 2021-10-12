import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

interface FilterPagesProps {
  options: Array<string>
  setTitle(title: any): void
  title: string
}

const FilterPages: React.FC<FilterPagesProps> = ({
  options,
  title,
  setTitle,
}: FilterPagesProps) => {
  const dropDownRef: any = useRef(undefined)

  const [isActive, setActive] = useState(() => false)
  const [selected, setSelected] = useState()

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
      <button
        className={`flex h-8 w-24 justify-center px-4 py-2 text-sm text-gray-400 items-center border rounded-md bg-blue-1000 border-blue-900 ${
          isActive && 'border-indigo-50 text-indigo-50'
        }`}
        onClick={() => setActive(!isActive)}
      >
        {title}
      </button>
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
