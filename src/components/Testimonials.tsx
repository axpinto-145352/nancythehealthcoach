import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jill Foley',
      title: 'Director, D\'Vine Path LEAFF Program',
      context: 'After Nancy led a 3-week workshop series for neurodiverse adult students:',
      text: "Nancy created fun, interactive nutritional lessons that were easily followed. Our students learned about Traffic Light eating, fats and sugars, and discovered supermarket secrets. During lessons, students tasted healthy treats while focusing on self-care. We can't wait to have her return.",
      initials: 'JF',
    },
    {
      name: 'Serena Batali',
      title: 'Program Director, D\'Vine Path',
      context: 'Results from Nancy\'s nutritional education workshops:',
      text: "Her engaging and inclusive approach empowered our neurodiverse population to better understand their dietary needs, encouraging a culture of informed and health-conscious individuals. She helped educate our students about nutrition, label reading, and healthier food choices while teaching alternative healthy recipes.",
      initials: 'SB',
    },
    {
      name: 'Patricia D. McDow',
      title: 'Travel Designer, HNP Family Network',
      context: 'After Nancy\'s Lunch and Learn presentation:',
      text: "Your presentation was not only informative but incredibly engaging, providing valuable insights that sparked meaningful discussions among our attendees. I've received numerous positive comments from our HNP family. I look forward to collaborating with you in the future.",
      initials: 'PM',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-nancy-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What Happens When You Invest in Your Brain
          </h2>
          <p className="text-lg text-gray-300">
            Real people. Real workshops. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-nancy-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-nancy-gold/60 mb-4" />
              <p className="text-sm text-nancy-gold mb-3 font-medium">{t.context}</p>
              <p className="text-gray-200 leading-relaxed mb-6 text-[0.9375rem] sm:text-base italic">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-nancy-teal flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">{t.name}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
