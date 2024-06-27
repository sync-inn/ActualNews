// Notice: kinde has been shut down temporarily

"use client";

import Navbar from "@/components/layout/Navbar";
import NavigationMenuLanding from "@/components/layout/NavigationMenu";
import NavigationMenu from "@/components/layout/NavigationMenu";
import Cards from "@/components/main/cards";
import { Github, Linkedin } from "lucide-react";
import { unstable_noStore } from "next/cache";
import { useEffect, useState } from "react";

interface Data {
  status: string;
}

export default function Home() {
  // export code as a server side function and it will work like a breeze
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState<Data[]>([]);

  // useEffect(() => {
  //   unstable_noStore();
  //   const fetchStatus = async () => {
  //     console.log("checking status");
  //     try {
  //       const response = await fetch("http://localHost:3001/get/status");
  //       const data = await response.json();
  //       setData([data]);
  //       console.log(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchStatus();
  // }, []);

  // if (!data.length || data[0].status !== "true") {
  //   return (
  //     <div className="text-center">
  //       <h1> Maintainace mode is active, please come again later </h1>
  //     </div>
  //   );
  // }

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
