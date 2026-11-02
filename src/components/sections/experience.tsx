import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Trainee",
    company: "Nyeste Venture Technologies",
    date: "Jun 2023 – Jan 2024",
    description: [
      "Engineered backend RESTful microservices and workflows for a Hospital Management System utilizing Python and Django.",
      "Designed and optimized relational database schemas in MySQL for patient electronic medical records (EMR) and appointment scheduling.",
      "Managed collaborative feature branch workflows in Git, resolving staging merge conflicts, debugging deployment bottlenecks, and verifying feature releases in staging environments.",
    ],
  },
  {
    role: "Robotics & Embedded Systems Intern",
    company: "Acutro Technologies",
    date: "Feb 2023 – May 2023",
    description: [
      "Programmed microcontroller firmware in C/C++ on Arduino platforms, interfacing sensor telemetry and actuators for real-time automated IoT hardware prototypes.",
      "Authored comprehensive technical system documentation and hardware-software integration workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="text-muted-foreground">
            Hands-on professional engineering experience across backend services, systems, and release workflows.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-md hover:shadow-primary/10">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary/90">{exp.company}</CardDescription>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground w-fit">
                    {exp.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {exp.description.map((point, i) => (
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
