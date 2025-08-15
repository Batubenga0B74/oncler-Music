import axios from "axios";

export interface DeezerTrack {
  id: number;
  title: string;
  artist: {
    name: string;
    picture: string;
  };
  album: {
    title: string;
    cover: string;
  };
  preview: string; // link de 30s do áudio
}

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
