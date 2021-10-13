import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { client } from 'api/client'
import { FilterContext, INIT_FILTER } from 'utils/context'

function MyApp({ Component, pageProps }: AppProps) {
  const [filterPage, setFilterPage] = useState((): string => 'Filter')
  const [filterText, setFilterText] = useState((): string => '')

  return (
    <ApolloProvider client={client}>
      <FilterContext.Provider
        value={{ filterPage, filterText, setFilterText, setFilterPage }}
      >
        <Component {...pageProps} />
      </FilterContext.Provider>
    </ApolloProvider>
  )
}
export default MyApp
