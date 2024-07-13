'use server';
import connectMongoDb from '@/lib/dbConnect';
import { UserIdeas } from '@/models/ideas';

export async function saveIdea(owner: string, idea: any) {
  await connectMongoDb();

  const newIdea = new UserIdeas({
    owner,
    title: idea.title,
    description: idea.description,
    features: idea.features,
    business_model: idea.business_model,
    competition: idea.competition
  });

  await newIdea.save();
  return { message: 'Idea saved successfully', idea: newIdea };
}
