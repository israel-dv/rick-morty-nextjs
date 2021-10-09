import { gql } from '@apollo/client'

export const charactersQuery = gql`
  query characterstes {
    characters(filter: { name: "morty" }) {
      info {
        count
        pages
      }
      results {
        name
        status
        image
        gender
        type
        origin {
          name
          dimension
        }
        episode {
          name
          episode
        }
      }
    }
  }
`
