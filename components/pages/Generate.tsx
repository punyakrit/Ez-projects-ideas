"use client"
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import model from "@/lib/googleClient";

const frontendFrameworks = [
  "Angular",
  "Vue.js",
  "Ember.js",
  "Svelte",
  "Backbone.js",
  "jQuery",
];

const backendTechnologies = [
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Ruby on Rails",
  "ASP.NET",
];

const webTechnologies = ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"];

const aiTechnologies = ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy"];

const audienceTypes = ["Consumers", "Businesses", "Developers", "Students", "Researchers", "Government"];

const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby"];

const databases = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Cassandra"];

const frameworks = ["React", "Angular", "Vue.js", "Django", "Flask", "Ruby on Rails"];

const projectLevels = ["Easy Level Project", "Medium Level Project", "Hard Level Project", "Very Hard Level Project"];

function Generate() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [generatedIdea, setGeneratedIdea] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  const handleCheckboxChange = (event:any) => {
    const { value, checked } = event.target;
    
      setCheckedItems((prevCheckedItems):any => [...prevCheckedItems, value]);
    
  };
  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    setError(false)
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
      console.log(parsedIdea); // Log the parsed JSON object
      setGeneratedIdea(parsedIdea);

     
      setLoading(false);
      // setCheckedItems([]);
    } catch (error) {
      setError(true)
      setLoading(false);
      console.error("Error generating idea:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold mb-8">Project Planner</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CheckboxGroup title="Frontend Frameworks" options={frontendFrameworks} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Backend Technologies" options={backendTechnologies} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Web Technologies" options={webTechnologies} onChange={handleCheckboxChange} />
          <CheckboxGroup title="AI/ML Technologies" options={aiTechnologies} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Audience Type" options={audienceTypes} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Programming Languages" options={programmingLanguages} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Databases" options={databases} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Frameworks" options={frameworks} onChange={handleCheckboxChange} />
          <CheckboxGroup title="Project Level" options={projectLevels} onChange={handleCheckboxChange} />
        </div>
        <div className="mt-12">
          {error && <p className="text-red-500 my-4">{"Something went wrong try again!!"}</p>}
          <Button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Random Idea"}
          </Button>
        </div>
      </form>
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

interface CheckboxGroupProps {
  title: string;
  options: string[];
  onChange: (event:any) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options, onChange }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={`${title.toLowerCase().replace(/ /g, "-")}-${index + 1}`}
            value={option}
            onClick={onChange}
          />
          <Label htmlFor={`${title.toLowerCase().replace(/ /g, "-")}-${index + 1}`}>{option}</Label>
        </div>
      ))}
    </div>
  </div>
);


export default Generate;
