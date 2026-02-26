import { useEffect } from 'react';

interface PrivacyPolicyProps {
  onNavigate: (target: string) => void;
}

const PrivacyPolicy = ({ onNavigate }: PrivacyPolicyProps) => {
  useEffect(() => {
    document.title = 'Privacy Policy — Nancy The Health Coach';
  }, []);

  return (
    <section className="pt-32 pb-16 bg-nancy-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('')}
          className="text-nancy-teal text-sm font-medium mb-8 inline-block hover:underline"
        >
          &larr; Back to Home
        </button>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none text-nancy-charcoal/80 space-y-6 text-sm leading-relaxed">
          <p>
            This Privacy Policy describes how Nancy Ryan / Nancy The Health Coach ("we," "us," or "our") collects, uses, and shares information about you when you use our website at nancythehealthcoach.com (the "Website").
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Information We Collect</h2>
          <p>
            <strong>Information you provide:</strong> When you subscribe to our email list, book a consultation, or contact us, we may collect your name, email address, and any other information you choose to provide.
          </p>
          <p>
            <strong>Automatically collected information:</strong> When you visit our Website, we automatically collect certain information, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our Website through Google Analytics.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Send you the 7-Day Brain Health Starter Kit and related email communications you requested</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze how our Website is used to improve our services</li>
            <li>Send you marketing communications (with your consent), which you can opt out of at any time</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Cookies and Tracking</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our Website. Google Analytics uses cookies — small text files stored on your device — to collect standard internet log information and visitor behavior. This information is processed in a way that does not identify anyone. We do not make any attempt to identify visitors to our Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Email Marketing</h2>
          <p>
            We use Kit (formerly ConvertKit) to manage our email list. When you provide your email address through our Website, it is stored securely by Kit. You can unsubscribe from our emails at any time by clicking the "unsubscribe" link at the bottom of any email we send.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Third-Party Services</h2>
          <p>We use the following third-party services that may collect information about you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Analytics</strong> — website analytics</li>
            <li><strong>Kit (ConvertKit)</strong> — email marketing</li>
            <li><strong>Calendly</strong> — appointment scheduling</li>
          </ul>
          <p>
            Each of these services has their own privacy policy governing how they use your data.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Your Rights (GDPR)</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict our processing of your data</li>
            <li>Request portability of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">
              nancythehealthcoach@gmail.com
            </a>.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">California Privacy Rights</h2>
          <p>
            If you are a California resident, you have the right to request information regarding the disclosure of your personal information to third parties for direct marketing purposes, and the right to opt out of such disclosures. To make such a request, please contact us at the email address above.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Children's Privacy</h2>
          <p>
            Our Website is not directed to children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">
              nancythehealthcoach@gmail.com
            </a>.
          </p>

          <p className="text-gray-400 text-xs mt-8">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
