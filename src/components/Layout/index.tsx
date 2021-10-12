import Head from 'next/head'

import Header from 'components/Header'

const SITE_TITLE = 'Rick & Morty NextJS IM'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-blue-1000 overflow-auto">
      <Head>
        <link rel="icon" href="/rm.ico" />
        <meta name="description" content="Rick and Morty NextJS - Vest" />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{SITE_TITLE}</title>
      </Head>
      <Header />
      <div className="w-full h-full pt-28 pb-8 fh:px-48 iphone:px-6">
        {children}
      </div>
    </div>
  )
}

export default Layout
