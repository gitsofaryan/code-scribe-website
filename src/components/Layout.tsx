
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  rightSidebar?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, rightSidebar }) => {
  const location = useLocation();
  const showRightSidebar = rightSidebar && location.pathname.includes('/blog/');

  return (
    <div className="min-h-screen flex flex-col bg-vscode-bg text-vscode-text">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 max-w-4xl mx-auto animate-fade-in">
          {children}
        </main>
        {showRightSidebar && (
          <aside className="hidden lg:block w-64 p-6 border-l border-vscode-border">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
};

export default Layout;
