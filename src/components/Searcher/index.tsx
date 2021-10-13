import React, { useState } from 'react'

import Search from 'assets/icons/search.svg'

interface SearcherProps {
  placeholder: string
  onHandleClick(text: string): void
}

const Searcher: React.FC<SearcherProps> = ({
  placeholder,
  onHandleClick = () => {},
}: SearcherProps) => {
  const [value, setValue] = useState<string>('')

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onHandleClick(e.target.value)
    }
  }

  const handleChange = (event: any) => setValue(event.target.value)

  const handleClick = () => onHandleClick(value)

  return (
    <div className="ml-2 h-full flex border border-blue-900 rounded-md items-center overflow-hidden px-2">
      <input
        className="bg-blue-1000 h-full text-white text-xs outline-none rounded-none font-varela"
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button
        className="bg-blue-1000 h-full text-gray-200 fill-current hover:text-gray-white"
        onClick={handleClick}
      >
        <Search />
      </button>
    </div>
  )
}

export default Searcher
