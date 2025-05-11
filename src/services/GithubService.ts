
import axios from 'axios';

interface GithubIssuePayload {
  title: string;
  body: string;
  labels: string[];
}

interface GithubComment {
  body: string;
}

export class GithubService {
  private token: string | null;
  private username: string;
  private repo: string;

  constructor() {
    this.token = localStorage.getItem('github_token');
    this.username = localStorage.getItem('github_username') || 'gitsofaryan';
    this.repo = localStorage.getItem('github_repo') || 'blog-content';
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  setCredentials(token: string, username: string, repo: string): void {
    this.token = token;
    this.username = username;
    this.repo = repo;
    
    localStorage.setItem('github_token', token);
    localStorage.setItem('github_username', username);
    localStorage.setItem('github_repo', repo);
  }

  getCredentials() {
    return {
      username: this.username,
      repo: this.repo,
      isAuthenticated: this.isAuthenticated()
    };
  }

  async createIssue(payload: GithubIssuePayload): Promise<any> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated with GitHub');
    }

    try {
      const response = await axios.post(
        `https://api.github.com/repos/${this.username}/${this.repo}/issues`,
        payload,
        {
          headers: {
            'Authorization': `token ${this.token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      throw error;
    }
  }

  async updateIssue(issueNumber: number, payload: Partial<GithubIssuePayload>): Promise<any> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated with GitHub');
    }

    try {
      const response = await axios.patch(
        `https://api.github.com/repos/${this.username}/${this.repo}/issues/${issueNumber}`,
        payload,
        {
          headers: {
            'Authorization': `token ${this.token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      throw error;
    }
  }

  async createComment(issueNumber: number, comment: GithubComment): Promise<any> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated with GitHub');
    }

    try {
      const response = await axios.post(
        `https://api.github.com/repos/${this.username}/${this.repo}/issues/${issueNumber}/comments`,
        comment,
        {
          headers: {
            'Authorization': `token ${this.token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      throw error;
    }
  }

  async getComments(issueNumber: number): Promise<any[]> {
    try {
      const url = `https://api.github.com/repos/${this.username}/${this.repo}/issues/${issueNumber}/comments`;
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
      }
      
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      return [];
    }
  }

  async getIssues(labels?: string[]): Promise<any[]> {
    try {
      let url = `https://api.github.com/repos/${this.username}/${this.repo}/issues?state=open`;
      
      if (labels && labels.length > 0) {
        url += `&labels=${labels.join(',')}`;
      }
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
      }
      
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      return [];
    }
  }

  async getIssue(issueNumber: number): Promise<any> {
    try {
      const url = `https://api.github.com/repos/${this.username}/${this.repo}/issues/${issueNumber}`;
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
      }
      
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      throw error;
    }
  }

  async getRepoDetails(): Promise<any> {
    try {
      const url = `https://api.github.com/repos/${this.username}/${this.repo}`;
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
      }
      
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      return null;
    }
  }

  async getUserDetails(): Promise<any> {
    try {
      const url = `https://api.github.com/users/${this.username}`;
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
      }
      
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('GitHub API Error:', error);
      return null;
    }
  }
}

export const githubService = new GithubService();
