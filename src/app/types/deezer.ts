export interface DeezerArtist {
    id: number;
    name: string;
    picture: string; // URL da imagem do artista
  }
  
  export interface DeezerAlbum {
    id: number;
    title: string;
    cover: string;      // Capa pequena
    cover_big: string;  // Capa grande
  }
  
  export interface DeezerTrack {
    id: number;
    title: string;
    artist: DeezerArtist;
    album: DeezerAlbum;
    preview: string; // URL de prévia da música (MP3)
  }
  