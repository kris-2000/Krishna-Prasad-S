import { AnimatedSection } from '../animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ShieldCheck, Cloud, Zap, Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="text-primary font-medium">Engineering Resilient Infrastructure & Automated Delivery</p>
        </div>

        <p className="max-w-3xl text-center text-lg text-muted-foreground leading-relaxed">
          I am a DevOps and Cloud Engineer passionate about building resilient, automated cloud infrastructure and zero-touch CI/CD pipelines. With an MCA degree and rigorous hands-on engineering, I specialize in provisioning multi-AZ cloud environments using Terraform, orchestrating container workloads on Kubernetes and Docker, and embedding security (DevSecOps) directly into software delivery lifecycles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Cloud className="h-5 w-5" />
                <span>Cloud & Multi-AZ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Designing highly available AWS architectures with VPC, EC2, S3, RDS, Lambda, ALB, CloudFront, and WAF v2.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <ShieldCheck className="h-5 w-5" />
                <span>DevSecOps & IaC</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Automating modular Terraform deployments with remote state isolation, tfsec, Checkov, and Bandit SAST security gates.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Zap className="h-5 w-5" />
                <span>Immediate Joiner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for immediate employment across On-site, Hybrid, or Remote roles in India and globally.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="w-full rounded-xl border border-primary/20 bg-primary/5 p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Relocation & Work Preferences</p>
              <p className="text-sm text-foreground/90 mt-1">
                Open to on-site/hybrid in Bengaluru, Hyderabad, Pune, Chennai, Kochi, Trivandrum, Zurich (Switzerland), or worldwide remote.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Thiruvananthapuram, Kerala
              </span>
              <a href="mailto:krishnaprasadjune@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                krishnaprasadjune@gmail.com
              </a>
              <a href="tel:+917356934976" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +91-7356934976
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
