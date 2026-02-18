import { ArrowLeft, ArrowRight, Clock, Tag, User, Calendar } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { JsonLd } from './JsonLd';

interface BlogPostProps {
  slug: string;
  onNavigate: (target: string) => void;
}

const BlogPost = ({ slug, onNavigate }: BlogPostProps) => {
  const post = getPostBySlug(slug);
  const BASE = import.meta.env.BASE_URL;

  useDocumentHead(post ? {
    title: `${post.title} | Nancy The Health Coach`,
    description: post.metaDescription,
    canonicalPath: `${BASE}blog/${post.slug}`,
    ogType: 'article',
  } : {
    title: 'Article Not Found | Nancy The Health Coach',
    description: 'The article you are looking for does not exist.',
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-nancy-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-nancy-charcoal mb-4">Article Not Found</h1>
          <p className="text-nancy-gray mb-6">The article you're looking for doesn't exist.</p>
          <button onClick={() => onNavigate('blog')} className="btn-primary">
            View All Articles
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="flex items-start text-nancy-charcoal leading-relaxed">
                <span className="text-nancy-teal mr-2 mt-1.5 flex-shrink-0">&#8226;</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const formatInline = (text: string): string => {
      return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-nancy-teal hover:underline">$1</a>');
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-nancy-charcoal mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={i} className="font-display text-xl md:text-2xl font-bold text-nancy-charcoal mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.slice(2));
      } else if (trimmed === '') {
        flushList();
      } else {
        flushList();
        elements.push(
          <p
            key={i}
            className="text-nancy-charcoal leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-nancy-cream">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishDate,
        dateModified: post.updatedDate,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorCredentials,
          url: window.location.origin + BASE,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Nancy The Health Coach',
          url: window.location.origin + BASE,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': window.location.origin + BASE + 'blog/' + post.slug,
        },
        keywords: post.keywords.join(', '),
        wordCount: post.content.split(/\s+/).length,
        articleSection: post.category,
      }} />

      {/* Article Header */}
      <div className="bg-nancy-charcoal pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            All Articles
          </button>

          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center text-xs font-medium text-nancy-teal bg-nancy-teal/20 px-2.5 py-1 rounded-full">
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </span>
            <span className="flex items-center text-xs text-gray-400">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1.5" />
              {post.author}, {post.authorCredentials.split(',')[0]}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5" />
              {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Excerpt callout */}
        <div className="bg-nancy-sage rounded-xl p-6 mb-10 border-l-4 border-nancy-teal">
          <p className="text-nancy-charcoal font-medium italic text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Article body */}
        <div className="prose-nancy">
          {renderMarkdown(post.content)}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-br from-nancy-teal to-nancy-teal-light rounded-2xl p-8 text-center text-white">
          <h3 className="font-display text-2xl font-bold mb-3">
            Ready to Transform Your Brain Health?
          </h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Book a free consultation with Nancy and get a personalized brain health plan tailored to your unique needs.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-nancy-teal px-6 py-3 rounded-xl font-semibold hover:bg-nancy-cream transition-colors"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-6 flex items-start space-x-4">
          <img
            src={`${import.meta.env.BASE_URL}nancy-headshot.png`}
            alt="Nancy Ryan"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h4 className="font-display font-bold text-nancy-charcoal">Nancy Ryan, EBHCC</h4>
            <p className="text-sm text-nancy-teal font-medium mb-2">{post.authorCredentials}</p>
            <p className="text-sm text-nancy-gray leading-relaxed">
              Nancy helps busy professionals reclaim focus, energy, and mental clarity through science-backed
              brain health coaching. Based in San Diego with virtual sessions available nationwide.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-nancy-charcoal mb-8 text-center">
              Keep Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  onClick={() => onNavigate(`blog/${related.slug}`)}
                  className="bg-nancy-cream rounded-2xl overflow-hidden card-hover group cursor-pointer"
                >
                  <div className={`${related.color} h-2`} />
                  <div className="p-6">
                    <span className="inline-flex items-center text-xs font-medium text-nancy-teal bg-nancy-teal/10 px-2.5 py-1 rounded-full mb-3">
                      <Tag className="h-3 w-3 mr-1" />
                      {related.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-nancy-charcoal mb-2 group-hover:text-nancy-teal transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center text-sm font-semibold text-nancy-teal group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
