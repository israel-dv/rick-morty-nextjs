import { CharactersProps } from 'utils/interfaces/characters'

interface CardCharacterProps {
  character: CharactersProps
}

const CardCharacter: React.FC<CardCharacterProps> = ({
  character,
}: CardCharacterProps) => {
  return (
    <div
      key={character.id}
      className="flex iphone:h-28 fh:h-full border-2 border-gray-700 rounded-lg items-center px-4 bg-gray-800 cursor-pointer shadow-lg hover:shadow-2xl hover:border-gray-300 my-1 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={character.image}
        alt={character.name}
        className="rounded-full w-24 h-24 bg-gray-900 border-2 border-white cursor-pointer"
      />
      <div className="flex flex-col ml-2">
        <p className="text-white">{character.name}</p>
        <span className="text-gray-300 text-xs">{character.origin?.name}</span>
      </div>
    </div>
  )
}

export default CardCharacter
