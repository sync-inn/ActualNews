// "use client";

import Navbar from "@/components/layout/Navbar";
import NavigationMenuLanding from "@/components/layout/NavigationMenu";
import NavigationMenu from "@/components/layout/NavigationMenu";
import Cards from "@/components/main/cards";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section>
      <nav>
        <Navbar />
        <NavigationMenuLanding/>
      </nav>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Cards />
        </div>
      </main>
      {/* footer code */}
      <footer className="bg-gray-400 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold lg:text-center">
              Synchronise Ltd
            </h1>
          </div>
          <div className="flex flex-row">
            <a href="/" className="mr-4 hover:bg-red-600">
              <Linkedin size={24} />
            </a>
            <a href="/">
              <Github size={24} className="hover:bg-gray-600" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
