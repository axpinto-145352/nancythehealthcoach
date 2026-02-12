import { CloudFog, Candy, Brain, BatteryLow } from 'lucide-react';

const ProblemSection = () => {
  const painPoints = [
    {
      icon: CloudFog,
      title: "Brain Fog",
      description: "That 2pm haze that makes every task feel like wading through mud.",
    },
    {
      icon: Candy,
      title: "Sugar Cravings",
      description: "The 3pm hijack where willpower doesn't stand a chance.",
    },
    {
      icon: Brain,
      title: "Can't Focus",
      description: "You've been told it's ADHD and the only option is medication.",
    },
    {
      icon: BatteryLow,
      title: "Running on Empty",
      description: "Exhausted by noon. Anxious by evening. Repeat.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-nancy-gray leading-relaxed">
            You're smart. You're driven. But lately your brain won't cooperate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-nancy-cream rounded-2xl p-6 text-center card-hover border border-transparent hover:border-nancy-coral/20"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-nancy-coral/10 mb-4">
                <point.icon className="h-7 w-7 text-nancy-coral" />
              </div>
              <h3 className="font-display font-bold text-nancy-charcoal mb-2">{point.title}</h3>
              <p className="text-sm text-nancy-gray">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-nancy-sage rounded-2xl p-8 md:p-10 text-center">
            <p className="text-lg text-nancy-charcoal leading-relaxed mb-4">
              Maybe you're watching a parent's memory slip away and wondering —{' '}
              <em className="text-nancy-coral">is that going to be me?</em>
            </p>
            <p className="text-lg text-nancy-charcoal leading-relaxed mb-4">
              Here's what I know after years of studying brain health at Amen University:
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-nancy-teal mb-4">
              Your brain isn't broken. It's starving.
            </p>
            <p className="text-nancy-gray leading-relaxed">
              The food you eat, the sleep you get, the stress you carry — it all shows up in your
              brain first. And when your brain struggles, everything else falls apart.{' '}
              <strong className="text-nancy-charcoal">
                The good news? Your brain can change.
              </strong>{' '}
              Neuroplasticity is real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
