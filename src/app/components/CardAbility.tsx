import CardSkills from "./CardSkills";

interface CardAbilityProps {
    title: string;
    skills: string[];
    colorSkills: string;
    border:string;
    colorText:string;
}

export default function CardAbility({ title, skills, colorSkills ,border,colorText}: CardAbilityProps) {
    return (
        <div className=" border-gray-500 rounded-2xl p-6 bg-shadow-xl bg-secondary">
            <h2 className="text-l mb-4">{title}</h2>
            <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) =>(
                <CardSkills key={index} skill={skill} color={colorSkills} border={border} colorText={colorText}/>
            ))}
            </div>
        </div>
    )
}