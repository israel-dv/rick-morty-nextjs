import { useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import Layout from 'components/Layout'
import CharacterCard from 'components/CardCharacter'
import CardShimmers from 'components/CardShimmer'
import { locationByID } from 'api/locations/locationById'
import { LocationsProps } from 'utils/interfaces/locations'

const LocationId = () => {
  const {
    query: { id },
  } = useRouter()

  const [location, setLocation] = useState(
    (): LocationsProps => ({
      residents: [],
    }),
  )

  const { data, loading } = useQuery(locationByID(id))

  useEffect(() => {
    if (data && !loading) {
      const { location } = !!data && data
      setLocation(location)
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
            <div className="h-6 w-40 rounded-lg bg-gray-300"></div>
            <div className="grid fh:grid-cols-4 fh:gap-4 w-full min-h-24 mt-4 2xl:grid-cols-2 2xl:gap-2">
              {Array.from({ length: 4 }, (_, index) => (
                <CardShimmers type="character" key={index} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full flex-col">
              <span className="text-3xl font-bold text-white font-balsamiq text-shadow-left-orange">
                {location.name}
              </span>
              <span className="text-lg text-gray-300 font-varela">{`Dimension: ${location.dimension}`}</span>
              <span className="text-lg text-gray-300 font-varela">{`Type: ${location.type}`}</span>
            </div>
            <hr className="my-3" />
            <Link href={`/characters`}>
              <a>
                <span className="text-xl font-bold text-white hover:shadow-2x hover:text-green-500 hover:underline">
                  Characters
                </span>
              </a>
            </Link>
            <div className="grid fh:grid-cols-4 fh:gap-4 w-full h-full mt-4 2xl:grid-cols-2 2xl:gap-2">
              {location.residents?.map((resident) => (
                <Link href={`/characters/${resident.id}`} key={resident.id}>
                  <a>
                    <CharacterCard character={resident} />
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

export default LocationId
