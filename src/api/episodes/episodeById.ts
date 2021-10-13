import { gql } from '@apollo/client'

export const episodeById = (id: any) => gql`
  query Episode {
    episode(id: ${id}) {
      episode
      name
      id
      air_date
      created
      characters {
        name
        image
        id
        origin {
          name
          dimension
        }
      }
    }
  }
`
