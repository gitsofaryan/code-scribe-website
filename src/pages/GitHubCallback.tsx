
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const GitHubCallback: React.FC = () => {
  const [status, setStatus] = useState('Processing GitHub authentication...');
  const navigate = useNavigate();

  useEffect(() => {
    // The actual authentication logic is in GitHubAuth component
    // This is just a placeholder page that will be redirected from
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-vscode-accent mb-4"></div>
      <h2 className="text-xl font-semibold mb-2">GitHub Authentication</h2>
      <p>{status}</p>
    </div>
  );
};

export default GitHubCallback;
