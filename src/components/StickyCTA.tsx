import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import TermsCallout from './TermsCallout';

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Desktop: bottom-right floating */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40 animate-fadeInUp">
        <div className="bg-white rounded-2xl shadow-2xl border border-nancy-teal/20 p-4 max-w-xs">
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm text-nancy-charcoal font-medium mb-2">
            Ready to talk about your brain health?
          </p>
          <a
            href="https://calendly.com/nancythehealthcoach-1/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 w-full flex items-center justify-center space-x-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Free 15-Min Call</span>
          </a>
          <TermsCallout />
        </div>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-3 pt-2 safe-bottom">
        <a
          href="https://calendly.com/nancythehealthcoach-1/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center space-x-2 py-3"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Free Consultation</span>
        </a>
        <TermsCallout className="text-center pb-1" />
      </div>
    </>
  );
};

export default StickyCTA;
