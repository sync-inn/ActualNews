"use client";

import React from 'react';
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
            <form
              // onSubmit={handlesubmit}
              className="flex items-center bg-white rounded-full w-full flex-1"
            >
              <input
                type="text"
                name="input"
                placeholder="Search Everything.."
                className="flex-1 px-4 rounded-full outline-none placeholder:text-sm text-black"
              />
              <button type="submit">
                <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
              </button>
            </form>
            <div className="">
              <h1 className="text-4xl font-Poppins font-bold text-center">
                .actual News
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-wrap justify-end items-end ml-8 sm:ml-12 md:ml-24 lg:ml-60">
            {user ? (
              <div className="flex flex-col">
                <p>
                  {user.given_name} {user.family_name}
                </p>
                <Button className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
                  <LogoutLink>Logout</LogoutLink>
                </Button>
              </div>
            ) : (
              <div className="flex space-x-5 mt-5 md:mt-0">
                <Button className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
                  <LoginLink>Sign In</LoginLink>
                </Button>
                <Button className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
                  <RegisterLink>Sign Up</RegisterLink>
                </Button>
              </div>
            )}
          </div> */}
          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
