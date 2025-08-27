import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "Drake"; // pega query da URL

  try {
    const response = await axios.get(`https://api.deezer.com/search/track?q=${q}`);
    return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json({ error: "Erro ao buscar Deezer" }, { status: 500 });
  }
}
