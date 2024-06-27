"use client";


// import {
//   RegisterLink,
//   LoginLink,
//   LogoutLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Button } from "../ui/button";
import { Search } from "lucide-react";


async function Navbar() {

  // const { getUser } = getKindeServerSession();
  // const user = await getUser();

  // console.log(user);
  return (
    <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-3/4 space-x-5">

        </div>
      </div>
    </header>
  );
}

export default Navbar;
