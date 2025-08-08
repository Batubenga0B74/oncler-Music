



export default function login(){
    return(
        <main className=" bg-[#08050A] w-full h~full ">
            <div className="fixed size-96 bg-[#53AA00] rounded-full  blur-[250px] z-100" />
            <div className="w-full h-screen justify-center items-center flex">
                <form action="" className="w-[769px] h-[800px]  items-center flex flex-col gap-5" >
                    <div className="w-full h-11 items-center justify-center flex mt-10">
                        <h1 className="text-2xl text-white">Iniciar sessão</h1>
                    </div>
                    <div className=" w-full h-60 flex flex-col gap-10 mt-24 p-5">


                  <div className="w-full h-20 gap-10">
                    <label htmlFor="" className="text-white">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="freudt@gmail"
                        className="w-full border border-gray-500 h-11 rounded-lg bg-transparent px-4 placeholder:text-gray-400 outline-none transition-all text-white"
                    />
                  </div>
                  <div className="w-full h-20">
                    <label htmlFor="" className="text-white ">
                        palavra passe
                    </label>
                    <input
                        type="password"
                        placeholder="*** *** ***"
                        className="w-full border  border-gray-400 h-11 rounded-lg bg-transparent px-4 placeholder:text-gray-400 outline-none transition-all text-white"
                    />
                  </div>
                         
                    </div>
                  <p className="text-white">aceitar termos</p>
                <button className="h-11 w-full  bg-[#53AA00] text-white ">
                    Acessar
                </button>
                </form>
            </div>

         <div className="fixed size-96 bg-[#53AA00] rounded-full  blur-[250px] z-100" />
        </main>
    )
}