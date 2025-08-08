import Image from "next/image";
import Link from "next/link";

interface cards {
  titulo: string;
  subtitulo: string;
  imagem: string;
}

export default function Card({ imagem, subtitulo, titulo }: cards) {
  return (
    <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px]">
      <figure className="flex flex-col gap-3 cursor-pointer">
        <Link href="/perfil" className="block">
          <Image
            src={imagem}
            alt=""
            width={187}
            height={187}
            className="w-full h-auto rounded-md"
            data-testid="imagemMusic"
          />
        </Link>

        <h1
          className="font-light text-lg sm:text-xl leading-tight text-[#A49797] truncate"
          id="Titulo"
        >
          {titulo}
        </h1>

        <p
          className="font-bold text-lg sm:text-xl leading-tight text-white truncate"
          id="subtitulo"
        >
          {subtitulo}
        </p>
      </figure>
    </div>
  );
}
