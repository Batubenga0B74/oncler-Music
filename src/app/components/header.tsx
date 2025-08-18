"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void; // opcional, só usado na página /search
}

export default function Header({ onSearch }: HeaderProps) {
  const pathName = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    if (onSearch) {
      onSearch(query); // já está na página search
    } else {
      router.push(`/search?q=${encodeURIComponent(query)}`); // redireciona
    }

    setQuery("");
  }

  const navBarItems = [
    { titulo: "DISCOVER", rota: "/discover" },
    { titulo: "PLAYLIST", rota: "/playlist" },
    { titulo: "ORIGINAL", rota: "/original" },
  ];

  return (
    <header className="bg-[#121212]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[98px] items-center justify-between">
          {/* Logo */}
          <figure className="flex gap-3">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" height={42} width={165} />
            </Link>
          </figure>

          {/* Search desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex w-[430px] h-[50px] rounded-4xl bg-[#1E1E1E] px-6 gap-5 items-center"
          >
            <Search className="text-[#53AA00]" />
            <input
              className="placeholder-[#A49797] bg-transparent outline-none flex-1 text-white"
              placeholder="Search your music"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

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
            <Link
              href="/cadastro"
              className="w-[140px] font-semibold font-serif border-r border-r-[#FFBE00]"
            >
              Create an account
            </Link>

            <Link href="/login">
              <p className="w-[100px] font-semibold font-serif">SIGN IN</p>
            </Link>
            <Link href="/upload">
              <p className="w-[120px] font-semibold font-serif">UPLOAD</p>
            </Link>
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
          <form
            onSubmit={handleSearch}
            className="flex w-full h-[50px] rounded-4xl bg-[#1E1E1E] px-6 gap-5 items-center"
          >
            <Search className="text-[#53AA00]" />
            <input
              className="placeholder-[#A49797] bg-transparent outline-none flex-1 text-white"
              placeholder="Search your music"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

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
          <Link href="/cadastro">
            <p className="text-white">Create an account</p>
          </Link>
          <Link href="/login">
            <p className="text-white">SIGN IN</p>
          </Link>
          <Link href="/upload">
            <p className="text-white">UPLOAD</p>
          </Link>
        </div>
      )}
    </header>
  );
}
