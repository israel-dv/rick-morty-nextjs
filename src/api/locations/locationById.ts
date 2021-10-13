import { gql } from '@apollo/client'

export const locationByID = (id: any) => gql`
  query Location {
    location(id: ${id}) {
      id
      name
      dimension
      type
      residents {
        id
        name
        image
        origin {
          dimension
        }
      }
    }
  }
`
