
interface CardSkillsProps {
    skill:string;
    color:string;
    border:string;
    colorText:string;
}

export default function CardSkills({skill,color,border,colorText}:CardSkillsProps) {
    return (
        <span className={`py-2 px-3 ${color} rounded-[10px]  ${border} text-l ${colorText}`}>
            {skill}
        </span>
    )
}