import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, ArrowRight, Cloud, CheckCircle2, MapPin } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const keyTags = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "DevSecOps & IaC",
  "Prometheus & Grafana",
  "Linux & Bash"
];

export default function Hero() {
  return (
    <AnimatedSection id="hero" className="min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Immediate Joiner • Open to Work (On-site / Hybrid / Remote)</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Krishna Prasad S
          </h1>
          
          <div className="space-y-1">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              DevOps & Cloud Engineer
            </p>
            <p className="text-sm md:text-base font-medium text-primary">
              AWS • Terraform • Kubernetes • Docker • CI/CD • DevSecOps & IaC
            </p>
          </div>

          <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate about building resilient, automated cloud infrastructure and zero-touch CI/CD pipelines. Specializing in multi-AZ AWS environments provisioned with modular Terraform, container orchestration on Kubernetes & Docker, and embedding automated security gates (DevSecOps) directly into software delivery lifecycles.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" asChild className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105">
              <Link href="#projects">
                View Flagship Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent/50 hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--accent)/0.3)]">
              <Link href="https://github.com/kris-2000" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent/50 hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--accent)/0.3)]">
              <Link href="https://linkedin.com/in/krishnaprasad0002" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/40 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/10 transition-all duration-300 hover:border-primary/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-lg">
                <Cloud className="text-primary h-5 w-5" />
                <span>Profile Snapshot</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">Education</p>
                <p className="font-medium text-sm">MCA @ College of Engineering Chengannur</p>
                <p className="text-xs text-muted-foreground">2024 – 2026 | CGPA: 7.53</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1.5">Top Technical Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {keyTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/60 text-secondary-foreground text-xs py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-border/50 text-xs text-muted-foreground space-y-1.5">
                <div className="flex items-center gap-1.5 text-foreground/90 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Immediate Joiner (Actively Applying)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>Bengaluru, Hyderabad, Pune, Kerala, Zurich & Remote</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
