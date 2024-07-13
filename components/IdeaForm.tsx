"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import model from "@/lib/googleClient";
import { toast } from "sonner";
import { saveIdea } from "@/actions/saveIdeas";

function IdeaForm({ session }: any) {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [techStack, setTechStack] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const prompt = `Generate an idea for a project involving ${techStack}. Targeted towards ${targetAudience}, create an innovative and scalable idea titled "${ideaTitle}" with the following description: "${ideaDescription}". The idea should address current market needs, leverage emerging technologies like AI or blockchain if applicable,  include a proposed business model or monetization strategy and     include even list of companies that solves this problem and how can you make something different from them. 
    . Please provide the response in JSON format with title  , description in about 60 words , features with different use cases , provide business model and competitionin json format eg format for json should be like this
    {
        "title": "",
        "description": "",
        "features": [
          {
            "name": "",
            "description": "",
            "use_cases": [
              ""
            ]
          },
          {
            "name": "",
            "description": "",
            "use_cases": [
              ""
            ]
          },
          {
            "name": "",
            "description": "",
            "use_cases": [
              ""
            ]
          },
          {
            "name": "",
            "description": "",
            "use_cases": [
              ""
            ]
          }
        ],
        "business_model": {
          "type": "",
          "description": "O",
          "monetization": [
            "",
            "",
            ""
          ]
        },
        "competition": [
          {
            "company": "",
            "differentiation": ""
          },
          {
            "company": "",
            "company": ""
          },
          {
            "company": "",
            "differentiation": ""
          }
        ]
      }
    `;

    try {
      setGeneratedIdea(null); // Reset generatedIdea state

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = await response.text();

      // Trim additional ``` characters from the start and end
      text = text.trim().replace(/^```json\s+|\s+```$/g, "");

      // Parse the JSON string and set generatedIdea state
      const parsedIdea = JSON.parse(text);
      setGeneratedIdea(parsedIdea);

      const res = await saveIdea(session.user.email, parsedIdea);


      toast.success(res.message);
      console.log(parsedIdea); // Log the parsed JSON object
    } catch (error) {
      console.error("Error generating idea:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">

        <div>
          <h2 className="text-2xl font-bold mb-4">Generate New Idea</h2>
          <Card className="p-10">
            <CardContent>
              <form className="grid gap-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="idea-title">Idea Title</Label>
                  <Input
                    id="idea-title"
                    type="text"
                    placeholder="Enter idea title"
                    value={ideaTitle}
                    onChange={(e) => setIdeaTitle(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="target-stack">Tech Stack</Label>
                  <Input
                    id="target-stack"
                    type="text"
                    placeholder="Enter Skill You Have"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Input
                    id="target-audience"
                    type="text"
                    placeholder="Enter target audience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="idea-description">Idea Description</Label>
                  <Textarea
                    id="idea-description"
                    placeholder="Enter idea description"
                    rows={4}
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Generate Idea
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      {generatedIdea && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Generated Idea</CardTitle>
            <CardDescription>Here are the details of your generated idea:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Title:</h3>
              <p>{generatedIdea.title}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Description:</h3>
              <p>{generatedIdea.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Features:</h4>
              <ul className="list-disc pl-6 space-y-1">
                {generatedIdea.features.map((feature: { name: string; description: string, use_cases: string }, index: React.Key) => (
                  <li key={index}>
                    <strong>{feature.name}</strong>: {feature.description}
                    <p>Use Cases : {feature.use_cases}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Business Model:</h4>
              <p><strong>Type:</strong> {generatedIdea.business_model.type}</p>
              <p><strong>Description:</strong> {generatedIdea.business_model.description}</p>
              <ul className="list-disc pl-6 space-y-1">
                {generatedIdea.business_model.monetization.map((monetization: string, index: React.Key) => (
                  <li key={index}>{monetization}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Competition:</h4>
              <ul className="list-disc pl-6 space-y-1">
                {generatedIdea.competition.map((competitor: { company: string; differentiation: string }, index: React.Key) => (
                  <li key={index}>
                    <strong>{competitor.company}</strong>: {competitor.differentiation}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default IdeaForm;
