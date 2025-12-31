interface CardEducationProps {
    certifications: any[];
}


export default function CardEducation({ certifications }: CardEducationProps) {
    return (
        <div className="py-2">
            {certifications.map((experience: any, index: number) => (
                <div key={index} className="flex gap-2 mb-8 border border-gray-300 dark:border-gray-700 shadow-md rounded p-6">
                    <div className="w-full">
                        <div className=" flex justify-between">
                            <p className=" w-2/3 text-l font-bold dark:text-gray-200">{experience.title}</p>
                            <span className="h-fit p-2 border border-gray-300 dark:border-gray-700 rounded text-[12px] text-nowrap dark:text-gray-400">
                                <p>{experience.initialDate} - {experience.finishedDate}</p>
                            </span>
                        </div>
                        <p className="w-2/3 text-sm mb-2 text-blue-500 dark:text-blue-500">{experience.address}</p>
                        <p className="dark:text-gray-400">{experience.description}</p>

                    </div>

                </div>

            ))}
        </div>
    )
}