import { AnimatedSection } from '../animated-section';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">About Me</h2>
        <p className="max-w-3xl text-center text-lg text-muted-foreground">
          I am a recent MCA graduate and hands-on aspiring DevOps Engineer with a strong foundation in cloud-native infrastructure, containerization, Linux, and automation. My experience spans across AWS serverless pipelines, Docker workflows, and Python/Bash scripting. I am passionate about building high-availability systems, robust monitoring setups, and ensuring seamless deployments and reliability.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Thiruvananthapuram, Kerala, India</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
