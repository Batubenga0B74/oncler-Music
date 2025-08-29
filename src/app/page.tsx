import "../../sentry.client.config";
import Image from "next/image";
import { Suspense } from "react";
import logo from "./public/logo.png";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import { getPopularTracks } from "./lib/deezer"; 

export default async function Home() {
  // chamada no servidor (sem CORS)
  const tracks = await getPopularTracks();

  return (
    <div>
      <Header />

      {/* Seção principal */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-14 py-5 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-5 bg-[#1E1E1E] w-full lg:w-auto">
          <section className="bg-[url('/music.png')] bg-cover w-full sm:w-[500px] lg:w-[800px] h-[200px] sm:h-[250px] lg:h-[322px]"></section>

          <span className="flex text-white text-center justify-center flex-col gap-3 px-6 sm:px-12 lg:px-28">
            <h1 className="w-full lg:w-[470px] font-semibold tracking-normal leading-[100%] text-lg sm:text-xl lg:text-2xl">
              The music plataform <span className="text-[#53AA00]">empowering artists</span>
            </h1>

            <section className="text-center justify-center flex">
              <p className="max-w-[352px] font-semibold leading-[23px] text-center tracking-normal text-[#A49797]">
                monic is an Artist-firts music pltaform that helps monic is an Artist-firts{" "}
                <span className="text-white">music pltaform that helps</span>
              </p>
            </section>

            <div className="py-2">
              <button className="w-full sm:w-[213px] h-[44px] font-semibold text-[14px] rounded-3xl p-[10px] bg-[#53AA00]">
                Upload your music for free
              </button>
            </div>
          </span>
        </div>

        <figure className="bg-black shadow-[2px_34px_52px_rgba(3,3,4,5.6)] rounded-3xl p-4">
          <Image
            src="/663a993f1cd37e4d0cbd74f9_ezgif-1-2fc0a74d94 1.png"
            alt=""
            width={112}
            height={114}
          />
        </figure>
      </section>

      {/* Conteúdo principal */}
      <main className="py-5 flex flex-col lg:flex-row justify-center items-start gap-10 px-4">
        
        {/* Menu lateral */}
        <section className="flex flex-col gap-10 justify-center px-10 sm:items-center ">
          <div className=" sm:w-[384px] border-b-2 border-b-[#A49797]">
            <h1 className="w-[100px] text-xl text-[#53AA00] py-8 font-semibold">BROWSER</h1>
            <p className="font-semibold text-[#A49797] leading-8">Trending songs</p>
            <p className="font-semibold text-[#A49797] leading-8">Trending Albums</p>
            <p className="font-semibold text-[#A49797] leading-8">Recently supportated</p>
            <p className="font-semibold text-[#A49797] leading-8">Recently added</p>
            <p className="font-semibold text-[#A49797] leading-8 pb-10">Acount for you added</p>
          </div>

          <div className="sm:w-[384px] border-b-2 border-b-[#A49797]">
            <h1 className="w-[100px] text-xl text-[#53AA00] py-8 font-semibold">CHATS</h1>
            <p className="font-semibold text-[#A49797] leading-8">Trending songs</p>
            <p className="font-semibold text-[#A49797] leading-8">Trending Albums</p>
            <p className="font-semibold text-[#A49797] leading-8">Recently supportated</p>
            <p className="font-semibold text-[#A49797] leading-8">Recently added</p>
            <p className="font-semibold text-[#A49797] leading-8 pb-10">Acount for you added</p>
          </div>

          <span className="text-center flex flex-col gap-3 justify-center">
            <div className="text-center flex flex-wrap justify-center items-center gap-3">
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-white font-semibold">ALBUM</button>
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-white font-semibold">MIXSTYP</button>
            </div>
            <div>
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-white font-semibold">EP</button>
            </div>
          </span>
        </section>

        {/* Cards */}
        <div className="flex flex-col gap-5 max-h-[800px] overflow-y-auto overscroll-x-none">
          {[1, 2, 3].map((_, index) => (
            <article key={index} className="px-4 sm:px-10 py-5">
              <span className="flex justify-between items-center py-3">
                <h1 className="cursor-pointer font-bold text-xl text-white">TRENDING SONGS</h1>
                <p className="cursor-pointer font-bold text-sm text-[#53AA00]">VIEW ALL</p>
              </span>
              <section className="w-full overflow-x-auto flex gap-5 sm:gap-10">
                {/* Aqui o Card é client component */}
                <Card tracks={tracks} />
              </section>
            </article>
          ))}
        </div>
      </main> 

      <Footer />
    </div>
  );
}
