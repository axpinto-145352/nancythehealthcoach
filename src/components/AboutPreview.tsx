import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="bg-nancy-sage rounded-3xl aspect-[4/5] relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}nancy-mom.png`}
                alt="Nancy Ryan with her mother"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Decorative quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nancy-teal to-nancy-teal/90 p-6 md:p-8 text-center">
                <p className="font-display text-white text-lg md:text-xl italic">
                  "I couldn't save my mom's brain. But I could help other people protect theirs."
                </p>
                <p className="text-nancy-gold text-sm mt-2">— Nancy Ryan</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-6">
              I Became a Brain Health Coach{' '}
              <span className="gradient-text">Because I Had No Choice</span>
            </h2>

            <p className="text-nancy-gray leading-relaxed mb-4">
              When my daughter was diagnosed with high-functioning autism at three years old, I
              did what any mom would do — I started researching everything. I needed to understand
              how her brain worked so I could help her thrive.
            </p>

            <p className="text-nancy-gray leading-relaxed mb-4">
              That research changed my life. I discovered the connection between nutrition and
              brain function. I started changing what our family ate, and I watched my daughter
              flourish.
            </p>

            <p className="text-nancy-gray leading-relaxed mb-4">
              Then I turned the lens on myself. I'd been living with anxiety and gut issues for
              years. When I changed my nutrition, my anxiety lifted. My focus sharpened. I felt
              like myself for the first time in years.
            </p>

            <p className="text-nancy-gray leading-relaxed mb-6">
              Then my mother was diagnosed with Alzheimer's. Watching her memory fade turned this
              work from a passion into a mission.
            </p>

            <div className="bg-nancy-sage rounded-xl p-6 mb-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <img src={`${import.meta.env.BASE_URL}amen-badge.svg`} alt="Certified Elite Brain Health Coach - Amen University" className="h-48 w-48 sm:h-56 sm:w-56 flex-shrink-0" loading="lazy" />
                <p className="text-sm text-nancy-charcoal">
                  <strong className="text-nancy-teal">Credentials:</strong> Master-Certified Health
                  Coach + Elite Brain Health Coach from{' '}
                  <strong>Amen University</strong> (January 2026) — based on Dr. Daniel Amen's
                  research using over 210,000 brain SPECT scans.
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
