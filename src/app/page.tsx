"use client";

import UserDah from "@/components/UserDah";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  return <h1>you are authenticated user</h1>;
}
