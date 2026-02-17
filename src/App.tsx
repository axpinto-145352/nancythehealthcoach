import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import AboutPreview from './components/AboutPreview';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import QuizSection from './components/QuizSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';
import BlogPreview from './components/BlogPreview';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen pb-[72px] md:pb-0">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <AboutPreview />
      <ProblemSection />
      <HowItWorks />
      <QuizSection />
      <Services />
      <Testimonials />
      <LeadCapture />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
