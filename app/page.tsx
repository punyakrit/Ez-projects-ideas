import Home from "@/components/pages/Home";
import { Button } from "@/components/ui/button";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface Session{
  user: {name: string}
}
export default async function Page() {
  const session : Session | null  = await getServerSession(authOptions)
  return (
    <div>
      <Home/>
      {session?.user?.name }
    </div>
  );
}
