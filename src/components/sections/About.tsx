import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description:
        'We provide a safe, non-judgmental space where you can explore your thoughts and feelings with complete confidentiality.',
    },
    {
      icon: Lightbulb,
      title: 'Evidence-Based Approach',
      description:
        'Our therapeutic methods are grounded in proven psychological research and tailored to your unique needs and goals.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented Therapy',
      description:
        'We work collaboratively with you to identify specific objectives and develop practical strategies for lasting positive change.',
    },
    {
      icon: Globe,
      title: 'Holistic Wellness',
      description:
        'We address the interconnected aspects of mental, emotional, and physical well-being for comprehensive healing.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Practice Established', icon: Award },
    { value: '500+', label: 'Clients Supported', icon: Users },
    { value: '95%', label: 'Client Satisfaction', icon: TrendingUp },
    { value: '8+', label: 'Years Experience', icon: Globe },
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Licensed Clinical Psychologist',
      image: 'SM',
      bio: 'Specializes in anxiety, depression, and trauma recovery with 12+ years of clinical experience.',
    },
    {
      name: 'Michael Thompson',
      role: 'Licensed Marriage Counselor',
      image: 'MT',
      bio: 'Expert in couples therapy and relationship dynamics with Gottman Method certification.',
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Child & Adolescent Therapist',
      image: 'ER',
      bio: 'Dedicated to helping young people navigate emotional challenges and developmental transitions.',
    },
    {
      name: 'James Wilson',
      role: 'Addiction Recovery Specialist',
      image: 'JW',
      bio: 'Certified in substance abuse counseling with focus on dual diagnosis treatment approaches.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Our Practice
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Journey to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mental Wellness Begins Here
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Mindful Horizons Therapy, we're dedicated to providing compassionate, professional
            mental health support that empowers you to overcome challenges and achieve lasting
            personal growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 with a vision to make quality mental health care accessible and
                approachable, Mindful Horizons Therapy has become a trusted sanctuary for healing
                and growth.
              </p>
              <p>
                We understand that seeking therapy takes courage, and we honor that bravery by
                providing evidence-based treatment in a warm, supportive environment where you can
                feel truly heard and understood.
              </p>
              <p>
                Our integrated approach combines traditional therapeutic techniques with mindfulness
                practices, helping over 500 individuals and families find their path to emotional
                wellness and resilience.
              </p>
            </div>
            <Button className="group">
              Schedule Consultation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Healing happens in relationship - we're here to walk alongside you on your
                      journey."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Dr. Sarah Mitchell, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Therapeutic Approach</h3>
            <p className="text-muted-foreground">
              The core principles that guide our practice and inform every therapeutic relationship
              we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Therapists</h3>
            <p className="text-muted-foreground">
              Our experienced, licensed professionals are committed to providing personalized care
              that honors your unique story and supports your healing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View Therapist Profiles
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "The therapists at Mindful Horizons helped me find hope again when I thought it was
                lost. Their compassionate approach and practical tools have truly transformed my
                life."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  AL
                </div>
                <div className="text-left">
                  <div className="font-semibold">Anonymous Client</div>
                  <div className="text-sm text-muted-foreground">
                    Anxiety & Depression Treatment
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
