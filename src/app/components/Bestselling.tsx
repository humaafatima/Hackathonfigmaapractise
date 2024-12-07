import Image from "next/image"
import coat from "@/app/assets/coat.png"
import bag from "@/app/assets/bag.png"
import cpu from "@/app/assets/cpu.png"
import shelf from "@/app/assets/shelf.png"
import Card from "@/app/components/Card/Card"
import fivestar from "@/app/assets/fivestar.png"
import fourhalfstar from "@/app/assets/fourhalfstar.png"


const data = [ 
    {
      id: 5,
      paragraph: <div> <Image src={coat} alt="game" width="180" height="160" className="w-[300px] h-[300px]" /></div>,
      heading: 'The north coat',
      price: <div className="text-[rgba(219,68,68,1)]">$260 <span className="text-[#00000065]"><s>$360</s></span></div>, 
       rating: <div> <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
    {
      id: 6,
     heading: 'Gucci Duffle bag', 
     paragraph: <div> <Image src={bag} alt="game" width="180" height="160" className="w-[300px] h-[300px]" /></div>,
     price: <div className="text-[rgba(219,68,68,1)]">$960 <span className="text-[#00000065]"><s>$1160</s></span></div>,
     rating: <div> <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
  
    {
      id: 7,
      heading: 'RGB liquid CPU cooler',
      paragraph: <div> <Image src={cpu} alt="game" width="180" height="160" className="w-[300px] h-[300px]" /></div>,
      price: <div className="text-[rgba(219,68,68,1)]">$160 <span className="text-[#00000065]"><s>$170</s></span></div>,
      rating: <div> <Image src={fourhalfstar} alt="fourhalfstar" width="100" height="20" className="w-[100px] h-[20px]" /></div>,
    },
  {
    id: 8,
    heading: 'Small bookself',
    paragraph: <div> <Image src={shelf} alt="game" width="180" height="160" className="w-[300px] h-[300px]" /></div>,
    price: <div className="text-[rgba(219,68,68,1)]">$360</div>,
    rating: <div> <Image src={fivestar} alt="fivestar" width="100" height="20" className="w-[100px] h-[20px]" /></div>
  },
  ]
  
  export default function Home() {
    return (
      <div className='w-[1180px] h-[400px] justify-center bg-white py-[30px] px-[20px] mt-[40px] gap-5'>
        <div className="flex w-[1170px] h-[103px]">
      <button className="w-[20px] h-[40px] ml-12 font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)]"></button>
      <div className="m-4 ml-8 mb-5 mt-2 font-semibold text-1xl text-left text-poppins text-[rgba(219,68,68,1)]">This Month</div>
      </div>
         
         <h1 className="font-poppins font-bold text-left px-8 font-weight-700 text-5xl text-black">
        Best Selling Products
        </h1>
      
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