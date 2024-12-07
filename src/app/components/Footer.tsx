import Image from "next/image"
import Footer from "@/app/assets/Footer.png"

export default function Footer1() {
    return (
      <div className='flex w-[1440px] h-[440px] justify-center bg-white py-5 px-40 mt-8 gap-5'>
        <div className="w-[1440px] h-[440px] gap-5">
        <div> <Image src={Footer} alt="delivery" width="1440" height="440" className="w-[1440px] h-[440px]" /></div>
        </div>
        </div>
        )
        }