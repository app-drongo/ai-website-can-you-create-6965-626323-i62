import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Therapy Services',
      links: [
        { name: 'Individual Therapy', href: '#individual' },
        { name: 'Couples Counseling', href: '#couples' },
        { name: 'Family Therapy', href: '#family' },
        { name: 'Anxiety Treatment', href: '#anxiety' },
        { name: 'Depression Support', href: '#depression' },
        { name: 'Trauma Recovery', href: '#trauma' },
      ],
    },
    {
      title: 'Wellness Programs',
      links: [
        { name: 'Mindfulness Training', href: '#mindfulness' },
        { name: 'Stress Management', href: '#stress' },
        { name: 'Life Coaching', href: '#coaching' },
        { name: 'Support Groups', href: '#groups' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Wellness Resources', href: '#resources' },
      ],
    },
    {
      title: 'Patient Care',
      links: [
        { name: 'New Patient Forms', href: '/forms' },
        { name: 'Insurance Coverage', href: '/insurance' },
        { name: 'Appointment Policies', href: '/policies' },
        { name: 'Crisis Resources', href: '/crisis' },
        { name: 'Telehealth Sessions', href: '/telehealth' },
        { name: 'Payment Options', href: '/payment' },
      ],
    },
    {
      title: 'Practice Info',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'HIPAA Compliance', href: '/hipaa' },
        { name: 'Professional Ethics', href: '/ethics' },
        { name: 'Cancellation Policy', href: '/cancellation' },
        { name: 'Emergency Contacts', href: '/emergency' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/mindfulhorizons' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/mindfulhorizonstherapy' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mindfulhorizons' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/mindfulhorizons' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Practice Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">MH</span>
                </div>
                <span className="font-bold text-xl">Mindful Horizons Therapy</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Providing compassionate, evidence-based mental health care to help you navigate
                life's challenges and discover your path to healing and personal growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">appointments@mindfulhorizons.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(555) 247-MIND (6463)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">2847 Wellness Boulevard, Suite 205</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Wellness Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Monthly mental health tips and wellness insights. Confidential and secure.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Mindful Horizons Therapy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Licensed Professional Counselor{' '}
                <Heart className="size-3 text-primary fill-current" /> LPC #MH2024
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/crisis-resources"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Crisis Resources
            </Link>
            <Link
              href="/professional-credentials"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Professional Credentials
            </Link>
            <Link
              href="/patient-rights"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Patient Rights
            </Link>
            <Link
              href="/office-hours"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Office Hours
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
