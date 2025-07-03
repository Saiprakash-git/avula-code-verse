import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('skills')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ASP</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-slide-up">
            Sai Prakash Avula
          </h1>
          
          <div className="text-xl md:text-2xl text-purple-400 font-mono mb-8 animate-slide-up delay-200">
            &lt;Developer /&gt;
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up delay-300">
            I'm a passionate Developer skilled in Web & Mobile Development with a strong foundation in programming and problem-solving. 
            I love building solutions that combine clean design and impactful functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-500">
            <a href="https://drive.google.com/file/d/1YHcBFEucfoREpNV1cH5pHz4avXTZG1LX/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="glow-button px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            
            <button onClick={scrollToNext} className="px-8 py-3 glass hover:bg-white/10 font-medium rounded-full transition-all duration-300 flex items-center gap-2">
              Let's Connect
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up delay-700">
            <a href="mailto:tosaiprakash.asp@gmail.com" className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/saiprakash001/" target="_blank" rel="noopener noreferrer" className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Saiprakash-git" target="_blank" rel="noopener noreferrer" className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} className="p-2 text-muted-foreground hover:text-purple-400 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>;
};
export default HeroSection;