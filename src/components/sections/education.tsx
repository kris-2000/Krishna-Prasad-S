import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering Chengannur, Kerala",
    date: "2024 – 2026",
    badge: "CGPA: 7.53 • Immediate Joiner",
    description: [
      "Academic & Lab Specialization: DevOps, Cloud Computing (AWS), Infrastructure as Code (Terraform), System Design, and Linux Administration.",
      "Completed comprehensive practical curriculum covering Kubernetes container orchestration, Docker, Jenkins automated pipelines, Prometheus, and Grafana.",
      "Hands-on architectural implementation of high-availability multi-tier cloud systems.",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Govt. Polytechnic College, Neyyattinkara, Kerala",
    date: "2022 – 2024",
    badge: "Technical Foundation",
    description: [
      "Rigorous hands-on training in computer networking, operating systems, and computer hardware architecture.",
      "Programmed microcontrollers and built IoT telemetry systems.",
    ],
  },
  {
    degree: "Bachelor of Science (Physics)",
    institution: "VTM NSS College, Dhanuvachapuram, Kerala",
    date: "2018 – 2022",
    badge: "Analytical Core",
    description: [
      "Strong analytical, mathematical, and logic fundamentals.",
      "Electives in semiconductor electronics, instrumentation, and scientific computation.",
    ],
  },
];

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-background/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Academic Background
          </h2>
          <p className="text-muted-foreground">
            Academic qualifications and rigorous engineering foundations.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-md hover:shadow-primary/10">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                      </div>
                      <CardDescription className="text-sm font-medium text-primary/90">{edu.institution}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground w-fit">
                      {edu.date}
                    </span>
                    <span className="text-xs font-medium text-emerald-400">
                      {edu.badge}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {edu.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="h-1.5 w-1.5 mt-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
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
