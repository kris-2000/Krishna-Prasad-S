import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering, Chengannur, Kerala",
    date: "2024 – 2026",
    description: [
      "Focused on software engineering, blockchain technologies, and cloud computing.",
      "Developed a decentralized authentication system and full-stack NFT marketplace.",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Govt. Polytechnic College, Neyyattinkara, Kerala",
    date: "2022 – 2024",
    description: [
      "Gained hands-on experience in networking, hardware, and core computer science subjects.",
      "Completed IoT and embedded systems projects.",
    ],
  },
  {
    degree: "Bachelor of Science (Physics)",
    institution: "VTM NSS College, Dhanuvachapuram, Kerala",
    date: "2018 – 2022",
    description: [
      "Built a strong foundation in physics, mathematics, and electronics.",
      "Developed analytical and problem-solving skills.",
    ],
  },
];

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-background/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
        Education
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/50 transform -translate-x-1/2"></div>
        {education.map((edu, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-md hover:shadow-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                        <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <CardDescription className="text-sm">{edu.institution}</CardDescription>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">{edu.date}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {edu.description.map((point, i) => (
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
