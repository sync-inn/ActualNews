"use client";

import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function Navbar() {
  return (
    <header className="bg-gray-300 h-16 items-center relative shadow-xl w-full z-10 md:h-20 lg:rounded-2xl">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-3/4 space-x-5">
            <div className="flex items-center justify-start ml-5 p-1 relative w-1/4 sm:mr:r-right-auto">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="rounded-xl w-[4rem]"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <h1 className="text-4xl font-Poppins">Actual News</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-end items-end ml-8 sm:ml-12 md:ml-24 lg:ml-60">
            <a href="/signIn">
              <Button>Login/Sign</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

// TODO:
// using use state, the avatar icon or the login/sign up button will exist one at a time.
// eg: if no sign up = avatr hidden but button will exist
