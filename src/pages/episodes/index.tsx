import type { NextPage } from 'next'

import Layout from 'components/Layout'
import HeadTitle from 'components/HeadTitle'
import ROUTES from 'utils/constants/routes'

const Episodes: NextPage = () => {
  return (
    <Layout>
      <HeadTitle title={ROUTES.episodes.label} />
      {ROUTES.episodes.label}
    </Layout>
  )
}

export default Episodes
