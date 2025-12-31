interface CardExperienceProps {
    experiences: any[];

}

export default function CardExperience({ experiences }: CardExperienceProps) {
    return (
        <div className=" border-l-2 border-gray-300 dark:border-gray-700 ml-4 px-4 py-2 ">

            {experiences.map((experience: any, index: number) => (
                <div key={index} className="flex gap-2 mb-8">
                    <div >
                        <div className="relative flex items-center gap-2 ">
                            <div className="absolute -left-6.5 size-5 rounded-full bg-blue-500 border-4  border-white dark:border-gray-900"></div>
                            <p className="text-lg font-bold dark:text-gray-200">{experience.title}</p>
                        </div>
                        <p className="text-l text-blue-700 dark:text-blue-400 mb-3">{experience.address}</p>
                        {Array.isArray(experience.description) ? (
                            <ul className="list-disc list-inside space-y-1">
                                {experience.description.map((item: string, i: number) => (
                                    <li key={i} className="text-l dark:text-gray-400">{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-l dark:text-gray-400">{experience.description}</p>
                        )}

                    </div>
                    <div className="">
                        <div className="p-2 border border-gray-300 dark:border-gray-700 rounded text-[12px] text-nowrap dark:text-gray-400">
                            <p>{experience.initialDate} - {experience.finishedDate}</p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}