
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { githubService } from '../services/GithubService';
import { toast } from "sonner";
import { Github } from 'lucide-react';

const GithubSettings: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem('github_token') || '');
  const [username, setUsername] = useState(localStorage.getItem('github_username') || 'gitsofaryan');
  const [repo, setRepo] = useState(localStorage.getItem('github_repo') || 'blog-content');
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (!token || !username || !repo) {
      toast.error('All fields are required');
      return;
    }

    try {
      githubService.setCredentials(token, username, repo);
      toast.success('GitHub settings saved successfully');
      setOpen(false);
    } catch (error) {
      toast.error('Failed to save settings');
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Github size={16} />
          {githubService.isAuthenticated() ? 'GitHub Settings' : 'Connect GitHub'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>GitHub Settings</DialogTitle>
          <DialogDescription>
            Connect your GitHub account to publish content as issues.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="token" className="text-right text-sm font-medium">
              Token
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
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GithubSettings;
