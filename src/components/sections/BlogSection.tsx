
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const featuredPost = {
    title: 'My Journey to Winning JPMC CodeForGood 2025',
    excerpt: 'Reflecting on the intense 24-hour hackathon experience, the challenges we faced, and how teamwork led us to victory.',
    date: '2025-06-28',
    readTime: '5 min read',
    category: 'Achievement',
    gradient: 'from-yellow-500 to-orange-500',
    link: 'https://www.linkedin.com/posts/saiprakash001_codeforgood-jpmorganchase-hackathonwinner-activity-7345456153046269954-hKAu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsIQMkBdx0gDaz_y2aQYOQ4hHcUtgUbdlY'
  };

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

        {/* Featured Blog Post */}
        <div className="max-w-4xl mx-auto">
          <article className="glass rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in group cursor-pointer">
            <div className="mb-6">
              <span className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${featuredPost.gradient} text-white rounded-full`}>
                Featured • {featuredPost.category}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-purple-400 transition-colors duration-300">
              {featuredPost.title}
            </h3>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>
            </div>

            <a 
              href={featuredPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-purple-400 hover:text-purple-300 font-medium text-lg transition-colors duration-300 group-hover:gap-3 gap-2"
            >
              Read Full Story
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
