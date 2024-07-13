import Link from "next/link";
import React from "react";
import img from "@/public/image.jpg";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import GoogleLoginButton from "../reusable/GoogleLoginButton";
import SetUpButton from "../reusable/SetUpButton";
async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        {" "}
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Next Big Idea
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our AI-powered project idea generator helps you find
                  innovative and personalized project ideas tailored to your
                  interests, skills, and goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {session ? (
                  <Link
                    href="/ideas"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Generate Ideas
                  </Link>
                ) : (
                  <SetUpButton />
                )}
              </div>
            </div>
            <Image
              src={img}
              width="550"
              height="350"
              alt="Hero"
              className="mx-auto aspect-video h-96 w-80 overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src={img}
              width="550"
              height="350"
              alt="Hero"
              className="mx-auto aspect-video h-96 w-80 overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bored of Developing same old projects{" "}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                 Build unique projects according to your interests, skill set, and goals. Stand out from the crowd with our project idea generator.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {session ? (
                  <Link
                    href="/generate"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Generate Project Suggestions
                  </Link>
                ) : (
                  <SetUpButton />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Personalized Project Ideas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Tailored Project Suggestions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Based on the information you provided, here are some
                personalized project ideas to explore:
              </p>
            </div>
            <div className="grid w-full max-w-4xl gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Build a Sustainable Urban Garden</CardTitle>
                  <CardDescription>
                    Design and implement a community garden that promotes local
                    food production and environmental sustainability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This project would allow you to combine your passion for
                    gardening and environmental conservation, while also
                    developing skills in project management, community
                    engagement, and urban planning.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Develop a Mobile App for Language Learning
                  </CardTitle>
                  <CardDescription>
                    Create a user-friendly mobile application that helps people
                    learn new languages through interactive lessons and
                    gamification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This project would allow you to combine your interest in
                    languages and your technical skills in mobile app
                    development, while also exploring user experience design and
                    educational technology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Create an Online Marketplace for Handmade Crafts
                  </CardTitle>
                  <CardDescription>
                    Develop an e-commerce platform that connects local artisans
                    with customers interested in unique, handmade products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This project would allow you to combine your passion for
                    supporting local businesses and your skills in web
                    development, while also exploring entrepreneurship and
                    digital marketing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Ez Projects. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
