import Image from "next/image";


export default function Footer(){
    return(
        <footer className="bg--400 flex flex-col gap-10 text-white py-10">
            <div className="flex justify-around">
                <section className="flex gap-[150px] items-center">
                    <figure className="">
                        <Image src="/Group 9.png" alt=" " width={100} height={100}/>
                    </figure>
                    <p className="w-[367px] h-[108px] font-normal flex justify-center items-center text-xl tracking-normal leading-[100%] text-[#857F94]">Lorem ipsum dolor sit amet" é uma sequênc trecho de um tratado de Cícero sobre ética. </p>
                </section>

                <div className="flex flex-col gap-3">
                    <h1 className=" w-[273px] h-[116px] text-3xl text-white font-semibold ">Request a Demo</h1>
                    <section className="w-[487px] h-[66px] bg-[#1E1E1E] items-center flex  rounded-4xl">
                        <div className="w-[67px] h-[68px] bg-[#53AA00] rounded-full flex ml-auto"/>
                    </section>
                </div>

            </div>

            <section className="flex justify-around ">
                <div className="">
                    <div className="flex gap-[300px] px-10 justify-between">
                        <span className="flex flex-col gap-6">
                            <h1 className=" w-[101px] h-[29px] font-extrabold text-2xl ">Recurse</h1>
                            <p className=" w-[80px] h-[232px] font-normal text-sm text-[#857F94] ">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                        <span className="flex flex-col gap-6">
                            <h1 className=" w-[101px] h-[29px] font-extrabold text-2xl ">Company</h1>
                            <p className=" w-[80px] h-[232px] font-normal text-sm text-[#857F94] ">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                        <span className="flex flex-col gap-6">
                            <h1 className=" w-[101px] h-[29px] font-extrabold text-2xl ">Social</h1>
                            <p className=" w-[80px] h-[232px] font-normal text-sm text-[#857F94] ">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                    
                    </div>
                    
                    <section className="flex gap-10 items-center">
                        <figure>
                            <Image src="/undraw_mello_uiud.svg" alt="" height={200} width={200}/>
                        </figure>
                        <span className="flex justify-center gap-10 mt-auto py-8">
                            <h1 className="w-[180px] h-[30px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">2025 office space oncler</h1>
                            <h1 className="w-[180px] h-[30px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">Freudy Batubenga</h1>
                            <h1 className="w-[180px] h-[30px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">Osvânio De Castro</h1>
                        </span>
                    </section>
                </div>

                <figure>
                    <Image src="/person.png" alt="" width={500} height={500} />
                </figure>
            </section>

        </footer>
    )
}