import type { NextPage } from 'next'

import Layout from 'components/Layout'
import MainCard from 'components/MainCard'
import ROUTES from 'utils/constants/routes'

const TITLE = 'Rick and Morty NextJS'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center xl:px-52 md:px-12">
        <div className="flex flex-col w-full items-center justify-items-center py-3">
          <span className="text-white fh:text-6xl iphone:text-3xl font-bold text-shadow-left-orange italic">
            {TITLE}
          </span>
        </div>
        <br />
        <MainCard
          src="/images/characters.png"
          alt={ROUTES.characters.name}
          title={ROUTES.characters.label}
          path={ROUTES.characters.path}
        />
        <br />
        <MainCard
          src="/images/location1.png"
          alt={ROUTES.locations.name}
          title={ROUTES.locations.label}
          path={ROUTES.locations.path}
        />
        <br />
        <MainCard
          src="/images/episode.png"
          alt={ROUTES.episodes.name}
          title={ROUTES.episodes.label}
          path={ROUTES.episodes.path}
        />
      </div>
    </Layout>
  )
}

export default Home
