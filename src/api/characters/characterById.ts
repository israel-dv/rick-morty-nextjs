import { gql } from '@apollo/client'

export const characterById = (id: any) => gql`
  query Character {
    character(id: ${id}) {
      id
      name
      status
      image
      gender
      type
      species
      origin {
        name
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`
