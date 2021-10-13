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
    <div className="flex w-32 h-10 ml-2">
      <button
        className={`bg-blue-800 flex w-full h-full border rounded-md items-center justify-center border-blue-400 cursor-pointer fill-current text-white ${
          currentPage <= 1 && 'opacity-50 cursor-default'
        }`}
        onClick={onClickBack}
        disabled={currentPage <= 1}
      >
        <NavigateBefore />
      </button>
      <div className="w-3" />
      <div className="flex w-full h-full border rounded-md items-center justify-center border-blue-400 text-xl font-bold text-white font-balsamiq">
        {currentPage}
      </div>
      <div className="w-3" />
      <button
        className={`bg-blue-800 flex w-full h-full border rounded-md items-center justify-center border-blue-400 cursor-pointer fill-current text-white ${
          currentPage === lastPage && 'opacity-50 cursor-default'
        }`}
        onClick={onClickNext}
        disabled={currentPage === lastPage}
      >
        <NavigateNext />
      </button>
    </div>
  )
}

export default Paginator
