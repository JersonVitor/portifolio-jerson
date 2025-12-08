import Image from "next/image";
import profilePic from "../../assets/foto_perfil.png";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-20 w-full flex items-center justify-between">
            <div className=" w-1/2 flex-col items-center">
                <div className=" flex w-fit rounded-4xl backdrop-blur-md bg-blue-400/10 items-center gap-4 p-3 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <p className="text-sm text-blue-700 dark:text-blue-500 "> Aberto a oportunidades!</p>
                </div>
                <h1 className="text-3xl mb-2 font-semibold">Olá, sou o Jerson Vitor!</h1>
                <h2 className="text-xl font-semibold mb-4">Desenvolvedor Full Stack</h2>
                <p className="text-lg font-extralight leading-tight mb-6">Apaixonado por criar experiências digitais intuitivas e acessíveis. Busco combinar design e código para desenvolver soluções que impactam positivamente a vida das pessoas.</p>
                <div className="flex w-full gap-4">
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-800 rounded-2xl px-4 py-4 text-white">Ver Projetos<ArrowRight size={18} />
                    </button>
                    <button className="flex items-center gap-2 border border-gray-500 hover:bg-gray-100 dark:border-gray-700 rounded-2xl px-4 py-4">Entre em contato <Mail size={18} /></button>
                </div>
            </div>
            <div className="relative justify-around">
                <div className="absolute -z-10 size-80 backdrop-blur-md bg-blue-500/60 dark:bg-blue-800/60 rounded-2xl rotate-4"></div>
                <Image src={profilePic} className="rounded-2xl -top-2 size-81 object-cover dark:brightness-75 brightness-100 transition-all" alt="Foto de perfil" />
            </div>
        </section>
    )
}