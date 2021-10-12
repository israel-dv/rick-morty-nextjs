import { CharactersProps } from './characters'
export interface LocationsProps {
  name?: string
  id?: string
  dimension?: string
  type?: string
  residents?: Array<CharactersProps>
}
