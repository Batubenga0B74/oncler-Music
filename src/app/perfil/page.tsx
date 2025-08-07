
import Header from "../components/header"
import Footer from "../components/footer"
    import Image from "next/image"

export default function Perfil(){
    return(
        <div>
            <Header />
            <main className=" py-5 pt-16">

                <figure className="w-[1328px] bg-black  m-auto justify-center flex">
                    <Image src="/default-cover-image@2x 2.png" alt="" width={886} height={10}/>
                </figure> 
                
                <aside className="flex justify-center  gap-14">
                    <section className="flex flex-col gap-3 items-center relative bottom-30">
                        <figure className="w-[219px] rounded-full  ">
                            <Image src="/591934fffc62679ef61afc7853c48b15b969dcffeeb714052fc915be76314bab.jpeg" className="rounded-full opacity-100"  alt="" width={219} height={207} />

                        </figure>
                        <div className=" w-[300px] border-b border-b-[#A49797] pb-5 text-white  items-center flex flex-col gap-3 justify-center">
                            <h1 className="w-[182px] flex justify-center font-semibold text-3xl ">Ganan Boy</h1>
                            <p className="w-[182px] text-xl text-[#A49797] flex justify-center">@ganan-by</p>
                            <button className="w-[150px] h-[44px] rounded-3xl border-2  border-[#53AA00] text-center tracking-normal leading-[100%] text-white font-semibold justify-center">FOLLOW</button>

                        </div>

                        <aside className=" w-[350px]  center flex flex-col gap-5 items-center py-5">
                            <span className="flex gap-10">
                                <h1 className="w-[58px]  flex justify-center text-white font-bold text-3xl ">72</h1>
                                <p className="w-[98px] text-xl text-[#53AA00] font-bold  justify-center">Followes</p>
                            </span>
                            <span className="flex gap-10">
                                <h1 className="text-white flex justify-center font-bold text-3xl ">4.68K</h1>
                                <p className=" text-xl text-[#53AA00] flex justify-center">Total Account plays </p>
                            </span>
                        </aside>
                    </section>

                    <div className="flex flex-col gap-5 items-center py-3">
                        <aside className="flex gap-5 items-center">
                            <figure>
                                <Image src="/18310193-coverart.jpg" alt="" width={184} height={184} />
                            </figure>
                            <section className="flex flex-col gap-1">
                                <h1 className="text-2xl font-extrabold text-[#A49797]"> Doja Cat</h1>
                                <h2 className="text-2xl font-extrabold text-white">Chefe</h2>
                                <p className="text-[16px] text-white">Relese  Date : May 16 ,2025 by <span className="text-[#53AA00]">ganan boy</span> </p>
                                <h3 className=" font-semibold text-[#53AA00] text-xl ">7 Play</h3>
                            </section>

                        </aside>
                        <figure>
                            <Image src="/Screenshot_from_2025-07-30_11-59-48-removebg-preview 1.png" alt="" width={900} height={81} />
                        </figure>
                    </div>

                
                </aside>

            </main>
            <Footer />

        </div>
    )
}