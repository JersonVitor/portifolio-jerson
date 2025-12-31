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
        profissao: "Desenvolvedor Full Stack", // Atuação na WebTech
        description: "Estudante de Ciência da Computação focado em desenvolvimento de software, com experiência prática em soluções Full Stack e visão computacional.",
        profilePic: profilePic,
    },
    about: {
        title: "Transformando ideias em",
        titleDestaque: " realidade digital!",
        descriptionDestaque: "Sou um desenvolvedor apaixonado por criar interfaces que não apenas funcionam, mas encantam.",
        description: [
            "Atualmente graduando em Ciência da Computação pela PUC Minas (2022-2026).",
            "Possuo experiência no desenvolvimento de soluções de impacto, como o projeto SoundEyes, que utiliza visão computacional e YOLOv8 para acessibilidade.",
            "Minha trajetória inclui formação técnica em redes pelo SENAI, certificação internacional CCNA pela Cisco e especialização em desenvolvimento Swift pelo Hackatruck.",
            "Atuei na WebTech Network com foco em tecnologias Full Stack, unindo estética e engenharia para resolver problemas reais."
        ],
        abilitys: [
            "Trabalho em equipe e colaboração",
            "Resolução de problemas complexos",
            "Comunicação clara e efetiva",
            "Adaptabilidade e aprendizado contínuo",
            "Atenção aos detalhes"
        ],
        publication: {
            title: "SoundEyes: Audiodescrição de Obstáculos para Pessoas com Deficiência Visual",
            publisher: "Simpósio Brasileiro de Computação Ubíqua e Pervasiva (SBCUP)",
            year: "2025",
            link: "https://sol.sbc.org.br/index.php/sbcup/article/view/36136"
        }
    },
    projects: {
        // Seção mantida conforme original conforme instrução
        projects: [
            {
                title: "Projeto ARES",
                description: "Aplicativo educacional com IA para ensino e tradução de LIBRAS.",
                frameworks: ["React Native", "Expo", "Python", "PyTorch", "MobileNetV2", "GRU", "Docker", "Azure", "REST API"],
                picture: projeoAres,
                link: "https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti6-2025-1-g03-ares",
                isPrize: true,
                titlePrize: "Melhor Trabalho Interdisciplinar VI: Sistemas Paralelos e Distribuídos",
                localPrize: "Puc Minas Coração Eucarístico",
            },
            {
                title: "SoundEyes",
                description: "Assistente de mobilidade com visão computacional para deficientes visuais.",
                frameworks: ["Kotlin", "Android", "Jetpack Compose", "TensorFlow", "YOLOv8", "Google TTS", "CameraX", "ESP32-CAM"],
                picture: soundeyes,
                link: "https://github.com/JersonVitor/SoundEyes",
                isPrize: true,
                titlePrize: "Melhor Prêmio Interdisciplinar V - Sistemas Computacionais",
                localPrize: "Puc Minas Coração Eucarístico",
            },
            {
                title: "Melhor Preço",
                description: "Comparador colaborativo de preços e ofertas em supermercados locais.",
                frameworks: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "OpenLayers", "jQuery"],
                picture: melhorpreco,
                link: "https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20222-01-precos-em-supermercados",
                isPrize: true,
                titlePrize: "Melhor Prêmio Interdisciplinar I - Aplicações Web",
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
                title: "Desenvolvedor Full Stack",
                address: "WebTech Network (PUC Minas)",
                description: [
                    "Desenvolvimento de soluções web modernas utilizando React, TailwindCSS e Node.js.",
                    "Atuação em equipe ágil com foco em metas e entregas.",
                    "Organização de workshops técnicos."
                ],
                initialDate: "05/2025",
                finishedDate: "12/2025"
            }
        ],
        certifications: [
            {
                title: "Ciência da Computação",
                address: "Pontifícia Universidade Católica de Minas Gerais",
                description: "A Ciência da Computação está amplamente inserida na sociedade contemporânea e exige profissionais em constante qualificação. ",
                initialDate: "08/2022",
                finishedDate: "07/2026"
            },
            {
                title: "CCNAv7: Introdução às redes",
                address: "Cisco Networking Academy",
                description: "Configuração de roteadores, switches, IPv4/IPv6 e segurança.",
                initialDate: "08/2024",
                finishedDate: "12/2025"
            },
            {
                title: "Algoritmos e POO com Swift",
                address: "Hackatruck Makerspace",
                description: "Fundamentos de Swift, Orientação a Objetos e Herança.",
                initialDate: "11/2024",
                finishedDate: "12/2025"
            },
            {
                title: "Manutenção de Redes",
                address: "SENAI",
                description: "Instalação e manutenção de redes de computadores.",
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
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    contact: {
        githubLink: "https://github.com/JersonVitor",
        linkedinLink: "https://www.linkedin.com/in/jersonvitor/",
        emailLink: "mailto:jersonvitor2016@gmail.com"
    }
}