import { BookOpen, ExternalLink } from "lucide-react";

interface CardPublicationProps {
    title: string;
    publisher: string;
    year: string;
    link: string;
}

export default function CardPublication({ title, publisher, year, link }: CardPublicationProps) {
    return (
        <div className="mt-8 p-6 bg-blue-50/50 dark:bg-blue-900/10 backdrop-blur-sm border border-blue-100 dark:border-blue-800 rounded-2xl flex flex-col md:flex-row items-center gap-6 group transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700">
            <div className="size-14 flex items-center justify-center rounded-xl bg-blue-500 text-white shadow-blue-500/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen size={28} />
            </div>

            <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Publicação em Destaque</span>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{year}</span>
                </div>
                <h4 className="text-lg font-bold mb-1 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {publisher}
                </p>
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-bold hover:bg-neutral-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
            >
                Ler Artigo <ExternalLink size={16} />
            </a>
        </div>
    );
}
