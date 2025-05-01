
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, tags }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    // Extract headings from content (in real app, this would be different)
    // This is a simplified example
    const extractedHeadings = [
      { id: 'introduction', text: 'Introduction', level: 2 },
      { id: 'getting-started', text: 'Getting Started', level: 2 },
      { id: 'installation', text: 'Installation', level: 3 },
      { id: 'configuration', text: 'Configuration', level: 3 },
      { id: 'advanced-usage', text: 'Advanced Usage', level: 2 },
      { id: 'conclusion', text: 'Conclusion', level: 2 },
    ];
    
    setHeadings(extractedHeadings);
    
    // Set up intersection observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );
    
    const headingElements = document.querySelectorAll('h2, h3, h4');
    headingElements.forEach((element) => observer.observe(element));
    
    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [content]);

  // Generate TOC with appropriate indentation
  const renderTOC = () => {
    return (
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`${heading.level === 3 ? 'ml-4' : ''} ${heading.level === 4 ? 'ml-8' : ''}`}
          >
            <a 
              href={`#${heading.id}`}
              className={`toc-link ${activeHeading === heading.id ? 'active' : ''}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <article className="flex-1 pr-0 lg:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <div className="mb-6 lg:hidden">
            <div className="text-vscode-comment mb-2">{date}</div>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/tags/${tag.toLowerCase()}`}
                  className="tag"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            {content}
          </div>
        </article>
        
        <aside className="hidden lg:block w-64 mt-10">
          <div className="sticky top-24">
            <div className="mb-6">
              <div className="text-sm text-vscode-comment mb-1">Published</div>
              <div className="mb-4">{date}</div>
              
              <div className="text-sm text-vscode-comment mb-1">Tags</div>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Link 
                    key={tag} 
                    to={`/tags/${tag.toLowerCase()}`}
                    className="tag"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <div className="text-sm text-vscode-comment mb-2">Table of Contents</div>
              {renderTOC()}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
