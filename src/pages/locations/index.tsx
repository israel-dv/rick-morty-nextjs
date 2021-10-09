import type { NextPage } from 'next'

import Layout from 'components/Layout'
import HeadTitle from 'components/HeadTitle'
import ROUTES from 'utils/constants/routes'

const Locations: NextPage = () => {
  return (
    <Layout>
      <HeadTitle title={ROUTES.locations.label} />
      {ROUTES.locations.label}
    </Layout>
  )
}

export default Locations
