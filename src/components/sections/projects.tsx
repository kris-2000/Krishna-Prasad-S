import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Bot, CircuitBoard, GitBranch } from 'lucide-react';

const projects = [
  {
    title: "Decentralized Authentication System",
    status: "In Progress",
    icon: <GitBranch className="text-primary" />,
    description: "Passwordless, secure authentication using Ethereum, MetaMask, and SIWE with smart contracts for cryptographic identity verification.",
    tech: ["Ethereum", "Solidity", "MetaMask", "SIWE", "Web3.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "JARVIS – Intelligent Virtual Assistant",
    icon: <Bot className="text-primary" />,
    description: "A voice-activated assistant built in Python to respond to spoken commands and perform various tasks on the local machine.",
    tech: ["Python"],
  },
  {
    title: "Charging and Discharging of RC Circuit",
    icon: <CircuitBoard className="text-primary" />,
    description: "An academic project to analyze and visualize RC circuit behavior, time constants, and system dynamics through simulation.",
    tech: ["Physics", "Simulation"],
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-background/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-accent/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  {project.status && (
                    <Badge variant="outline" className="border-primary/50 text-primary">{project.status}</Badge>
                  )}
              </div>
              <CardDescription className="pt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Content can be added here if needed */}
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
