import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Bot, GitBranch, Cloud, ShieldCheck, ExternalLink, Github } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

type Project = {
  title: string;
  status?: string;
  isFlagship?: boolean;
  icon: React.ReactNode;
  description: string;
  tech: string[];
  link?: string;
};

const flagshipProject: Project = {
  title: "Automated AWS Infrastructure & DevSecOps Pipeline (SOC 2 Baseline)",
  status: "Flagship Project",
  isFlagship: true,
  icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  description: "Architected a multi-AZ AWS infrastructure provisioned via modular Terraform across 3 Availability Zones, secured with AWS WAF v2 and CloudFront, enforcing SOC 2 Type II-aligned controls and an automated 4-stage GitHub Actions DevSecOps security pipeline (IaC security scanning with tfsec & Checkov, Bandit SAST, and SonarQube quality gates).",
  tech: [
    "AWS Multi-AZ (VPC, EC2, S3, RDS, ALB, WAF v2)",
    "Terraform IaC",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "DevSecOps",
    "tfsec & Checkov",
    "SonarQube"
  ],
  link: "https://github.com/kris-2000",
};

const secondaryProjects: Project[] = [
  {
    title: "Image Recognition Pipeline on AWS (Cloud-Native)",
    icon: <Cloud className="text-primary h-5 w-5" />,
    description: "Built a serverless event-driven image processing pipeline using AWS Lambda, S3, and Rekognition. Focused on elastic scalability, automated CloudWatch logging/alerts, and IAM least-privilege security.",
    tech: ["AWS Lambda", "S3", "Rekognition", "Python", "CloudWatch", "IAM"],
    link: "https://github.com/kris-2000",
  },
  {
    title: "Smart Extract – AI Document Extractor",
    icon: <Code className="text-primary h-5 w-5" />,
    description: "Developed an automated desktop application to extract handwritten/printed text and convert unstructured documents into structured Excel/Word datasets using machine learning.",
    tech: ["Python", "PyQt6", "OpenCV", "TrOCR", "Automation"],
    link: "https://github.com/kris-2000",
  },
  {
    title: "Decentralized Authentication System (SIWE)",
    icon: <ShieldCheck className="text-primary h-5 w-5" />,
    description: "Engineered passwordless, cryptographically verified authentication using Ethereum blockchain, MetaMask, and SIWE (Sign-In with Ethereum) protocol with smart contract verification.",
    tech: ["Ethereum", "Solidity", "MetaMask", "SIWE", "Web3.js"],
    link: "https://github.com/kris-2000",
  },
  {
    title: "Decentralized NFT Marketplace",
    icon: <GitBranch className="text-primary h-5 w-5" />,
    description: "Built full-stack Ethereum NFT marketplace with ERC-721 smart contracts, React.js frontend, and Web3 integration. Enforced Git feature branching and modular contract patterns.",
    tech: ["Solidity", "Smart Contracts", "React.js", "Web3.js", "Git"],
    link: "https://github.com/kris-2000",
  },
  {
    title: "JARVIS – Intelligent Voice Assistant",
    icon: <Bot className="text-primary h-5 w-5" />,
    description: "A voice-activated virtual assistant built in Python for hands-free local machine automation, task orchestration, and speech telemetry.",
    tech: ["Python", "Speech Recognition", "Automation", "OS Scripting"],
    link: "https://github.com/kris-2000",
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-background/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Engineering Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade cloud architectures, automated DevSecOps pipelines, and full-stack software systems.
          </p>
        </div>

        {/* Flagship Project Spotlight */}
        <Card className="border-primary/40 bg-gradient-to-br from-card/80 via-card/50 to-primary/5 backdrop-blur-md shadow-xl shadow-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <CardHeader className="pb-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  {flagshipProject.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-xs">
                      🌟 {flagshipProject.status}
                    </Badge>
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 text-xs">
                      SOC 2 Baseline
                    </Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl pt-1 font-bold">
                    {flagshipProject.title}
                  </CardTitle>
                </div>
              </div>

              <Button size="sm" asChild variant="outline" className="border-primary/40 hover:bg-primary/20">
                <Link href={flagshipProject.link || "https://github.com/kris-2000"} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" /> View Code on GitHub
                </Link>
              </Button>
            </div>
            <CardDescription className="pt-3 text-base text-foreground/80 leading-relaxed">
              {flagshipProject.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-2 border-t border-border/40">
            <div className="flex flex-wrap gap-2">
              {flagshipProject.tech.map((t, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/70 text-secondary-foreground text-xs py-1 px-2.5">
                  {t}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-accent/20">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-secondary/50">
                      {project.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="pt-2 text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Spacer */}
              </CardContent>
              <CardFooter className="pt-2 flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
