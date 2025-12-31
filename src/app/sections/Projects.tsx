import CardProjects from "../components/CardProjects";
import SectionHeader from "../components/SectionHeader";


export interface ProjectProps {
    projects: any[];
}

export default function Projects({ projects }: ProjectProps) {
    return (
        <section id="projetos" className="px-6 lg:px-16 pt-10 w-full flex flex-col justify-between scroll-mt-28">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-8">
                <SectionHeader
                    title="Projetos"
                    description="Uma coleção de trabalhos que demonstram minha capacidade técnica."
                    className="mb-0"
                />
                <a href="https://github.com/JersonVitor"
                    className="flex items-center justify-center gap-2 bg-white dark:bg-[#18181b] px-4 py-3 border border-black dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all rounded-[8px] font-medium text-sm">Ver todos os projetos</a>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <CardProjects key={index}
                        title={project.title}
                        description={project.description}
                        frameworks={project.frameworks}
                        picture={project.picture}
                        link={project.link}
                        isPrize={project.isPrize}
                        titlePrize={project.titlePrize}
                        localPrize={project.localPrize}
                    />
                ))}
            </div>

        </section>
    )
}