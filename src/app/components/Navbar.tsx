import Image from "next/image"
import down from "@/app/assets/down.png"

export default function Navbar() {
    return (
      <div>
        <nav className="flex justify-center items-center w-full gap-4 px-4 md:px-8 py-4 bg-black">
          <div className="text-white text-center items-center font-poppins text-1xl font-integral">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!        <span className="font-bold text-center">  ShopNow</span>
          </div>
          <div className="flex font-poppins items-right text-right text-white justify-between ml-40 list-none">
            <li>English</li>
            <div> <Image src={down} alt="vector" width="10" height="10" className="w-[10px] h-[10px] ml-1 mt-2" /></div>


         
          </div>
          </nav>
         
          </div>

          )
          }