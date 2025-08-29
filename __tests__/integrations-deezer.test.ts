import { getPopularTracks } from "../src/app/lib/deezer";

describe("Testando a função que faz a conexão com a API", () => {
  it("deve retornar músicas populares", async () => {
    const tracks = await getPopularTracks();

    // garantir que trouxe músicas
    expect(tracks.length).toBeGreaterThan(0);

    // opcional: verificar se cada item tem pelo menos um artista
    expect(tracks[0]).toHaveProperty("artist");
  }, 10000);
});
