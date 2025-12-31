import Image, { StaticImageData } from "next/image";
import { ArrowRight, Mail } from "lucide-react";

interface HeroProps {
    status: string;
    title: string;
    profissao: string;
    description: string;
    profilePic: string | StaticImageData;
    scrollToSection: (id: string) => void;
}


export default function Hero({ status, title, profissao, description, profilePic, scrollToSection }: HeroProps) {


    return (
        <section className="px-6 lg:px-16 pt-20 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0 bg-radial-[at_70%_30%] from-blue-500/10 via-white to-white dark:bg-radial-[at_70%_30%] dark:from-blue-900/10 dark:via-background dark:to-background">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:block">
                <div className="flex w-fit rounded-4xl backdrop-blur-md bg-blue-400/10 items-center gap-4 p-3 mb-6 mx-auto lg:mx-0">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <p className="text-sm text-blue-700 dark:text-blue-500 "> {status}</p>
                </div>
                <h1 className="text-5xl lg:text-7xl mb-5 font-bold bg-linear-to-r from-0%  from-black dark:from-gray-700 dark:to-100% to-75% dark:to-blue-900 to-blue-500 bg-clip-text text-transparent text-center lg:text-left">{title}</h1>
                <h2 className="text-xl font-semibold mb-4 text-center lg:text-left">{profissao}</h2>
                <p className="md:w-2/3 lg:w-full text-lg font-extralight leading-tight mb-6 text-justify lg:text-left">{description}</p>
                <div className="flex w-full gap-4 justify-center lg:justify-start">
                    <button onClick={() => scrollToSection("projetos")} className="flex items-center gap-2 bg-black hover:bg-gray-900 dark:bg-white rounded-[10px] px-3 py-2 dark:text-black text-white cursor-pointer transition-colors">Ver Projetos<ArrowRight size={18} /></button>
                    <button onClick={() => scrollToSection("contato")} className="flex items-center gap-2 border border-gray-500 hover:bg-gray-100 dark:border-gray-700 rounded-[10px] p-3 cursor-pointer transition-colors">Entre em contato <Mail size={18} /></button>
                </div>
            </div>

            <div className="relative flex justify-center lg:block group z-0">
                {/* Background com efeito de rotação (Desktop/Tablet) ou Blur (Mobile) */}
                <div className="absolute -z-10 transition-all duration-500 
                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/0 rounded-full blur-3xl 
                    lg:translate-x-0 lg:translate-y-0 lg:left-4 lg:top-4 lg:w-[320px] lg:h-[320px] lg:rounded-2xl lg:rotate-4 lg:blur-none lg:bg-blue-500/20 lg:dark:bg-blue-800/20">
                </div>

                {/* Imagem */}
                <Image
                    src={profilePic}
                    className="object-cover dark:brightness-75 brightness-100 transition-all duration-500 
                        w-48 h-48 rounded-full border-[3px] border-blue-500/30 shadow-2xl shadow-blue-500/30 
                        lg:w-[320px] lg:h-[320px] lg:rounded-2xl lg:border-3 lg:shadow-none lg:relative"
                    alt="Foto de perfil"
                />
            </div>
        </section>
    )
}