
import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const Write: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isNoteType, setIsNoteType] = useState(true);
  const [tags, setTags] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    
    setIsSaving(true);
    
    // In a real application, this would save to a backend
    setTimeout(() => {
      console.log({
        type: isNoteType ? 'note' : 'blog',
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
        date: new Date().toISOString(),
      });
      
      setIsSaving(false);
      alert(`Your ${isNoteType ? 'note' : 'blog post'} has been saved`);
      
      // Reset form
      setTitle('');
      setContent('');
      setTags('');
    }, 1500);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <Edit className="mr-3" size={32} />
        Write
      </h1>
      
      <p className="text-lg mb-8">
        Create a new note or blog post to share your thoughts and ideas.
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
              Note
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
              Blog Post
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
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent font-mono"
            placeholder="Write your content here..."
            rows={15}
            required
          />
          <p className="text-vscode-comment text-sm mt-2">
            Supports Markdown formatting
          </p>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 bg-vscode-accent hover:bg-opacity-90 rounded-md transition-colors disabled:opacity-70"
          >
            {isSaving ? 'Saving...' : `Save ${isNoteType ? 'Note' : 'Blog Post'}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
