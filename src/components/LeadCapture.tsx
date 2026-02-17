import { useState } from 'react';
import { Download, CheckCircle, BookOpen } from 'lucide-react';

interface LeadCaptureProps {
  onNavigate?: (hash: string) => void;
}

const LeadCapture = ({ onNavigate }: LeadCaptureProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-nancy-sage">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mock PDF preview */}
          <div
            className="relative mx-auto lg:mx-0 cursor-pointer"
            onClick={() => onNavigate?.('starter-kit')}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-[288px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="border-2 border-nancy-teal/20 rounded-lg p-6 text-center">
                <BookOpen className="h-12 w-12 text-nancy-teal mx-auto mb-4" />
                <h4 className="font-display font-bold text-nancy-charcoal text-sm mb-2">
                  7-Day Brain Health<br />Starter Kit
                </h4>
                <div className="w-16 h-0.5 bg-nancy-gold mx-auto my-3" />
                <p className="text-xs text-nancy-gray">
                  Sugar Detox Guide<br />
                  + Shopping List<br />
                  + Daily Timeline
                </p>
                <p className="text-[10px] text-nancy-gray-light mt-3">
                  By Nancy Ryan, MCHC
                </p>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-nancy-coral rounded-full flex items-center justify-center text-white font-bold text-xs">
              FREE
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
              Free: 7-Day Brain Health Starter Kit
            </h2>
            <p className="text-lg text-nancy-gray mb-2">
              What happens to your brain when you quit sugar? Find out — and get the roadmap.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Day-by-day meal suggestions (simple, no-cook options included)',
                'Sugar swap cheat sheet',
                'What happens to your brain each day (timeline)',
                'Printable shopping list',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-nancy-charcoal">
                  <CheckCircle className="h-4 w-4 text-nancy-teal mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {submitted ? (
              <div className="bg-white rounded-xl p-6 text-center animate-fadeIn">
                <CheckCircle className="h-12 w-12 text-nancy-teal mx-auto mb-3" />
                <h3 className="font-display font-bold text-nancy-charcoal text-lg mb-2">
                  Check your inbox!
                </h3>
                <p className="text-nancy-gray text-sm">
                  Your Brain Health Starter Kit is on its way. (This is a demo — no email was sent.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl border-2 border-nancy-sage-dark focus:border-nancy-teal focus:ring-2 focus:ring-nancy-teal/20 focus:outline-none bg-white text-nancy-charcoal placeholder:text-nancy-gray-light"
                />
                <button type="submit" className="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap">
                  <Download className="h-4 w-4" />
                  <span>Send It to Me</span>
                </button>
              </form>
            )}

            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-nancy-gray-light">
                No spam, ever. Just brain health insights from Nancy. Unsubscribe anytime.
              </p>
              <button
                onClick={() => onNavigate?.('starter-kit')}
                className="text-xs font-semibold text-nancy-teal hover:text-nancy-teal/80 transition-colors whitespace-nowrap ml-4"
              >
                Preview Kit &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
