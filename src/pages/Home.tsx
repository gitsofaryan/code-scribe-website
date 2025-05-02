
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Hey, I'm Arien!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
        <div className="md:col-span-3">
          <p className="text-lg mb-4">
            I'm a software engineer, open-source creator, and former professional chef. 
            I've been making websites since 1998 and <Link to="/blog" className="text-vscode-accent">writing on this blog</Link> for 
            the past decade.
          </p>
          
          <p className="text-lg mb-4">
            I enjoy weight-lifting, reading sci-fi and fantasy, playing retro video
            games, and spending time with my partner and friends.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <Link 
              to="/about"
              className="px-4 py-2 bg-vscode-accent hover:bg-opacity-80 text-white rounded-md transition-colors"
            >
              About Me
            </Link>
            <Link 
              to="/newsletter"
              className="px-4 py-2 border border-vscode-border hover:border-vscode-accent text-white rounded-md transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <img 
            src="/img/ironman.png" 
            alt="Ram illustration" 
            className="w-[200px] ml-28  rounded-lg"
          />
        </div>
      </div>
      
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Notes</h2>
          <Link to="/notes" className="text-vscode-accent hover:underline">
            See All
          </Link>
        </div>
        
        <p className="text-vscode-text mb-6">
          Personal notes about life, music, projects, and everything else.
        </p>
        
        <div className="space-y-6">
          <div className="border-b border-vscode-border pb-4">
            <div className="flex items-center mb-2">
              <span className="text-xs bg-vscode-highlight px-2 py-1 rounded mr-2">New</span>
              <Link to="/notes/year-in-review" className="text-xl text-white hover:text-vscode-accent">
                Year in Review: 2024 into 2025
              </Link>
            </div>
            <p className="text-vscode-text text-sm">March 2025</p>
          </div>
          
          <div className="border-b border-vscode-border pb-4">
            <Link to="/notes/redesign" className="text-xl text-white hover:text-vscode-accent">
              Redesign: Version 7.0: Sidebars, light-dark, and Bluesky
            </Link>
            <p className="text-vscode-text text-sm">December 2024</p>
          </div>
          
          <div className="border-b border-vscode-border pb-4">
            <Link to="/notes/year-in-review-2023" className="text-xl text-white hover:text-vscode-accent">
              Year in Review: 2023 into 2024
            </Link>
            <p className="text-vscode-text text-sm">January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
