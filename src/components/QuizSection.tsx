const QuizSection = () => {
  return (
    <section id="quiz" className="section-padding bg-nancy-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4 leading-tight">
            What's Your Brain{' '}
            <span className="gradient-text">Trying to Tell You?</span>
          </h2>
          <p className="text-lg md:text-xl text-nancy-gray max-w-2xl mx-auto">
            Take this quick assessment. No email required. Find out what your brain needs right now.
          </p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="http://www.brainhealthassessment.com/"
            title="Brain Health Assessment"
            className="w-full border-0"
            style={{ minHeight: '700px' }}
            allowFullScreen
          />
        </div>

        <p className="text-center text-sm text-nancy-gray-light mt-8">
          Based on research from Amen University &amp; Dr. Daniel Amen's brain health protocols
        </p>
      </div>
    </section>
  );
};

export default QuizSection;
