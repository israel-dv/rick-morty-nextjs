import { EpisodeProps } from './episodes'

interface Origin {
  name?: string
  dimension?: string
}

export interface CharactersProps {
  id?: string
  name?: string
  status?: string
  image: string
  gender?: string
  origin?: Origin
  episode?: Array<EpisodeProps>
}
