import type { NextPage } from 'next'
import { useState, useEffect, useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import ROUTES from 'utils/constants/routes'
import Paginator from 'components/Paginator'
import useCounter from 'utils/hooks/useCounter'
import CardCharacter from 'components/CardCharacter'
import CardShimmers from 'components/CardShimmer'
import { charactersQuery } from 'api/characters/charctersQuery'
import { CharactersProps } from 'utils/interfaces/characters'
import Searcher from 'components/Searcher'
import useWidth from 'utils/hooks/useWidth'

interface Info {
  count: number
  pages: number
}

interface CharactersPageProps {
  results: Array<CharactersProps>
  info: Info
}

const INIT_INFO = {
  pages: 0,
  count: 0,
}

const INIT_PAGE = 1

const Characters: NextPage = () => {
  const width = useWidth()
  const [characters, setCharacters] = useState(
    (): CharactersPageProps => ({
      results: [],
      info: INIT_INFO,
    }),
  )
  const [search, setSearch] = useState('')

  const {
    counter: page,
    increment,
    decrement,
    reset,
  } = useCounter({
    initialCounter: INIT_PAGE,
  })

  const { data, loading } = useQuery(
    charactersQuery({ page, text: JSON.stringify(search) }),
  )

  useEffect(() => {
    if (data && !loading) {
      const { results, info } = !!data && data.characters
      setCharacters({ results, info })
    }
  }, [data, loading])

  useEffect(() => {
    if (Boolean(search)) {
      reset()
    }
  }, [search])

  return (
    <Layout>
      <HeadTitle title={ROUTES.characters.label} />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl text-white">
              {ROUTES.characters.label}
            </span>
            <span className="text-sm text-white">
              {loading
                ? 'Loading'
                : `Page ${page} of ${characters?.info?.pages}`}
            </span>
          </div>
          <div className="flex h-8 sm:h-10">
            <Searcher placeholder="Search Episode" onHandleClick={setSearch} />
            {width >= 480 && (
              <Paginator
                lastPage={characters.info.pages}
                currentPage={page}
                onClickBack={decrement}
                onClickNext={increment}
              />
            )}
          </div>
        </div>
        {width <= 480 && (
          <div className="w-full flex justify-end">
            <Paginator
              lastPage={characters.info.pages}
              currentPage={page}
              onClickBack={decrement}
              onClickNext={increment}
            />
          </div>
        )}
        <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-3 xl:gap-3 hd:grid-cols-4 hd:gap-4 w-full h-full mt-4">
          {loading
            ? Array.from({ length: 20 }, (_, index) => (
                <CardShimmers key={index} type="character" />
              ))
            : characters.results.map((character) => (
                <Link href={`/characters/${character.id}`} key={character.id}>
                  <a>
                    <CardCharacter character={character} />
                  </a>
                </Link>
              ))}
        </div>
      </div>
    </Layout>
  )
}

export default Characters

// export async function getStaticProps() {
//   const { data, loading } = await client.query({
//     query: charactersQuery,
//   })

//   const { results, info } = !!data && data?.characters

//   return {
//     props: {
//       results,
//       info,
//       loading,
//     },
//   }
// }
