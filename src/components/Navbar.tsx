
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Github, Mail, MessageSquare, Edit, LinkedinIcon } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-10 bg-[#181818] border-b border-vscode-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:hidden">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white font-mono font-bold border-blue-50">arien.dev</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 ml-auto">
            <Link to="/about" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Mail size={18} />
              <span>About</span>
            </Link>
            <Link to="/projects" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <span className="text-lg"><img src="/img/projects.png" alt="" height={20} width={20}/></span>
              <span>Projects</span>
            </Link>
            <Link to="/notes" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Book size={18} />
              <span>Notes</span>
            </Link>
            <Link to="/blog" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <FileText size={18} />
              <span>Blogs</span>
            </Link>
            <Link to="/write" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Edit size={18} />
              <span>Write</span>
            </Link>
           
            <a 
              href="https://github.com/gitsofaryan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white"
            >
              <Github size={20} />
     
            </a>
            <a
              href="https://linkedin.com/in/aryan-jain07/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white"
            >
              <LinkedinIcon size={20} />

            </a>
          </nav>
          
         
        
        </div>
      </div>
    </header>
  );
};

export default Navbar;
