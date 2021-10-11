import { useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import Layout from 'components/Layout'
import { episodeById } from 'api/episodes/episodeById'
import { EpisodeProps } from 'utils/interfaces/episodes'
import CharacterCard from 'components/CharacterCard'
import CardShimmers from 'components/CardShimmers'

const EpisodeId = () => {
  const {
    query: { id },
  } = useRouter()

  const [episode, setEpisode] = useState(
    (): EpisodeProps => ({
      characters: [],
    }),
  )

  const { data, loading } = useQuery(episodeById(id))

  useEffect(() => {
    if (data && !loading) {
      const { episode } = !!data && data
      setEpisode(episode)
    }
  }, [data, loading])

  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        {loading ? (
          <>
            <div className="animate-pulse flex w-full flex-col">
              <div className="h-8 w-32 bg-white m-1 rounded-lg"></div>
              <div className="h-5 w-48 bg-gray-300 m-1 rounded-lg"></div>
              <div className="h-5 w-48 bg-gray-300 m-1 rounded-lg"></div>
            </div>
            <hr className="my-3" />
            <div className="grid fh:grid-cols-4 fh:gap-4 w-full h-full mt-4 2xl:grid-cols-2 2xl:gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <CardShimmers type="character" />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full flex-col">
              <span className="text-3xl font-bold text-white">
                {episode.name}
              </span>
              <span className="text-lg text-gray-300">{`Episode: ${episode.episode}`}</span>
              <span className="text-lg text-gray-300">{`Air date: ${episode.air_date}`}</span>
            </div>
            <hr className="my-3" />
            <Link href={`/characters`}>
              <a>
                <span className="text-xl font-bold text-white hover:shadow-2xl">
                  Characters
                </span>
              </a>
            </Link>
            <div className="grid fh:grid-cols-4 fh:gap-4 w-full h-full mt-4 2xl:grid-cols-2 2xl:gap-2">
              {episode.characters?.map((character) => (
                <Link href={`/characters/${character.id}`} key={character.id}>
                  <a>
                    <CharacterCard character={character} />
                  </a>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default EpisodeId
