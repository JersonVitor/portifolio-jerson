import Image from "next/image";
import github from "../../assets/github-mark/github-mark.svg"
import { Trophy } from "lucide-react";

interface CardProjectsProps {
    title: string;
    description: string;
    frameworks: string[];
    picture: any;
    link: string;
    isPrize: boolean;
    titlePrize: string;
    localPrize: string;
}


export default function CardProjects({ title, description, frameworks, picture, link, isPrize, titlePrize, localPrize, }: CardProjectsProps) {
    return (
        <div className="flex flex-col items-center bg-card rounded-[10px] border border-gray-300 dark:border-gray-700 overflow-hidden h-full shadow-lg">
            <div className="relative w-full h-48">

                {isPrize && (<span className="absolute top-2 right-2 z-10 flex items-center gap-2 bg-amber-400 text-amber-800 shadow-lg rounded-[8px] px-2 py-1 text-sm"><Trophy className="size-3" />Premiado</span>)}
                <Image src={picture} loading="eager" className="w-full h-full object-cover dark:brightness-75 dark:opacity-90 transition-all duration-500 z-0" alt="foto do projeto" />
            </div>
            <div className="flex flex-col gap-4 px-4 py-4 flex-1">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-gray-500 text-sm ">{description}</p>

                {isPrize && (
                    <div className="flex items-center gap-2 bg-chart-5/20 backdrop-blur-sm border border-chart-5 rounded-[8px] p-2">
                        <Trophy className="size-7 flex-1 text-yellow-600" />
                        <div className="flex-6">
                            <p className="text-[11px] font-bold text-yellow-700 dark:text-yellow-500">{titlePrize}</p>
                            <p className="text-[11px] text-yellow-700 dark:text-yellow-500">{localPrize}</p>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-2">
                    {frameworks.map((framework, index) => (
                        <p className=" text-[10px] bg-blue-100 dark:bg-blue-600/30 dark:border-gray-700 border border-gray-300 rounded-2xl px-2 py-1" key={index}>{framework}</p>
                    ))}
                </div>


                <a className="w-full mt-auto flex items-center justify-center gap-2 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 transition-all rounded-lg py-2 shadow-sm font-medium text-sm" href={link} target="_blank" rel="noopener noreferrer">
                    <Image className="size-5 dark:invert" src={github} alt="GitHub" />
                    Ver Repositório
                </a>
            </div>
        </div>
    )
}