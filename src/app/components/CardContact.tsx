import Image, { StaticImageData } from "next/image";
import { LucideIcon, Mail } from "lucide-react";

interface CardContactProps {
    icon?: LucideIcon;
    logo?: string | StaticImageData;
    title: string;
    description: string;
    link: string;
}


export default function CardContact({ icon: Icon, logo, title, description, link }: CardContactProps) {
    return (
        <div className="group flex flex-col items-center gap-4 bg-card/50 backdrop-blur-sm py-8 px-4 rounded-2xl border border-border hover:border-foreground/30 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 w-full max-w-sm relative isolate">
            <div className="rounded-xl bg-foreground/5 border border-foreground/10 p-4 group-hover:bg-foreground/10 group-hover:border-foreground/20 transition-colors duration-300">

                {Icon ? (
                    <Icon className="size-8 text-foreground" />
                ) : logo ? (
                    <Image className="size-8 object-contain" src={logo} alt={title} />
                ) : (
                    <Mail className="size-8 text-foreground" />
                )}
            </div>

            <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-2 text-foreground text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                    href={link}
                    target={link.startsWith('mailto:') ? undefined : "_blank"}
                    rel={link.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className="group-hover:underline before:absolute before:inset-0 before:z-20 outline-none"
                >
                    {link.replace('mailto:', '')}
                </a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 pointer-events-none"
                >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            </div>
        </div>
    )
}