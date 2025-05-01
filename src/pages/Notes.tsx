
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const Notes: React.FC = () => {
  // Sample notes data
  const notes = [
    {
      id: '1',
      title: 'Year in Review: 2024 into 2025',
      date: 'March 2025',
      excerpt: 'Reflecting on the past year and setting goals for the future.',
      isNew: true,
      content: 'This is a detailed reflection on the past year and my plans for the future. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.',
      comments: [
        {
          id: 'c1',
          author: 'ReflectiveReader',
          authorAvatar: 'https://github.com/identicons/app/reflective_app.png',
          content: 'Really enjoyed your year-end thoughts. I've been following a similar path in my dev journey!',
          timestamp: '2025-03-15T10:30:00Z'
        }
      ]
    },
    {
      id: '2',
      title: 'Redesign: Version 7.0: Sidebars, light-dark, and Bluesky',
      date: 'December 2024',
      excerpt: 'Details about the latest redesign of my personal website.',
      isNew: false,
      content: 'In this note, I discuss the latest redesign of my website, including the new sidebars, light-dark mode toggle, and Bluesky integration.',
      comments: []
    },
    {
      id: '3',
      title: 'Year in Review: 2023 into 2024',
      date: 'January 2024',
      excerpt: 'Looking back at 2023 and planning for the year ahead.',
      isNew: false,
      content: 'A reflection on 2023 and my plans for 2024. Includes thoughts on projects, learning, and personal growth.',
      comments: []
    },
    {
      id: '4',
      title: 'Thoughts on Modern Web Development',
      date: 'November 2023',
      excerpt: 'Exploring the current state of web development tools and frameworks.',
      isNew: false,
      content: 'An exploration of the current state of web development, including thoughts on React, Next.js, and other modern tools and frameworks.',
      comments: []
    },
    {
      id: '5',
      title: 'My Essential Developer Tools',
      date: 'September 2023',
      excerpt: 'A curated list of software tools I use daily for development.',
      isNew: false,
      content: 'A list of the tools I use daily for development, including editors, terminals, browsers, and more.',
      comments: []
    }
  ];

  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {!selectedNote ? (
        <>
          <h1 className="text-4xl font-bold mb-6">Notes</h1>
          <p className="text-lg mb-10">
            Personal thoughts, reflections, and updates about tech, life, and everything in between.
          </p>

          <div className="space-y-10">
            {notes.map(note => (
              <div key={note.id} className="border-b border-vscode-border pb-8">
                <div className="flex items-center mb-2">
                  {note.isNew && (
                    <span className="text-xs bg-vscode-highlight px-2 py-1 rounded mr-2">
                      New
                    </span>
                  )}
                  <button 
                    onClick={() => setSelectedNote(note)}
                    className="text-2xl font-bold text-white hover:text-vscode-accent transition-colors text-left"
                  >
                    {note.title}
                  </button>
                </div>
                <p className="text-vscode-comment text-sm mb-3">{note.date}</p>
                <p className="text-vscode-text">{note.excerpt}</p>
                <button 
                  onClick={() => setSelectedNote(note)}
                  className="inline-block mt-4 text-vscode-accent hover:underline"
                >
                  Continue reading →
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button 
            onClick={() => setSelectedNote(null)}
            className="mb-6 flex items-center text-vscode-accent hover:underline"
          >
            ← Back to Notes
          </button>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{selectedNote.title}</h1>
            <p className="text-vscode-comment mb-4">{selectedNote.date}</p>
            <div className="prose prose-invert max-w-none">
              <p>{selectedNote.content}</p>
            </div>
          </div>
          
          <CommentSection 
            comments={selectedNote.comments} 
            postId={selectedNote.id}
            postType="note"
          />
        </>
      )}
    </div>
  );
};

export default Notes;
