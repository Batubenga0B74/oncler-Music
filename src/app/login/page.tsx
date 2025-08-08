export default function Login() {
    return (
      <main className="bg-[#08050A] w-full min-h-screen">
        {/* Bolha de fundo */}
        <div className="fixed size-96 bg-[#53AA00] rounded-full blur-[250px] z-100" />
  
        {/* Container do formulário */}
        <div className="w-full min-h-screen flex justify-center items-center px-4 sm:px-6">
          <form
            action=""
            className="w-full max-w-[769px] h-auto sm:h-[800px] items-center flex flex-col gap-5"
          >
            {/* Título */}
            <div className="w-full h-11 flex items-center justify-center mt-10">
              <h1 className="text-xl sm:text-2xl text-white">Iniciar sessão</h1>
            </div>
  
            {/* Inputs */}
            <div className="w-full flex flex-col gap-10 mt-16 sm:mt-24">
              {/* Email */}
              <div className="w-full gap-5 flex flex-col">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="freudt@gmail"
                  className="w-full border border-gray-500 h-11 rounded-lg bg-transparent px-4 placeholder:text-gray-400 outline-none transition-all text-white"
                />
              </div>
  
              {/* Senha */}
              <div className="w-full gap-5 flex flex-col">
                <label htmlFor="password" className="text-white">
                  Palavra passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="*** *** ***"
                  className="w-full border border-gray-400 h-11 rounded-lg bg-transparent px-4 placeholder:text-gray-400 outline-none transition-all text-white"
                />
              </div>
            </div>
  
            {/* Termos */}
            <div className="w-full">
              <p className="text-white">Aceitar termos</p>
            </div>
  
            {/* Botão */}
            <button className="h-11 w-full bg-[#53AA00] text-white">
              Acessar
            </button>
          </form>
        </div>
  
        {/* Segunda bolha de fundo */}
        <div className="fixed size-96 bg-[#53AA00] rounded-full blur-[250px] z-100" />
      </main>
    );
  }
  