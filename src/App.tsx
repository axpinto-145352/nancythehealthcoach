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
import { JsonLd } from './components/JsonLd';

type Route =
  | { page: 'home' }
  | { page: 'blog-page' }
  | { page: 'blog-post'; slug: string }
  | { page: 'starter-kit' };

const BASE = import.meta.env.BASE_URL;

function parseRoute(pathname: string): Route {
  let path = pathname;
  if (path.startsWith(BASE)) {
    path = path.slice(BASE.length);
  }
  path = path.replace(/^\/|\/$/g, '');

  if (path === 'blog') return { page: 'blog-page' };
  if (path === 'starter-kit') return { page: 'starter-kit' };
  if (path.startsWith('blog/')) {
    const slug = path.slice(5);
    if (slug) return { page: 'blog-post', slug };
    return { page: 'blog-page' };
  }
  return { page: 'home' };
}

function App() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (target: string) => {
    if (target.startsWith('#')) {
      // Section anchor on homepage
      if (route.page !== 'home') {
        window.history.pushState({}, '', BASE);
        setRoute({ page: 'home' });
        setTimeout(() => {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === '') {
      window.history.pushState({}, '', BASE);
      setRoute({ page: 'home' });
      window.scrollTo(0, 0);
    } else {
      window.history.pushState({}, '', BASE + target);
      setRoute(parseRoute(BASE + target));
      window.scrollTo(0, 0);
    }
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
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'HealthBusiness',
        name: 'Nancy The Health Coach',
        description: 'Brain health coaching for busy professionals. Helping you reclaim focus, energy, and clarity through science-backed nutrition strategies.',
        url: window.location.origin + BASE,
        founder: {
          '@type': 'Person',
          name: 'Nancy Ryan, EBHCC',
          jobTitle: 'Elite Brain Health Coach Certified - Amen University',
        },
        areaServed: { '@type': 'Country', name: 'United States' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'San Diego',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
      }} />
    </div>
  );
}

export default App;
