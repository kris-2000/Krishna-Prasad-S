import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BrainCircuit, CheckCircle, Star } from 'lucide-react';

const certifications = [
  { title: "Google Analytics for Beginners – Google (2023)" },
  { title: "Robotics Technology Certification – Specialized Program (2023)" },
  { title: "Cloud Computing (NPTEL, IIT Kharagpur – Swayam)" },
];

const achievements = [
  { title: "IEDC Idea Presentation Award – YIP Technical Innovation" },
  { title: "Gamathon Participant – college-level competitions" },
];

const interests = [
  "Blockchain Technology",
  "Web Development",
  "IoT",
  "Quantum Computing",
  "Competitive Programming",
];

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="bg-background/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
        Certifications & Interests
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="text-primary" />
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary/80">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-primary/80">Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <BrainCircuit className="text-primary" />
              Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-center gap-3">
                   <div className="h-2 w-2 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
