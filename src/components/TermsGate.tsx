import { useState, useEffect, useCallback } from 'react';
import { X, FileText, ExternalLink } from 'lucide-react';

interface TermsGateProps {
  onNavigate: (target: string) => void;
}

const TermsGate = ({ onNavigate }: TermsGateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [pendingUrl, setPendingUrl] = useState('');

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setAgreed(false);
    setPendingUrl('');
  }, []);

  const handleProceed = () => {
    if (agreed && pendingUrl) {
      window.open(pendingUrl, '_blank', 'noopener,noreferrer');
      handleClose();
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href*="calendly.com"]') as HTMLAnchorElement | null;
      if (!link) return;

      e.preventDefault();
      e.stopPropagation();
      setPendingUrl(link.href);
      setIsOpen(true);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, handleClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-nancy-teal" />
            <h2 className="font-display text-lg font-bold text-nancy-charcoal">
              Terms &amp; Conditions
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-5 text-sm text-nancy-charcoal/80 leading-relaxed space-y-4">
          <p className="text-nancy-charcoal font-medium">
            Before booking with Nancy The Health Coach, please review and acknowledge the following key terms:
          </p>

          <div className="bg-nancy-sage/50 rounded-xl p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Educational &amp; Informational Purposes</h3>
              <p className="text-xs">
                All programs, products, and services are for educational and informational purposes only and are not a substitute for professional medical, mental health, legal, or financial advice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Not Medical Advice</h3>
              <p className="text-xs">
                Nancy The Health Coach is not a medical practitioner. Always seek the advice of your own physician or mental health practitioner. Do not start or stop taking any medications based on information from our services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Personal Responsibility</h3>
              <p className="text-xs">
                You are solely responsible for your actions, decisions, and results based on the use of our programs and products. Results differ for each individual and no specific outcomes are guaranteed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Intellectual Property</h3>
              <p className="text-xs">
                All content is owned by Nancy Ryan / Nancy The Health Coach. You are granted a limited, personal, non-commercial license and may not copy, share, or redistribute any materials.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Payments &amp; Refund Policy</h3>
              <p className="text-xs">
                All sales are final. Payment plans are available on select packages. You remain responsible for the full cost even if you withdraw early.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-nancy-charcoal text-xs uppercase tracking-wide mb-1">Dispute Resolution</h3>
              <p className="text-xs">
                Any disputes will be resolved through binding arbitration in San Diego County, California, rather than through courts or jury trials.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('terms')}
            className="inline-flex items-center text-nancy-teal text-xs font-semibold hover:underline"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Read the full Terms &amp; Conditions
          </button>
        </div>

        {/* Footer with Checkbox + Button */}
        <div className="p-5 border-t border-gray-100 space-y-4">
          <label className="flex items-start space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-2 border-gray-300 text-nancy-teal focus:ring-nancy-teal focus:ring-2 cursor-pointer flex-shrink-0"
            />
            <span className="text-sm text-nancy-charcoal leading-snug">
              I have read and agree to the{' '}
              <span className="font-semibold text-nancy-teal">Terms &amp; Conditions</span>,{' '}
              <span className="font-semibold text-nancy-teal">Privacy Policy</span>, and{' '}
              <span className="font-semibold text-nancy-teal">Website Disclaimer</span>.
            </span>
          </label>

          <button
            onClick={handleProceed}
            disabled={!agreed}
            className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue to Book with Nancy
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsGate;
