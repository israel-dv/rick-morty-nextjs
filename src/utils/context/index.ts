import { createContext } from 'react'

interface FilterContextProps {
  filterPage: string
  setFilterPage: (param?: any) => void
  filterText: string
  setFilterText: (param?: any) => void
}

export const INIT_FILTER: FilterContextProps = {
  filterPage: '',
  filterText: '',
  setFilterPage: () => {},
  setFilterText: () => {},
}

export const FilterContext = createContext(INIT_FILTER)
