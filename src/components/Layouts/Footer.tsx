export default function Footer() {
    return (
        <footer className="w-full py-10 px-6 border-t border-border bg-background">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Jerson Vitor. Todos os direitos reservados.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="#sobre"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Sobre
                    </a>
                    <a
                        href="#projetos"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Projetos
                    </a>
                    <a
                        href="#experiencia"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Experiência
                    </a>
                    <a
                        href="#contato"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contato
                    </a>
                </div>

                <div className="text-muted-foreground text-sm font-medium">
                    Construído com <span className="text-foreground">Next.js & Tailwind</span>
                </div>
            </div>
        </footer>
    );
}
