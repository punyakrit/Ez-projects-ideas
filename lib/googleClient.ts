import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = "AIzaSyBI4GWnNWslEREdVcI-UZIGLOHgBBYNCjo";

const genAI = new GoogleGenerativeAI(apiKey as string)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default model
