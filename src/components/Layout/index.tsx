import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Dropdown from 'components/Dropdown'
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
      <Header>
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
            <Dropdown />
            <input className="ml-2 bg-blue-1000 opacity-75 h-8 focus:outline-none px-3 rounded-md text-white text-xs focus:border-indigo-50" />
          </div>
        </div>
      </Header>
      <div className="w-full h-full pt-28 pb-8 fh:px-48 iphone:px-6">
        {children}
      </div>
    </div>
  )
}

export default Layout
