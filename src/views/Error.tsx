import Image from 'next/image'

interface ErrorProps {
  text?: string
}

const Error: React.FC<ErrorProps> = ({ text }: ErrorProps) => {
  return (
    <div className="flex flex-col full h-full items-center justify-center">
      <span className="text-4xl font-balsamiq text-gray-50 text-shadow-left-orange py-5">
        {`Uuuup'ss`}
      </span>
      <Image src="/images/error.png" width={350} height={350} alt="error" />
      <span className="text-4xl font-balsamiq text-gray-50 text-shadow-left-orange py-5">
        {`There aren't results to: ${text}`}
      </span>
    </div>
  )
}

export default Error
