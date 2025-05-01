
import React from 'react';
import { Link } from 'react-router-dom';

const Notes: React.FC = () => {
  // Sample notes data
  const notes = [
    {
      id: '1',
      title: 'Year in Review: 2024 into 2025',
      date: 'March 2025',
      excerpt: 'Reflecting on the past year and setting goals for the future.',
      isNew: true
    },
    {
      id: '2',
      title: 'Redesign: Version 7.0: Sidebars, light-dark, and Bluesky',
      date: 'December 2024',
      excerpt: 'Details about the latest redesign of my personal website.',
      isNew: false
    },
    {
      id: '3',
      title: 'Year in Review: 2023 into 2024',
      date: 'January 2024',
      excerpt: 'Looking back at 2023 and planning for the year ahead.',
      isNew: false
    },
    {
      id: '4',
      title: 'Thoughts on Modern Web Development',
      date: 'November 2023',
      excerpt: 'Exploring the current state of web development tools and frameworks.',
      isNew: false
    },
    {
      id: '5',
      title: 'My Essential Developer Tools',
      date: 'September 2023',
      excerpt: 'A curated list of software tools I use daily for development.',
      isNew: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
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
              <Link 
                to={`/notes/${note.id}`}
                className="text-2xl font-bold text-white hover:text-vscode-accent transition-colors"
              >
                {note.title}
              </Link>
            </div>
            <p className="text-vscode-comment text-sm mb-3">{note.date}</p>
            <p className="text-vscode-text">{note.excerpt}</p>
            <Link 
              to={`/notes/${note.id}`}
              className="inline-block mt-4 text-vscode-accent hover:underline"
            >
              Continue reading →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
