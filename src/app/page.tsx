import UserDah from "@/components/UserDah";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <h1>you are authenticated user</h1>;
}
