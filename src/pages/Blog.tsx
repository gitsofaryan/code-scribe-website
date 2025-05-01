
import React from 'react';
import BlogPost from '../components/BlogPost';
import CommentSection from '../components/CommentSection';

const sampleComments = [
  {
    id: '1',
    author: 'DevEnthusiast',
    authorAvatar: 'https://github.com/identicons/app/oauth_app.png',
    content: 'This is a fantastic overview of TypeScript! I especially appreciate the section on generics, which is often a confusing topic for beginners.',
    timestamp: '2025-04-28T15:30:00Z',
  },
  {
    id: '2',
    author: 'TypeScriptFan',
    authorAvatar: 'https://github.com/identicons/app/other_app.png',
    content: 'Great article! I would love to see a follow-up on advanced TypeScript patterns like conditional types and mapped types.',
    timestamp: '2025-04-29T10:15:00Z',
  },
];

const BlogPage: React.FC = () => {
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

  return (
    <>
      <BlogPost
        title="Understanding TypeScript: A Comprehensive Guide"
        date="May 1, 2025"
        content={sampleBlogContent}
        tags={["TypeScript", "JavaScript", "Web Development", "Programming"]}
      />
      <CommentSection 
        comments={sampleComments} 
        postId="typescript-guide" 
        postType="blog"
      />
    </>
  );
};

export default BlogPage;
