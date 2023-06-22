"use client";
import { Session } from "next-auth";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const AppBar = ({ session }: { session: any }) => {
  const router = useRouter();
  return (
    <div>
      <div className=" w-screen h-[24px] md:h-[82px] md:pl-[32px] md:pr-[32px] md:text-2xl text-white bg-slate-900  flex flex-row items-center">
        <div className="flex-1">logo</div>
        <div className="flex-2"></div>
        <div className="flex flex-row flex-2 items-center space-x-[46px] hover:cursor-pointer ">
          <div>
            user:
            <span className=" pl-[10px]">{JSON.stringify(session)}</span>
          </div>
          <div
            className="rounded-md bg-white/25 px-[10px] py-[5px]"
            onClick={() =>
              (!session && router.push("/login")) || (session && signOut())
            }
          >
            {session ? "signout" : "signin"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
