import CardEducation from "../components/CardEducation";
import CardExperience from "../components/CardExperience";
import SectionHeader from "../components/SectionHeader";


interface ExperienceProps {
    experiences: any[];
    certifications: any[]
}

export default function Experience({ experiences, certifications }: ExperienceProps) {
    return (
        <section id="experiencia" className="w-full px-6 lg:px-16 pt-10 flex lg:flex-row flex-col justify-between gap-12 scroll-mt-28">
            <div className="w-full lg:w-1/2">
                <SectionHeader title="Experiência" className="mb-6" />
                <CardExperience
                    experiences={experiences} />
            </div>
            <div className="border border-gray-300 dark:border-gray-700 hidden lg:block"></div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <SectionHeader title="Educação" className="mb-6" />
                <CardEducation certifications={certifications} />
            </div>
        </section>
    )
}