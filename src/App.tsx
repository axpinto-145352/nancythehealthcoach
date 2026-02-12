import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AboutPreview from './components/AboutPreview';
import LeadCapture from './components/LeadCapture';
import BlogPreview from './components/BlogPreview';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <Services />
      <HowItWorks />
      <Testimonials />
      <AboutPreview />
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
