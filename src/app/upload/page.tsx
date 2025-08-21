"use client";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadPage() {
  const [activeTab, setActiveTab] = useState("single");
  const [file, setFile] = useState<File | null>(null);
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
    // E
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecione uma música antes de enviar.");
      return;
    }

    // Exemplo de envio
    const formData = new FormData();
    formData.append("music", file);
    formData.append("genre", genre);
    formData.append("language", language);

    try {
      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      // 🔹 Resetar formulário
      setFile(null);
      setGenre("");
      setLanguage("");

      // 🔹 Mostrar modal de sucesso
      setShowModal(true);
    } catch (err) {
      console.error("Erro no upload:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0B0B0B] to-[#0E0F0E] flex items-center justify-center p-6">
      <div className="w-[769px] h-[992px] border border-gray-800 rounded-lg p-6 bg-[#0A0A0A] flex flex-col">
        
        {/* Tabs */}
        <div className="flex border border-green-600 rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("single")}
            className={`flex-1 py-3 text-base font-medium ${
              activeTab === "single"
                ? "bg-black text-white border-b-2 border-green-500"
                : "text-gray-400"
            }`}
          >
            upload single
          </button>
          <button
            onClick={() => setActiveTab("album")}
            className={`flex-1 py-3 text-base font-medium ${
              activeTab === "album"
                ? "bg-black text-white border-b-2 border-green-500"
                : "text-gray-400"
            }`}
          >
            upload Album
          </button>
        </div>

        {/* Upload Box */}
        <label className="mt-4 border border-dashed border-gray-700 rounded-lg h-60 flex flex-col items-center justify-center bg-[#0B0B0B] cursor-pointer">
          <Upload className="w-12 h-12 text-white" />
          <span className="text-gray-400 mt-2">
            {file ? `Selecionado: ${file.name}` : "Clique ou arraste sua música"}
          </span>
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 gap-5 grid-cols-2 flex flex-col flex-grow"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">Gênero</label>
            <input
              type="text"
              value={genre}
              required
              onChange={(e) => setGenre(e.target.value)}
              placeholder="ex: Rock"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Idioma</label>
            <input
              type="text"
              required
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="ex: English"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-[#53AA00] text-black font-medium rounded hover:bg-green-600 transition-colors"
          >
            Enviar Música
          </button>
        </form>
      </div>

      {/* Modal de sucesso */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#0A0A0A] p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-xl font-semibold text-white">
              ✅ Upload concluído!
            </h2>
            <p className="text-gray-400 mt-2">
              Sua música foi enviada com sucesso.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#53AA00] text-black rounded hover:bg-green-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
