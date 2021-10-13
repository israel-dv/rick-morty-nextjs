import { gql } from '@apollo/client'

export const episodesQuery = (id: number, name: string) => gql`
  query Episodes {
    episodes(page: ${id}, filter: {name : ${name}}) {
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
