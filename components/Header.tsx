import useAuth from '../hooks/useAuth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaSearch, FaRegBell } from 'react-icons/fa'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className={'headerLink'}>Home</li>
          <li className={'headerLink'}>Movies</li>
          <li className={'headerLink'}>TV Shows</li>
          <li className={'headerLink'}>New</li>
          <li className={'headerLink'}>Popular</li>
          <li className={'headerLink'}>My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <FaSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <FaRegBell className="h-6 w-6" />
        <img
          onClick={logout}
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          alt=""
          className="h-7 w-7 cursor-pointer rounded object-contain"
        />
      </div>
    </header>
  )
}
export default Header
