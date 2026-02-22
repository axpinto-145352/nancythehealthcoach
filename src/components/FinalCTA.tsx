import { Calendar, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-nancy-teal to-nancy-teal-light relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10S10 14.5 10 20s4.5 10 10 10 10-4.5 10-10z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Give Your Brain What It Needs?
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed">
          Every journey starts with a conversation. Book a free 15-minute consultation and let's
          talk about what's going on with your brain, your energy, and your focus.
        </p>

        <p className="text-white/70 mb-8 italic font-display">
          No pressure, no sales pitch — just honest guidance from someone who's been there.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://calendly.com/nancythehealthcoach-1/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-nancy-teal px-5 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:shadow-xl inline-flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-nancy-teal"
          >
            <Calendar className="h-5 w-5" />
            <span>Book My Free Consultation</span>
          </a>
          <a
            href="#services"
            className="border-2 border-white/50 text-white px-5 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:bg-white/10 inline-flex items-center justify-center space-x-2"
          >
            <span>View Programs</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 max-w-xl mx-auto shadow-xl">
          <p className="text-nancy-charcoal italic font-display text-lg md:text-xl leading-relaxed">
            "I started this work because my daughter was diagnosed with autism, my mother died of
            Alzheimer's, and I was drowning in anxiety and gut issues. I know what it feels like
            when your brain won't cooperate. And I know it can get better."
          </p>
          <p className="text-nancy-teal font-semibold mt-4">— Nancy Ryan, EBHCC</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
