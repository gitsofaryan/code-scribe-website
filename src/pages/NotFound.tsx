
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl font-bold mb-4 text-vscode-accent">404</div>
      <h1 className="text-3xl font-bold mb-8">Page Not Found</h1>
      <p className="text-vscode-text mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-vscode-accent hover:bg-opacity-90 text-white rounded-md transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
