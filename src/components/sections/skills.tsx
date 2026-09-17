import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Database, Globe, Layers, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Globe className="text-primary" />,
    skills: ["AWS (Lambda, S3, Rekognition, CloudWatch)", "Basic ECS/Fargate", "Cloud-native concepts"],
  },
  {
    title: "Containers & Orchestration",
    icon: <Layers className="text-primary" />,
    skills: ["Docker", "Kubernetes (Deployments, Pods, Services, Ingress)"],
  },
  {
    title: "CI/CD & Automation",
    icon: <Cpu className="text-primary" />,
    skills: ["Jenkins", "GitHub Actions", "Maven", "Nexus", "Git", "Bash", "Python scripting"],
  },
  {
    title: "Monitoring & Logging",
    icon: <Database className="text-primary" />,
    skills: ["Prometheus", "Grafana", "CloudWatch", "EFK stack"],
  },
  {
    title: "Networking & OS",
    icon: <Globe className="text-primary" />,
    skills: ["Security groups", "IAM", "Basic load balancing", "Linux (Ubuntu, RHEL/CentOS)", "SSH"],
  },
  {
    title: "Programming",
    icon: <Code className="text-primary" />,
    skills: ["Python", "Bash", "JavaScript", "Java", "C", "SQL"],
  },
  {
    title: "Blockchain & Additional",
    icon: <Layers className="text-primary" />,
    skills: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "IoT"],
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
