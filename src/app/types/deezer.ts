
  export interface DeezerAlbum{
    id:number;
    title:string;
    cover:string;
    artist:{
      id:number;
      name:string;
    }
  }
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