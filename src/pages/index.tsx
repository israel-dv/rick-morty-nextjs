import type { NextPage } from 'next'

import Layout from 'components/Layout'
import MainCard from 'components/MainCard'

const TITLE = 'Rick and Morty'
const BY = 'by: Israel Moreno'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center">
        <div className="flex flex-col w-full items-center justify-items-center">
          <span className="text-white fh:text-6xl iphone:text-3xl">
            {TITLE}
          </span>
          <span className="text-gray-300 fh:text-2xl iphone:text-xl ">
            {BY}
          </span>
        </div>
        <br />
        <div className="flex flex-col w-full h-full justify-items-stretch">
          <MainCard
            size="big"
            src="/images/characters.png"
            alt="characters"
            title="Characters"
          />
          <br />
          <div className="flex w-full">
            <MainCard
              src="/images/location1.png"
              alt="locations"
              size="large"
              title="Locations"
            />
            <div className="w-8" />
            <MainCard
              src="/images/episode.png"
              alt="episodes"
              size="large"
              title="Episodes"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
