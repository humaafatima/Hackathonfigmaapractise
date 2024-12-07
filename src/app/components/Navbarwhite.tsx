import Image from "next/image"
import Searchbox from "@/app/assets/Searchbox.png"
import Cart from "@/app/assets/Cart.png"
import heart from "@/app/assets/heart.png"
export default function NavbarWhite() {
    return (
      <div>
        <nav className="flex flex-wrap justify-between items-center w-full px-4 md:px-8 py-4 bg-white border-b border-gray-300">
          {/* Logo */}
          <div className="text-black font-bold text-2xl md:text-3xl font-integral">
            Exclusive
          </div>
  
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-6 text-sm md:text-lg font-satoshi text-black">
            <li className="cursor-pointer hover:text-gray-600">Home</li>
            <li className="cursor-pointer hover:text-gray-600">Contact</li>
            <li className="cursor-pointer hover:text-gray-600">About</li>
            <li className="cursor-pointer hover:text-gray-600">Signup</li>
          </ul>
  
         {/* Searchbox and Cart */}
        <div className="flex justify-between items-center gap-6">
          <div className="relative w-[200px] h-[40px]">
            <Image
              src={Searchbox}
              alt="Searchbox"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
              <div>
            <Image src={heart} alt="heart" width={24} height={24}
              className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"/>
              </div>
              <div>
            <Image src={Cart} alt="Cart" width={24} height={24} className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
            />
          </div>
          </div>
          </nav>
          </div>
          
           
    );
  }
  