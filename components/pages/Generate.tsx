import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function Generate() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold mb-8">Project Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-1" />
              <Label htmlFor="skill-1">JavaScript</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-2" />
              <Label htmlFor="skill-2">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-3" />
              <Label htmlFor="skill-3">Node.js</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-4" />
              <Label htmlFor="skill-4">CSS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-5" />
              <Label htmlFor="skill-5">Python</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="skill-6" />
              <Label htmlFor="skill-6">SQL</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Web Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="web-1" />
              <Label htmlFor="web-1">HTML</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="web-2" />
              <Label htmlFor="web-2">CSS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="web-3" />
              <Label htmlFor="web-3">JavaScript</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="web-4" />
              <Label htmlFor="web-4">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="web-5" />
              <Label htmlFor="web-5">Angular</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="web-6" />
              <Label htmlFor="web-6">Vue.js</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">AI/ML Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-1" />
              <Label htmlFor="ai-1">TensorFlow</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-2" />
              <Label htmlFor="ai-2">PyTorch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-3" />
              <Label htmlFor="ai-3">Keras</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-4" />
              <Label htmlFor="ai-4">Scikit-Learn</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-5" />
              <Label htmlFor="ai-5">Pandas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ai-6" />
              <Label htmlFor="ai-6">NumPy</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Audience Type</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-1" />
              <Label htmlFor="audience-1">Consumers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-2" />
              <Label htmlFor="audience-2">Businesses</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-3" />
              <Label htmlFor="audience-3">Developers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-4" />
              <Label htmlFor="audience-4">Students</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-5" />
              <Label htmlFor="audience-5">Researchers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="audience-6" />
              <Label htmlFor="audience-6">Government</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-1" />
              <Label htmlFor="lang-1">JavaScript</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-2" />
              <Label htmlFor="lang-2">Python</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-3" />
              <Label htmlFor="lang-3">Java</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-4" />
              <Label htmlFor="lang-4">C++</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-5" />
              <Label htmlFor="lang-5">C#</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lang-6" />
              <Label htmlFor="lang-6">Ruby</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Databases</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="db-1" />
              <Label htmlFor="db-1">MySQL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="db-2" />
              <Label htmlFor="db-2">PostgreSQL</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="db-3" />
              <Label htmlFor="db-3">MongoDB</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="db-4" />
              <Label htmlFor="db-4">SQLite</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="db-5" />
              <Label htmlFor="db-5">Redis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="db-6" />
              <Label htmlFor="db-6">Cassandra</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-1" />
              <Label htmlFor="framework-1">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-2" />
              <Label htmlFor="framework-2">Angular</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-3" />
              <Label htmlFor="framework-3">Vue.js</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-4" />
              <Label htmlFor="framework-4">Django</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-5" />
              <Label htmlFor="framework-5">Flask</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="framework-6" />
              <Label htmlFor="framework-6">Ruby on Rails</Label>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="mt-12">

          <Button>Generate Random Ideas</Button>
      </div>
    </div>
  );
}

export default Generate;
