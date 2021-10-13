import Image from 'next/image'
import Link from 'next/link'

interface MainCardProps {
  title?: string
  src: string
  alt: string
  path: string
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  src,
  alt,
  path,
}: MainCardProps) => {
  return (
    <Link href={path}>
      <a className="relative inline-block text-center w-full h-1/3 rounded-xl overflow-hidden opacity-60 hover:opacity-95 cursor-pointer shadow-2xl sm:my-2">
        <Image src={src} layout="fill" alt={alt} />
        <div className="absolute border-2 rounded-md px-7 py-2 top-1/2 left-1/2 text-3xl transform -translate-x-1/2 -translate-y-1/2 text-white bg-gray-900 opacity-90">
          {title}
        </div>
      </a>
    </Link>
  )
}

export default MainCard
