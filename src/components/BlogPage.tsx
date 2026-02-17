import { ArrowRight, Clock, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPageProps {
  onNavigate: (hash: string) => void;
}

const BlogPage = ({ onNavigate }: BlogPageProps) => {
  return (
    <div className="min-h-screen bg-nancy-cream">
      {/* Hero Banner */}
      <div className="bg-nancy-charcoal pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Brain Health <span className="text-nancy-teal">Insights</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Science-backed articles on brain health, nutrition, ADHD, gut health, and sugar detox — from a certified Elite Brain Health Coach.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigate(`#blog/${post.slug}`)}
              className="bg-white rounded-2xl overflow-hidden card-hover group cursor-pointer"
            >
              {/* Color banner */}
              <div className={`${post.color} h-2`} />

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center text-xs font-medium text-nancy-teal bg-nancy-teal/10 px-2.5 py-1 rounded-full">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="flex items-center text-xs text-nancy-gray-light">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold text-nancy-charcoal mb-3 group-hover:text-nancy-teal transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-nancy-gray leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-nancy-gray-light">
                    {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="inline-flex items-center text-sm font-semibold text-nancy-teal group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('#')}
            className="inline-flex items-center text-nancy-teal hover:text-nancy-teal-light font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
