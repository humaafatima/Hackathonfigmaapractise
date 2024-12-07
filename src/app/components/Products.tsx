import Image from "next/image"
import dogfood from "@/app/assets/dogfood.png"
import gamepad from "@/app/assets/gamepad.png"
import laptop from "@/app/assets/laptop.png"
import camera1 from "@/app/assets/camera1.png"
import car from "@/app/assets/car.png"
import jacket from "@/app/assets/jacket.png"
import Card from "@/app/components/Card/Card"
import shoes from "@/app/assets/shoes.png"
import fivestar from "@/app/assets/fivestar.png"
import fourstar from "@/app/assets/fourstar.png"
import threestar from "@/app/assets/threestar.png"
import fourhalfstar from "@/app/assets/fourhalfstar.png"
import arrow from "@/app/assets/arrow.png"


const data = [ 
    {
      id: 10,
      heading: 'Breed Dry Dog Food',
      paragraph: <div> <Image src={dogfood} alt="game" width="270" height="322" className="w-[270px] h-[322px]" /></div>,
       rating: <div className="flex text-[rgba(219,68,68,1)]">$100
        <Image src={threestar} alt="threestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
    {
    id: 11,
     heading: 'Canon EOS dslr Camera', 
     paragraph: <div> <Image src={camera1} alt="game" width="270" height="322" className="w-[270px] h-[322px]" /></div>,
     rating: <div className="flex text-[rgba(219,68,68,1)]">$360
     <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
  
    {
      id: 12,
      heading: <div className="mt-16">ASUS FHD Gaming Laptop</div>,
      paragraph: <div> <Image src={laptop} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
      rating: <div className="flex text-[rgba(219,68,68,1)]">$700 
      <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
  {
    id: 13,
    heading: <div className="mt-16">Curology Product Set</div>,
    paragraph: <div> <Image src={laptop} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
     rating: <div className="flex text-[rgba(219,68,68,1)]">500 
     <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
  {
    id: 14,
    heading: <div className="mt-16">Kids Electric Car</div>,
    paragraph: <div> <Image src={car} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
    rating: <div className="flex text-[rgba(219,68,68,1)]">$960 
    <Image src={fivestar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
  {
    id: 15,
    heading: <div className="mt-16">Jr. Zoom Soocer Cleats</div>,
    paragraph: <div> <Image src={shoes} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
    rating: <div className="flex text-[rgba(219,68,68,1)]">$1160
    <Image src={fivestar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
  {
    id: 16,
    heading: <div className="mt-16">GP11 Shooter USB Gamepad</div>,
    paragraph: <div> <Image src={gamepad} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
    rating: <div className="flex text-[rgba(219,68,68,1)]">$660 
    <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
  {
    id: 17,
    heading: <div className="mt-16">Quilted Satin Jacket'</div>,
    paragraph: <div> <Image src={jacket} alt="game" width="270" height="250" className="w-[270px] h-[250px]" /></div>,
    rating: <div className="flex text-[rgba(219,68,68,1)]">$660 <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
]
export default function Products() {
    return (
      
<div className="flex flex-col w-[1190px] h-[1016px] bg-white py-20 mt-40 gap-30 ml-12 mb-20 ">
<div className="flex flex-col w-[1170px] h-[103px]">
      <button className="flex flex-col w-[20px] h-[40px] font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)] m-2 gap-4 mt-10 ml-4"></button>
      <div className="flex flex-col ml-10 font-semibold text-1xl text-left font-poppins text-[rgba(219,68,68,1)]">Our Products</div>
      </div>
      <div className="flex">
         <h1 className="font-poppins font-bold text-left px-8 py-1 font-weight-700 text-5xl text-black mt-6">
        Explore Our Products
        </h1>
        <div>
      <Image src={arrow} alt="arrow" width="100" height="46" className="w-[100px] h-[46px] mt-8 ml-80 mr-1" />
      </div>
      </div>
        <div className="grid grid-cols-4 w-[1180px] h-[800px] justify-between space-x-4 px-8 py-12 gap-20">
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
