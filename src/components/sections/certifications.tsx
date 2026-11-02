import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BrainCircuit, CheckCircle, Star } from 'lucide-react';

const certifications = [
  { title: "DevOps & Cloud Engineering – Kubernetes, Docker, Jenkins, Prometheus, Grafana, CI/CD" },
  { title: "Cloud Computing – NPTEL (IIT Kharagpur, Swayam)" },
  { title: "Google Analytics for Beginners – Google (2023)" },
  { title: "Robotics & Embedded Systems Certification – Specialized Program (2023)" },
];

const achievements = [
  { title: "IEDC Idea Presentation Award – YIP Technical Innovation" },
  { title: "Gamathon Participant – College-Level Technical Competitions" },
];

const interests = [
  "Multi-AZ Cloud Architecture & AWS Infrastructure",
  "Infrastructure as Code (Terraform) & State Isolation",
  "Container Orchestration (Kubernetes & Docker)",
  "DevSecOps, SAST (Bandit/tfsec) & Quality Gates",
  "Site Reliability Engineering (SRE) & Observability (Prometheus / Grafana)",
  "Linux Systems Administration & Shell Automation",
  "Decentralized Systems & IoT Hardware Prototyping",
];

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="bg-background/50">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certifications & Technical Interests
          </h2>
          <p className="text-muted-foreground">
            Continuous technical learning, recognized achievements, and engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="text-primary" />
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary/90 text-sm uppercase tracking-wide">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-border/40">
                <h3 className="font-semibold mb-3 text-primary/90 text-sm uppercase tracking-wide">Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BrainCircuit className="text-primary" />
                Engineering Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {interests.map((interest, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{interest}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
