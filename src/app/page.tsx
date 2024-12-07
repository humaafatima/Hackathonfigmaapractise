"use client"
import Navbar from "@/app/components/Navbar"
import Navbarwhite from "@/app/components/Navbarwhite"
import Hero from "@/app/components/Hero"
import Hero1 from "@/app/components/Hero1"
import Categories from "@/app/components/Categories"
import Bestselling from "@/app/components/Bestselling"
import Music from "@/app/components/Music"
import Products from "@/app/components/Products"
import Newarrival from "@/app/components/Newarrival"
import Button from "@/app/components/Button"
import Footer1 from "@/app/components/Footer1"
import Footer from "@/app/components/Footer"

export default function Home () {
  return <div className="h-screen w-screen bg-white">
    
<Navbar/>
<Navbarwhite/>
<Hero/>
<Hero1/>
<Button/>
<Categories/>
<Bestselling/>
<Music/>
<Products/>
<Button/>
<Newarrival/>
<Footer1/>
<Footer/>
</div>
}