"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navBarItems = [
    { titulo: "DISCOVER", rota: "/###" },
    { titulo: "PLAYLIST", rota: "/##S" },
    { titulo: "ORIGINAL", rota: "/###" },
  ];

  return (
    <header className="bg-[#121212]">
      {/* Container */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Linha principal */}
        <div className="flex h-[98px] items-center justify-between">
          {/* Logo */}
          <figure className="flex gap-3">
            <Link href="/">
            <Image src="/logo.png" alt="Logo" height={42} width={165}  />
            </Link>
          </figure>

          {/* Search desktop */}
          <div className="hidden md:flex w-[430px] h-[50px] rounded-4xl bg-[#1E1E1E] px-6 gap-5 items-center">
            <Search className="text-[#53AA00]" />
            <input
              className="placeholder-[#A49797] bg-transparent outline-none flex-1"
              placeholder="Search your music"
              type="text"
            />
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex gap-3.5 text-white">
            {navBarItems.map((item, index) => (
              <Link href={item.rota} key={index}>
                <p
                  className={`font-serif font-semibold text-sm cursor-pointer ${
                    pathName === item.rota
                      ? "text-[#53AA00]"
                      : "hover:text-[#53AA00]"
                  }`}
                >
                  {item.titulo}
                </p>
              </Link>
            ))}
          </nav>

          {/* Ações desktop */}
          <span className="hidden md:flex gap-3.5 text-white">
            <p className="w-[140px] font-semibold font-serif border-r border-r-[#FFBE00]">
              Create an accout
            </p>
            <Link href="/login">
              <p className="w-[100px] font-semibold font-serif">SING IN</p>
            </Link>
            <p className="w-[120px] font-semibold font-serif">UPLOAD</p>
          </span>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] px-4 pb-4 space-y-3">
          {/* Search mobile */}
          <div className="flex w-full h-[50px] rounded-4xl bg-[#1E1E1E] px-6 gap-5 items-center">
            <Search className="text-[#53AA00]" />
            <input
              className="placeholder-[#A49797] bg-transparent outline-none flex-1"
              placeholder="Search your music"
              type="text"
            />
          </div>

          {/* Links mobile */}
          {navBarItems.map((item, index) => (
            <Link href={item.rota} key={index}>
              <p
                className={`font-serif font-semibold text-sm cursor-pointer ${
                  pathName === item.rota
                    ? "text-[#53AA00]"
                    : "hover:text-[#53AA00]"
                }`}
              >
                {item.titulo}
              </p>
            </Link>
          ))}

          {/* Ações mobile */}
          <p className="text-white">Create an accout</p>
          <Link href="/login">
            <p className="text-white">SING IN</p>
          </Link>
          <p className="text-white">UPLOAD</p>
        </div>
      )}
    </header>
  );
}
