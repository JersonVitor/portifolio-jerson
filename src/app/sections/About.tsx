import { CheckCircle2 } from "lucide-react";
import CardAbout from "../components/CardAbout";
import SectionHeader from "../components/SectionHeader";
import CardPublication from "../components/CardPublication";

interface AboutProps {
    abilitys: string[];
    title: string;
    titleDestaque: string;
    description: string[];
    descriptionDestaque: string;
    publication: {
        title: string;
        publisher: string;
        year: string;
        link: string;
    };
}


export default function About({ abilitys, title, titleDestaque, description, descriptionDestaque, publication }: AboutProps) {


    return (
        <section id="sobre" className="w-full px-6 lg:px-16 pt-10 pb-10 flex flex-col gap-y-4 scroll-mt-28">
            <SectionHeader
                title="Sobre Mim"
                description={`${title} ${titleDestaque}`}
            />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 lg:gap-20 mt-4">
                <div className="flex flex-col gap-4 text-secondary-foreground ">
                    <p className="text-xl text-center md:text-left font-medium">{descriptionDestaque}</p>
                    <ul className="flex flex-col gap-3">
                        {description.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="h-1.5 w-1.5 mt-2 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-justify leading-relaxed text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <CardAbout abilitys={abilitys} />
            </div>
            <CardPublication {...publication} />
        </section>
    );
}