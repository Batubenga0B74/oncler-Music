import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"

export default function Perfil() {
    return (
        <div>
            <Header />
            <main className="py-5 pt-16">

                {/* Capa responsiva */}
                <figure className="w-full max-w-[1328px] bg-black m-auto justify-center flex">
                    <Image
                        src="/default-cover-image@2x 2.png"
                        alt=""
                        width={886}
                        height={10}
                        className="w-full h-auto"
                    />
                </figure>

                <aside className="flex flex-col lg:flex-row justify-center gap-14 px-4">
                    {/* Foto e dados do perfil */}
                    <section className="flex flex-col gap-3 items-center relative lg:bottom-30">
                        <figure className="w-full max-w-[219px] rounded-full">
                            <Image
                                src="/591934fffc62679ef61afc7853c48b15b969dcffeeb714052fc915be76314bab.jpeg"
                                className="rounded-full opacity-100 w-full h-auto"
                                alt=""
                                width={219}
                                height={207}
                            />
                        </figure>
                        <div className="w-full max-w-[300px] border-b border-b-[#A49797] pb-5 text-white flex flex-col gap-3 items-center">
                            <h1 className="w-full max-w-[182px] flex justify-center font-semibold text-2xl sm:text-3xl">Ganan Boy</h1>
                            <p className="w-full max-w-[182px] text-lg sm:text-xl text-[#A49797] flex justify-center">@ganan-by</p>
                            <button className="w-[150px] h-[44px] rounded-3xl border-2 border-[#53AA00] text-center tracking-normal leading-[100%] text-white font-semibold">FOLLOW</button>
                        </div>

                        <aside className="w-full max-w-[350px] flex flex-col gap-5 items-center py-5">
                            <span className="flex gap-6 sm:gap-10">
                                <h1 className="w-[58px] flex justify-center text-white font-bold text-2xl sm:text-3xl">72</h1>
                                <p className="w-[98px] text-lg sm:text-xl text-[#53AA00] font-bold">Followes</p>
                            </span>
                            <span className="flex gap-6 sm:gap-10 text-center sm:text-left">
                                <h1 className="text-white flex justify-center font-bold text-2xl sm:text-3xl">4.68K</h1>
                                <p className="text-lg sm:text-xl text-[#53AA00] flex justify-center">Total Account plays</p>
                            </span>
                        </aside>
                    </section>

                    {/* Conteúdo lateral */}
                    <div className="flex flex-col gap-5 items-center py-3 w-full max-w-[900px]">
                        <aside className="flex flex-col sm:flex-row gap-5 items-center">
                            <figure className="flex-shrink-0">
                                <Image
                                    src="/18310193-coverart.jpg"
                                    alt=""
                                    width={184}
                                    height={184}
                                    className="w-full max-w-[184px] h-auto"
                                />
                            </figure>
                            <section className="flex flex-col gap-1 text-center sm:text-left">
                                <h1 className="text-xl sm:text-2xl font-extrabold text-[#A49797]">Doja Cat</h1>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Chefe</h2>
                                <p className="text-sm sm:text-base text-white">
                                    Relese Date : May 16 ,2025 by <span className="text-[#53AA00]">ganan boy</span>
                                </p>
                                <h3 className="font-semibold text-[#53AA00] text-lg sm:text-xl">7 Play</h3>
                            </section>
                        </aside>
                        <figure className="w-full">
                            <Image
                                src="/Screenshot_from_2025-07-30_11-59-48-removebg-preview 1.png"
                                alt=""
                                width={900}
                                height={81}
                                className="w-full h-auto"
                            />
                        </figure>
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    )
}
