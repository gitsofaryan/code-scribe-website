
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { githubService } from '../services/GithubService';
import { toast } from "sonner";
import { Github, CheckCircle, AlertCircle, Settings } from 'lucide-react';

const GithubSettings: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem('github_token') || '');
  const [username, setUsername] = useState(localStorage.getItem('github_username') || '');
  const [repo, setRepo] = useState(localStorage.getItem('github_repo') || '');
  const [open, setOpen] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState<'none' | 'success' | 'error'>('none');
  const [repoDetails, setRepoDetails] = useState<any>(null);

  useEffect(() => {
    if (githubService.isAuthenticated()) {
      fetchRepoDetails();
    }
  }, []);

  const fetchRepoDetails = async () => {
    try {
      const details = await githubService.getRepoDetails();
      if (details) {
        setRepoDetails(details);
      }
    } catch (error) {
      console.error("Error fetching repo details:", error);
    }
  };

  const validateCredentials = async () => {
    if (!username || !repo) {
      toast.error('Repository information is required');
      return false;
    }

    setIsValidating(true);
    setValidationStatus('none');

    try {
      // Temporarily set credentials to validate
      githubService.setCredentials(token, username, repo);
      
      const repoDetails = await githubService.getRepoDetails();
      
      if (repoDetails) {
        setValidationStatus('success');
        setRepoDetails(repoDetails);
        toast.success('GitHub repository validated successfully');
        return true;
      } else {
        setValidationStatus('error');
        toast.error('Failed to validate GitHub repository');
        return false;
      }
    } catch (error) {
      console.error('Validation error:', error);
      setValidationStatus('error');
      toast.error('Failed to validate GitHub repository');
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const handleSave = async () => {
    const isValid = await validateCredentials();
    
    if (isValid) {
      try {
        // Credentials already set during validation
        setOpen(false);
        toast.success('GitHub settings saved successfully');
        // Reload the page to reflect authentication status
        window.location.reload();
      } catch (error) {
        toast.error('Failed to save settings');
        console.error(error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button id="github-settings-trigger" variant="outline" className="flex items-center gap-2">
          <Settings size={16} />
          GitHub Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>GitHub Settings</DialogTitle>
          <DialogDescription>
            Configure which GitHub repository to use for publishing notes and blog posts as issues. To comment and create posts as yourself, add your personal access token.
          </DialogDescription>
        </DialogHeader>
        
        {repoDetails && (
          <div className="bg-vscode-sidebar p-3 rounded-md mb-4 border border-vscode-border">
            <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
              <CheckCircle size={16} />
              <span>Connected to GitHub Repository</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a 
                href={`https://github.com/${username}/${repo}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-vscode-accent hover:underline"
              >
                {username}/{repo}
              </a>
            </div>
          </div>
        )}
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right text-sm font-medium">
              Username
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="GitHub Username"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="repo" className="text-right text-sm font-medium">
              Repository
            </label>
            <Input
              id="repo"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              placeholder="Repository Name"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="token" className="text-right text-sm font-medium">
              Token
              <span className="text-xs text-red-400 block">Required for comments</span>
            </label>
            <Input
              id="token"
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="GitHub Personal Access Token"
              className="col-span-3"
            />
          </div>
          
          {validationStatus === 'success' && (
            <div className="flex items-center gap-2 text-green-500 text-sm mt-2 bg-green-500/10 p-2 rounded">
              <CheckCircle size={16} />
              <span>GitHub repository validated successfully</span>
            </div>
          )}
          
          {validationStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-500 text-sm mt-2 bg-red-500/10 p-2 rounded">
              <AlertCircle size={16} />
              <span>Failed to validate GitHub repository</span>
            </div>
          )}
          
          <div className="text-sm text-vscode-comment">
            <p>Create a token with <strong>repo</strong> scope permissions to post comments and create issues as yourself.</p>
            <a 
              href="https://github.com/settings/tokens/new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vscode-accent hover:underline"
            >
              Create a new token
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="secondary" 
              onClick={validateCredentials}
              disabled={isValidating}
            >
              {isValidating ? 'Validating...' : 'Validate'}
            </Button>
            <Button onClick={handleSave} disabled={isValidating}>Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GithubSettings;
