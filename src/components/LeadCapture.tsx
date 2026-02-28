import { useState } from 'react';
import { Download, CheckCircle, BookOpen, Loader2 } from 'lucide-react';

const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID || '9139065';
const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY || 'W6yL0_TFEtMcaYILuvUUEQ';

interface LeadCaptureProps {
  onNavigate?: (hash: string) => void;
}

const LeadCapture = ({ onNavigate }: LeadCaptureProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError('');

    try {
      if (KIT_FORM_ID) {
        const res = await fetch(
          `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_key: KIT_API_KEY, email }),
          }
        );
        if (!res.ok) throw new Error('Subscription failed');
      }
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-nancy-sage">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mock PDF preview — shown second on mobile */}
          <div
            className="relative mx-auto lg:mx-0 cursor-pointer order-2 lg:order-1"
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
                  Day-by-Day Plan<br />
                  + Brain Timeline<br />
                  + Shopping List<br />
                  + Sugar Swaps
                </p>
                <p className="text-[10px] text-nancy-gray-light mt-3">
                  By Nancy Ryan, EBHCC
                </p>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-nancy-coral rounded-full flex items-center justify-center text-white font-bold text-xs">
              FREE
            </div>
          </div>

          {/* Content — shown first on mobile */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
              Free: 7-Day Brain Health Starter Kit
            </h2>
            <p className="text-lg text-nancy-gray mb-2">
              Your complete roadmap to breaking the sugar cycle and giving your brain the fuel it needs to thrive.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Day-by-day plan — exactly what to eat, do, and expect each day',
                'Brain timeline — what happens in your brain each day off sugar',
                'Printable shopping list with everything you need',
                'Sugar swaps for your favorite sugary foods',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm sm:text-base text-nancy-charcoal">
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
                  Your Brain Health Starter Kit is on its way.
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
                <button type="submit" disabled={submitting} className="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap disabled:opacity-60">
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  <span>{submitting ? 'Sending...' : 'Send It to Me'}</span>
                </button>
              </form>
            )}
            {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-1 sm:gap-0">
              <p className="text-xs text-nancy-gray-light">
                No spam, ever. Just brain health insights from Nancy. Unsubscribe anytime.
              </p>
              <button
                onClick={() => onNavigate?.('starter-kit')}
                className="text-xs font-semibold text-nancy-teal hover:text-nancy-teal/80 transition-colors whitespace-nowrap"
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
