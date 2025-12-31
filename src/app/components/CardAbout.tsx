import { CheckCircle2 } from "lucide-react";

interface CardAboutProps {
    abilitys: string[];
}

export default function CardAbout({ abilitys }: CardAboutProps) {
    return (
        <div className="p-8 bg-card/50 backdrop-blur-sm border border-gray-300 shadow-xl rounded-[10px]">
            <h4 className="text-xl mb-3 font-bold">Principais competências:</h4>
            <h4 className=" text-sm text-gray-500">Além do código, trago competências que facilitam o dia a dia e elevam a qualidade da entrega final.</h4>
            {abilitys.map((ability, index) => (
                <div key={index} className="flex my-5 gap-3 items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-700 dark:bg-blue-500 shrink-0" />
                    <p>{ability}</p>
                </div>
            ))}
        </div>
    )
}