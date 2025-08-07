import Image from "next/image"
import Link from "next/link"


interface cards{
    titulo: string
    subtitulo: string
    imagem: string
}
export default function Card({imagem, subtitulo, titulo}:cards){
    return(
        <div>
            <figure className=" flex flex-col gap-3 cursor-pointer">
                <Link href="/perfil"><Image src={imagem} alt="" width={187} height={187} data-testid="imagemMusic"/></Link>
                <h1 className="w-[130px] h-[24px] font-light text-xl leading-[100%] tracking-normal text-[#A49797]" id="Titulo">{titulo}</h1>
                <p className="font-bold text-xl leading-[100%] tracking-normal text-white" id="subtitulo">{subtitulo}</p>
            </figure>
            
        </div>
    )
}