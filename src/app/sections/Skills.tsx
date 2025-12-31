import CardAbility from "../components/CardAbility"
import SectionHeader from "../components/SectionHeader"



const tecniquesSkills = [
    "JavaScript (ES6+)",
    "Typescript",
    "Python",
    "HTML",
    "Next.js",
    "CSS",
    "React",
    "Kotlin",
    "Jetpack Compose",
    "Java",
    "C++",
    "Git",
    "GitHub"
]
const behaviorSkills = [
    "Comunicação efetiva",
    "Trabalho em equipe",
    "Resolução de problemas",
    "Pensamento crítico",
    "Adaptabilidade",
    "Gestão de tempo",
    "Proatividade",
    "Mentalidade de crescimento"
]

export default function Skills() {
    return (
        <section id="habilidades" className="w-full px-6 lg:px-16 py-10 flex flex-col justify-between gap-y-4  ">
            <SectionHeader title="Habilidades" />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <CardAbility
                    title="Habilidades Técnicas"
                    skills={tecniquesSkills}
                    colorSkills="bg-blue-200/40 dark:bg-blue-700/20 "
                    border="border border-blue-300 dark:border-blue-700"
                    colorText={"text-blue-500"}
                />
                <CardAbility
                    title="Habilidades Comportamentais"
                    skills={behaviorSkills}
                    colorSkills="bg-gray-300/40 dark:bg-gray-600/20 "
                    border="border border-gray-200 dark:border-gray-700"
                    colorText={"text-gray-700 dark:text-gray-300"}
                />
            </div>

        </section>
    )
}