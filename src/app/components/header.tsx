"use client"
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header(){

    const pathName= usePathname()

    const navBarItems =[
        {titulo: "DISCOVER", rota: "/###"},
        {titulo: "PLAYLIST", rota: "/##S"},
        {titulo: "ORIGINAL", rota: "/###"}
    ];

    return(
        <div>
            <header className="h-[98px] bg-[#121212] flex gap-3.5 items-center justify-around">
                <figure className="flex gap-3">
                    <Image src="/logo.png" alt="Logo" height={42} width={165} />
                </figure>

                <div className="w-[430px] h-[50px] rounded-4xl bg-[#1E1E1E] outline-none opacity-100 px-6 gap-5 flex items-center">
                    <Search className=" text-[#53AA00]" />
                    <input className=" placeholder-[#A49797]" placeholder="Search your music" type="text" />
                </div>

                <nav className="flex gap-3.5 text-white">
                    {navBarItems.map((item, index)=>(

                    <Link href={item.rota} key={index}>
                        <p className={`font-serif font-semibold text-sm h-[24px] leading-[100%] tracking-normal text-white cursor-pointer ${pathName=== item.rota ? " hover:text-[#53AA00]" : "text-red-500"}`}>{item.titulo}</p>
                    
                    </Link>
                    ))}

                </nav>

                <span className="flex gap-3.5 text-white">
                    <p className=" w-[140px] h-[19px] font-semibold font-serif leading-[100%] text-[16px] border-r border-r-[#FFBE00] ">Create an accout</p>
                    <p className=" w-[100px] h-[19px] font-semibold font-serif leading-[100%] text-[16px] ">SING IN</p>
                    <p className=" w-[120px] h-[19px] font-semibold font-serif leading-[100%] text-[16px] ">UPLOAD</p>
                </span>


            </header>
        </div>
    )
}