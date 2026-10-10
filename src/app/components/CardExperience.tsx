interface CardExperienceProps {
    experiences: any[];

}

export default function CardExperience({ experiences }: CardExperienceProps) {
    return (
        <div className=" border-l-2 border-gray-300 dark:border-gray-700 ml-4 px-4 py-2 ">

            {experiences.map((experience: any, index: number) => (
                <div key={index} className="flex flex-col mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="relative flex items-center gap-2">
                            <div className="absolute -left-6.5 size-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                            <p className="text-base font-bold dark:text-gray-200">{experience.title}</p>
                        </div>
                        <span className="px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded text-[11px] text-nowrap dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50 font-medium">
                            {experience.initialDate} - {experience.finishedDate}
                        </span>
                    </div>
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-3">{experience.address}</p>
                    {Array.isArray(experience.description) ? (
                        <ul className="list-disc list-inside space-y-1.5 text-sm dark:text-gray-400 text-justify">
                            {experience.description.map((item: string, i: number) => (
                                <li key={i} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm leading-relaxed dark:text-gray-400 text-justify">{experience.description}</p>
                    )}
                    {Array.isArray(experience.techs) && experience.techs.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {experience.techs.map((tech: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

            ))}
        </div>
    )
}