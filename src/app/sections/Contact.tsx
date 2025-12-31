import github from "../../assets/github-mark/github-mark.png";
import linkedin from "../../assets/in-logo/InBug-Black.png";
import { Mail } from "lucide-react";
import CardContact from "../components/CardContact";
import SectionHeader from "../components/SectionHeader";

interface contactProps {
    githubLink: string;
    linkedinLink: string;
    emailLink: string;
}

export default function Contact({ githubLink, linkedinLink, emailLink }: contactProps) {
    return (
        <section id="contato" className="w-full px-6 lg:px-16 pt-10 flex flex-col gap-y-4 scroll-mt-28">

            <SectionHeader
                title="Contato"
                description="Estou sempre aberto a novas oportunidades e colaborações. Escolha a melhor forma de entrar em contato comigo!"
                className="items-start"
            />

            <div className="flex  flex-row gap-4 justify-center">
                <CardContact
                    icon={Mail}
                    title="E-mail"
                    description="Mande uma mensagem direta para o meu e-mail profissional."
                    link={emailLink}
                />
                <CardContact
                    logo={linkedin}
                    title="LinkedIn"
                    description="Conecte-se comigo profissionalmente e veja meu histórico."
                    link={linkedinLink}
                />
                <CardContact
                    logo={github}
                    title="GitHub"
                    description="Confira meus projetos de código aberto e contribuições."
                    link={githubLink}
                />

            </div>
        </section>
    )
}