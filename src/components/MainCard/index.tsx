import Image from 'next/image'

interface MainCardProps {
  title?: string
  size?: 'big' | 'large'
  src: string
  alt: string
}

const cardSize = {
  large: 'h-52',
  big: 'h-1/2',
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  size = 'large',
  src,
  alt,
}: MainCardProps) => {
  return (
    <div
      className={`relative inline-block text-center w-full iphone:h-32 rounded-xl overflow-hidden opacity-60 hover:opacity-95 cursor-pointer shadow-2xl fh:${cardSize[size]}`}
    >
      <Image src={src} layout="fill" alt={alt} />
      <span className="absolute top-1/2 left-1/2">hello</span>
    </div>
  )
}

export default MainCard
