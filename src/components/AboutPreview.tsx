import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photos — shown second on mobile, first on desktop */}
          <div className="relative space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Mom photo + caption */}
            <div className="rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[4/5]">
                <img
                  src={`${import.meta.env.BASE_URL}nancy-mom-2.png`}
                  alt="Nancy Ryan with her mother"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="bg-nancy-teal p-4 sm:p-6 text-center">
                <p className="font-display text-white text-base sm:text-lg italic">
                  "I couldn't save my mom's brain. But I could help other people protect theirs."
                </p>
                <p className="text-nancy-gold text-sm mt-2">— Nancy Ryan</p>
              </div>
            </div>

            {/* Daughter photo + caption */}
            <div className="rounded-3xl overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={`${import.meta.env.BASE_URL}nancy-daughter.png`}
                  alt="Nancy's daughter"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="bg-nancy-charcoal p-4 sm:p-5 text-center">
                <p className="font-display text-white text-sm sm:text-base italic">
                  "She's the reason I do this work. My daughter taught me that every brain is different — and every brain deserves support."
                </p>
                <p className="text-nancy-gold text-sm mt-1 sm:mt-2">— Nancy Ryan</p>
              </div>
            </div>
          </div>

          {/* Content — shown first on mobile, second on desktop */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-nancy-charcoal mb-6">
              I Became a Brain Health Coach{' '}
              <span className="gradient-text">Because I Had No Choice</span>
            </h2>

            <p className="text-nancy-gray text-[0.9375rem] sm:text-base leading-relaxed mb-4">
              When my daughter was diagnosed with high-functioning autism at three years old, I
              did what any mom would do — I started researching everything. I needed to understand
              how her brain worked so I could help her thrive.
            </p>

            <p className="text-nancy-gray text-[0.9375rem] sm:text-base leading-relaxed mb-4">
              That research changed my life. I discovered the connection between nutrition and
              brain function. I started changing what our family ate, and I watched my daughter
              flourish.
            </p>

            <p className="text-nancy-gray text-[0.9375rem] sm:text-base leading-relaxed mb-4">
              Then I turned the lens on myself. I'd been living with anxiety and gut issues for
              years. When I changed my nutrition, my anxiety lifted. My focus sharpened. I felt
              like myself for the first time in years.
            </p>

            <p className="text-nancy-gray text-[0.9375rem] sm:text-base leading-relaxed mb-6">
              Then my mother was diagnosed with Alzheimer's. Watching her memory fade turned this
              work from a passion into a mission.
            </p>

            <div className="bg-nancy-sage rounded-xl p-6 mb-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <img src={`${import.meta.env.BASE_URL}amen-badge.png`} alt="Elite Brain Health Coach Certified - Amen University" className="h-36 w-36 sm:h-48 sm:w-48 md:h-56 md:w-56 flex-shrink-0" loading="lazy" />
                <p className="text-sm text-nancy-charcoal">
                  Elite Brain Health Coach Certified — Amen University (January 2026)
                </p>
              </div>
            </div>

            <a
              href="#quiz"
              className="inline-flex items-center text-nancy-teal font-semibold hover:text-nancy-teal-light transition-colors"
            >
              Find Out What Your Brain Needs
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
