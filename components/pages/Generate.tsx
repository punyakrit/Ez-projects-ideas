"use client"
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function Generate() {
  const [checkedItems, setCheckedItems] = useState([]);

  
  const handleCheckboxChange = (event:any) => {
    const { value, checked } = event.target;
    
      setCheckedItems((prevCheckedItems):any => [...prevCheckedItems, value]);
    
  };
  const generateIdeas = () => {
    console.log("Checked items:", checkedItems);
    // Your idea generation logic here
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
        <Button onClick={generateIdeas}>Generate Random Ideas</Button>
      </div>
    </div>
  );
}

export default Generate;
