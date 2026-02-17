import { useState, useEffect } from 'react';
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
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import StarterKit from './components/StarterKit';

type Route =
  | { page: 'home' }
  | { page: 'blog-page' }
  | { page: 'blog-post'; slug: string }
  | { page: 'starter-kit' };

function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, '');
  if (h === 'blog-page') return { page: 'blog-page' };
  if (h === 'starter-kit') return { page: 'starter-kit' };
  if (h.startsWith('blog/')) {
    const slug = h.slice(5);
    if (slug) return { page: 'blog-post', slug };
    return { page: 'blog-page' };
  }
  return { page: 'home' };
}

function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);
      // Only scroll to top for page navigations, not section anchors
      if (newRoute.page !== 'home') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (hash: string) => {
    window.location.hash = hash;
  };

  if (route.page === 'blog-page') {
    return (
      <div className="min-h-screen">
        <Navbar onNavigate={navigate} />
        <BlogPage onNavigate={navigate} />
        <Footer onNavigate={navigate} />
      </div>
    );
  }

  if (route.page === 'blog-post') {
    return (
      <div className="min-h-screen">
        <Navbar onNavigate={navigate} />
        <BlogPost slug={route.slug} onNavigate={navigate} />
        <Footer onNavigate={navigate} />
      </div>
    );
  }

  if (route.page === 'starter-kit') {
    return (
      <div className="min-h-screen">
        <Navbar onNavigate={navigate} />
        <StarterKit onNavigate={navigate} />
        <Footer onNavigate={navigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-[72px] md:pb-0">
      <Navbar onNavigate={navigate} />
      <Hero />
      <SocialProofBar />
      <AboutPreview />
      <ProblemSection />
      <HowItWorks />
      <QuizSection />
      <Services />
      <Testimonials />
      <LeadCapture onNavigate={navigate} />
      <BlogPreview onNavigate={navigate} />
      <FAQ />
      <FinalCTA />
      <Footer onNavigate={navigate} />
      <StickyCTA />
    </div>
  );
}

export default App;
