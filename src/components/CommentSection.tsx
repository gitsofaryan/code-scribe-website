
import React, { useState } from 'react';
import { Github, MessageSquare } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments: Comment[];
  postId: string;
  postType: 'blog' | 'note';
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, postId, postType }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [displayComments, setDisplayComments] = useState<Comment[]>(comments);

  const handleGithubLogin = () => {
    // In a real implementation, this would redirect to GitHub OAuth
    console.log('Redirecting to GitHub OAuth');
    // For demo purposes, we'll simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // In a real implementation, this would send the comment to a backend API
    const mockNewComment: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      authorAvatar: 'https://github.com/identicons/app/app_name.png',
      content: newComment,
      timestamp: new Date().toISOString()
    };
    
    setDisplayComments([mockNewComment, ...displayComments]);
    setNewComment('');
  };

  return (
    <div className="mt-12 border-t border-vscode-border pt-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <MessageSquare className="mr-2" size={20} />
        Comments ({displayComments.length})
      </h3>
      
      {!isAuthenticated ? (
        <div className="bg-vscode-highlight bg-opacity-20 rounded-lg p-6 mb-8 text-center">
          <p className="mb-4">Sign in with GitHub to join the discussion</p>
          <button 
            onClick={handleGithubLogin}
            className="inline-flex items-center px-4 py-2 bg-vscode-accent hover:bg-opacity-90 rounded-md transition-colors"
          >
            <Github size={18} className="mr-2" />
            <span>Sign in with GitHub</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 bg-vscode-sidebar border border-vscode-border rounded-md focus:outline-none focus:border-vscode-accent"
            placeholder="Write a comment..."
            rows={4}
          />
          <div className="mt-2 flex justify-end">
            <button 
              type="submit"
              className="px-4 py-2 bg-vscode-accent hover:bg-opacity-90 rounded-md transition-colors"
            >
              Post Comment
            </button>
          </div>
        </form>
      )}
      
      <div className="space-y-6">
        {displayComments.map((comment) => (
          <div key={comment.id} className="border-b border-vscode-border pb-6">
            <div className="flex items-center mb-2">
              <img 
                src={comment.authorAvatar} 
                alt={comment.author} 
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-white">{comment.author}</div>
                <div className="text-xs text-vscode-text">{new Date(comment.timestamp).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="pl-11">
              <p className="text-vscode-text">{comment.content}</p>
            </div>
          </div>
        ))}
        
        {displayComments.length === 0 && (
          <div className="text-center py-8 text-vscode-text">
            <p>Be the first to leave a comment!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
