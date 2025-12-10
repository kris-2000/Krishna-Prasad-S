import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, ArrowRight, School } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const keyTags = ["Ethereum", "Solidity", "MetaMask", "Web3.js", "Python", "Full-stack"];

export default function Hero() {
  return (
    <AnimatedSection id="hero" className="min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Krishna Prasad S
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Software Engineer · MCA Student · Blockchain & Web Development
          </p>
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
            An innovative MCA student building a decentralized authentication system with Ethereum and MetaMask to redefine digital identity.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" asChild className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
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
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                    <School className="text-primary"/>
                    <span>Education & Key Skills</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="font-semibold">MCA @ College of Engineering, Chengannur</p>
                <div className="flex flex-wrap gap-2">
                    {keyTags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
