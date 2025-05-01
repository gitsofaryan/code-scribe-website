
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      id: 'keyboard-accordion',
      title: 'Keyboard Accordion',
      description: 'A virtual accordion instrument playable with your computer keyboard, built with Web Audio API.',
      tags: ['JavaScript', 'Web Audio', 'UI Design'],
      link: '/projects/keyboard-accordion'
    },
    {
      id: 'snes-memory-game',
      title: 'SNES Memory Game',
      description: 'A memory matching game with SNES game covers as cards, built with React.',
      tags: ['React', 'TypeScript', 'Game'],
      link: '/projects/snes-memory-game'
    },
    {
      id: 'chip-8-emulator',
      title: 'Chip-8 Emulator',
      description: 'A Chip-8 emulator written in Rust with a web frontend using WebAssembly.',
      tags: ['Rust', 'WebAssembly', 'Emulation'],
      link: '/projects/chip-8-emulator'
    },
    {
      id: 'markdown-wiki',
      title: 'Markdown Wiki',
      description: 'A personal wiki system built with markdown files and auto-generated navigation.',
      tags: ['Node.js', 'Express', 'Markdown'],
      link: '/projects/markdown-wiki'
    },
    {
      id: 'portfolio-generator',
      title: 'Portfolio Generator',
      description: 'A command-line tool to generate a developer portfolio site from a config file.',
      tags: ['CLI Tool', 'Node.js', 'Static Site'],
      link: '/projects/portfolio-generator'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-lg mb-10">
        A selection of open-source projects I've built and written about.
        Each project includes a detailed writeup of the development process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <Link 
            key={project.id} 
            to={project.link}
            className="block bg-vscode-sidebar border border-vscode-border rounded-lg overflow-hidden hover:border-vscode-accent transition-colors"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-vscode-text mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={`${project.id}-${tag}`}
                    className="text-xs px-2 py-1 bg-vscode-highlight rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
