import Image from "next/image"
import playstation from "@/app/assets/playstation.png"
import woman from "@/app/assets/woman.png"
import speakers from "@/app/assets/speakers.png"
import perfume from "@/app/assets/perfume.png"

export default function Home() {
    return (
      <div className='w-[1170px] h-[768px] bg-white py-5 ml-12 mt-10 mb-2'>
        <div className="flex w-[1170px] h-[103px]">
        <button className="w-[20px] h-[40px] font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)] mt-30"></button>
      <div className="m-4 mb-0 mt-30 font-semibold text-1xl text-left text-poppins text-[rgba(219,68,68,1)]">Featured</div>
      </div>
         <h1 className="font-poppins font-bold text-left px-8 py-8 mt-1 font-weight-700 text-5xl text-black gap-5">
        New Arrival
        </h1>
<div className="grid grid-col-4 grid-flow-col gap-4 w-[580px] h-[620px]">
    <div className=" w-[570px] h-[600px]">
<Image src={playstation} alt="playstation" width="570" height="600" className="w-[570px] h-[600px]"/>
    </div>
    <div className="grid grid-col w-[570px] h-[600px]">
<Image src={woman} alt="woman" width="570" height="600" className="w-[570px] h-[600px]"/>
    </div>
    </div>
    
    <div className="flex w-[400px] h-[400px] gap-4 mr-50 ml-15 pr-50">
        <div className=" w-[280px] h-[290px]">
<Image src={speakers} alt="speakers" width="270" height="284" className="w-[270px] h-[284px]"/>
    </div>
    <div className=" w-[280px] h-[290px]">
<Image src={perfume} alt="perfume" width="270" height="284" className="w-[270px] h-[284px]"/>
    </div>
        </div> 
        </div>
    )
}
        