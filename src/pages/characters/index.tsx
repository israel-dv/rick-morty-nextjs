import type { NextPage } from 'next'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'
import ROUTES from 'utils/constants/routes'

const Characters: NextPage = () => {
  return (
    <Layout>
      <HeadTitle title={ROUTES.characters.label} />
      {ROUTES.characters.label}
    </Layout>
  )
}

export default Characters
