import { useEffect } from 'react'

import NavigateNext from 'assets/icons/navigate-next.svg'
import NavigateBefore from 'assets/icons/navigate-before.svg'

interface PaginatorProps {
  lastPage: number
  currentPage: number
  onClickNext?: () => void
  onClickBack?: () => void
}

const Paginator: React.FC<PaginatorProps> = ({
  lastPage = 0,
  currentPage = 0,
  onClickBack = () => {},
  onClickNext = () => {},
}: PaginatorProps) => {
  useEffect(() => {}, [lastPage, currentPage])

  return (
    <div className="flex">
      <button
        className="bg-blue-800 flex w-10 h-10 border rounded-md items-center justify-center border-blue-400 cursor-pointer fill-current text-white"
        onClick={onClickBack}
        disabled={currentPage <= 1}
      >
        <NavigateBefore />
      </button>
      <div className="w-1" />
      <div className="flex w-10 h-10 border rounded-md items-center justify-center border-blue-400 text-xl font-bold text-white">
        {currentPage}
      </div>
      <div className="w-1" />
      <button
        className="bg-blue-800 flex w-10 h-10 border rounded-md items-center justify-center border-blue-400 cursor-pointer fill-current text-white"
        onClick={onClickNext}
        disabled={currentPage === lastPage}
      >
        <NavigateNext />
      </button>
    </div>
  )
}

export default Paginator
