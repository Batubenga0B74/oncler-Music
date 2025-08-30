"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // ícone do Google

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError("É necessário aceitar os termos para continuar.");
      return;
    }

    if (email === "testoncler@gmail.com" && password === "oncler2025") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/home");
    } else {
      setError("Email ou senha inválidos");
    }
  };

  return (
    <main className="bg-[#08050A] w-full min-h-screen relative">
      {/* Bolha de fundo */}
      <div className="fixed size-96 bg-[#53AA00] rounded-full blur-[250px] z-0" />

      {/* Container do formulário */}
      <div className="w-full min-h-screen flex justify-center items-center px-4 sm:px-6 relative z-10">
        <form
          onSubmit={handleLogin}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*** *** ***"
                className="w-full border border-gray-400 h-11 rounded-lg bg-transparent px-4 placeholder:text-gray-400 outline-none transition-all text-white"
              />
            </div>
          </div>

          {/* Checkbox de termos */}
          <div className="w-full flex items-center gap-2 mt-4">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            <label htmlFor="terms" className="text-white cursor-pointer">
              Aceitar termos
            </label>
          </div>

          {/* Erro */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Botão */}
          <button
            className="h-11 w-full bg-[#53AA00] text-white rounded-lg mt-4 cursor-pointer hover:opacity-90 transition"
            type="submit"
          >
            Acessar
          </button>

          {/* Login com Google */}
          <button
            type="button"
            className="h-11 w-full flex items-center justify-center gap-2 border  rounded-lg  bg-[#435334] mt-4 cursor-pointer hover:bg-[#67834d] transition"
          >
            <FcGoogle size={22} />
            <span className="text-white font-medium">Iniciar sessão com Google</span>
          </button>
        </form>
      </div>

      {/* Segunda bolha de fundo */}
      <div className="fixed size-96 bg-[#53AA00] rounded-full blur-[250px] z-0 bottom-0 right-0" />
    </main>
  );
}
