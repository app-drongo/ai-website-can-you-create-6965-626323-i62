import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Heart,
  Brain,
  Users,
  Shield,
  Calendar,
  MessageCircle,
  Clock,
  Award,
} from 'lucide-react';

export default function ServicesListDescriptions() {
  const services = [
    {
      id: 'individual-therapy',
      title: 'Individual Therapy Sessions',
      description: 'Personalized one-on-one therapy for anxiety, depression, and life transitions',
      longDescription:
        'Our individual therapy sessions provide a safe, confidential space to explore your thoughts, feelings, and behaviors. Using evidence-based approaches like CBT and mindfulness techniques, we work together to develop coping strategies and achieve your mental health goals.',
      icon: Heart,
      benefits: [
        'Cognitive Behavioral Therapy (CBT)',
        'Anxiety and depression management',
        'Trauma-informed care approach',
        'Personalized treatment plans',
      ],
      pricing: '$120 per 50-minute session',
      timeline: 'Weekly sessions recommended',
      featured: true,
      badge: 'Most Requested',
    },
    {
      id: 'couples-counseling',
      title: 'Couples & Relationship Counseling',
      description: 'Strengthen communication and rebuild connection in your relationship',
      longDescription:
        "Relationship challenges are common, but they don't have to define your partnership. Our couples counseling sessions focus on improving communication, resolving conflicts, and rebuilding intimacy using proven therapeutic techniques.",
      icon: Users,
      benefits: [
        'Gottman Method relationship therapy',
        'Communication skills development',
        'Conflict resolution strategies',
        'Intimacy and trust rebuilding',
      ],
      pricing: '$150 per 60-minute session',
      timeline: 'Bi-weekly sessions typical',
    },
    {
      id: 'mindfulness-therapy',
      title: 'Mindfulness-Based Therapy',
      description: 'Learn mindfulness techniques to manage stress and enhance well-being',
      longDescription:
        'Mindfulness-based therapy combines traditional therapeutic approaches with mindfulness meditation practices. This service helps you develop present-moment awareness, reduce stress, and cultivate emotional regulation skills.',
      icon: Brain,
      benefits: [
        'Mindfulness meditation training',
        'Stress reduction techniques',
        'Emotional regulation skills',
        'Body awareness practices',
      ],
      pricing: '$110 per 45-minute session',
      timeline: '8-week program available',
    },
    {
      id: 'trauma-therapy',
      title: 'Trauma-Informed Therapy',
      description: 'Specialized care for processing traumatic experiences and PTSD',
      longDescription:
        'Our trauma-informed therapy approach recognizes the impact of traumatic experiences on mental health. Using EMDR and other evidence-based treatments, we help you process difficult experiences and develop resilience.',
      icon: Shield,
      benefits: [
        'EMDR (Eye Movement Desensitization)',
        'PTSD treatment specialization',
        'Safe therapeutic environment',
        'Gradual exposure techniques',
      ],
      pricing: 'Insurance accepted',
      timeline: 'Treatment length varies',
      badge: 'Specialized Care',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Therapeutic Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Compassionate Care for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Mental Wellness Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional therapy services designed to support your healing, growth, and personal
            development
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">{service.pricing}</span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Frequency:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                        >
                          Book Appointment
                          <Calendar className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <div className="flex justify-center mb-4">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="size-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Ready to Begin Your Healing Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Taking the first step toward mental wellness requires courage. I'm here to support you
            with compassionate, professional care tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Appointment
              <Calendar className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline">
              Patient Portal
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
