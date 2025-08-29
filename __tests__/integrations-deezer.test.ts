import { getPopularTracks } from "../src/app/lib/deezer";

describe("Testando a função que faz a conexão com a API", () => {

  it("deve retornar músicas populares", async () => {
    const tracks = await getPopularTracks();

    // garantir que trouxe músicas
    expect(tracks.length).toBeGreaterThan(0);

    // opcional: verificar se cada item tem pelo menos um artista
    expect(tracks[0]).toHaveProperty("artist");
  }, 10000);


  it("deve retornar músicas populares e garantir de tem uma imagem", async () => {
    const tracks = await getPopularTracks();

    // garantir que trouxe músicas
    expect(tracks.length).toBeGreaterThan(0);

    //  verificar se cada item tem pelo menos um cover
    expect(tracks[0]).toHaveProperty("album");
  }, 10000);


  it("garantir que as musicas retornadas tem um titulos", async () => {
    const tracks = await getPopularTracks();

    // garantir que trouxe músicas
    expect(tracks.length).toBeGreaterThan(0);

    // verificar se cada item tem  um titulo
    expect(tracks[0]).toHaveProperty("title");
  }, 10000);

  

});
