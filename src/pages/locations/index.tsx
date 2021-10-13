import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import ROUTES from 'utils/constants/routes'
import Paginator from 'components/Paginator'
import CardShimmers from 'components/CardShimmer'
import LocationCard from 'components/CardLocation'
import useCounter from 'utils/hooks/useCounter'
import useSessionStorage from 'utils/hooks/useSessionStorage'
import { locationsQuery } from 'api/locations/locationsQuery'
import { LocationsProps } from 'utils/interfaces/locations'

interface Info {
  count: number
  pages: number
}

interface LocationsPageProps {
  results: Array<LocationsProps>
  info: Info
}

const INIT_INFO = {
  pages: 0,
  count: 0,
}

const INIT_PAGE = 1

const Locations: NextPage = () => {
  const [locations, setLocations] = useState(
    (): LocationsPageProps => ({
      results: [],
      info: INIT_INFO,
    }),
  )

  const { value: page, setLocalStorage } = useSessionStorage({
    key: 'locationPage',
    initialValue: INIT_PAGE,
  })

  const { counter, increment, decrement } = useCounter({
    initialCounter: page,
  })

  const { data, loading } = useQuery(locationsQuery(page))

  useEffect(() => {
    if (data && !loading) {
      const { results, info } = !!data && data.locations
      setLocations({ results, info })
    }
  }, [data, loading])

  useEffect(() => {
    setLocalStorage(counter)
  }, [counter])

  return (
    <Layout>
      <HeadTitle title={ROUTES.locations.label} />
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl text-white font-comfortaa">
              {ROUTES.locations.label}
            </span>
            <span className="text-sm text-white font-comfortaa">
              {loading
                ? 'Loading'
                : `Page ${page} of ${locations?.info?.pages}`}
            </span>
          </div>
          <Paginator
            lastPage={locations.info.pages}
            currentPage={page}
            onClickBack={decrement}
            onClickNext={increment}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-2 xl:grid-cols-3 xl:gap-3 hd:grid-cols-4 hd:gap-4 w-full min-h-1/2 max-h-full mt-4">
          {loading
            ? Array.from({ length: 20 }, (_, index) => (
                <CardShimmers key={index} type="episode" />
              ))
            : locations.results.map((location) => (
                <Link href={`/locations/${location.id}`} key={location.id}>
                  <a>
                    <LocationCard location={location} />
                  </a>
                </Link>
              ))}
        </div>
      </div>
    </Layout>
  )
}

export default Locations
