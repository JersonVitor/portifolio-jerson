import profilePic from "../../assets/foto_perfil.png";
import anotaai from "../../assets/AnotaAi.png"
import soundeyes from "../../assets/SoundEyes.png"
import melhorpreco from "../../assets/MelhorPreco.png"
import hibernate from "../../assets/Hibernate.png"
import chatchef from "../../assets/ChatChef.jpg"
import projeoAres from "../../assets/projeto-Ares.png"
export const Form = {
    hero: {
        status: "Aberto a oportunidades!", // Objetivo Profissional
        title: "Olá, sou Jerson Vitor!", // Nome completo: Jerson Vitor de Paula Gomes
        profissao: "Desenvolvedor Full Stack",
        description: "Bacharel em Ciência da Computação pela PUC Minas, com experiência em P&D e desenvolvimento Full Stack (React, Next.js, NestJS e GraphQL), além de projetos premiados em visão computacional e IA aplicada à acessibilidade.",
        profilePic: profilePic,
    },
    about: {
        title: "Transformando ideias em",
        titleDestaque: " realidade digital!",
        descriptionDestaque: "Sou um desenvolvedor apaixonado por construir soluções completas — do banco de dados à interface — que resolvem problemas reais.",
        description: [
            "Bacharel em Ciência da Computação pela Pontifícia Universidade Católica de Minas Gerais (2022 - 2026).",
            "Atuei como Estagiário em Desenvolvimento Full Stack na Iminentia, em P&D, construindo APIs escaláveis com NestJS e GraphQL, interfaces em React e otimizando bancos PostgreSQL com TypeORM.",
            "Na extensão universitária WebTech, desenvolvi soluções para alunos e docentes com React, Next.js e Tailwind CSS.",
            "Autor do artigo SoundEyes, publicado na CSBC 2025, e de três projetos premiados como Melhor Trabalho Interdisciplinar na PUC Minas.",
            "Formação complementar em redes pelo SENAI e Cisco Networking Academy, e em Swift, APIs RESTful e POO pelo Hackatruck MakerSpace."
        ],
        abilitys: [
            "Trabalho em equipe e colaboração",
            "Resolução de problemas complexos",
            "Comunicação clara e efetiva",
            "Adaptabilidade e aprendizado contínuo",
            "Documentação técnica e qualidade de código"
        ],
        publication: {
            title: "SoundEyes: Audiodescrição de Obstáculos para Pessoas com Deficiência Visual",
            publisher: "CSBC 2025 · Simpósio Brasileiro de Computação Ubíqua e Pervasiva (SBCUP)",
            year: "2025",
            link: "https://sol.sbc.org.br/index.php/sbcup/article/view/36136"
        }
    },
    projects: {
        // Seção mantida conforme original conforme instrução
        projects: [
            {
                title: "Projeto ARES",
                description: "Aplicativo educacional para tradução e ensino de LIBRAS com IA.",
                frameworks: ["React Native", "Expo", "Python", "PyTorch", "MobileNetV2", "GRU", "Docker", "Azure", "REST API"],
                picture: projeoAres,
                link: "https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti6-2025-1-g03-ares",
                isPrize: true,
                titlePrize: "Melhor Trabalho Interdisciplinar VI: Sistemas Paralelos e Distribuídos",
                localPrize: "Puc Minas Coração Eucarístico",
            },
            {
                title: "SoundEyes",
                description: "Audiodescrição de obstáculos para pessoas com deficiência visual, com visão computacional. Artigo publicado na CSBC 2025.",
                frameworks: ["Kotlin", "Android", "Jetpack Compose", "TensorFlow", "YOLOv8", "Google TTS", "CameraX", "ESP32-CAM"],
                picture: soundeyes,
                link: "https://github.com/JersonVitor/SoundEyes",
                isPrize: true,
                titlePrize: "Melhor Trabalho Interdisciplinar V: Sistemas Computacionais",
                localPrize: "Puc Minas Coração Eucarístico",
            },
            {
                title: "Melhor Preço",
                description: "Aplicação web de comparação de ofertas em supermercados locais.",
                frameworks: ["Java", "Spark", "PostgreSQL", "HTML", "CSS", "JavaScript"],
                picture: melhorpreco,
                link: "https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20222-01-precos-em-supermercados",
                isPrize: true,
                titlePrize: "Melhor Trabalho Interdisciplinar I: Aplicações Web",
                localPrize: "Puc Minas Coração Eucarístico",
            },
            {
                title: "Anota aí",
                description: "App Android intuitivo para criação e gerenciamento de anotações.",
                frameworks: ["Android", "Kotlin", "Jetpack Compose", "Dagger Hilt", "Room", "Compose Foundation", "Splashscreen"],
                picture: anotaai,
                link: "https://github.com/JersonVitor/Anota_Ai",
                isPrize: false,
                titlePrize: "",
                localPrize: "",
            },
            {
                title: "ChatChef",
                description: "Gera receitas culinárias personalizadas via IA a partir de fotos ou ingredientes.",
                frameworks: ["Flutter", "Dart", "SQLite", "Google Gemini API", "image_picker"],
                picture: chatchef,
                link: "https://github.com/JersonVitor/ChatChef",
                isPrize: false,
                titlePrize: "",
                localPrize: "",
            },
            {
                title: "Hibernate-Java",
                description: "Sistema de gestão para clínica médica focado em persistência de dados.",
                frameworks: ["Java", "Hibernate", "JPA", "MySQL", "Maven"],
                picture: hibernate,
                link: "https://github.com/JersonVitor/Hibernate-Java",
                isPrize: false,
                titlePrize: "",
                localPrize: "",
            },
        ]
    },
    experience: {
        experiences: [
            {
                title: "Estagiário em Desenvolvimento Full Stack",
                address: "Iminentia · P&D",
                description: [
                    "Atuação em P&D com foco em sistemas de informação, desenvolvimento full stack e algoritmos aplicados.",
                    "Construção de APIs escaláveis com NestJS e GraphQL, e interfaces modernas em React.",
                    "Gerenciamento de múltiplos projetos integrados com TypeScript estrito e pnpm.",
                    "Otimização de banco de dados PostgreSQL utilizando TypeORM.",
                    "Apoio na implementação de algoritmos para diagnóstico de falhas em sistemas de potência.",
                    "Suporte em testes, validações, documentação técnica e manutenção de sistemas."
                ],
                techs: ["NestJS", "GraphQL", "React", "TypeScript", "PostgreSQL", "TypeORM", "pnpm"],
                initialDate: "01/2026",
                finishedDate: "05/2026"
            },
            {
                title: "Desenvolvedor Full Stack",
                address: "WebTech · Extensão Universitária (PUC Minas)",
                description: [
                    "Colaboração na criação de soluções tecnológicas para alunos e docentes, construindo interfaces modernas, responsivas e performáticas.",
                    "Aplicação prática do ecossistema JavaScript/TypeScript no desenvolvimento de funcionalidades para desafios do ambiente acadêmico.",
                    "Trabalho em equipe utilizando Git para controle de versão, garantindo entregas eficientes."
                ],
                techs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Git"],
                initialDate: "05/2025",
                finishedDate: "12/2025"
            }
        ],
        certifications: [
            {
                title: "Bacharelado em Ciência da Computação",
                address: "Pontifícia Universidade Católica de Minas Gerais",
                description: "Formação em engenharia de software, algoritmos, aplicações web, sistemas computacionais e sistemas paralelos e distribuídos.",
                initialDate: "08/2022",
                finishedDate: "08/2026"
            },
            {
                title: "Algoritmos, Swift, APIs RESTful e POO",
                address: "Hackatruck MakerSpace",
                description: "Fundamentos de Swift, consumo de APIs RESTful e Programação Orientada a Objetos.",
                initialDate: "2024",
            },
            {
                title: "Introdução a Redes de Computadores",
                address: "Cisco Networking Academy",
                description: "Configuração de roteadores, switches, IPv4/IPv6 e segurança.",
                initialDate: "2024",
            },
            {
                title: "Instalação e Manutenção de Redes de Computadores",
                address: "Serviço Nacional de Aprendizagem Industrial (SENAI)",
                description: "Instalação, configuração e manutenção de redes de computadores.",
                initialDate: "2020",
                finishedDate: "2021"
            }
        ]
    },
    techStack: [
        // Mantido conforme original conforme instrução
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "pnpm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    contact: {
        githubLink: "https://github.com/JersonVitor",
        linkedinLink: "https://www.linkedin.com/in/jersonvitor/",
        emailLink: "mailto:jersonvitor2016@gmail.com"
    }
}