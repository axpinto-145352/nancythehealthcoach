import { useEffect } from 'react';

interface DisclaimersProps {
  onNavigate: (target: string) => void;
}

const Disclaimers = ({ onNavigate }: DisclaimersProps) => {
  useEffect(() => {
    document.title = 'Disclaimers — Nancy The Health Coach';
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
          Disclaimer
        </h1>

        <div className="prose prose-gray max-w-none text-nancy-charcoal/80 space-y-6 text-sm leading-relaxed">
          <p>
            The website is owned by Nancy Ryan (subsequently referred to as "we" or "us") throughout this document.
          </p>
          <p>
            By viewing this website or anything made available on or through this website, including but not limited to programs, products, services, opt-in gifts, videos, audios, webinars, blog posts, e-newsletters, social media and/or other communication (collectively and subsequently referred to as "Website"), you are agreeing to accept all parts of this Disclaimer. Thus, if you do not agree to the Disclaimer below, STOP now, and do not access or use this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">For Educational and Informational Purposes Only</h2>
          <p>
            The information provided in or through this Website is for educational and informational purposes only and solely as a self-help tool for your own use.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Not Medical, Mental Health, or Religious Advice</h2>
          <p>
            We are not, nor are we holding ourselves out to be doctors/physicians, nurses, physician's assistants, advance practice nurses, or any other medical professionals ("Medical Practitioners"), psychiatrists, psychologists, therapists, counselors, or social workers ("Mental Health Practitioners"), registered dieticians or licensed nutritionists, or members of the clergy. We are not providing health care, medical nutritional therapy services, or attempting to diagnose, treat, prevent or cure any physical, mental or emotional issue, disease or condition through this Website. The information provided in or through this Website pertaining to your own health or wellness, exercise, relationships, business/career choices, finances, or any other aspect of your life is not intended to be a substitute for the professional medical advice, diagnosis or treatment provided by your own Medical Practitioner or Mental Health Practitioner. You agree and acknowledge that we are not providing medical advice, mental health advice, or religious advice in any way. Always seek the advice of your own Medical Practitioner and/or Mental Health Practitioner regarding any questions or concerns you have about your specific health or any medications, herbs or supplements you are currently taking and before implementing any recommendations or suggestions from this Website. Do not disregard medical advice or delay seeking medical advice because of information you have read on this Website. Do not start or stop taking any medications without speaking to your own Medical Practitioner or Mental Health Practitioner. If you have or suspect that you have a medical or mental health problem, contact your own Medical Practitioner or Mental Health Practitioner promptly. The information contained on this Website has not been evaluated by the Food and Drug Administration.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Not Legal or Financial Advice</h2>
          <p>
            We are not attorneys, accountants or financial advisors, nor are we holding ourselves out to be. The information contained in this Website is not intended to be a substitute for legal or financial advice that can be provided by your own attorney, accountant, and/or financial advisor. Although care has been taken in preparing the information provided to you, always seek financial and/or legal counsel relating to your specific circumstances as needed for any and all questions and concerns you now have, or may have in the future, regarding your legal and/or financial situation. You agree that the information provided on or through our Website is not legal or financial advice.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Personal Responsibility</h2>
          <p>
            You aim to accurately represent the information provided to us on or through our Website. You recognize that the content shared on or through our Website is purely informational and/or educational and is not meant to replace your own judgment or the judgment of licensed professionals. You agree to use your own judgment and due diligence before implementing any idea, suggestion or recommendation from this Website to your life, family or business, or in any other manner. You accept full responsibility for the consequences of your use, non-use, or misuse of any information provided on or through this Website. You acknowledge that you are participating voluntarily in using our Website and that you are solely and personally responsible for your choices, actions and results, now and in the future, regardless of what you have read or learned on or through this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">No Guarantees</h2>
          <p>
            This Website is designed to provide you with information and/or education to support and assist you in reaching your own goals, but your success depends primarily on your own effort, motivation, commitment and follow-through. We cannot predict and we do not guarantee that you will attain a particular result using the tools and information provided on or through this Website, and you accept and understand that results differ for each individual. Each individual's results depend on his/her/their unique background, dedication, desire, motivation, actions, and numerous other factors. You fully agree that there are no guarantees as to the specific outcome or results you can expect from using the information you receive on or through this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Earnings Disclaimer</h2>
          <p>
            There can be no assurance as to any particular financial outcome based on the use of our Website. Any earnings or income statements or examples shown through our Website are only estimates of what might be possible now or in the future. You agree that the information shared through this Website is not responsible for your earnings, the success or failure of your personal or business decisions, the increase or decrease of your finances or income level, or any other result of any kind that you may have as a result of information and/or education presented to you on or through our Website. You are solely responsible for your results.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Testimonials</h2>
          <p>
            We share real world experiences, testimonials, and insights about other people's experiences on or through this Website for purposes of illustration only. The testimonials, examples, and photos used are of actual clients and results they personally achieved, or they are comments from individuals who can speak to our character and/or the quality of our work. They are not intended to represent or guarantee that current or future clients will achieve the same or similar results; rather, these testimonials represent what is possible for illustrative purposes only.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Assumption of Risk</h2>
          <p>
            As with all situations, there are sometimes unknown individual risks and circumstances that can arise during use of the content provided on or through this Website that cannot be foreseen that can influence or reduce results. You understand that any mention of any suggestion or recommendation on or through this Website is to be taken at your own risk, recognizing that there is a rare chance that illness, injury or even death could result, and you agree to fully assume all risks.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Limitation of Liability</h2>
          <p>
            By using this Website, you agree to absolve me of any liability or loss that you or any other person may incur from use of the information or content provided on or through this Website, and programs, products, services, or materials that you request or receive through or on this Website. You agree that we will not be liable to you, or to any other individual, company or entity, for any type of damages, including direct, indirect, special, incidental, equitable or consequential loss or damages, for use of or reliance on the content provided on or through this Website. You agree that we do not assume liability for accidents, delays, injuries, harm, loss, damage, death, lost profits, personal or business interruptions, misapplication of information, physical or mental disease or condition or issue, or any other type of loss or damage due to any act or default by us or anyone acting as our employee, agent, consultant, affiliate, joint venture partner, member, manager, shareholder, director, staff or team member, or anyone otherwise affiliated with our business, who is engaged in any manner to deliver content on or through this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Indemnification and Release of Claims</h2>
          <p>
            You hereby fully and completely hold harmless, indemnify and release us and any of our employees, agents, consultants, affiliates, joint venture partners, members, managers, shareholders, directors, staff or team members, or anyone otherwise affiliated with my business or me from any and all causes of action, allegations, suits, claims, damages, or demands whatsoever, in law or equity, that may arise in the past, present or future that is in any way related to the content or information provided on or through this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">No Warranties</h2>
          <p className="uppercase">
            We make no warranties related to the performance or operation of my website. We make no representations or warranties of any kind, express or implied, as to the information, content, materials, programs, products or services included on or through this website. To the fullest extent permissible by applicable law, we disclaim all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Errors and Omissions</h2>
          <p>
            Although every effort is made to ensure the accuracy of information shared on or through this Website, the information may inadvertently contain inaccuracies or typographical errors. You agree that we are not responsible for the views, opinions, or accuracy of facts referenced on or through this Website, or of those of any other individual or company affiliated with my business or us in any way. Because scientific, medical, technological and business practices are constantly evolving, you agree that we are not responsible for the accuracy of my Website, or for any errors or omissions that may occur.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">No Endorsement</h2>
          <p>
            References or links on or through this Website to the information, opinions, advice, programs, products or services of any other individual, business or entity does not constitute our formal endorsement. We are merely sharing information for your own self-help only. We are not responsible for the website content, blogs, e-mails, videos, social media, programs, products and/or services of any other person, business or entity that may be linked or referenced on or through this Website. Conversely, should our Website link appear in any other individual's, business's or entity's website, program, product or services, it does not constitute our formal endorsement of them, their business or their website either.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Affiliates</h2>
          <p>
            From time to time, we may promote, affiliate with, or partner with other individuals or businesses whose programs, products and services align with ours. In the spirit of transparency, you understand and agree that there may be instances when we promote, market, share or sell programs, products or services for other partners and in exchange we will receive financial compensation or other rewards. Please note that we are highly selective and only promote the partners whose programs, products and/or services we respect. At the same time, you agree that any such promotion or marketing does not serve as any form of endorsement whatsoever. You are still required to use your own judgment and due diligence to determine that any such program, product or service is appropriate for you, your family and/or your business. You are assuming all risks, and you agree that we are not liable in any way for any program, product or service that we may promote, market, share or sell on or through this Website.
          </p>

          <h2 className="font-display text-xl font-bold text-nancy-charcoal mt-8">Contacting Us</h2>
          <p>
            By using this Website you are agreeing to all parts of the above Disclaimer. If you have any questions about this Disclaimer, please contact us at{' '}
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

export default Disclaimers;
