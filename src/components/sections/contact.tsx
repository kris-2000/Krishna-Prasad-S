import Link from 'next/link';
import { AnimatedSection } from '../animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "Email",
    text: "krishnaprasadjune@gmail.com",
    href: "mailto:krishnaprasadjune@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: "Phone",
    text: "+91-7356934976",
    href: "tel:+917356934976",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: "Location",
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
    href: "https://www.linkedin.com/in/krishnaprasad0002",
    icon: <Linkedin className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="pb-32">
      <div className="flex flex-col items-center gap-8 max-w-xl mx-auto">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 text-xs">
            <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" /> Immediate Joiner
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Get in Touch</h2>
          <p className="text-muted-foreground text-sm">
            Actively seeking DevOps & Cloud Engineer opportunities across India & Globally.
          </p>
        </div>

        <Card className="w-full bg-card/50 backdrop-blur-sm border-primary/20 shadow-xl shadow-primary/10">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Contact Information</CardTitle>
            <CardDescription className="text-sm">
              Open to On-site, Hybrid, and Remote positions (Bengaluru, Hyderabad, Pune, Chennai, Kochi, Switzerland & Remote).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4 p-2.5 rounded-lg bg-secondary/30 border border-border/40">
                  <div className="p-2 rounded-md bg-primary/10">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium">{detail.label}</span>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        {detail.text}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-foreground">{detail.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-2 border-t border-border/40">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="sm" asChild className="border-accent/50 hover:bg-accent/20 hover:border-accent transition-all duration-300">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {social.icon}
                    <span>{social.name}</span>
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
