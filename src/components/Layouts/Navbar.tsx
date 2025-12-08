"use client";
import { ThemeToggle } from "../Theme/theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { id: "sobre", label: "Sobre" },
        { id: "habilidades", label: "Habilidades" },
        { id: "projetos", label: "Projetos" },
        { id: "premiacoes", label: "Prêmios" },
        { id: "publicacoes", label: "Publicações" },
        { id: "experiencia", label: "Experiências" },
        { id: "contato", label: "Contato" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm dark:shadow-neutral-800"
                    : "bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
                }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center pl-2">
                        <button
                            className="hover:opacity-80 transition-opacity"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Jerson Vitor
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="hover:text-blue-500 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 -mr-2 text-neutral-600 dark:text-neutral-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pt-4 pb-6 px-2 flex flex-col gap-4 border-t border-neutral-200 dark:border-neutral-800 mt-4 animate-in slide-in-from-top-2 duration-200">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-left py-2 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}