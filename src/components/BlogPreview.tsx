import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPreviewProps {
  onNavigate?: (hash: string) => void;
}

const BlogPreview = ({ onNavigate }: BlogPreviewProps) => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-nancy-charcoal mb-4">
            Brain Health Insights
          </h2>
          <p className="text-lg text-nancy-gray">
            Science-backed articles to start improving your brain health today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigate?.(`blog/${post.slug}`)}
              className="bg-nancy-cream rounded-2xl overflow-hidden card-hover group cursor-pointer"
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

                <h3 className="font-display text-lg font-bold text-nancy-charcoal mb-3 group-hover:text-nancy-teal transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-nancy-gray leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center text-sm font-semibold text-nancy-teal group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Link */}
        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate?.('blog')}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
