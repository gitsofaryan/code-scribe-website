
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="text-lg mb-4">
            Hey, I'm Tania! I've been making websites since 1998 and I currently work as a
            principal software engineer. I also have a DDR machine in the basement, two cats, and
            a wonderful partner. I like working out, playing video games, and reading.
          </p>

          <p className="mb-4">
            Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I
            want to put out there. On the site, you'll find my <Link to="/notes" className="text-vscode-accent hover:underline">notes</Link> and all the <Link to="/blog" className="text-vscode-accent hover:underline">technical articles</Link> I've written over the years. Check out the <Link to="/projects" className="text-vscode-accent hover:underline">projects</Link> page to see a highlight of my open-source work.
          </p>

          <p className="mb-4">
            My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and
            no paywall. It's a space for self-expression and to share what I've learned with the
            world. I hope the site inspires others to make their own creative corner on the web in
            the uphill battle against the enshittification of the internet.
          </p>

          <p className="mb-8">
            Sign up for the <Link to="/newsletter" className="text-vscode-accent hover:underline">newsletter</Link> or subscribe to the <Link to="/rss" className="text-vscode-accent hover:underline">RSS feed</Link> for updates!
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-2">Send me an email to say hi, or connect via the socials.</p>
          <a href="mailto:hello@example.com" className="text-vscode-accent hover:underline">hello@example.com</a>
        </div>

        <div>
          <img 
            src="/lovable-uploads/5d86e3a2-da20-4de2-99e5-bdb010ff0242.png" 
            alt="Profile picture" 
            className="w-full rounded-lg mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
