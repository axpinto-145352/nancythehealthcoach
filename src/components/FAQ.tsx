import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JsonLd } from './JsonLd';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to live in San Diego?',
      a: "Nope! I work with clients virtually all over the country. San Diego clients have the option of in-person sessions.",
    },
    {
      q: 'Is this a diet program?',
      a: "No. This is brain health coaching focused on nutrition — but I don't put you on a restrictive diet. We work with your preferences, your schedule, and your brain to find what's sustainable.",
    },
    {
      q: 'Will you tell me to stop taking my ADHD medication?',
      a: "Absolutely not. I'm a health coach, not a doctor. I work alongside your existing care team, not instead of them. Many clients find that nutrition changes complement their medication beautifully.",
    },
    {
      q: 'How is this different from seeing a nutritionist?',
      a: "I specialize in the brain. Every recommendation I make is filtered through the lens of brain health — how will this food, habit, or supplement affect your cognitive function, focus, mood, and energy? That's a different lens than general nutrition.",
    },
    {
      q: "What if I can't afford the full program?",
      a: "I offer payment plans on all packages. I also run group coaching circles at a lower price point. And the Breakthrough Session ($150) is a great affordable starting point.",
    },
    {
      q: 'How fast will I see results?',
      a: "Most clients notice changes in energy and focus within the first 2-3 weeks. Deeper changes (gut healing, sugar addiction, cognitive performance) typically emerge over 6-12 weeks.",
    },
    {
      q: 'Do you accept insurance?',
      a: "Health coaching is not currently covered by most insurance plans. However, some HSA/FSA accounts can be used for health coaching services — check with your provider.",
    },
    {
      q: 'What certifications do you have?',
      a: "I'm an Elite Brain Health Coach Certified (EBHCC) through Amen University (January 2026). Master Certified Health Coach (MCHC) through Dr. Sears Wellness Institute (Nov 2021).",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-nancy-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-nancy-gray">
            Everything you want to know before we talk.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-nancy-sage/30 transition-colors"
              >
                <span className="font-semibold text-nancy-charcoal pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-nancy-teal flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 animate-fadeIn">
                  <p className="text-nancy-gray leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }} />
    </section>
  );
};

export default FAQ;
