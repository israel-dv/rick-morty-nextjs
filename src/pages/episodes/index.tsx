import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import ROUTES from 'utils/constants/routes'
import Paginator from 'components/Paginator'
import useCounter from 'utils/hooks/useCounter'
import useSessionStorage from 'utils/hooks/useSessionStorage'
import CardEpisode from 'components/CardEpisode'
import CardShimmers from 'components/CardShimmers'
import { episodesQuery } from 'api/episodes/espisodesQuery'
import { EpisodeProps } from 'utils/interfaces/episodes'

interface Info {
  count: number
  pages: number
}

interface EpisodePageProps {
  results: Array<EpisodeProps>
  info: Info
}

const INIT_INFO = {
  pages: 0,
  count: 0,
}

const INIT_PAGE = 1

const Episodes: NextPage = () => {
  const [episodes, setEpisodes] = useState(
    (): EpisodePageProps => ({
      results: [],
      info: INIT_INFO,
    }),
  )

  const { value: page, setLocalStorage } = useSessionStorage({
    key: 'pageEpisode',
    initialValue: INIT_PAGE,
  })

  const { counter, increment, decrement } = useCounter({
    initialCounter: page,
  })

  const { data, loading } = useQuery(episodesQuery(page))

  useEffect(() => {
    if (data && !loading) {
      const { results, info } = !!data && data.episodes
      setEpisodes({ results, info })
    }
  }, [data, loading])

  useEffect(() => {
    setLocalStorage(counter)
  }, [counter])

  return (
    <Layout>
      <HeadTitle title={ROUTES.episodes.label} />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl text-white">{ROUTES.episodes.label}</span>
            <span className="text-sm text-white">
              {loading ? 'Loading' : `Page ${page} of ${episodes?.info?.pages}`}
            </span>
          </div>
          <Paginator
            lastPage={episodes.info.pages}
            currentPage={page}
            onClickBack={decrement}
            onClickNext={increment}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-3 xl:gap-3 hd:grid-cols-4 hd:gap-4 w-full h-full mt-4">
          {loading
            ? Array.from({ length: 20 }, (_, index) => (
                <CardShimmers key={index} type="episode" />
              ))
            : episodes.results.map((episode) => (
                <Link href={`/episodes/${episode.id}`} key={episode.id}>
                  <a>
                    <CardEpisode episode={episode} />
                  </a>
                </Link>
              ))}
        </div>
      </div>
    </Layout>
  )
}

export default Episodes
