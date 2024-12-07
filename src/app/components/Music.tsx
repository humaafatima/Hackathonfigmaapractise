import Image from "next/image"
import music from "@/app/assets/music.png"
export default function Home() {
    return (
      <div className='w-[1308px] h-[300px] justify-center bg-white py-20 px-20 mb-10 mt-40 gap-5'>
        <div className="flex ml-10 px-5 justify-center space-x-5">
       
        <div className="w-[12000px] h-[549px] gap-4">
          <Image src={music} alt="mobile" width="1170" height="500" className="w-[960px] h-[390px]"/>
        </div> 
        </div>
        </div>
            )
            }
