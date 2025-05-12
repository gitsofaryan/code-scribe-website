
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { githubService } from '../services/GithubService';

const GitHubCallback: React.FC = () => {
  const [status, setStatus] = useState('Processing GitHub authentication...');
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Extract the authorization code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');
        
        if (error) {
          toast.error("Authentication error: " + error);
          setStatus("Authentication failed: " + error);
          setTimeout(() => navigate('/'), 2000);
          return;
        }
        
        if (!code) {
          toast.error("No authorization code received");
          setStatus("Authentication failed: No code received");
          setTimeout(() => navigate('/'), 2000);
          return;
        }

        setStatus("Authorization successful! Processing...");
        
        // In a full implementation, this would make a server call
        // For demo purposes, we'll simulate with localStorage
        const mockToken = `gh_mock_${code.substring(0, 8)}`;
        githubService.setCredentials(mockToken, 'gitsofaryan', 'code-scribe-website');
        
        toast.success("GitHub authentication successful!");
        setStatus("Authentication complete! Redirecting...");
        
        // Redirect back to the previous page or home
        setTimeout(() => navigate('/'), 1500);
      } catch (error) {
        console.error('GitHub auth error:', error);
        toast.error("Authentication failed");
        setStatus("Authentication failed. Redirecting home...");
        setTimeout(() => navigate('/'), 2000);
      }
    };
    
    handleCallback();
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
