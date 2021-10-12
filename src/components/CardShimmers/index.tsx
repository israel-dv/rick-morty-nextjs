/* eslint-disable @next/next/no-img-element */
interface CardShimmersProps {
  type?: 'character' | 'episode' | 'location'
}

const CardShimmers: React.FC<CardShimmersProps> = ({
  type = 'character',
}: CardShimmersProps) => {
  return (
    <div className="animate-pulse flex h-full border-2 border-gray-700 rounded-lg items-center px-4 bg-gray-800 cursor-pointer shadow-lg my-1">
      {type === 'character' && (
        <img
          src="images/loading.jpeg"
          alt="loading"
          className="rounded-full w-24 h-24 bg-gray-200 border-2 border-white cursor-pointer"
        />
      )}
      <div className="flex flex-col ml-2 h-20 justify-center">
        <div className="bg-white h-5 w-16 rounded-md"></div>
        <div className="bg-white h-4 w-28 rounded-md mt-2"></div>
      </div>
    </div>
  )
}

export default CardShimmers
