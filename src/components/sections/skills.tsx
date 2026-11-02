import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Layers, Cpu, Activity, Terminal, Code, ShieldCheck, Database, Check } from 'lucide-react';
import React from 'react';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms (AWS)",
    icon: <Cloud className="text-primary h-5 w-5" />,
    skills: [
      "AWS Multi-AZ Architectures",
      "VPC, EC2, S3, RDS, Lambda",
      "Application Load Balancer (ALB)",
      "CloudFront & AWS WAF v2",
      "IAM, KMS, Security Groups",
      "Amazon ECS / Fargate Basics"
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: <Cpu className="text-primary h-5 w-5" />,
    skills: [
      "Terraform (Modular Architecture)",
      "Remote S3 State Backends & DynamoDB Locking",
      "State Isolation & Workspaces",
      "Immutable Infrastructure Practices",
      "IaC Versioning & Linting"
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: <Layers className="text-primary h-5 w-5" />,
    skills: [
      "Docker (Multi-stage builds, Non-root images)",
      "Kubernetes (Deployments, Pods, Services)",
      "Ingress Controllers & Networking",
      "ConfigMaps, Secrets, RBAC",
      "Readiness & Liveness Probes"
    ],
  },
  {
    title: "CI/CD & DevSecOps",
    icon: <ShieldCheck className="text-primary h-5 w-5" />,
    skills: [
      "GitHub Actions Workflows",
      "Jenkins Automated Pipelines",
      "SonarQube Quality Gates",
      "tfsec & Checkov (IaC Security)",
      "Bandit SAST Vulnerability Scanning",
      "SOC 2 Type II-Aligned Pipeline Controls"
    ],
  },
  {
    title: "Observability & Monitoring",
    icon: <Activity className="text-primary h-5 w-5" />,
    skills: [
      "Prometheus Metrics Collection",
      "Grafana Dashboards & Visualizations",
      "AWS CloudWatch Alarms & Logs",
      "EFK Stack (Elasticsearch, Fluentd, Kibana)",
      "Health Checks & Incident Telemetry"
    ],
  },
  {
    title: "Automation & Linux Administration",
    icon: <Terminal className="text-primary h-5 w-5" />,
    skills: [
      "Linux Administration (Ubuntu, RHEL/CentOS)",
      "Bash Shell Scripting & Crontab",
      "Python Automation & System Scripting",
      "SSH Key Management & Security",
      "Git Feature Branch & PR Workflows"
    ],
  },
  {
    title: "Programming & Databases",
    icon: <Code className="text-primary h-5 w-5" />,
    skills: [
      "Python (Django, REST APIs, Automation)",
      "SQL (MySQL Schema Design & Optimization)",
      "Bash / Shell",
      "JavaScript / Node.js",
      "Java & C/C++"
    ],
  },
  {
    title: "Blockchain & Specialized Prototypes",
    icon: <Database className="text-primary h-5 w-5" />,
    skills: [
      "Ethereum & Solidity Smart Contracts",
      "SIWE (Sign-In with Ethereum) Auth",
      "Web3.js & MetaMask Integration",
      "IoT / Arduino Embedded C Telemetry"
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-background/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skillset
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies engineered for high availability, infrastructure automation, zero-touch CI/CD, and cloud security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-primary/10 flex flex-col"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
