import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingBasket} from "react-icons/md";
import React from "react"


export default function Header() {
  return (
    <>
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* destop and tablet */}
      <div className="hidden w-full md:flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <img src={Logo} className='w-8 object-covers' alt='logo'/>
          <p className='text-headingColors text-xl font-bold'>City</p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <ul className='flex items-center gap-8'>
            <li className='text-base hover:text-gray-900 cursor-pointer text-gray-700 duration-100 ease-in-out trandition-all'>Home</li>
            <li className='text-base hover:text-gray-900 cursor-pointer text-gray-700 duration-100 ease-in-out trandition-all'>Menu</li>
            <li className='text-base hover:text-gray-900 cursor-pointer text-gray-700 duration-100 ease-in-out trandition-all'>Abou Us</li>
            <li className='text-base hover:text-gray-900 cursor-pointer text-gray-700 duration-100 ease-in-out trandition-all'>Services</li>
          </ul>
          <div className="flex relative items-center justify-center">
             <MdShoppingBasket className='text-2xl cursor-pointer' />
             <div className=" text-gray-700 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center absolute -top-3 -right-2">
              <p className='text-xs text-white font-semibold '>2</p>
             </div>
          </div>
          <img src={Avatar} alt="profile" className='w-10 min-w-[40px] h-[40px] shadow-2xl min-h-[40px] drop-shadow-lg' />
        </div>
      </div>

      {/* mobile */}
      <div className="flex h-full p-4 md:hidden"></div>
    </header>
    </>
  );
}