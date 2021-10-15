/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import ROUTES from 'utils/constants/routes'
import Layout from 'components/Layout'
import CardEpisode from 'components/CardEpisode'
import CardShimmers from 'components/CardShimmer'
import { characterById } from 'api/characters/characterById'
import { useEffect, useState } from 'react'
import { CharactersProps } from 'utils/interfaces/characters'

const Character: NextPage = () => {
  const {
    query: { id },
  } = useRouter()

  const [character, setCharacter] = useState(
    (): CharactersProps => ({
      image: '/images/loading.jpeg',
    }),
  )

  const { data, loading } = useQuery(characterById(id))

  useEffect(() => {
    if (data && !loading) {
      const { character } = !!data && data
      setCharacter(character)
    }
  }, [data, loading])

  const STATUS = (status: string | undefined): string => {
    switch (status) {
      case 'Dead':
        return '💀'
      case 'Alive':
        return '😎'
      default:
        return '🤔'
    }
  }

  return (
    <Layout>
      <div className="flex flex-col w-full h-full p-10">
        {loading ? (
          // This only renders elements to show that page is loading
          <>
            <div className="animate-pulse flex w-full iphone:flex-col iphone:items-center fh:flex-row">
              <img
                alt={character.name}
                src={character.image}
                className="h-40 w-40 rounded-full border-2 border-white bg-gray-600 shadow-2xl outline-none"
              />
              <div className="flex flex-col iphone:pt-3 fh:pl-4 fh:items-start iphone:items-center w-full">
                <div className="text-4xl h-9 w-44 font-bold bg-white rounded-lg"></div>
                <div className="h-4 w-32 bg-gray-300 m-1 rounded-lg"></div>
                <div className="h-4 w-32 bg-gray-300 m-1 rounded-lg"></div>
                <div className="h-4 w-32 bg-gray-300 m-1 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <span className="text-white text-3xl font-bold">Episodes</span>
              <div className="grid fh:grid-cols-4 fh:gap-4 w-full h-full mt-4 2xl:grid-cols-2 2xl:gap-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <CardShimmers type="episode" key={index} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full iphone:flex-col iphone:items-center fh:flex-row">
              <img
                alt={character.name}
                src={character.image}
                className="h-40 w-40 rounded-full border-2 border-white bg-gray-600 shadow-2xl outline-none"
              />
              <div className="flex flex-col iphone:pt-3 fh:pl-4 fh:items-start iphone:items-center w-full iphone:text-center">
                <span className="text-4xl font-bold text-white italic text-shadow-left-orange font-balsamiq">
                  {character.name}
                </span>
                <span className="text-base text-gray-300 font-varela">{`Gender: ${character.gender}`}</span>
                <span className="text-base text-gray-300 font-varela">{`Origin: ${character.origin?.name}`}</span>
                <div className="flex items-center">
                  <span className="text-base text-gray-300">{`Status: ${character.status}`}</span>
                  <div className={`ml-3 rounded-full text-base`}>{`${STATUS(
                    character.status,
                  )}`}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <Link href={`${ROUTES.episodes.path}`}>
                <a>
                  <span className="text-white text-3xl font-bold hover:underline hover:text-green-500">
                    {ROUTES.episodes.label}
                  </span>
                </a>
              </Link>
              <div className="grid fh:grid-cols-4 fh:gap-4 w-full h-full mt-4 2xl:grid-cols-2 2xl:gap-2">
                {character.episode?.map((episode) => (
                  <Link key={episode.id} href={`/episodes/${episode.id}`}>
                    <a>
                      <CardEpisode episode={episode} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Character
