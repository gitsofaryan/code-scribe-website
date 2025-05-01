
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import BlogPost from '../components/BlogPost';
import CommentSection from '../components/CommentSection';

// Define the blog post type
interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  isNew?: boolean;
}

// Define the type for our blogPosts object with proper index signature
interface BlogPostsCollection {
  [year: string]: BlogPostItem[];
}

// Sample blog data organized by year
const blogPosts: BlogPostsCollection = {
  "2025": [
    {
      id: "echarts-react",
      title: "Enabling Apache ECharts in React for Data Visualization",
      date: "March 31",
      isNew: true,
    }
  ],
  "2024": [
    {
      id: "keyboard-shortcuts",
      title: "Creating a Keyboard Shortcut Hook in React (Deep Dive)",
      date: "October 19",
    },
    {
      id: "tables-fixed-headers",
      title: "Tables with Fixed Headers and Horizontal Scroll",
      date: "October 9",
    }
  ],
  "2023": [
    {
      id: "websockets-redux",
      title: "How to Use WebSockets in a Redux Application",
      date: "February 15",
    },
    {
      id: "graphql-types",
      title: "Understanding the GraphQL Type System",
      date: "January 27",
    }
  ],
  "2022": [
    {
      id: "testing-api-jest",
      title: "Testing API Calls With React Testing Library and Jest",
      date: "December 9",
    },
    {
      id: "react-router-path",
      title: "Using Path Matching in React Router",
      date: "December 5",
    }
  ]
};

const BlogPage: React.FC = () => {
  const [showFullBlog, setShowFullBlog] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Function to find post details from ID
  const findSelectedPost = () => {
    if (!selectedPostId) return null;
    
    for (const year in blogPosts) {
      const post = blogPosts[year].find(post => post.id === selectedPostId);
      if (post) return post;
    }
    return null;
  };
  
  const selectedPost = findSelectedPost();
  
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
            Guides, references, and tutorials on programming, web development, and design. View All Topics.
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

          {/* Timeline View */}
          <div className="space-y-12">
            {Object.keys(filteredPosts).length > 0 ? (
              Object.entries(filteredPosts).map(([year, posts]) => (
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
                            <span className="text-vscode-comment min-w-[80px] md:min-w-[120px]">{post.date}</span>
                          </div>
                          <span className="text-white group-hover:text-vscode-accent transition-colors">{post.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-center py-8 text-vscode-comment">No posts found matching your search.</p>
            )}
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
          
          <BlogPost
            title={selectedPost?.title || "Understanding TypeScript: A Comprehensive Guide"}
            date="May 1, 2025"
            content={sampleBlogContent}
            tags={["TypeScript", "JavaScript", "Web Development", "Programming"]}
          />
          <CommentSection 
            comments={sampleComments} 
            postId={selectedPostId || "typescript-guide"} 
            postType="blog"
          />
        </>
      )}
    </>
  );
};

export default BlogPage;
