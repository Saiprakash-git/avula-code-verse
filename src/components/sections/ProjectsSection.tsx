
import React from 'react';
import { ExternalLink, Github, Monitor, Users, Calendar, Award } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'MyAcademia',
      description: 'A comprehensive Learning Management System-Based Application that facilitates classroom-like environments for teachers and students, complete with assignments, quizzes, and performance evaluations.',
      technologies: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'GitHub', 'WebSockets'],
      features: [
        'Real-time classroom environments',
        'Assignment management system',
        'Interactive quiz platform',
        'Performance analytics dashboard',
        'WebSocket-based real-time communication'
      ],
      icon: Monitor,
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that combine functionality with user experience
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button className="glow-button flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 font-medium rounded-full transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10 glass rounded-2xl p-8 hover:scale-105 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                        <h4 className="text-xl font-semibold mb-2">MyAcademia</h4>
                        <p className="text-sm text-muted-foreground">Learning Management System</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl transform scale-105"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground text-lg mb-6">
              I'm continuously working on exciting new projects. Stay tuned for updates!
            </p>
            <button className="glow-button px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
