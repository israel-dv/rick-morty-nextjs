import Image from 'next/image'
import Link from 'next/link'

import FilterPages from 'components/FilterPages'
import ROUTES from 'utils/constants/routes'
import { useContext } from 'react'
import { FilterContext } from 'utils/context'

const PAGES = [
  ROUTES.characters.label,
  ROUTES.episodes.label,
  ROUTES.locations.label,
]

const Header: React.FC = () => {
  const { filterPage, setFilterPage } = useContext(FilterContext)

  return (
    <div className="absolute bg-blue-950 h-20 flex  items-center justify-between fh:px-10 shadow-md top-0 w-screen iphone:px-3 z-10">
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
          <FilterPages
            options={PAGES}
            title={filterPage}
            setTitle={setFilterPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
