import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Bot, CircuitBoard, GitBranch } from 'lucide-react';
import React from 'react';

type Project = {
  title: string;
  status?: string;
  icon: React.ReactNode;

  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Image Recognition Pipeline on AWS (Cloud-Native)",
    icon: <Bot className="text-primary" />,
    description: "Built serverless event-driven image processing pipeline using AWS Lambda, S3, and Rekognition. Focused on scalability, reliability, and automation of classification workflows.",
    tech: ["AWS Lambda", "S3", "Rekognition", "Python", "CloudWatch"],
  },
  {
    title: "Smart Extract – AI Document Extractor",
    icon: <Code className="text-primary" />,
    description: "Developed a desktop application to extract handwritten/printed text and convert documents into structured Excel/Word files using computer vision and machine learning.",
    tech: ["Python", "PyQt6", "OpenCV", "TrOCR"],
  },
  {
    title: "Decentralized NFT Marketplace",
    icon: <GitBranch className="text-primary" />,
    description: "Built full-stack Ethereum NFT marketplace with ERC-721 smart contracts, React.js, and MetaMask. Applied Git workflows and modular development.",
    tech: ["Ethereum", "Solidity", "MetaMask", "React.js", "Git"],
  },
  {
    title: "Decentralized Authentication System",
    icon: <Code className="text-primary" />,
    description: "Developed passwordless, secure authentication using the Ethereum blockchain, MetaMask, and SIWE protocol with smart contract-based cryptographic identity verification.",
    tech: ["Ethereum", "Solidity", "MetaMask", "SIWE", "Web3.js"],
  },
  {
    title: "JARVIS – Intelligent Virtual Assistant",
    icon: <Bot className="text-primary" />,
    description: "A voice-activated virtual assistant built in Python to respond to spoken commands and perform various tasks on the local machine.",
    tech: ["Python", "Voice Recognition"],
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
