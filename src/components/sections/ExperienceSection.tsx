
import React from 'react';
import { Building, Calendar, MapPin, Users, Code, Trophy } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experience = {
    role: 'Android Developer Intern',
    company: 'Crimson Innovative Technologies',
    location: 'Hyderabad, Telangana',
    duration: 'Dec 2023 – Apr 2024',
    description: 'Worked on "Cable Billing Application" for billing services using Android Studio, Java, SQLite, and GitHub. Led a team of 4 to ensure timely completion of project milestones.',
    achievements: [
      'Developed a comprehensive Cable Billing Application from scratch',
      'Implemented SQLite database for efficient data management',
      'Led a team of 4 developers to meet project deadlines',
      'Utilized Android Studio and Java for robust mobile development',
      'Integrated GitHub for version control and collaborative development'
    ],
    technologies: ['Android Studio', 'Java', 'SQLite', 'GitHub', 'XML', 'Gradle']
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building real-world solutions and leading development teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Experience Header */}
              <div className="lg:col-span-1 space-y-6">
                <div className="text-center lg:text-left">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg inline-block mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
                  <p className="text-xl text-green-400 font-semibold mb-4">{experience.company}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-3" />
                    <span>Team Lead (4 members)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Project Overview
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start text-muted-foreground animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <div className="glass rounded-xl p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                    <h5 className="font-semibold mb-2 text-green-400">Impact & Learning</h5>
                    <p className="text-muted-foreground">
                      This internship provided invaluable hands-on experience in mobile development, 
                      team leadership, and project management. Successfully delivering a production-ready 
                      application while mentoring junior developers enhanced both my technical and 
                      leadership capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
            <p className="text-muted-foreground text-lg mb-6">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can add value to your team.
            </p>
            <button className="glow-button px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
