import IdeaForm from "@/components/IdeaForm";
import IdeaList from "@/components/IdeaList";
import Ideas from "@/components/pages/Ideas";
import authOptions from "@/lib/authOptions";
import model from "@/lib/googleClient";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

async function page() {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/')
  }
  return (
    <div>
      <Ideas />

      <IdeaList session={session} />
      <IdeaForm session={session} />
    </div>
  );
}

export default page;
