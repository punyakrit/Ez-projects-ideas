"use client"
import model from "@/lib/googleClient";
import React from "react";

function Ideas() {

  async function run() {
    const prompt = "name of any food in 1 words in json";
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  // run()
  return (
    <div className="pt-20">
      <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Idea Generator
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Unlock your creativity and explore new Million Dollar opportunities with
              our powerful idea generation tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ideas;
