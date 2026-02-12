import BrainHealthQuiz from './BrainHealthQuiz';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-nancy-cream relative overflow-hidden pt-24 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D7377' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-nancy-charcoal mb-4 leading-tight">
            What's Your Brain{' '}
            <span className="gradient-text">Trying to Tell You?</span>
          </h1>
          <p className="text-lg md:text-xl text-nancy-gray max-w-2xl mx-auto">
            Take this 60-second assessment. No email required. Find out what your brain needs right now.
          </p>
        </div>

        <BrainHealthQuiz />

        <p className="text-center text-sm text-nancy-gray-light mt-8">
          Based on research from Amen University &amp; Dr. Daniel Amen's brain health protocols
        </p>
      </div>
    </section>
  );
};

export default Hero;
