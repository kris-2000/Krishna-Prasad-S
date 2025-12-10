import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Trainee",
    company: "Nyeste Ventures, Thiruvananthapuram",
    date: "Aug 2023 – Feb 2024",
    description: [
      "Developed Python GUI applications using Tkinter for streamlined data processing.",
      "Built responsive web applications with Bootstrap and advanced CSS.",
      "Collaborated with clients to define project requirements and deliver solutions.",
      "Gained hands-on experience in an agile, full-stack development environment.",
    ],
  },
  {
    role: "Embedded Systems Developer Intern",
    company: "Acutro Technologies, Technopark",
    date: "Mar 2023 – Jun 2023",
    description: [
      "Designed microcontroller-based IoT and automation systems.",
      "Integrated various sensors and actuators for data acquisition and control.",
      "Worked on the development of robots and autonomous cars.",
      "Created comprehensive technical documentation for projects.",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
        Work Experience
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/50 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-md hover:shadow-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                        <Briefcase className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                            <CardTitle className="text-xl">{exp.role}</CardTitle>
                            <CardDescription className="text-sm">{exp.company}</CardDescription>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">{exp.date}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <div className="h-1.5 w-1.5 mt-1.5 bg-accent rounded-full flex-shrink-0"></div>
                           <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
