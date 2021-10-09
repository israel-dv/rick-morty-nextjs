import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import ROUTES from 'utils/constants/routes'
import { charactersQuery } from 'api/characters/charctersQuery'

const Characters: NextPage = () => {
  const { loading, data } = useQuery(charactersQuery)

  console.log(loading, data)

  return (
    <Layout>
      <HeadTitle title={ROUTES.characters.label} />
      {ROUTES.characters.label}
    </Layout>
  )
}

export default Characters
