import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg--400 flex flex-col gap-10 text-white py-10">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
                <section className="flex flex-col sm:flex-row gap-6 sm:gap-[150px] items-center text-center sm:text-left">
                    <figure>
                        <Image src="/Group 9.png" alt=" " width={100} height={100} />
                    </figure>
                    <p className="w-full sm:w-[367px] h-auto sm:h-[108px] font-normal flex justify-center items-center text-lg sm:text-xl tracking-normal leading-[100%] text-[#857F94]">
                        Lorem ipsum dolor sit amet" é uma sequênc trecho de um tratado de Cícero sobre ética.
                    </p>
                </section>

                <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
                    <h1 className="w-full sm:w-[273px] h-auto sm:h-[116px] text-2xl sm:text-3xl text-white font-semibold">Request a Demo</h1>
                    <section className="w-full sm:w-[487px] h-[66px] bg-[#1E1E1E] items-center flex rounded-4xl">
                        <div className="w-[67px] h-[68px] bg-[#53AA00] rounded-full flex ml-auto" />
                    </section>
                </div>
            </div>

            <section className="flex flex-col lg:flex-row justify-around items-center gap-8">
                <div>
                    <div className="flex flex-col sm:flex-row sm:gap-[100px] lg:gap-[300px] px-4 sm:px-10 justify-between text-center sm:text-left">
                        <span className="flex flex-col gap-6">
                            <h1 className="w-auto font-extrabold text-xl sm:text-2xl">Recurse</h1>
                            <p className="w-auto sm:w-[80px] font-normal text-sm text-[#857F94]">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                        <span className="flex flex-col gap-6">
                            <h1 className="w-auto font-extrabold text-xl sm:text-2xl">Company</h1>
                            <p className="w-auto sm:w-[80px] font-normal text-sm text-[#857F94]">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                        <span className="flex flex-col gap-6">
                            <h1 className="w-auto font-extrabold text-xl sm:text-2xl">Social</h1>
                            <p className="w-auto sm:w-[80px] font-normal text-sm text-[#857F94]">Description of the "Lorem ipsum dolor sit amet" text that appears in ...</p>
                        </span>
                    </div>

                    <section className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
                        <figure>
                            <Image src="/undraw_mello_uiud.svg" alt="" height={200} width={200} />
                        </figure>
                        <span className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mt-auto py-8 text-center">
                            <h1 className="w-auto sm:w-[180px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">2025 office space oncler</h1>
                            <h1 className="w-auto sm:w-[180px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">Freudy Batubenga</h1>
                            <h1 className="w-auto sm:w-[180px] flex justify-center items-center font-normal text-[15px] cursor-pointer animate-pulse">Osvânio De Castro</h1>
                        </span>
                    </section>
                </div>

                <figure className="flex justify-center">
                    <Image src="/person.png" alt="" width={500} height={500} className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto" />
                </figure>
            </section>
        </footer>
    );
}
