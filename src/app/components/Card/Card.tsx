"use client"
import React from 'react'

interface ICardProps {
    paragraph?: string | JSX.Element,
    heading: string,
    price?: string | JSX.Element,
    rating: string | JSX.Element,
}

let Card = (props: ICardProps) => {
    const { paragraph, heading, price, rating} = props;
    return (

<div className="h-[290px] w-[390px] bg-[rgba(245,245,245,1)] m-2 space-x-2">
    <div className="cardbody gap-6 space-x-8">
        {paragraph}
      </div>
      <div className="cardheading text-left">
     {heading} 
      </div>
      <div className="cardfooter text-left">
        {price} {rating}
      </div>
      </div>
   
) 
}
 
export default Card