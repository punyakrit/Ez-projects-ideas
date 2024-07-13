import model from "./googleClient";

 async function run({query}:any) {
    const prompt = query;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }