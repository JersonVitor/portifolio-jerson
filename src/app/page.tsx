import Navbar from "@/components/Layouts/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full flex-col items-center justify-between px-16 py-10 sm:items-start">
        <Hero />
        <About />
       </main>
    </div>
  );
} 
