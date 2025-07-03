import React from 'react';
import { Code, Database, Smartphone, Settings, Users, Lightbulb } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'Python', 'SQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Development',
      icon: Database,
      skills: ['HTML', 'CSS', 'JavaScript', 'Flask'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Android Development', 'Java', 'Android Studio'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['GitHub', 'VS Code', 'MySQL', 'SQLite'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Problem Solving', 'Communication'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass hover:bg-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${(index * 150) + (skillIndex * 100)}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-semibold">Always Learning</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
