import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey as string)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default model
