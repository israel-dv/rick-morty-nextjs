import { gql } from '@apollo/client'

interface CharactersQueryProps {
  page?: number
  text?: string
}

export const charactersQuery = ({
  page,
  text = '',
}: CharactersQueryProps) => gql`
  query characterstes {
    characters (page: ${page}, filter: { name: ${text} }){
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
