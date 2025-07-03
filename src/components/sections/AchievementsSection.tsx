
import React from 'react';
import { Trophy, Award, Star, GraduationCap, Target, Medal } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'Winner, JPMC CodeForGood 2025',
      description: 'Developed a comprehensive solution for NGO "Reaching Roots" featuring digital forms, analytics dashboards, and AI chatbot within 24 hours',
      icon: Trophy,
      gradient: 'from-yellow-500 to-orange-500',
      category: 'Competition',
      highlight: 'Winner'
    },
    {
      title: 'State-level Rank 146 in TS ECET 2024',
      description: 'Achieved exceptional performance in Telangana State Engineering Common Entrance Test, ranking among top performers statewide',
      icon: Target,
      gradient: 'from-blue-500 to-purple-500',
      category: 'Academic',
      highlight: 'Rank 146'
    },
    {
      title: 'Academic Excellence in Diploma',
      description: 'Maintained outstanding academic performance throughout diploma program with consistent high grades',
      icon: GraduationCap,
      gradient: 'from-green-500 to-emerald-500',
      category: 'Academic',
      highlight: 'GPA: 9.47/10.0'
    },
    {
      title: 'MongoDB Associate Developer Certification',
      description: 'Successfully completed MongoDB University certification program, demonstrating proficiency in NoSQL database management',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500',
      category: 'Certification',
      highlight: 'Certified'
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in development, academics, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in group relative overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} shadow-lg flex-shrink-0`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${achievement.gradient} text-white rounded-full`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className={`px-4 py-2 bg-gradient-to-r ${achievement.gradient} text-white text-sm font-semibold rounded-full`}>
                    {achievement.highlight}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    Featured
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Competitions Won', value: '1+', icon: Medal },
            { label: 'Certifications', value: '1+', icon: Award },
            { label: 'GPA Achieved', value: '9.47/10', icon: GraduationCap },
            { label: 'State Rank', value: '146', icon: Target }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-semibold">Continuous Growth</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              These achievements represent my commitment to excellence and continuous learning. 
              I strive to push boundaries, tackle challenging problems, and contribute meaningfully 
              to every project and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
