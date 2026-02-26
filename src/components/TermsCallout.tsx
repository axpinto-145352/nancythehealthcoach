interface TermsCalloutProps {
  light?: boolean;
  className?: string;
}

const TermsCallout = ({ light, className = '' }: TermsCalloutProps) => (
  <p className={`text-[11px] leading-snug mt-2 ${light ? 'text-white/50' : 'text-nancy-gray/60'} ${className}`}>
    By booking, you agree to our{' '}
    <a href="/terms" className={`underline hover:no-underline ${light ? 'text-white/70 hover:text-white/90' : 'text-nancy-gray/80 hover:text-nancy-teal'}`}>
      Terms &amp; Conditions
    </a>,{' '}
    <a href="/privacy-policy" className={`underline hover:no-underline ${light ? 'text-white/70 hover:text-white/90' : 'text-nancy-gray/80 hover:text-nancy-teal'}`}>
      Privacy Policy
    </a>, and{' '}
    <a href="/disclaimers" className={`underline hover:no-underline ${light ? 'text-white/70 hover:text-white/90' : 'text-nancy-gray/80 hover:text-nancy-teal'}`}>
      Disclaimer
    </a>.
  </p>
);

export default TermsCallout;
