import { useEffect } from 'react';

interface HeadOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
}

const DEFAULT_TITLE = 'Nancy The Health Coach — Brain Health Coaching for Busy Professionals';
const DEFAULT_DESC = 'Nancy Ryan — Brain Health Coach in San Diego. Helping busy professionals with ADHD, brain fog, and sugar addiction reclaim their focus through science-backed nutrition coaching. Amen University Certified.';

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useDocumentHead({ title, description, canonicalPath, ogType = 'website' }: HeadOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = window.location.origin + canonicalPath;
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('name', 'description', DEFAULT_DESC);
      setMeta('property', 'og:title', DEFAULT_TITLE);
      setMeta('property', 'og:description', DEFAULT_DESC);
      setMeta('property', 'og:type', 'website');
      setMeta('name', 'twitter:title', DEFAULT_TITLE);
      setMeta('name', 'twitter:description', DEFAULT_DESC);
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.remove();
    };
  }, [title, description, canonicalPath, ogType]);
}
