import { CharactersProps } from './characters'

export interface EpisodeProps {
  id?: string
  episode?: string
  name?: string
  created?: string
  air_date?: string
  characters?: Array<CharactersProps>
}
