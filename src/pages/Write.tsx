
import React, { useState } from 'react';
import { Edit, Pencil, FileText, Eye, Github, Save } from 'lucide-react';
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { githubService } from '../services/GithubService';
import { useNavigate } from 'react-router-dom';

const Write: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isNoteType, setIsNoteType] = useState(true);
  const [tags, setTags] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
  const [publishToGithub, setPublishToGithub] = useState(true); // Default to true for public posting
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("Please provide both title and content");
      return;
    }
    
    setIsSaving(true);
    
    try {
      const contentData = {
        type: isNoteType ? 'note' : 'blog',
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
        date: new Date().toISOString(),
      };
      
      // Save locally
      const existingContent = JSON.parse(localStorage.getItem('content') || '[]');
      const newId = `${Date.now()}`;
      const newContent = [...existingContent, { id: newId, ...contentData }];
      localStorage.setItem('content', JSON.stringify(newContent));
      
      // Publish to GitHub if option is selected
      if (publishToGithub) {
        try {
          await githubService.createIssue({
            title,
            body: content,
            labels: [isNoteType ? 'note' : 'blog', ...tags.split(',').map(tag => tag.trim())],
          });
          toast.success("Successfully published to GitHub");
        } catch (error) {
          console.error("GitHub publish error:", error);
          toast.error("Failed to publish to GitHub");
        }
      }
      
      setIsSaving(false);
      toast.success(`Your ${isNoteType ? 'note' : 'blog post'} has been saved`);
      
      // Redirect to the appropriate page
      navigate(isNoteType ? '/notes' : '/blog');
      
    } catch (error) {
      console.error("Save error:", error);
      setIsSaving(false);
      toast.error("Failed to save content");
    }
  };

  // Simple markdown preview renderer
  const renderMarkdown = (markdown: string) => {
    // This is a very basic markdown renderer for preview purposes
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Lists
      .replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>')
      .replace(/^\s*\n- (.*)/gim, '<ul>\n<li>$1</li>')
      // Paragraphs
      .replace(/^\s*\n([^\n]+)\n/gim, '<p>$1</p>')
      // Line breaks
      .replace(/\n/gim, '<br>');

    return { __html: html };
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold flex items-center">
          <Edit className="mr-3" size={32} />
          Write
        </h1>
      </div>
      
      <p className="text-lg mb-8">
        Create a new note or blog post to share your thoughts and ideas. All posts are public.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              onClick={() => setIsNoteType(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                isNoteType 
                ? 'bg-vscode-accent text-white' 
                : 'bg-vscode-sidebar border border-vscode-border text-vscode-text'
              }`}
            >
              <div className="flex items-center">
                <Pencil size={16} className="mr-2" />
                Note
              </div>
            </button>
            <button
              type="button"
              onClick={() => setIsNoteType(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !isNoteType 
                ? 'bg-vscode-accent text-white' 
                : 'bg-vscode-sidebar border border-vscode-border text-vscode-text'
              }`}
            >
              <div className="flex items-center">
                <FileText size={16} className="mr-2" />
                Blog Post
              </div>
            </button>
          </div>
          
          <label htmlFor="title" className="block text-white font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent"
            placeholder="Enter a title for your content"
            required
          />
        </div>
        
        {!isNoteType && (
          <div className="mb-6">
            <label htmlFor="tags" className="block text-white font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-3 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent"
              placeholder="typescript, javascript, webdev"
            />
          </div>
        )}
        
        <div className="mb-8">
          <label htmlFor="content" className="block text-white font-medium mb-2">
            Content
          </label>
          
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="edit" onClick={() => setViewMode('edit')}>
                <div className="flex items-center">
                  <Edit size={16} className="mr-2" />
                  Edit
                </div>
              </TabsTrigger>
              <TabsTrigger value="preview" onClick={() => setViewMode('preview')}>
                <div className="flex items-center">
                  <Eye size={16} className="mr-2" />
                  Preview
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="edit" className="mt-0">
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-4 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent font-mono min-h-[300px]"
                placeholder="Write your content here using Markdown..."
                required
              />
              <p className="text-vscode-comment text-sm mt-2">
                Supports Markdown formatting
              </p>
            </TabsContent>
            <TabsContent value="preview" className="mt-0">
              <div className="min-h-[300px] p-4 bg-vscode-sidebar border border-vscode-border rounded-md prose prose-invert max-w-none">
                {content ? (
                  <div dangerouslySetInnerHTML={renderMarkdown(content)} />
                ) : (
                  <p className="text-vscode-comment">Preview will appear here...</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={publishToGithub}
                onChange={(e) => setPublishToGithub(e.target.checked)}
                className="rounded border-vscode-border"
              />
              <span className="flex items-center">
                <Github size={16} className="mr-1" />
                Publish as GitHub Issue (Public)
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 bg-vscode-accent hover:bg-opacity-90 rounded-md transition-colors disabled:opacity-70 flex items-center"
          >
            <Save size={16} className="mr-2" />
            {isSaving ? 'Saving...' : `Save ${isNoteType ? 'Note' : 'Blog Post'}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
