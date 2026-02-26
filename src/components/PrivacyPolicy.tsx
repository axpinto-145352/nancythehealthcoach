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

        <h1 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
          Privacy Policy
        </h1>

        <p className="text-nancy-charcoal/60 text-sm mb-8">Please read this Privacy Policy carefully before using this Website.</p>

        <div className="prose prose-gray max-w-none text-nancy-charcoal/80 space-y-6 text-sm leading-relaxed">

          {/* ── Privacy Policy Consent ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Privacy Policy Consent</h2>
          <p>
            The Website and its Content is owned by Nancy Ryan ("Company", "we", or "us"). The term "you" refers to the user or viewer of our Website ("Website").
          </p>
          <p>
            This Privacy Policy outlines the types of information we gather about you while using the Website and the ways in which we use this information. It describes how we collect, use, process and distribute your information, including Personal Data (as defined below) used to access this Website. We will not use or share your information with anyone except as described in this Privacy Policy. The use of information collected through our Website shall be limited to the purposes under this Privacy Policy, and also our Terms of Use or other contracts if you're a client or customer.
          </p>
          <p>
            Please read this Privacy Policy carefully. Because the internet/web is an evolving medium, we may need to change our Privacy Policy at some point in the future. We reserve the right to change this Privacy Policy on the Website at any time without notice. In the event of a material (important) change, we will let you know via email and/or a prominent notice on our Website and we'll update the Effective Date of this policy to reflect the date of the changes. By continuing to use the Website after we post such changes, you accept the Privacy Policy as modified.
          </p>
          <p>
            Use of any personal information or contribution that you provide to us, or which is collected by us on or through our Website or its content is governed by this Privacy Policy. By using our Website or its content, you consent to this Privacy Policy, whether or not you have read it.
          </p>

          {/* ── Information We May Collect ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Information We May Collect</h2>
          <p>
            We collect personal information from you so that we can provide you with a positive experience when utilizing our Website or content. We will only collect the minimum amount of information necessary for us to fulfill our obligation to you. We may collect your:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and an email address so we can deliver our newsletter to you — you would be affirmatively consenting to this by providing this information to us in our contact forms.</li>
            <li>Billing information including name, address and credit card information so that we can process payment to deliver our products or services to you under our contractual obligation.</li>
            <li>Name and an email address if you complete our contact form with a question. We may send you marketing emails with either your consent or if we believe we have a legitimate interest to contact you based on your contact or question.</li>
            <li>Information from you from a co-branded offer. In this case, we will make clear as to who is collecting the information and whose privacy policy applies. If both / all parties are retaining the information you provide, this will also be made clear, as will links to all privacy policies.</li>
          </ul>
          <p>
            Please note that the information above ("Personal Data") that you are giving to us is voluntarily, and by providing this information to us you are giving consent for us to use, collect and process this Personal Data. You are welcome to opt-out or request for us to delete your Personal Data at any point by contacting us at{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">nancythehealthcoach@gmail.com</a>.
          </p>
          <p>
            If you choose not to provide us with certain Personal Data, you may not be able to participate in certain aspects of our Website or Content.
          </p>

          {/* ── Other Information We May Collect ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Other Information We May Collect</h2>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Anonymous Data Collection and Use</h3>
          <p>
            To maintain our Website's high quality, we may use your IP address to help diagnose problems with our server and to administer the Website by identifying which areas of the Website are most heavily used, and to display content according to your preferences. Your IP address is the number assigned to computers connected to the Internet. This is essentially "traffic data" which cannot personally identify you but is helpful to us for marketing purposes and for improving our services. Traffic data collection does not follow a user's activities on any other websites in any way. Anonymous traffic data may also be shared with business partners and advertisers on an aggregate basis.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Use of "Cookies"</h3>
          <p>
            We may use the standard "cookies" feature of major web browsers. We do not set any personally identifiable information in cookies, nor do we employ any data-capture mechanisms on our Website other than cookies. You may choose to disable cookies through your own web browser's settings. However, disabling this function may diminish your experience on our Website and some features may not work as intended.
          </p>

          {/* ── What We Do with Information We Collect ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">What We Do with Information We Collect</h2>
          <p>
            We also collect and store information that is generated as you navigate the Website in a variety of ways. Unless you inform us that you do not want to have your information used for these purposes, we reserve the right to use all of the information collected from and about you for any purpose, including those listed below. If you do not want us to use your information for any or all of these purposes, you must contact us by email and state your specific request by contacting us at{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">nancythehealthcoach@gmail.com</a>.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Contact You</h3>
          <p>We may contact you with information that you provide to us based on these lawful grounds for processing:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent.</strong> We may contact you if you give us your clear, unambiguous, affirmative consent to contact you.</li>
            <li><strong>Contract.</strong> We will contact you under our contractual obligation to deliver goods or services you purchase from us.</li>
            <li><strong>Legitimate Interest.</strong> We may contact you if we feel you have a legitimate interest in hearing from us. For example, if you sign up for a webinar, we may send you marketing emails based on the content of that webinar. You will always have the option to opt out of any of our emails.</li>
          </ul>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Process Payments</h3>
          <p>
            We will use the Personal Data you give to us in order to process your payment for the purchase of goods or services under a contract. We only use third party payment processors that take the utmost care in securing data and comply with the GDPR.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Targeted Social Media Advertisements</h3>
          <p>
            We may use the data you provide to us to run social media advertisements and/or create look-alike audiences for advertisements.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Share with Third Parties</h3>
          <p>
            We may share your information with trusted third parties such as our newsletter provider in order to contact you via email, or our merchant accounts to process payments, and Google / social media accounts in order to run advertisements and our affiliates.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Viewing by Others</h3>
          <p>
            Note that whenever you voluntarily make your Personal Data available for viewing by others online through this Website or its content, it may be seen, collected and used by others, and therefore, we cannot be responsible for any unauthorized or improper use of the information that you voluntarily share (i.e., sharing a comment on a blog post, posting in a Facebook group that we manage, sharing details on a group coaching call, etc.).
          </p>

          {/* ── Submission, Storage, Sharing and Transferring ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Submission, Storage, Sharing and Transferring of Personal Data</h2>
          <p>
            Personal Data that you provide to us is stored internally or through a data management system. Your Personal Data will only be accessed by those who help to obtain, manage or store that information, or who have a legitimate need to know such Personal Data (i.e., our hosting provider, newsletter provider, payment processors or team members).
          </p>
          <p>
            It is important to note that we may transfer data internationally. For users in the European Union, please be aware that we transfer Personal Data outside of the European Union. By using our Website and providing us with your Personal Data, you consent to these transfers in accordance with this Privacy Policy.
          </p>

          <h3 className="font-display text-lg font-semibold text-nancy-charcoal mt-6">Data Retention</h3>
          <p>
            We retain your Personal Data for the minimum amount of time necessary to provide you with the information and/or services that you requested from us. We may include certain Personal Data for longer periods of time if it's necessary for legal, contractual and accounting obligations.
          </p>

          {/* ── Confidentiality ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Confidentiality</h2>
          <p>
            We aim to keep the Personal Data that you share with us confidential. Please note that we may disclose such information if required to do so by law or in the good-faith belief that: (1) such action is necessary to protect and defend our property or rights or those of our users or licensees, (2) to act as immediately necessary in order to protect the personal safety or rights of our users or the public, or (3) to investigate or respond to any real or perceived violation of this Privacy Policy or of our Website Disclaimer, Terms and Conditions, or any other Terms of Use or agreement with us.
          </p>

          {/* ── Passwords ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Passwords</h2>
          <p>
            To use certain features of the Website or its content, you may need a username and password. You are responsible for maintaining the confidentiality of the username and password, and you are responsible for all activities, whether by you or by others, that occur under your username or password and within your account. We cannot and will not be liable for any loss or damage arising from your failure to protect your username, password or account information. If you share your username or password with others, they may be able to obtain access to your Personal Data at your own risk.
          </p>
          <p>
            You agree to notify us immediately of any unauthorized or improper use of your username or password or any other breach of security. To help protect against unauthorized or improper use, make sure that you log out at the end of each session requiring your username and password.
          </p>
          <p>
            We will use our best efforts to keep your username and password(s) private and will not otherwise share your password(s) without your consent, except as necessary when the law requires it or in the good faith belief that such action is necessary, particularly when disclosure is necessary to identify, contact or bring legal action against someone who may be causing injury to others or interfering with our rights or property.
          </p>

          {/* ── Your Rights ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">How You Can Access, Update or Delete Your Personal Data</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request information about how your Personal Data is being used and request a copy of what Personal Data we use.</li>
            <li>Restrict processing if you think the Personal Data is not accurate, unlawful, or no longer needed.</li>
            <li>Rectify or erase Personal Data and receive confirmation of the rectification or erasure. (You have the "right to be forgotten").</li>
            <li>Withdraw your consent at any time to the processing of your Personal Data.</li>
            <li>Lodge a complaint with a supervisory authority if you feel we are using your Personal Data unlawfully.</li>
            <li>Receive Personal Data portability and transference to another controller without our hindrance.</li>
            <li>Object to our use of your Personal Data.</li>
            <li>Not be subject to an automated decision based solely on automatic processing, including profiling, which legally or significantly affects you.</li>
          </ul>

          {/* ── Unsubscribe ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Unsubscribe</h2>
          <p>
            You may unsubscribe from our e-newsletters or updates at any time through the unsubscribe link at the footer of all email communications. If you have questions or are experiencing problems unsubscribing, please contact us at{' '}
            <a href="mailto:nancythehealthcoach@gmail.com" className="text-nancy-teal hover:underline">nancythehealthcoach@gmail.com</a>.
          </p>

          {/* ── Security ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Security</h2>
          <p>
            We take commercially reasonable steps to protect your Personal Data from misuse, disclosure or unauthorized access. We only share your Personal Data with trusted third parties who use the same level of care in processing your Personal Data as we do. That being said, we cannot guarantee that your Personal Data will always be secure due to technology or security breaches. Should there be a data breach of which we are aware, we will inform you immediately.
          </p>

          {/* ── Anti-Spam ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Anti-Spam Policy</h2>
          <p>
            We have a no spam policy and provide you with the ability to opt-out of our communications by selecting the unsubscribe link at the footer of all e-mails. We have taken the necessary steps to ensure that we are compliant with the CAN-SPAM Act of 2003 by never sending out misleading information. We will not sell, rent or share your email address.
          </p>

          {/* ── Third Party Websites ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Third Party Websites</h2>
          <p>
            We may link to other websites on our Website. We have no responsibility or liability for the content and activities of any other individual, company or entity whose website or materials may be linked to our Website or its content, and thus we cannot be held liable for the privacy of the information on their website or that you voluntarily share with their website. Please review their privacy policies for guidelines as to how they respectively store, use and protect the privacy of your Personal Data.
          </p>

          {/* ── Google Analytics ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Google Analytics</h2>
          <p>
            We may use Google Analytics Advertiser feature to support our business. By enabling any or all Google Analytics features, we are required to notify you that we are using these features, that we and other third-party vendors use first-party identifier features like the Google Analytics cookie or DoubleClick cookie or other identifiers to gather data about your activities on the Website. This allows us to contact you if you are placing an order and you "abandon" your cart or to "remarket" to you with an appropriate advertising or marketing effort. If you wish to opt out of Google's use of cookies, you can do that through Google's ad settings and if you wish to opt out of third-party vendors' cookies, you can do that through their websites.
          </p>

          {/* ── Social Media Ads ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Social Media Ads</h2>
          <p>
            We may use social media ads to support our business. By using social media ads, we may collect information from you and use your information according to this Privacy Policy. We abide by the data use requirements and restrictions of social media companies, and we use this data on an aggregate and anonymous basis to assess the performance and effectiveness of our social media ads. Any personally identifying information that we collect may be used with our service providers, but they must limit the use of that information and keep it secure and confidential. We do not sell or share this information or our social media data with any ad networks, exchanges, data brokers or other advertisers.
          </p>

          {/* ── CCPA ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">California Consumer Privacy Act (CCPA)</h2>
          <p>
            The CCPA became effective on January 1, 2020. Its purpose is to protect the personally-identifying information of California residents. The CCPA only applies to businesses with an annual gross revenue of $25 million or who buy, sell or receive personal information of over 50,000 households or consumers or earn more than half of their annual revenue from selling personal information. We do not meet any of these qualifications; therefore, the CCPA does not apply to us.
          </p>

          {/* ── COPPA ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Children's Online Privacy Protection Act Compliance</h2>
          <p>
            We do not collect any information from anyone under 18 years of age in compliance with COPPA (Children's Online Privacy Protection Act) and the GDPR (General Data Protection Regulation of the EU). Our Website and its content is directed to individuals who are at least 18 years old or older.
          </p>

          {/* ── Notification of Changes ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Notification of Changes</h2>
          <p>
            We may use your Personal Data, such as your contact information, to inform you of changes to the Website or its content, or, if requested, to send you additional information about us. We reserve the right, at our sole discretion, to change, modify or otherwise alter our Website, its content and this Privacy Policy at any time. Such changes and/or modifications shall become effective immediately upon posting our updated Privacy Policy. Please review this Privacy Policy periodically. Continued use of any information obtained through or on the Website or its content following the posting of changes and/or modifications constitutes acceptance of the revised Privacy Policy. Should there be a material change to our Privacy Policy, we will contact you via email or by a prominent note on our Website.
          </p>

          {/* ── Data Controllers and Processors ── */}
          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Data Controllers and Processors</h2>
          <p>
            We are the data controllers as we are collecting and using your Personal Data. We use trusted third parties as our data processors for technical and organizational purposes, including for payments and email marketing. We use reasonable efforts to make sure our data processors are GDPR-compliant.
          </p>

          {/* ── Contact ── */}
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
