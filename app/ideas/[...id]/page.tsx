import connectMongoDb from '@/lib/dbConnect';
import { UserIdeas } from '@/models/ideas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export async function generateMetadata({ params }: any) {
  return {
    title: `Idea Details - ${params.id}`,
  };
}

async function IdeaPage({ params }: any) {
  await connectMongoDb();


      const idea:any = await UserIdeas.findById(params.id).lean();
      if (!idea) {
          return <div className="pt-20">Idea not found.</div>;
      }
   
  

  return (
    <div className="pt-20">
      <Card className="mx-20 my-5 p-4">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Generated Idea</CardTitle>
          <CardDescription>Here are the details of your generated idea:</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Title:</h3>
            <p>{idea.title}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p>{idea.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Features:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {idea.features.map((feature: { name: string; description: string; use_cases: string }, index: React.Key) => (
                <li key={index}>
                  <strong>{feature.name}</strong>: {feature.description}
                  <p>Use Cases: {feature.use_cases}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Business Model:</h4>
            <p><strong>Type:</strong> {idea.business_model.type}</p>
            <p><strong>Description:</strong> {idea.business_model.description}</p>
            <ul className="list-disc pl-6 space-y-1">
              {idea.business_model.monetization.map((monetization: string, index: React.Key) => (
                <li key={index}>{monetization}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Competition:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {idea.competition.map((competitor: { company: string; differentiation: string }, index: React.Key) => (
                <li key={index}>
                  <strong>{competitor.company}</strong>: {competitor.differentiation}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IdeaPage;
