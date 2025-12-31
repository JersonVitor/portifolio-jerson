"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";

interface Tech {
    name: string;
    icon: string;
}

interface TechStackProps {
    techs: Tech[];
}

export default function TechStack({ techs }: TechStackProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    // Duplicando para garantir scroll infinito contínuo
    const duplicatedTechs = [...techs, ...techs, ...techs, ...techs];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="habilidades" className="w-full pt-10 pb-10 bg-white/50 dark:bg-black/20 backdrop-blur-sm scroll-mt-28">
            <div className="px-6 lg:px-16 pb-10">
                <SectionHeader
                    title="Tecnologias & Frameworks"
                    description="As ferramentas e linguagens que utilizo para construir soluções modernas e escaláveis."
                />
            </div>

            <div className="relative group/carousel">
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-950/80 border border-gray-200 dark:border-gray-800 shadow-lg backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 cursor-pointer"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="size-6 text-gray-700 dark:text-gray-300" />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-950/80 border border-gray-200 dark:border-gray-800 shadow-lg backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 cursor-pointer"
                    aria-label="Próximo"
                >
                    <ChevronRight className="size-6 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <div
                    ref={scrollRef}
                    className="overflow-x-hidden scroll-smooth"
                >
                    <div className="animate-scroll">
                        {duplicatedTechs.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-3 px-8 lg:px-12 group transition-all duration-300"
                            >
                                <div className="relative size-14 lg:size-20 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 overflow-hidden p-3 lg:p-4">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="size-full object-contain transition-all duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-[10px] lg:text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
