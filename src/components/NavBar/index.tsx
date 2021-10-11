import Image from 'next/image'

const NavBar: React.FC = () => {
  return (
    <div className="absolute bg-blue-950 h-20 flex  items-center justify-between fh:px-10 shadow-md top-0 w-screen iphone:px-3">
      <Image
        priority
        src="/images/navbarlogo.png"
        width={70}
        height={70}
        alt="rick and morty"
      />
      <input className="bg-blue-1000 opacity-75 h-8 focus:outline-none px-3 rounded-md text-white text-xs" />
    </div>
  )
}

export default NavBar