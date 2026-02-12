import { ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPreview = () => {
  const posts = [
    {
      title: 'What Is a Brain Health Coach? And Do You Need One?',
      excerpt: "If you've never heard of brain health coaching, you're not alone. But here's why it might be exactly what your brain is asking for.",
      category: 'Brain Health',
      readTime: '7 min read',
      color: 'bg-nancy-teal',
    },
    {
      title: 'The ADHD-Sugar Connection: How Cutting Sugar Changed My Clients\' Focus',
      excerpt: "Sugar isn't just bad for your waistline — it's hijacking your dopamine system. Here's what happened when my clients quit.",
      category: 'ADHD & Nutrition',
      readTime: '6 min read',
      color: 'bg-nancy-coral',
    },
    {
      title: 'Gut-Brain Connection 101: Why Your Stomach Is Your Second Brain',
      excerpt: "That gut feeling? It's not just a metaphor. Your gut and brain are in constant communication — and most people's lines are scrambled.",
      category: 'Gut Health',
      readTime: '8 min read',
      color: 'bg-nancy-gold',
    },
  ];

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

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
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

                <p className="text-sm text-nancy-gray leading-relaxed mb-4">
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
      </div>
    </section>
  );
};

export default BlogPreview;
