"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-400">Carregando...</div>}>
      <SearchContent />
    </Suspense>
  );
}
