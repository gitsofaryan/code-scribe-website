
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-6 text-gradient">About Me</h1>
          
          <div className="mb-8">
            <p className="text-lg mb-5">
              Hey, I'm <span className="text-vscode-variable font-medium">Aryan Jain</span> — a software developer, open-source contributor, and AI enthusiast. I love building tools that solve real problems and make technology more accessible.
            </p>
            
            <p className="mb-5">
              I've contributed to open-source projects at <strong className="text-white">CircuitVerse</strong> and <strong className="text-white">Palisadoes</strong>, interned at <strong className="text-white">Persistent Systems</strong>, and led student communities like Google DSC and Web3 Club (1000+ members). I'm also a Regional Finalist in the <strong className="text-white">Google Solutions Challenge 2024</strong> and a <strong className="text-white">Semi-Finalist in the Microsoft Imagine Cup</strong>.
            </p>
            
            <p className="mb-8">
              My work is about creating useful, human-centered technology — and sharing everything I learn along the way. I hope my projects inspire you to build your own ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/gitsofaryan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] hover:bg-[#2a2a2a] transition-colors duration-300 rounded-lg border border-vscode-border"
              >
                <Github size={18} className="text-vscode-accent" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/aryan-jain07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] hover:bg-[#2a2a2a] transition-colors duration-300 rounded-lg border border-vscode-border"
              >
                <Linkedin size={18} className="text-vscode-accent" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:mail.aryan.jain07@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] hover:bg-[#2a2a2a] transition-colors duration-300 rounded-lg border border-vscode-border"
              >
                <Mail size={18} className="text-vscode-accent" />
                <span>Email</span>
              </a>
              <a 
                href="https://leetcode.com/u/arien7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] hover:bg-[#2a2a2a] transition-colors duration-300 rounded-lg border border-vscode-border"
              >
                <Code size={18} className="text-vscode-accent" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Briefcase size={24} className="text-vscode-accent" />
              Experience
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Service Connect (Cisco ThingQbator)</h3>
                    <span className="text-sm text-vscode-comment">November'24-Present</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-vscode-variable">Co-founder, Frontend Developer</p>
                    <span className="text-sm text-vscode-comment">Bangalore (remote), India</span>
                  </div>
                  <ul className="list-disc list-inside text-vscode-text space-y-1">
                    <li>Created the frontend of a user-centric startup website using React.js by integrating Firebase authentication and optimizing responsiveness across devices.</li>
                    <li>Built my startup's "Service Connect" website using Next.js with a full-stack architecture, implementing a robust authentication system using Axios—this achievement helped secure seed funding of 5 lac rupees.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Persistent Systems</h3>
                    <span className="text-sm text-vscode-comment">October-December'23</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-vscode-variable">Frontend Developer Intern</p>
                    <span className="text-sm text-vscode-comment">Bangalore (remote), India</span>
                  </div>
                  <ul className="list-disc list-inside text-vscode-text space-y-1">
                    <li>Enhanced the frontend of a user-centric website using React.js by integrating Firebase authentication and optimizing responsiveness across devices.</li>
                    <li>Developed an admin portal using React.js, which contributed to a 35% reduction in the bounce rate.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Open-Source Contributions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Github size={24} className="text-vscode-accent" />
              Open-Source Contributions
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">CircuitVerse</h3>
                    <span className="text-sm text-vscode-comment">Present</span>
                  </div>
                  <div className="mb-3">
                    <a 
                      href="https://github.com/CircuitVerse/CircuitVerse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-vscode-text space-y-1">
                    <li>Upgraded Node.js to version 22 across all configuration files and resolved Ruby deprecation warnings, ensuring smoother operations and improved performance.</li>
                    <li>Enhanced the Vue Simulator's user experience by migrating code from JavaScript to TypeScript, resulting in increased type safety and maintainability.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Palisadoes</h3>
                    <span className="text-sm text-vscode-comment">Present</span>
                  </div>
                  <div className="mb-3">
                    <a 
                      href="https://github.com/Palisadoes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-vscode-text space-y-1">
                    <li>Developed comprehensive unit tests, achieving 100% test coverage to ensure robust software quality.</li>
                    <li>Resolved critical Flutter bugs and revamped the admin control panel to enhance functionality and user experience.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Code size={24} className="text-vscode-accent" />
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300 h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">MagicAI</h3>
                  <p className="text-vscode-text mb-4 flex-grow">Convert wireframe images into React code instantly using AI. Edit and refine AI-generated code with an integrated editor.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">Next.js</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">Firebase</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">OpenAI</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a 
                      href="https://github.com/gitsofaryan/magicai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    <a 
                      href="https://magicai.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      <span>Preview</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300 h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">CodeSpace</h3>
                  <p className="text-vscode-text mb-4 flex-grow">Real-time code collaboration with instant synchronization across multiple users. Advanced file management for creating, editing, deleting, and organizing files seamlessly.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">React.js</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">Socket.io</span>
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded">Express.js</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a 
                      href="https://github.com/gitsofaryan/codespace" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    <a 
                      href="https://codespace.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-vscode-accent hover:underline flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      <span>Preview</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Award size={24} className="text-vscode-accent" />
              Achievements
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Summer of Bitcoin - Prep'25: Bitcoin Development</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Google Solutions Challenge 2024: Regional Finalist</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Microsoft Imagine Cup 2024: Semi-Finalist</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>IIT Bombay E-Cell Eureka: Finalist</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Cisco ThingQbator: Top 10 Startup</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Competed in 60+ hackathons with 12 wins</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>Google DSC & Web3 Club Lead (1000+ members)</span>
              </div>
              <div className="flex items-start gap-3 hover:bg-[#1F1F1F] p-3 rounded-md transition-colors duration-300">
                <span className="text-vscode-accent text-xl font-bold mt-0.5">•</span>
                <span>NASA Citizen Scientist'24: 49+ contributions</span>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Technical Skills</h2>
            
            <Collapsible className="mb-4">
              <CollapsibleTrigger className="w-full flex justify-between items-center p-3 bg-[#1F1F1F] hover:bg-[#2a2a2a] rounded-lg border border-vscode-border transition-colors duration-300">
                <span className="text-lg font-medium">Languages</span>
                <span className="text-vscode-accent">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2">
                <div className="flex flex-wrap gap-2 p-3 bg-[#161616] rounded-md">
                  {['TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-vscode-highlight rounded-full text-sm transition-all duration-300 hover:bg-opacity-80">
                      {skill}
                    </span>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="mb-4">
              <CollapsibleTrigger className="w-full flex justify-between items-center p-3 bg-[#1F1F1F] hover:bg-[#2a2a2a] rounded-lg border border-vscode-border transition-colors duration-300">
                <span className="text-lg font-medium">Libraries & Frameworks</span>
                <span className="text-vscode-accent">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2">
                <div className="flex flex-wrap gap-2 p-3 bg-[#161616] rounded-md">
                  {['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'Tailwindcss', 'Streamlit'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-vscode-highlight rounded-full text-sm transition-all duration-300 hover:bg-opacity-80">
                      {skill}
                    </span>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="mb-4">
              <CollapsibleTrigger className="w-full flex justify-between items-center p-3 bg-[#1F1F1F] hover:bg-[#2a2a2a] rounded-lg border border-vscode-border transition-colors duration-300">
                <span className="text-lg font-medium">Tools & Platforms</span>
                <span className="text-vscode-accent">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2">
                <div className="flex flex-wrap gap-2 p-3 bg-[#161616] rounded-md">
                  {['Git', 'GitHub', 'MongoDB', 'SupaBase', 'Docker', 'Amazon AWS', 'Google GCP', 'MS AZURE', 'GitLab'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-vscode-highlight rounded-full text-sm transition-all duration-300 hover:bg-opacity-80">
                      {skill}
                    </span>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <GraduationCap size={24} className="text-vscode-accent" />
              Education
            </h2>
            
            <Card className="bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">Gyan Ganga Institute of Technology and Sciences, Jabalpur</h3>
                  <span className="text-sm text-vscode-comment">2022-26</span>
                </div>
                <p className="text-vscode-text">Bachelor of Technology in Computer Science and Business System (CSBS)</p>
                <p className="text-vscode-variable mt-2">CGPA: 8</p>
              </CardContent>
            </Card>
          </section>
        </div>

        <div>
          <div className="sticky top-24">
            <img
              src="/img/me.png"
              alt="Aryan Jain"
              className="w-full rounded-xl shadow-xl mb-6 border border-vscode-border transform hover:scale-[1.02] transition-transform duration-300"
            />
            
            <Card className="mb-6 bg-[#1F1F1F] border-vscode-border hover:border-vscode-accent transition-colors duration-300">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:mail.aryan.jain07@gmail.com" 
                    className="flex items-center gap-2 text-vscode-text hover:text-vscode-accent transition-colors duration-300"
                  >
                    <Mail size={16} />
                    <span>mail.aryan.jain07@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/gitsofaryan" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-vscode-text hover:text-vscode-accent transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>gitsofaryan</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/aryan-jain07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-vscode-text hover:text-vscode-accent transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                    <span>aryan-jain07</span>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Button asChild className="w-full bg-vscode-accent hover:bg-vscode-accent/90 text-white">
              <a href="/write">Write a Note</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
