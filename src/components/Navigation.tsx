import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Experience',
    href: '#experience'
  }, {
    label: 'Achievements',
    href: '#achievements'
  }, {
    label: 'Blog',
    href: '#blog'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-40 glass dark:glass-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ASP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className={`text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${activeSection === item.href.slice(1) ? 'text-purple-400' : 'text-foreground'}`}>
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-300 hover:text-purple-400 rounded-lg hover:bg-white/5 ${activeSection === item.href.slice(1) ? 'text-purple-400' : 'text-foreground'}`}>
                {item.label}
              </button>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;