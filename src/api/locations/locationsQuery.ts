import { gql } from '@apollo/client'

export const locationsQuery = (page: number) => gql`
  query Locations {
    locations (page: ${page}) {
      info {
        pages
        count
      }
      results {
        id
        name
        dimension
        type
        residents {
          name
          origin {
            name
          }
        }
      }
    }
  }
`
