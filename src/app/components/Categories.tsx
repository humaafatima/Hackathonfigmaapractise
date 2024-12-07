import Image from "next/image"
import phone from "@/app/assets/phone.png"
import pc from "@/app/assets/pc.png"
import watch from "@/app/assets/watch.png"
import camera from "@/app/assets/camera.png"
import headphone from "@/app/assets/headphone.png"
import gaming from "@/app/assets/gaming.png"
import arrow from "@/app/assets/arrow.png"

export default function Categories (){
    return (

      <div className='w-[1170px] h-[313px] bg-white py-70 px-20 mt-100 gap-5'>
        <div className="flex w-[1170px] h-[103px]">
      <button className="w-[20px] h-[40px] m-10 ml-4 font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)]"></button>
      <div className="m-8 ml-3 mb-1 mt-10 font-semibold text-1xl text-left font-poppins text-[rgba(219,68,68,1)]">Categories</div>
      </div>
        <div className="flex">
        <h1 className="font-poppins font-bold text-left px-8 py-8 font-weight-700 text-5xl text-black">
        Browse By Category
        </h1>
        <div>
      <Image src={arrow} alt="arrow" width="100" height="46" className="w-[100px] h-[46px] ml-80 mr-2" />
      </div>
        </div>
        <div className="flex flex-row ml-10 mt-50 mb-20 px-5 justify-between gap-5"> 
        <div>
  <Image src={phone} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  <div>
  <Image src={pc} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  <div>
  <Image src={watch} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  <div>
  <Image src={camera} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  <div>
  <Image src={headphone} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  <div>
  <Image src={gaming} alt="searchbox" width="170" height="145" className="w-[170px] h-[145px]" />
  </div>
  
 </div>
</div>
  
  )
  }