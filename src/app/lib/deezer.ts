import axios from "axios";

import {DeezerTrack}from "../types/deezer"

interface DeezerChartResponse {
  data: DeezerTrack[];
}

export async function getPopularTracks(): Promise<DeezerTrack[]> {
  try {
    const response = await axios.get<DeezerChartResponse>(
      "https://api.deezer.com/chart/0/tracks"
    );
    return response.data.data; // retorna só a lista de músicas
  } catch (error) {
    console.error("Erro ao buscar músicas populares:", error);
    return [];
  }
}
