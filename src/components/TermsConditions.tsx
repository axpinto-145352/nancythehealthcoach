import { useEffect } from 'react';

interface TermsConditionsProps {
  onNavigate: (target: string) => void;
}

const TermsConditions = ({ onNavigate }: TermsConditionsProps) => {
  useEffect(() => {
    document.title = 'Terms of Use — Nancy The Health Coach';
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

        <h1 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-2">
          Terms of Use
        </h1>
        <p className="text-nancy-gray text-sm mb-8">for Online Programs &amp; Products</p>

        <div className="prose prose-gray max-w-none text-nancy-charcoal/80 space-y-6 text-sm leading-relaxed">

          <p>
            Please read these Terms of Use carefully before purchasing, accessing or using any of our Programs, Products and Services. Additionally, please review the terms of our{' '}
            <button onClick={() => onNavigate('privacy-policy')} className="text-nancy-teal hover:underline">Privacy Policy</button>{' '}
            for how your information is stored and shared.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Terms of Use</h2>
          <p>
            Our Programs, Products, and Services are owned and operated by Nancy Ryan / Nancy The Health Coach ("Company", "we", or "us"). The term "you" refers to any purchaser and/or user of any of our Programs, Products and/or Services. These Terms of Use for Online Programs &amp; Products ("Terms of Use") state how you may use our Programs, Products and Services and any of their content or materials (collectively "Programs and Products").
          </p>
          <p>
            Please read these Terms of Use carefully. We reserve the right to change these Terms of Use from time to time. By using any of our Programs and Products you are agreeing to the Terms of Use as they appear and are legally bound by them, whether or not you have read them. If at any time you do not agree with these Terms of Use, please do not use our Programs and Products.
          </p>
          <p>
            These Terms of Use require the use of arbitration on an individual basis to resolve disputes, rather than jury trials, and limit the remedies available to you in the event of a dispute. You fully understand and agree that by enrolling in, purchasing and/or using any of our Programs and Products that you are waiving certain legal rights and you are voluntarily agreeing to do so.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Use and Consent</h2>
          <p>
            By purchasing or using any of our Programs and Products, you agree to abide by these Terms of Use as well as our Website Disclaimer, Terms and Conditions and Privacy Policy, and any other terms and conditions that may apply, and you are required to act in accordance with them. Accessing, purchasing or using our Programs or Products, in any manner constitutes use of the Program or Product, and your agreement to be bound by these Terms of Use.
          </p>
          <p>
            All of our Programs and Products are intended solely for users who are eighteen (18) years of age or older. Any registration by, use of or access to any Program or Product by anyone under age 18 is unauthorized, unlicensed and in violation of these Terms of Use. By accessing or using our Programs or Products, you represent and warrant that you are at least 18 years old.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Intellectual Property Rights</h2>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Our Limited License to You</h3>
          <p>
            Our Programs and Products are our property and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The content in our Programs and Products is solely owned by or licensed to us, unless otherwise indicated.
          </p>
          <p>
            If you purchase or access any of our Programs or Products, you will be considered our Licensee. All content obtained through us is our property, and you are granted a revocable, non-transferable license for personal, non-commercial use only, limited to you only. This means that you may not use our Programs or Products in a manner that constitutes an infringement of our rights or in a manner that has not been authorized by us.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Permitted Use</h3>
          <p>
            You may download and/or print the contents of our Programs and Products for your own personal use. However, you are not permitted to share, sell, reprint or republish any of our Programs or Products, including handouts, for resale or mass reproduction purposes for your own business use without our permission. This includes sharing this program with your friends, family, colleagues, or others. If they would like access, they must purchase their own license separately.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Prohibited Use</h3>
          <p>As a Licensee, you agree that you are clearly and expressly prohibited from doing the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You will not copy, share or steal our Programs or Products, or any parts of them. You will not use, copy, adapt or represent any of our Programs or Products in any way as if they are yours or created by you.</li>
            <li>You will not engage in improper and/or unauthorized use, including modifying, copying, reproducing, republishing, uploading, posting, transmitting, translating, selling, creating derivative works, exploiting, or distributing in any manner or medium any Program or Product.</li>
            <li>You will not duplicate, share, trade, sell, or otherwise distribute our Programs or Products to any other person, for their personal use, business/commercial use or in any way that earns them money.</li>
            <li>You will not violate our intellectual property rights, including copyright and trademark rights.</li>
            <li>You will not reprint or republish any part of our Programs or Products for compilation into your own products, programs, services or materials.</li>
          </ul>
          <p>
            You understand and agree that engaging in prohibited or improper and/or unauthorized use of our Programs or Products is considered theft and we retain the right to prosecute theft to the full extent of the law.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Your License to Us</h3>
          <p>
            By posting or submitting any material on or through our Programs or Products, such as comments, posts, photos, images or videos, you are representing that you are the owner of all such materials and you are at least 18 years old. When you voluntarily submit content, you grant us consent to make it part of our current or future Website, Programs and/or Products. You may, however, at any time, ask us to delete this information.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Media Release</h3>
          <p>
            By participating in our Programs or Products, including our social media communities, you consent to photographs, videos, and/or audio recordings that may be made that may contain your image, text, voice and/or your likeness. These may be shared with potential clients or other clients who have purchased our Programs or Products.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Security</h2>
          <p>
            When you apply for, enroll in, purchase or use our Programs or Products we may collect personal data including your name, email address, phone number, billing information, and other personally-identifying information ("Confidential Information"). By providing such Confidential Information, you grant us permission to use and store it in accordance with our Privacy Policy. We will use our best efforts to keep your Confidential Information safe, secure and confidential. However, due to the nature of the Internet, we cannot completely ensure or warrant the security of your Confidential Information; therefore, submitting it is done at your own risk.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Personal Responsibility and Assumption of Risk</h2>
          <p>
            You agree that you are using your own judgment in using our Programs or Products and you agree that you are doing so at your own risk. Our Programs or Products are for informational and educational purposes only. You agree and understand that you assume all risks and no results are guaranteed. You are solely responsible for your actions, decisions and results based on the use, misuse or non-use of our Programs and Products.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Disclaimers</h2>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Medical Disclaimer</h3>
          <p>
            Our Programs and Products are not to be perceived as or relied upon in any way as medical advice or mental health advice. The information provided is not intended to be a substitute for professional medical advice, diagnosis or treatment. Do not disregard professional medical advice or delay seeking professional advice because of information from our Programs or Products. Do not start or stop taking any medications without speaking to your physician, nurse practitioner, physician assistant, or mental health provider. We are not providing health care, medical or nutrition therapy services or attempting to diagnose, treat, prevent or cure any physical ailment, or any mental or emotional issue.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Legal and Financial Disclaimer</h3>
          <p>
            Our Programs and Products are not to be perceived or relied upon as business, financial or legal advice. You are solely responsible for your results. We are not responsible for your earnings, the success or failure of your business decisions, or any other result as a consequence of our Programs or Products.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Earnings Disclaimer</h3>
          <p>
            We do not make any representations as to the health benefits, future income, or potential profitability from participation in our Programs or Products. We cannot and do not guarantee any particular result. Results differ for each individual.
          </p>

          <h3 className="font-display text-lg font-bold text-nancy-charcoal mt-6">Warranties Disclaimer</h3>
          <p className="uppercase text-xs">
            We make no warranties as to our Programs or Products. You agree that Programs and Products are provided "as is" and without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Force Majeure</h2>
          <p>
            In the event that any cause beyond our reasonable control — including acts of God/nature, war, threats or acts of terrorism, labor strikes, health or travel restrictions, quarantines, lockdowns, or other instances — make it inadvisable, illegal, or impossible for us to perform our responsibilities, we will not be liable for a reasonable period of delay or for the inability to indefinitely fulfill our responsibilities.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Errors and Omissions</h2>
          <p>
            We make no warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information in our Programs and Products. Because the nature of medical, technological and scientific research is constantly evolving, we cannot be held responsible for the accuracy of our content to the fullest extent permitted by law.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Links to Other Websites</h2>
          <p>
            We may provide links to other websites maintained by third parties. We do not endorse and are not responsible for the content of those websites. It is your responsibility to review the terms and privacy policies of linked websites to confirm that you understand and agree with their policies.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Limitation of Liability, Indemnification and Release of Claims</h2>
          <p>
            We will not be held responsible or liable for the information, products or materials that you request or receive through our Programs and Products. We do not assume liability for accidents, delays, injuries, harm, loss, damage, death, lost profits, or otherwise.
          </p>
          <p>
            You agree at all times to defend, indemnify and hold harmless our Company, affiliates, agents, contractors, officers, directors, shareholders, employees, and joint venture partners from and against any and all claims, damages, liabilities, costs and expenses arising out of or related to our Programs and Products, or your breach of these Terms of Use.
          </p>
          <p>
            In no event will we be liable to any party for any type of direct, indirect, special, incidental, equitable or consequential damages, and you hereby release us from any and all claims.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Your Conduct</h2>
          <p>You agree that you will not use our Programs and Products in any of the following ways:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For fraudulent purposes or in connection with a criminal offence or unlawful activity</li>
            <li>To send material that is illegal, offensive, abusive, defamatory, obscene, threatening, or invasive of privacy</li>
            <li>To send software viruses or harmful code</li>
            <li>To cause annoyance, inconvenience or needless anxiety</li>
            <li>To impersonate any third party</li>
            <li>To reproduce, duplicate, copy or resell any part of our Programs or Products outside of these Terms</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Purchases and Online Commerce</h2>
          <p>
            If paying by debit card or credit card, you give us permission to automatically charge your credit or debit card as payment. You agree that you are financially willing and able to invest in the Program or Product by choice, and that by so doing, you are not incurring any economic hardship.
          </p>
          <p>
            In the event that payment is not received by the date due, you will have a three (3) day grace period otherwise the Program or Product will not continue and we reserve the right to cease your access.
          </p>
          <p>
            If you fail to make payment in a timely manner or voluntarily decide to withdraw, you still will remain fully responsible for the full cost of the Programs and/or Products.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Refund Policy</h2>
          <p>
            Your satisfaction with your Program or Product is important to us. Yet, because of the extensive time, effort, preparation and care that goes into creating and/or providing our Programs and Products, we have a <strong>no refund policy</strong>. Unless otherwise provided by law, you acknowledge that we do not offer refunds for any portion of your payment. By using and/or purchasing any of our Programs and Products, you understand and agree that <strong>all sales are final</strong> and no refunds will be provided.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Termination</h2>
          <p>
            You have the right to terminate your use of or participation in our Programs or Products at any time by sending an email to{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">nancythehealthcoach@gmail.com</a>.
            We reserve the right in our sole discretion to refuse or terminate your access at any time without notice.
          </p>
          <p>
            In the event of cancellation or termination by either of us, you will have 24 hours to pay any remaining balances owed. All terms of these Terms of Use will still apply after termination.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Governing Law</h2>
          <p>
            This Agreement shall be construed according to the laws of the State of California where our principal place of business is located.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Dispute Resolution</h2>
          <p>
            Should we ever have a conflict, it is hoped that we could work it out amiably. However, if we are unable to seek resolution through good-faith negotiation within 30 days, we agree that the only method of legal dispute resolution will be binding arbitration before a single arbitrator, jointly selected by both of us, unless we both agree otherwise in writing or otherwise provided by law.
          </p>
          <p>
            You understand and agree that the only monetary damages that can be awarded through arbitration is the full refund of your payment made to date. No other financial awards of consequential damages, or any other type of damages, may be granted. Arbitration will be held in San Diego County in the State of California, and the prevailing party shall be entitled to all reasonable attorneys' fees and costs.
          </p>
          <p>
            By purchasing our Programs or Products you are agreeing to a modification of the statute of limitations such that any arbitration must be begun within one (1) year after notification of the dispute or you waive the right to seek dispute resolution.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Privacy and Confidentiality</h2>
          <p>
            Please review our full{' '}
            <button onClick={() => onNavigate('privacy-policy')} className="text-nancy-teal hover:underline">Privacy Policy</button>{' '}
            for how we handle all of your personal data and information as well as your rights around such information.
          </p>
          <p>
            All Confidential Information will be held in confidentiality and will not be disclosed to third parties, except: (1) pursuant to these Terms of Use and Privacy Policy, (2) if required by law, (3) in good-faith belief to conform to the law, (4) to comply with legal process, (5) to protect our rights or property, and/or (6) to protect the personal safety of our users or the public. We will not sell, distribute or lease your Confidential Information to third parties unless we have your permission or are required by law to do so.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Cookies</h2>
          <p>
            We may use the standard "cookies" feature of major web browsers. We do not set any Confidential Information in cookies. You may choose to disable cookies through your own web browser's settings. However, disabling this function may diminish your experience on the Website and some features may not work as intended.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Contact Us</h2>
          <p>
            If you have any questions about any term of these Terms of Use, please contact us at{' '}
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
