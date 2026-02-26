import { useEffect } from 'react';

interface TermsConditionsProps {
  onNavigate: (target: string) => void;
}

const TermsConditions = ({ onNavigate }: TermsConditionsProps) => {
  useEffect(() => {
    document.title = 'Terms & Conditions — Nancy The Health Coach';
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
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-gray max-w-none text-nancy-charcoal/80 space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to nancythehealthcoach.com (the "Website"), owned and operated by Nancy Ryan / Nancy The Health Coach ("we," "us," or "our"). By accessing or using this Website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Use of Website</h2>
          <p>
            You may use this Website for lawful purposes only. You agree not to use this Website in any way that violates any applicable federal, state, local, or international law or regulation, or to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Services</h2>
          <p>
            Nancy The Health Coach offers brain health coaching services, educational content, workshops, and digital products. All coaching services are subject to separate agreements provided at the time of purchase. Specific terms related to coaching packages, workshops, and programs will be outlined in the applicable service agreement.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Intellectual Property</h2>
          <p>
            All content on this Website — including text, graphics, logos, images, audio, video, and software — is the property of Nancy Ryan / Nancy The Health Coach and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without our express written permission.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Payments and Refunds</h2>
          <p>
            Payment for coaching programs, workshops, and digital products is due as outlined in your service agreement. Payment plans are available on select packages. Refund policies are specified in individual service agreements. If you have questions about payments or refunds, please contact us.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">User Content</h2>
          <p>
            By submitting any content to us — including testimonials, feedback, or communications — you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, and publish that content in connection with our business, unless otherwise agreed in writing.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites or services (such as Calendly, social media platforms, or educational resources). We are not responsible for the content, privacy policies, or practices of any third-party websites. Your use of third-party websites is at your own risk.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Nancy Ryan / Nancy The Health Coach shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of this Website or our services.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Nancy Ryan / Nancy The Health Coach, and any affiliates, employees, agents, or partners, from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Website or violation of these Terms &amp; Conditions.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of San Diego County, California.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Website after changes are posted constitutes your acceptance of the updated terms.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Contact Us</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact us at{' '}
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

export default TermsConditions;
