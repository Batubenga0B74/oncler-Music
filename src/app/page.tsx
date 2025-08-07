import Image from "next/image";
import { Search } from "lucide-react";
import logo from "./public/logo.png"
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="flex justify-center items-center gap-14 py-5" >
        <div className="flex justify-center gap-5 bg-[#1E1E1E]">
          <section className="bg-[url('/music.png')] bg-cover  w-[900px] h-[322px] "></section>

          <span className="flex text-white text-center justify-center flex-col gap-3 px-28 ">

            <h1 className="w-[470px] h-[29px] font-semibold tracking-normal leading-[100%] text-2xl ">The music plataform <span className="text-[#53AA00]">empowering artists</span></h1>
            <section className="text-center justify-center flex">
              <p className="w-[352px] font-semibold leading-[23px] text-center tracking-normal text-[#A49797]">monic is an Artist-firts music pltaform that helps monic is an Artist-firts <span className="text-white">music pltaform that helps</span> </p>
            </section>

            <div className="py-2">
              <button className="w-[213px] h-[44px] font-semibold text-[14px] rounded-3xl p-[10px] bg-[#53AA00]">Upload your music for free</button>
            </div>

          </span> 

        </div>
        <figure className=" bg-black shadow-[2px_34px_52px_rgba(3,3,4,5.6)] rounded-3xl">
          <Image src="/663a993f1cd37e4d0cbd74f9_ezgif-1-2fc0a74d94 1.png" alt="" width={112} height={114} />
        </figure>

      </section>

      <main className="py-5 flex justify-center items-center gap-10">

        <section className="flex flex-col gap-10 justify-center py-10 ">
          <div className="w-[384px] boder-[#A49797] border-b-2  border-b-[#A49797] ">
            <h1 className=" w-[100px] h-[24px] text-xl leading-[100%] tracking-normal text-[#53AA00] py-8 font-semibold">BROWSER</h1>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Trending songs</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Trending Albums</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Recently supportated</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Recently added</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8 pb-10">Acount for you added</p>
          </div>
          <div className="w-[384px] boder-[#A49797] border-b-2 border-b-[#A49797] ">
            <h1 className="w-[100px] h-[24px] text-xl leading-[100%] tracking-normal text-[#53AA00] py-8 font-semibold">CHATS</h1>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Trending songs</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Trending Albums</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Recently supportated</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8">Recently added</p>
            <p className="w-[120px] font-semibold text-[16px] text-[#A49797] tracking-normal leading-8 pb-10">Acount for you added</p>
          </div>

          <span className="text-center flex flex-col  gap-3 justify-center">
            <div className="text-center flex justify-center items-center gap-3">
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-center tracking-normal leading-[100%] text-white font-semibold justify-center">FOLLOW</button>
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-center tracking-normal leading-[100%] text-white font-semibold justify-center">FOLLOW</button>
            </div>

            <div>
              <button className="w-[117px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-center tracking-normal leading-[100%] text-white font-semibold justify-center">FOLLOW</button>
            </div>

          </span>
          
        </section>

        <div className="flex flex-col gap-5 max-h-[800px] overflow-y-auto overscroll-x-none">
          <article className=" px-10 py-5">

            <span className="flex justify-between items-center py-3">
              <h1 className="w-[200px] cursor-pointer h-[24px] font-bold text-xl text-white">TRADING SONGS</h1>
              <p className="w-[77px] h-[17px] cursor-pointer font-bold text-sm text-[#53AA00]">VIEWS ALL</p>
            </span>
            <section className="w-full max-w-full overflow-x-auto overflow-y-hidden no-scrollbar flex gap-10">
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              <Card imagem="/1cad8903492f91e4368f9f7dbbc22e6380a6d6ed778dc8511657155ae3fd5df4.jpeg" titulo="DJ Lutonda" subtitulo="Chefe" />
              <Card imagem="/16055754-coverart.jpg" titulo="Mike beat" subtitulo="Chefe" />
              <Card imagem="/44149d8a99f0c02bc7f50cd439aa39ce1a2f4185ebcf5112bc376b9b26b28474.jpeg" titulo="Doja Cat" subtitulo="Chefe" />
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              
            </section>
          </article>

          <article className=" px-10 py-5">

            <span className="flex justify-between items-center py-3">
              <h1 className="w-[200px] cursor-pointer h-[24px] font-bold text-xl text-white">TRADING SONGS</h1>
              <p className="w-[77px] h-[17px] cursor-pointer font-bold text-sm text-[#53AA00]">VIEWS ALL</p>
            </span>
            <section className="w-full max-w-full overflow-x-auto overflow-y-hidden no-scrollbar flex gap-10">
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              <Card imagem="/1cad8903492f91e4368f9f7dbbc22e6380a6d6ed778dc8511657155ae3fd5df4.jpeg" titulo="DJ Lutonda" subtitulo="Chefe" />
              <Card imagem="/16055754-coverart.jpg" titulo="Mike beat" subtitulo="Chefe" />
              <Card imagem="/44149d8a99f0c02bc7f50cd439aa39ce1a2f4185ebcf5112bc376b9b26b28474.jpeg" titulo="Doja Cat" subtitulo="Chefe" />
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              
            </section>
          </article>

          <article className=" px-10 py-5">

            <span className="flex justify-between items-center py-3">
              <h1 className="w-[200px] cursor-pointer h-[24px] font-bold text-xl text-white">TRADING SONGS</h1>
              <p className="w-[77px] h-[17px] cursor-pointer font-bold text-sm text-[#53AA00]">VIEWS ALL</p>
            </span>
            <section className="w-full max-w-full flex gap-10 animate-pulse">
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              <Card imagem="/1cad8903492f91e4368f9f7dbbc22e6380a6d6ed778dc8511657155ae3fd5df4.jpeg" titulo="DJ Lutonda" subtitulo="Chefe" />
              <Card imagem="/16055754-coverart.jpg" titulo="Mike beat" subtitulo="Chefe" />
              <Card imagem="/44149d8a99f0c02bc7f50cd439aa39ce1a2f4185ebcf5112bc376b9b26b28474.jpeg" titulo="Doja Cat" subtitulo="Chefe" />
              <Card imagem="/e522b2589402bc283ee0676256a232882ceecf8ea27b3b9e9c16e1f258966f87.jpeg" titulo="Tsunami" subtitulo="Chefe" />
              
            </section>
          </article>
        </div>
        
      </main> 
      <Footer />

     

    </div>
  );
}
