import Link from "next/link";
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
    const isMailto = link.startsWith('mailto:');

    return (
        <Link
            href={link}
            target={isMailto ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className=" group flex flex-col items-center gap-4 bg-card/50 backdrop-blur-sm lg:py-8 lg:px-4 p-4 rounded-2xl border border-border hover:border-foreground/30 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 w-full max-w-sm"
        >
            <div className="rounded-xl bg-foreground/5 border border-foreground/10 p-4 group-hover:bg-foreground/10 group-hover:border-foreground/20 transition-colors duration-300">

                {Icon ? (
                    <Icon className="size-6 lg:size-8 text-black" />
                ) : logo? (
                    <Image className="size-5 lg:size-8 object-contain" src={logo} alt={title} />
                ):(
                    <Mail className="size-6 lg:size-8 text-black" />
                )}
            </div>

            <div className="text-center space-y-2 hidden lg:block">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-2 text-foreground text-sm font-medium items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
                <span className="group-hover:underline">
                    {link.replace('mailto:', '')}
                </span>
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
                    className="ml-1"
                >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            </div>
        </Link>
    )
}