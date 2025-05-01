
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Link as LinkIcon, Mail, Rss } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 bg-vscode-sidebar border-r border-vscode-border overflow-y-auto">
      <div className="p-6">
        {/* Logo/Name section */}
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <span className="text-lg">🖥️</span>
          <span className="text-white font-mono font-bold text-xl">tania.dev</span>
        </Link>

        {/* About Me section */}
        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-3">About Me</h3>
          <p className="text-sm mb-2">
            I'm <span className="text-vscode-variable font-medium">Tania</span>, software engineer and open-source creator. This is my digital garden. 🌱
          </p>
        </div>

        {/* Stay Connected section */}
        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-3">Stay Connected</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/newsletter" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <Mail size={16} />
                <span>Newsletter</span>
              </Link>
            </li>
            <li>
              <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🦋</span>
                <span>Bluesky Starter Pack</span>
              </a>
            </li>
            <li>
              <Link to="/rss" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <Rss size={16} />
                <span>RSS Feed</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Guides section */}
        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-3">Guides</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/guides/macos-setup" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🍎</span>
                <span>macOS Setup for Devs</span>
              </Link>
            </li>
            <li>
              <Link to="/guides/css-guidebook" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🎨</span>
                <span>CSS Guidebook</span>
              </Link>
            </li>
            <li>
              <Link to="/guides/react-architecture" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">⚛️</span>
                <span>React Architecture</span>
              </Link>
            </li>
            <li>
              <Link to="/guides/event-loop" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🔄</span>
                <span>The Event Loop</span>
              </Link>
            </li>
            <li>
              <Link to="/guides/all" className="text-sm text-vscode-text hover:text-white transition-colors">
                All Topics
              </Link>
            </li>
          </ul>
        </div>

        {/* Project Writeups section */}
        <div className="mb-6">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-3">Project Writeups</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/projects/keyboard-accordion" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🎹</span>
                <span>Keyboard Accordion</span>
              </Link>
            </li>
            <li>
              <Link to="/projects/snes-memory-game" className="text-sm flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-sm">🎮</span>
                <span>SNES Memory Game</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
