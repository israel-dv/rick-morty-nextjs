import type { NextPage } from 'next'

import Layout from 'components/Layout'
import MainCard from 'components/MainCard'
import ROUTES from 'utils/constants/routes'

const TITLE = 'Rick and Morty'
const BY = 'by: Israel Moreno'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center xl:px-52 md:px-12">
        <div className="flex flex-col w-full items-center justify-items-center">
          <span className="text-white fh:text-6xl iphone:text-3xl">
            {TITLE}
          </span>
          <span className="text-gray-300 fh:text-2xl iphone:text-xl ">
            {BY}
          </span>
        </div>
        <br />
        <MainCard
          size="big"
          src="/images/characters.png"
          alt={ROUTES.characters.name}
          title={ROUTES.characters.label}
          path={ROUTES.characters.path}
        />
        <br />
        <MainCard
          src="/images/location1.png"
          size="large"
          alt={ROUTES.locations.name}
          title={ROUTES.locations.label}
          path={ROUTES.locations.path}
        />
        <br />
        <MainCard
          src="/images/episode.png"
          size="large"
          alt={ROUTES.episodes.name}
          title={ROUTES.episodes.label}
          path={ROUTES.episodes.path}
        />
      </div>
    </Layout>
  )
}

export default Home
