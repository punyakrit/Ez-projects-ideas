import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { toast } from "sonner";
import connectMongoDb from "@/lib/dbConnect";
import { UserIdeas } from "@/models/ideas";
import Link from "next/link";

async function IdeaList({ session }: any) {
  await connectMongoDb();
  const res = await UserIdeas.find({ owner: session.user.email as string });
  console.log("data" + res);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 mt-12 md:mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Previous Ideas</h2>
            <div className="grid gap-4">
              {res.length > 0 ? (
                res.map((idea, index) => (
                  <Link
                    href={`/ideas/${idea._id}`}
                    className="text-sm font-medium text-primary"
                  >
                    <Card key={index} className="hover:bg-gray-900">
                      <CardHeader>
                        <CardTitle>{idea.title}</CardTitle>
                        <CardDescription>{idea.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="justify-end"></CardFooter>
                    </Card>
                  </Link>
                ))
              ) : (
                <p>Start searching for ideas to shape your future.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaList;
