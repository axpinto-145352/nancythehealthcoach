import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-nancy-cream relative overflow-hidden pt-24 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D7377' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-nancy-teal/10 text-nancy-teal text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Brain Health Coach — San Diego & Virtual
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nancy-charcoal mb-6 leading-tight">
              Hi, I'm Nancy.{' '}
              <span className="gradient-text">I Help People Heal Their Brains Through Nutrition.</span>
            </h1>

            <p className="text-lg md:text-xl text-nancy-gray leading-relaxed mb-4">
              Whether you're struggling with brain fog, ADHD, sugar cravings, or worried about
              cognitive decline — I've been where you are. As a mom, a daughter, and a health coach,
              I've seen firsthand how the right nutrition can change everything.
            </p>

            <p className="text-lg text-nancy-gray leading-relaxed mb-8">
              I'm an Elite Brain Health Coach Certified through{' '}
              <strong className="text-nancy-charcoal">Amen University</strong>, using research from
              over 210,000 brain SPECT scans to help you take control of your brain health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center space-x-2"
              >
                <span>Book a Free 15-Min Call</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="btn-secondary text-center"
              >
                Read My Story
              </a>
            </div>
          </div>

          {/* Mobile: Photo */}
          <div className="relative lg:hidden mx-auto max-w-sm">
            <div className="bg-nancy-sage rounded-3xl aspect-[3/4] relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}nancy-headshot.png`}
                alt="Nancy Ryan — Brain Health Coach"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nancy-teal/10 to-transparent h-32" />
            </div>
          </div>

          {/* Desktop: Photo */}
          <div className="relative hidden lg:block">
            <div className="bg-nancy-sage rounded-3xl aspect-[3/4] relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}nancy-headshot.png`}
                alt="Nancy Ryan — Brain Health Coach"
                className="w-full h-full object-cover"
              />
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nancy-teal/10 to-transparent h-32" />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
              <p className="text-xs text-nancy-gray mb-1">Certified by</p>
              <p className="font-display font-bold text-nancy-charcoal text-sm">Amen University</p>
              <p className="text-xs text-nancy-teal">Elite Brain Health Coach Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
