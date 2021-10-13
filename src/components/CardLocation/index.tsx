import { LocationsProps } from 'utils/interfaces/locations'

interface CardLocationProps {
  location: LocationsProps
}

const CardLocation: React.FC<CardLocationProps> = ({
  location,
}: CardLocationProps) => {
  return (
    <div className="flex flex-col iphone:min-h-24 fh:h-full border-2 border-blue-700 rounded-lg justify-center px-4 bg-gray-800  cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-500 my-1">
      <span className="text-white text-base font-varela">{location.name}</span>
      <span className="text-gray-300 text-xs font-varela">
        {location.dimension}
      </span>
    </div>
  )
}

export default CardLocation
