import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <h1 className="text-xl text-primary">{JSON.stringify(session)}</h1>
    </div>
  );
}
