
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Github } from 'lucide-react';
import { toast } from "sonner";
import BlogPost from '../components/BlogPost';
import CommentSection from '../components/CommentSection';
import { githubService } from '../services/GithubService';

// Define the blog post type
interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  isNew?: boolean;
  content?: string;
  source?: 'local' | 'github';
  githubIssueNumber?: number;
}

// Define the type for our blogPosts object with proper index signature
interface BlogPostsCollection {
  [year: string]: BlogPostItem[];
}

const BlogPage: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPostsCollection>({});
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const sampleComments = [
    {
      id: '1',
      author: 'DevEnthusiast',
      authorAvatar: 'https://github.com/identicons/app/oauth_app.png',
      content: "This is a fantastic overview! I especially appreciate the section on generics, which is often a confusing topic for beginners.",
      timestamp: '2025-04-28T15:30:00Z',
    },
    {
      id: '2',
      author: 'TypeScriptFan',
      authorAvatar: 'https://github.com/identicons/app/other_app.png',
      content: "Great article! I would love to see a follow-up on advanced patterns like conditional types and mapped types.",
      timestamp: '2025-04-29T10:15:00Z',
    },
  ];

  const sampleBlogContent = (
    <>
      <p>
        Welcome to this sample blog post. This demonstrates the layout and styling of a typical article 
        on this developer-focused personal site. Let's explore various elements like code blocks, 
        headings, and more.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        As a software developer, writing clean, maintainable code is essential. This blog post 
        will cover some best practices for writing TypeScript code that's both type-safe and 
        easy to understand.
      </p>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        Before diving into advanced techniques, let's go over some fundamentals. TypeScript
        extends JavaScript by adding static type definitions. This can help catch errors early
        during the development process.
      </p>

      <h3 id="installation">Installation</h3>
      <p>To get started with TypeScript, you'll need to install it:</p>
      <pre><code>npm install -g typescript</code></pre>
      <p>Or if you prefer Yarn:</p>
      <pre><code>yarn global add typescript</code></pre>

      <h3 id="configuration">Configuration</h3>
      <p>
        Create a tsconfig.json file at the root of your project. Here's a starter configuration:
      </p>
      <pre><code>{`{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}</code></pre>

      <h2 id="advanced-usage">Advanced Usage</h2>
      <p>
        Let's look at some more advanced TypeScript features that can improve your code quality:
      </p>
      <pre><code>{`// Using generic types
function identity<T>(arg: T): T {
  return arg;
}

// Using union types
type Status = "pending" | "fulfilled" | "rejected";

// Using intersection types
type Employee = Person & {
  employeeId: number;
  department: string;
};

// Using mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};`}</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        TypeScript can significantly improve the quality and maintainability of your codebase.
        By leveraging its type system, you can catch errors early and make your code more robust.
      </p>
      <p>
        I hope you found this guide helpful. Feel free to reach out if you have any questions!
      </p>
    </>
  );

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      
      try {
        // Get local blog posts
        const localContentStr = localStorage.getItem('content') || '[]';
        const localContent = JSON.parse(localContentStr);
        const localBlogPosts = localContent
          .filter((item: any) => item.type === 'blog')
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            date: new Date(item.date).toLocaleDateString('en-US', { month: 'long D' }),
            content: item.content,
            isNew: new Date(item.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            source: 'local' as const
          }));
          
        // Get GitHub blog posts
        let githubBlogPosts: BlogPostItem[] = [];
        if (githubService.isAuthenticated()) {
          const githubIssues = await githubService.getIssues(['blog']);
          githubBlogPosts = githubIssues.map((issue: any) => ({
            id: `github-${issue.number}`,
            title: issue.title,
            date: new Date(issue.created_at).toLocaleDateString('en-US', { month: 'long D' }),
            content: issue.body,
            isNew: new Date(issue.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            source: 'github' as const,
            githubIssueNumber: issue.number
          }));
        }
        
        // Combine all blog posts
        const allPosts = [...localBlogPosts, ...githubBlogPosts];
        
        // Organize by year
        const postsByYear: BlogPostsCollection = {};
        allPosts.forEach(post => {
          const year = new Date(post.date).getFullYear().toString();
          if (!postsByYear[year]) {
            postsByYear[year] = [];
          }
          postsByYear[year].push(post);
        });
        
        // Sort posts within each year
        Object.keys(postsByYear).forEach(year => {
          postsByYear[year].sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        });
        
        // Sort years newest first
        const sortedPostsByYear: BlogPostsCollection = {};
        Object.keys(postsByYear)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .forEach(year => {
            sortedPostsByYear[year] = postsByYear[year];
          });
          
        setBlogPosts(sortedPostsByYear);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        toast.error('Failed to fetch blog posts');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, []);
  
  useEffect(() => {
    const findSelectedPost = async () => {
      if (!selectedPostId) return;
      
      // Check if post is from GitHub
      if (selectedPostId.startsWith('github-')) {
        const issueNumber = parseInt(selectedPostId.replace('github-', ''));
        try {
          const issue = await githubService.getIssue(issueNumber);
          setSelectedPost({
            id: selectedPostId,
            title: issue.title,
            date: new Date(issue.created_at).toLocaleDateString('en-US', { month: 'long D, YYYY' }),
            content: issue.body,
            source: 'github',
            githubIssueNumber: issue.number
          });
          return;
        } catch (error) {
          console.error('Error fetching GitHub issue:', error);
          toast.error('Failed to fetch blog post from GitHub');
          setSelectedPostId(null);
          return;
        }
      }
      
      // Check if post is from local storage
      const localContentStr = localStorage.getItem('content') || '[]';
      const localContent = JSON.parse(localContentStr);
      const post = localContent.find((item: any) => item.id === selectedPostId && item.type === 'blog');
      
      if (post) {
        setSelectedPost({
          id: post.id,
          title: post.title,
          date: new Date(post.date).toLocaleDateString('en-US', { month: 'long D, YYYY' }),
          content: post.content,
          source: 'local'
        });
      } else {
        // If post not found, use fallback
        // This is just for sample content
        setSelectedPost({
          id: selectedPostId,
          title: "Understanding TypeScript: A Comprehensive Guide",
          date: "May 1, 2025",
          content: sampleBlogContent
        });
      }
    };
    
    findSelectedPost();
  }, [selectedPostId]);

  // Filter posts based on search query
  const getFilteredPosts = (): BlogPostsCollection => {
    if (!searchQuery.trim()) return blogPosts;
    
    const filtered: BlogPostsCollection = {};
    
    Object.keys(blogPosts).forEach(year => {
      const matchingPosts = blogPosts[year].filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (matchingPosts.length > 0) {
        filtered[year] = matchingPosts;
      }
    });
    
    return filtered;
  };
  
  const filteredPosts = getFilteredPosts();

  return (
    <>
      {!selectedPostId ? (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg mb-10">
            Guides, references, and tutorials on programming, web development, and design.
          </p>

          {/* Search Bar */}
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent"
            />
            <Search className="absolute left-3 top-3.5 text-vscode-comment" size={18} />
          </div>

          {isLoading ? (
            <div className="flex justify-center my-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vscode-accent"></div>
            </div>
          ) : Object.keys(filteredPosts).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(filteredPosts).map(([year, posts]) => (
                <div key={year} className="mb-10">
                  <h2 className="text-2xl font-bold mb-6">{year}</h2>
                  <ul className="space-y-5">
                    {posts.map(post => (
                      <li key={post.id} className="group">
                        <button
                          onClick={() => setSelectedPostId(post.id)}
                          className="w-full text-left flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-0"
                        >
                          <div className="flex items-center">
                            {post.isNew && (
                              <span className="text-xs bg-vscode-highlight px-2 py-1 rounded mr-2">
                                ✨ New
                              </span>
                            )}
                            {post.source === 'github' && (
                              <span className="text-xs bg-vscode-sidebar px-2 py-1 rounded mr-2 flex items-center">
                                <Github size={12} className="mr-1" />
                                GitHub
                              </span>
                            )}
                            <span className="text-vscode-comment min-w-[80px] md:min-w-[120px]">{post.date}</span>
                          </div>
                          <span className="text-white group-hover:text-vscode-accent transition-colors">{post.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-vscode-comment">
              {searchQuery ? 'No posts found matching your search.' : 'No blog posts yet.'}
            </p>
          )}
          
          <div className="mt-12 flex justify-center">
            <Link 
              to="/write" 
              className="px-6 py-3 bg-vscode-accent hover:bg-opacity-90 rounded-md transition-colors flex items-center"
            >
              <Edit size={18} className="mr-2" />
              Write New Blog Post
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <button 
              onClick={() => setSelectedPostId(null)}
              className="flex items-center text-vscode-accent hover:underline"
            >
              ← Back to Blog
            </button>
          </div>
          
          {selectedPost && (
            <>
              {selectedPost.source === 'github' && (
                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-vscode-sidebar border border-vscode-border">
                  <Github size={14} className="mr-2" />
                  <span className="text-sm">GitHub Issue #{selectedPost.githubIssueNumber}</span>
                </div>
              )}
              <BlogPost
                title={selectedPost.title}
                date={selectedPost.date}
                content={typeof selectedPost.content === 'string' 
                  ? <div dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, '<br>') }} />
                  : selectedPost.content || sampleBlogContent}
                tags={["TypeScript", "JavaScript", "Web Development", "Programming"]}
              />
              <CommentSection 
                comments={sampleComments} 
                postId={selectedPostId} 
                postType="blog"
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default BlogPage;
