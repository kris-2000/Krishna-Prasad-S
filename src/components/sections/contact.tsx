import Link from 'next/link';
import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      text: "krishnaprasadjune@gmail.com",
      href: "mailto:krishnaprasadjune@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      text: "+91-7356934976",
      href: "tel:+917356934976",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      text: "Thiruvananthapuram, Kerala, India",
    },
];

const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kris-2000",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/krishnaprasad0002",
      icon: <Linkedin className="h-5 w-5" />,
    },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="pb-32">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Get in Touch</h2>
        <Card className="w-full max-w-lg bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out. I'm always open to new opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  {detail.icon}
                  {detail.href ? (
                    <a href={detail.href} className="text-muted-foreground hover:text-foreground transition-colors">{detail.text}</a>
                  ) : (
                    <span className="text-muted-foreground">{detail.text}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 pt-4">
                {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild className="border-accent/50 hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--accent)/0.3)]">
                        <Link href={social.href} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    </Button>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
