
"use client"
import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadPage() {
  const [activeTab, setActiveTab] = useState("single");

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
        <div className="mt-4 border border-dashed border-gray-700 rounded-lg h-60 flex items-center justify-center bg-[#0B0B0B]">
          <Upload className="w-12 h-12 text-white" />
        </div>

        {/* Form */}
        <form className="mt-4 gap-5  grid-cols-2 flex flex-col flex-grow">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Genero</label>
            <input
              type="text"
              placeholder="ex: Rock"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Language</label>
            <input
              type="text"
              placeholder="ex: English"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Language</label>
            <input
              type="text"
              placeholder="ex: Spanish"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Language</label>
            <input
              type="text"
              placeholder="ex: French"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
        </form>

        {/* Button */}
        <button className="mt-4 w-full py-3 bg-[#53AA00] text-black font-medium rounded hover:bg-green-600 transition-colors">
          Acessar
        </button>
      </div>
    </div>
  );
}
