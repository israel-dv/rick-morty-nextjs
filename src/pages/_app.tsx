import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import { client } from 'api/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
