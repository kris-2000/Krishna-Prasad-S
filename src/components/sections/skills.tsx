import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Database, Globe, Layers, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="text-primary" />,
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "Blockchain",
    icon: <Layers className="text-primary" />,
    skills: ["Ethereum", "Solidity", "MetaMask", "SIWE", "Web3.js"],
  },
  {
    title: "Web Development",
    icon: <Globe className="text-primary" />,
    skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "REST APIs", "Full-stack Dev"],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="text-primary" />,
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Node.js", "Tkinter"],
  },
  {
    title: "Embedded & Systems",
    icon: <Cpu className="text-primary" />,
    skills: ["Microcontrollers", "Sensors", "IoT", "Arduino", "Windows", "Linux", "CLI"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-primary" />,
    skills: ["Problem Solving", "Team Collaboration", "Project Management", "Documentation"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-background/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
        My Skillset
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-colors duration-300 shadow-md hover:shadow-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
