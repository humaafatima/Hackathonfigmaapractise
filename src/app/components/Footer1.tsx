import Image from "next/image"
import delivery from "@/app/assets/delivery.png"
import moneyback from "@/app/assets/moneyback.png"
import support from "@/app/assets/support.png"
export default function Footer1() {
    return (
      <div className='flex w-[1180px] h-[500px] justify-center bg-white py-60 px-40 mt-40 gap-5'>
        <div className="flex w-[1170px] h-[103px] gap-5">
        <div> <Image src={delivery} alt="delivery" width="249" height="161" className="w-[249px] h-[161px]" /></div>
        <div> <Image src={support} alt="support" width="249" height="161" className="w-[249px] h-[161px]" /></div>
        <div> <Image src={moneyback} alt="moneyback" width="249" height="161" className="w-[249px] h-[161px]" /></div>
        </div>
        </div>
        )
        }