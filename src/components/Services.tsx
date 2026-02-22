import { Zap, TrendingUp, Crown, Users, Building, Check, Star } from 'lucide-react';
import { JsonLd } from './JsonLd';

const Services = () => {
  const tiers = [
    {
      icon: Zap,
      name: 'Brain Health Breakthrough',
      tagline: 'Clarity in 60 minutes.',
      price: '$150',
      period: 'one session',
      popular: false,
      features: [
        '60-minute deep-dive consultation',
        'Virtual or in-person (San Diego)',
        'Personalized 3-5 action item plan',
        'Tailored resource list',
        'Follow-up email with written plan',
      ],
      forWho: "You're curious but not ready for a full program. Or you need expert eyes on a specific issue.",
      cta: 'Book Your Breakthrough',
      ctaLink: 'https://calendly.com/nancythehealthcoach-1/15min',
    },
    {
      icon: TrendingUp,
      name: '90-Day Transformation',
      tagline: 'Rewire your nutrition. Reclaim your focus.',
      price: '$597',
      period: 'payment plans available',
      popular: true,
      features: [
        'Initial 90-minute assessment',
        '12 weekly coaching sessions (45 min)',
        'Personalized brain nutrition plan',
        'Sugar detox protocol',
        'Gut-brain optimization roadmap',
        'Text/email support between sessions',
        'Progress tracking + monthly check-ins',
        'Complete Brain Health Playbook',
      ],
      forWho: "Adults with ADHD, brain fog, or sugar addiction who are ready to make real, lasting changes.",
      cta: 'Start Your Transformation',
      ctaLink: 'https://calendly.com/nancythehealthcoach-1/15min',
    },
    {
      icon: Crown,
      name: 'VIP Brain Health Intensive',
      tagline: 'Maximum support. Fastest results.',
      price: '$1,497',
      period: 'payment plans available',
      popular: false,
      features: [
        'Everything in 90-Day, plus:',
        '2-hour initial intensive assessment',
        '24 bi-weekly sessions (doubled)',
        'Priority text/email access (48hr)',
        'Custom sample meal plans for your brain type',
        'Supplement protocol + sourcing',
        'Family/partner coaching session',
        '30-day post-program follow-up',
      ],
      forWho: "You want the highest level of support. Managing ADHD, burnout, or caring for aging parents.",
      cta: 'Apply for VIP',
      ctaLink: 'https://calendly.com/nancythehealthcoach-1/15min',
    },
  ];

  return (
    <section id="services" className="section-padding bg-nancy-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
            Brain Health Coaching Programs
          </h2>
          <p className="text-lg text-nancy-gray max-w-2xl mx-auto">
            I don't do cookie-cutter plans. Every brain is different — that's what Dr. Amen's
            research proves. So every program starts with understanding YOUR brain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl overflow-hidden card-hover ${
                tier.popular
                  ? 'ring-2 ring-nancy-teal shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="bg-nancy-teal text-white text-center py-2 text-sm font-semibold flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-nancy-teal/10 mb-4">
                  <tier.icon className="h-6 w-6 text-nancy-teal" />
                </div>

                <h3 className="font-display text-xl font-bold text-nancy-charcoal mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-nancy-gray italic mb-4">{tier.tagline}</p>

                <div className="mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-nancy-charcoal">
                    {tier.price}
                  </span>
                  <span className="text-nancy-gray text-sm ml-2">/ {tier.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-nancy-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-nancy-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-nancy-sage/50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-nancy-gray">
                    <strong className="text-nancy-charcoal">Who it's for:</strong> {tier.forWho}
                  </p>
                </div>

                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-nancy-teal text-white hover:bg-nancy-teal-light hover:shadow-lg'
                      : 'border-2 border-nancy-teal text-nancy-teal hover:bg-nancy-teal hover:text-white'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Group & Corporate */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-nancy-teal" />
              <h3 className="font-display text-xl font-bold text-nancy-charcoal">
                Group Coaching Circles
              </h3>
            </div>
            <p className="text-nancy-gray mb-4">
              6-week brain health program in a small group (6-10 people). Same science-backed
              content with community accountability. Topics rotate quarterly.
            </p>
            <p className="text-nancy-teal font-bold mb-4">Starting at $297/person</p>
            <a href="https://calendly.com/nancythehealthcoach-1/15min" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block text-sm">
              Join the Next Cohort
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover">
            <div className="flex items-center space-x-3 mb-4">
              <Building className="h-6 w-6 text-nancy-teal" />
              <h3 className="font-display text-xl font-bold text-nancy-charcoal">
                Corporate &amp; Community Workshops
              </h3>
            </div>
            <p className="text-nancy-gray mb-4">
              Interactive workshops for teams and organizations. Topics include Brain Food for
              Professionals, The Sugar-Focus Connection, Nutrition for Neurodiverse Adults.
            </p>
            <p className="text-nancy-gray text-sm mb-4">
              <strong>Previous clients:</strong> D'Vine Path, Hello Health Instructor for Communities, Self Determination 1:1 Coaching — Neurodiverse Clients
            </p>
            <a href="https://calendly.com/nancythehealthcoach-1/15min" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-block text-sm">
              Request Workshop Info
            </a>
          </div>
        </div>
      </div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'HealthBusiness',
        name: 'Nancy The Health Coach',
        url: 'https://nancythehealthcoach.com',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Brain Health Coaching Programs',
          itemListElement: tiers.map(tier => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: tier.name,
              description: `${tier.tagline} ${tier.forWho}`,
              provider: {
                '@type': 'Person',
                name: 'Nancy Ryan, EBHCC',
              },
            },
            price: tier.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'USD',
            url: tier.ctaLink,
          })),
        },
      }} />
    </section>
  );
};

export default Services;
