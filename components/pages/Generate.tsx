"use client"
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import model from "@/lib/googleClient";

function Generate() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  
  const handleCheckboxChange = (event:any) => {
    const { value, checked } = event.target;
    
      setCheckedItems((prevCheckedItems):any => [...prevCheckedItems, value]);
    
  };
  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);

    const prompt = `Generate an 3 idea for a project involving these technologies only no other techstack should be included and level of difficulty also: ${checkedItems} . The idea should address current market needs, leverage emerging technologies,  include monetization strategy and     include even list of companies that solves this problem and how can you make something different from them. 
    . Please provide the response in JSON format with title  , description in about 100 words , features with different use cases give in form of
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
          }
        ],
        "monetization_strategy": [
          "",
          "",
          "",
        ],
        "competitors": [
          "",
          "",
          "",
          "",
        ],
        "technology_stack": [
          "",
          "",
          "",
          "",
        ]
    }, 
    
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

     
      console.log(parsedIdea); // Log the parsed JSON object
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error generating idea:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold mb-8">Project Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {["JavaScript", "React", "Node.js", "CSS", "Python", "SQL"].map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`skill-${index + 1}`} value={skill} onClick={handleCheckboxChange} />
                <Label htmlFor={`skill-${index + 1}`}>{skill}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Web Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"].map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`web-${index + 1}`} value={tech} onClick={handleCheckboxChange} />
                <Label htmlFor={`web-${index + 1}`}>{tech}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">AI/ML Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            {["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy"].map((ai, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`ai-${index + 1}`} value={ai} onClick={handleCheckboxChange} />
                <Label htmlFor={`ai-${index + 1}`}>{ai}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Audience Type</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Consumers", "Businesses", "Developers", "Students", "Researchers", "Government"].map((audience, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`audience-${index + 1}`} value={audience} onClick={handleCheckboxChange} />
                <Label htmlFor={`audience-${index + 1}`}>{audience}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
          <div className="grid grid-cols-2 gap-4">
            {["JavaScript", "Python", "Java", "C++", "C#", "Ruby"].map((lang, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`lang-${index + 1}`} value={lang} onClick={handleCheckboxChange} />
                <Label htmlFor={`lang-${index + 1}`}>{lang}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Databases</h2>
          <div className="grid grid-cols-2 gap-4">
            {["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Cassandra"].map((db, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`db-${index + 1}`} value={db} onClick={handleCheckboxChange} />
                <Label htmlFor={`db-${index + 1}`}>{db}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
          <div className="grid grid-cols-2 gap-4">
            {["React", "Angular", "Vue.js", "Django", "Flask", "Ruby on Rails"].map((framework, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`framework-${index + 1}`} value={framework} onClick={handleCheckboxChange} />
                <Label htmlFor={`framework-${index + 1}`}>{framework}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="mt-12">
        <Button onClick={handleFormSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Random Ideas"}
        </Button>
      </div>
      {loading && (
        <div className="text-center mt-4 text-gray-600">Generating ideas...</div>
      )}
      {generatedIdea && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Generated Ideas:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generatedIdea.map((idea: { title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; features: any[]; monetization_strategy: any[]; competitors: any[]; technology_stack: any[]; }, index: React.Key | null | undefined) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">{idea.title}</h3>
                <p className="text-gray-600 mb-2">{idea.description}</p>
                <div>
                  <h4 className="text-md font-semibold mb-2">Features:</h4>
                  <ul className=" list-inside">
                    {idea.features.map((feature: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; use_cases: any[]; }, fIndex: React.Key | null | undefined) => (
                      <li key={fIndex} className="mb-2">
                        <p className="font-semibold">{feature.name}</p>
                        <p className="text-gray-600">{feature.description}</p>
                        <ul className="list-disc list-inside">
                          {feature.use_cases.map((useCase: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, uIndex: React.Key | null | undefined) => (
                            <li key={uIndex} className="text-sm text-gray-600">{useCase}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-2">Monetization Strategy:</h4>
                  <ul className="list-disc list-inside">
                    {idea.monetization_strategy.map((strategy: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, sIndex: React.Key | null | undefined) => (
                      <li key={sIndex} className="text-gray-600">{strategy}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-2">Competitors:</h4>
                  <ul className="list-disc list-inside">
                    {idea.competitors.map((competitor: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, cIndex: React.Key | null | undefined) => (
                      <li key={cIndex} className="text-gray-600">{competitor}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-2">Technology Stack:</h4>
                  <ul className="list-disc list-inside">
                    {idea.technology_stack.map((tech: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, tIndex: React.Key | null | undefined) => (
                      <li key={tIndex} className="text-gray-600">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
       
    </div>
  );
}

export default Generate;
