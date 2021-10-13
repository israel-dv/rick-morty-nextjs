import type { NextPage } from 'next'
import { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

import ROUTES from 'utils/constants/routes'
import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import Paginator from 'components/Paginator'
import CardCharacter from 'components/CardCharacter'
import CardShimmers from 'components/CardShimmer'
import Error from 'views/Error'
import Searcher from 'components/Searcher'
import useCounter from 'utils/hooks/useCounter'
import useWidth from 'utils/hooks/useWidth'
import { charactersQuery } from 'api/characters/charctersQuery'
import { CharactersProps } from 'utils/interfaces/characters'

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
  const [search, setSearch] = useState<string>('')

  const {
    counter: page,
    increment,
    decrement,
    reset,
  } = useCounter({
    initialCounter: INIT_PAGE,
  })

  const { data, loading, error } = useQuery(
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
    console.log(page)
  }, [search])

  return (
    <Layout>
      <HeadTitle title={ROUTES.characters.label} />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl sm:text-3xl text-white font-bold font-comfortaa">
              {ROUTES.characters.label}
            </span>
            <span className="text-sm text-white font-comfortaa">
              {loading
                ? 'Loading'
                : `Page ${page} of ${characters?.info?.pages}`}
            </span>
          </div>
          <div className="flex h-8 sm:h-10">
            <Searcher placeholder="Search Characer" onHandleClick={setSearch} />
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
        {error ? (
          <Error text={search} />
        ) : (
          <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-3 xl:gap-3 hd:grid-cols-4 hd:gap-4 w-full min-h-1/2 max-h-full mt-4">
            {loading
              ? Array.from({ length: 20 }, (_, index) => (
                  <CardShimmers key={index} type="character" />
                ))
              : characters.results.map((character) => (
                  <Link href={`/characters/${character.id}`} key={character.id}>
                    <a className="">
                      <CardCharacter character={character} />
                    </a>
                  </Link>
                ))}
          </div>
        )}
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
