import { gql } from '@apollo/client'

export const charactersQuery = (page: number) => gql`
  query characterstes {
    characters (page: ${page}){
      info {
        count
        pages
      }
      results {
        id
        name
        image
        origin {
          name
          dimension
        }
      }
    }
  }
`
