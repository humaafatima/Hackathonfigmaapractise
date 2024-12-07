"use client"
import Image from "next/image"
import Heromobile from "@/app/assets/Heromobile.png"

export default function Hero () {
  return <div className="flex justify-between w-[1440px] [h-500px] py-[10px] px-[220px] mt-[20px] bg-white">
     
      
          <div className="flex row 1/2">
          <div className="w-[300px] h-[238px]">
              <ul className="text-black text-2xl font-poppins text-left font-extra-bold p-25 py-2 space-x-2 space-y-4 ml-0.75 mr-20 border-r border-gray-300">
                  <li>Women's Fashion</li>
                  <li>Men's Fashion</li>
                  <li>Electronics</li>
                  <li>Home & Lifestyle</li>
                  <li>Medicine</li>
                  <li>Sports & Outdoor</li>
                  <li>Babiy's & Toys</li>
                  <li>Groceries & Pets</li>
                  <li>Health & Beauty</li>
              </ul>
  
        </div>
        <div className="flex row 1/2">
        <div className="w-[980px] h-[549px] gap-4">
          <Image src={Heromobile} alt="mobile" width="890" height="340" className="w-[960px] h-[390px]"/>
        </div>
  </div>
  </div>
  </div>
  
  }