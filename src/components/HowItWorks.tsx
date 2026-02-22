import { Phone, ClipboardList, Salad, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Book a Free Call',
      description: '15 minutes. We\'ll talk about what\'s going on with your brain, your energy, and your focus. No pressure.',
    },
    {
      icon: ClipboardList,
      number: '02',
      title: 'Get Your Assessment',
      description: 'Deep-dive into your nutrition, sleep, stress, and brain health history. We build your personalized roadmap.',
    },
    {
      icon: Salad,
      number: '03',
      title: 'Follow Your Plan',
      description: 'Science-backed, Nancy-guided strategies built for your life. Not a generic diet — a brain health protocol.',
    },
    {
      icon: Sparkles,
      number: '04',
      title: 'Feel the Difference',
      description: 'Most clients notice changes in energy and focus within 2-3 weeks. Deeper changes emerge over 6-12 weeks.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-nancy-gray">
            From first call to feeling different — here's the path.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-nancy-teal/30 to-nancy-teal/10" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-nancy-sage mb-5">
                <step.icon className="h-8 w-8 text-nancy-teal" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-nancy-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-nancy-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-nancy-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
