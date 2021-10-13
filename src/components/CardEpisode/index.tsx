import { EpisodeProps } from 'utils/interfaces/episodes'

interface CardEpisodeProps {
  episode: EpisodeProps
}

const CardEpisode: React.FC<CardEpisodeProps> = ({
  episode,
}: CardEpisodeProps) => {
  return (
    <div
      key={episode.id}
      className="flex flex-col iphone:min-h-24 fh:h-full border-2 border-green-800 rounded-lg justify-center px-4 bg-gray-800  cursor-pointer shadow-lg hover:shadow-2xl hover:border-green-400 my-1"
    >
      <span className="text-white text-base font-varela">{episode.name}</span>
      <span className="text-gray-300 text-xs font-varela">
        {episode.episode}
      </span>
    </div>
  )
}

export default CardEpisode
