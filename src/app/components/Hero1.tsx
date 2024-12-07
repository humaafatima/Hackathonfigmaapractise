import Card from "@/app/components/Card/Card"
import Image from "next/image"
import gamepic from "@/app/assets/gamepic.png"
import keyboardpic from "@/app/assets/keyboardpic.png"
import pcpic from "@/app/assets/pcpic.png"
import chairpic from "@/app/assets/chairpic.png"
import fivestar from "@/app/assets/fivestar.png"
import fourstar from "@/app/assets/fourstar.png"
import fourhalfstar from "@/app/assets/fourhalfstar.png"
import timer from "@/app/assets/timer.png"
import arrow from "@/app/assets/arrow.png"

const data = [ 
  {
    id: 1,
    paragraph: <div> <Image src={gamepic} alt="game" width="180" height="160" className="w-[300px] h-[300px]" /></div>,
    heading: 'HAVIT HV-G92 Gamepad',
    price: <div className="text-[rgba(219,68,68,1)]">$960 <span className="text-[#00000065]"><s>$160</s></span></div>, 
     rating: <div> <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
  },
  {
    id: 2,
   paragraph: <div> <Image src={keyboardpic} alt="keyboard" width="191" height="101" className="w-[300px] h-[300px]" /></div>,
   heading: 'AK-900 Wired keyboard', 
   price: <div className="text-[rgba(219,68,68,1)]">$370 <span className="text-[#00000065]"><s>$1160</s></span></div>,
   rating: <div> <Image src={fourstar} alt="fourstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
  },

  {
    id: 3,
    paragraph: <div> <Image src={pcpic} alt="pc" width="170" height="129" className="w-[300px] h-[300px]" /></div>,
    heading: 'IPS LCD Gaming Monitor',
    price: <div className="text-[rgba(219,68,68,1)]">$375 <span className="text-[#00000065]"><s>$400</s></span></div>,
    rating: <div> <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
  },
{
  id: 4,
  paragraph: <div> <Image src={chairpic} alt="chair" width="270" height="270" className="w-[270px] h-[270px] mb-4" /></div>,
  heading: <div className="mt-8">S-Series Comfort Chair'</div>,
  price: <div className="text-[rgba(219,68,68,1)] mt-2">$375 <span className="text-[#00000065]"><s>$400</s></span></div>,
  rating: <div> <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
},
]

export default function Home() {
  return (
    <div className='w-[1308px] h-[500px] justify-center bg-white py-10 px-20 mb-30 mt-1 gap-5'>
      <div className="flex w-[1170px] h-[103px]">
      <button className="w-[20px] h-[40px] font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)]"></button>
      <div className="m-4 mb-5 mt-2 font-semibold text-1xl text-left text-poppins text-[rgba(219,68,68,1)]">Today's</div>
      </div>
<div className="flex">
      <h1 className="text-poppins font-bold text-left px-15 font-weight-700 text-5xl text-black">
        Flash Sales
        </h1> 
        <div>
      <Image src={timer} alt="timer" width="302" height="50" className="w-[302px] h-[50px] ml-20" />
      </div>
      <div>
      <Image src={arrow} alt="arrow" width="100" height="46" className="w-[100px] h-[46px] ml-80 mr-2" />
      </div>
      </div>
        
      <div className="flex ml-10 mt-2 px-5 justify-center space-x-5">
         {data.map((elem) => {
          return (
            <Card
              key={elem.id}
              paragraph={elem.paragraph}
              heading={elem.heading}
              price={elem.price}
              rating={elem.rating}
            />
          );
        })}
      </div>
    </div>
    
  );
}