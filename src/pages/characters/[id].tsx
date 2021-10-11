import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

import HeadTitle from 'components/HeadTitle'
import Layout from 'components/Layout'

const Character: NextPage = () => {
  return (
    <Layout>
      <HeadTitle title="Rick" />
    </Layout>
  )
}

export default Character
