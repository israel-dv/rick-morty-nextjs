import { gql } from '@apollo/client'

export const episodesQuery = (id: number) => gql`
  query Episodes {
    episodes(page: ${id}) {
      info {
        count
        pages
      }
      results {
        id
        name
        episode
      }
    }
  }
`
