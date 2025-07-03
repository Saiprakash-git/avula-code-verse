
import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, PenTool, Heart } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'My Journey to Winning JPMC CodeForGood 2025',
      excerpt: 'Reflecting on the intense 24-hour hackathon experience, the challenges we faced, and how teamwork led us to victory.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Achievement',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'From Intern to Team Lead: Lessons Learned',
      excerpt: 'Sharing insights from my Android development internship and the experience of leading a team of developers.',
      date: '2024-05-20',
      readTime: '6 min read',
      category: 'Experience',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Building MyAcademia: A Learning Management System',
      excerpt: 'Deep dive into the technical challenges and solutions while developing a comprehensive LMS application.',
      date: '2024-03-10',
      readTime: '12 min read',
      category: 'Technical',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Blog & Reflections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing my journey, insights, and experiences in technology and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in group cursor-pointer`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${post.gradient} text-white rounded-full`}>
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group-hover:gap-2 gap-1">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {[
            { label: 'Articles', value: '12+', icon: BookOpen },
            { label: 'Readers', value: '500+', icon: Heart },
            { label: 'Topics', value: '8+', icon: PenTool }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg inline-block mb-4">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Subscribe to My Blog</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with my latest thoughts on technology, development practices, 
              career insights, and personal reflections on the journey of continuous learning.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="glow-button px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
