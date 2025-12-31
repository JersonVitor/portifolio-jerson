"use client"

import Navbar from "@/components/Layouts/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import SectionDivider from "./components/SectionDivider";
import { Form } from "./model/Form";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });

    }
  };
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full flex-col items-center justify-between py-10 sm:items-start gap-y-6">
        <Hero scrollToSection={scrollToSection} {...Form.hero} />
        <SectionDivider />
        <About {...Form.about} />
        <SectionDivider />
        <TechStack techs={Form.techStack} />
        <SectionDivider />
        <Projects {...Form.projects} />
        <SectionDivider />
        <Experience {...Form.experience} />
        <SectionDivider />
        <Contact {...Form.contact} />
      </main>
    </div>
  );
}
