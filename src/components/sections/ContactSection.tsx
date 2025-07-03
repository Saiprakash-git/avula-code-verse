
import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:saiprakashavula@example.com',
      icon: Mail,
      gradient: 'from-red-500 to-pink-500',
      description: 'saiprakashavula@example.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sai-prakash-avula',
      icon: Linkedin,
      gradient: 'from-blue-500 to-blue-600',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sai-prakash-avula',
      icon: Github,
      gradient: 'from-gray-600 to-gray-700',
      description: 'View my repositories'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a great conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg mr-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full glow-button flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-200">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glass hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.gradient} shadow-lg mr-4`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-purple-400 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Hyderabad, Telangana</h4>
                  <p className="text-sm text-muted-foreground">
                    Available for remote work and local opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to connect with a fellow developer, I'd love to hear from you.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 glow-button px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
