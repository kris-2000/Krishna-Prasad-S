import { AnimatedSection } from '../animated-section';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">About Me</h2>
        <p className="max-w-3xl text-center text-lg text-muted-foreground">
          I am a recent MCA graduate and aspiring Software Engineer with strong foundations in data structures, algorithms, and modern software development practices. My hands-on experience spans across blockchain technology, full-stack web development, cloud computing, and embedded systems, and I am passionate about building secure, scalable, and innovative solutions.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Thiruvananthapuram, Kerala, India</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
