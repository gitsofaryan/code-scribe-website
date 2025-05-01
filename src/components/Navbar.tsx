
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Github, Mail, MessageSquare, Edit } from 'lucide-react';
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
    <header className="sticky top-0 z-10 bg-vscode-bg border-b border-vscode-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:hidden">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white font-mono font-bold">tania.dev</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 ml-auto">
            <Link to="/notes" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Book size={18} />
              <span>Notes</span>
            </Link>
            <Link to="/blog" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <FileText size={18} />
              <span>Blog</span>
            </Link>
            <Link to="/projects" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <span className="text-lg">💻</span>
              <span>Projects</span>
            </Link>
            <Link to="/write" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Edit size={18} />
              <span>Write</span>
            </Link>
            <Link to="/about" className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white">
              <Mail size={18} />
              <span>About</span>
            </Link>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link flex items-center space-x-1 text-vscode-text hover:text-white"
            >
              <Github size={18} />
              <span className="sr-only md:not-sr-only">GitHub</span>
            </a>
          </nav>
          
          <div className="flex items-center ml-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-vscode-highlight transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
