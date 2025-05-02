import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="text-lg mb-4">
            Hey, I'm Aryan Jain — a software developer, open-source contributor, and AI enthusiast. I love building tools that solve real problems and make technology more accessible.
          </p>

          <p className="mb-4">
            I’ve contributed to open-source projects at <strong>CircuitVerse</strong> and <strong>Palisadoes</strong>, interned at <strong>Persistent Systems</strong>, and led student communities like Google DSC and Web3 Club (1000+ members). I'm also a Regional Finalist in the <strong>Google Solutions Challenge 2024</strong> and a <strong>Semi-Finalist in the Microsoft Imagine Cup</strong>.
          </p>

          <p className="mb-4">
            I don’t run ads, affiliate links, or use tracking. My work is about creating useful, human-centered technology — and sharing everything I learn along the way. I hope my projects inspire you to build your own ideas into reality.
          </p>

          <p className="mb-8">
            You can <Link to="/newsletter" className="text-vscode-accent hover:underline">sign up for my newsletter</Link> or follow my work on <a href="https://github.com/gitsofaryan" target="_blank" className="text-vscode-accent hover:underline">GitHub</a>.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-2">Feel free to reach out or connect:</p>
          <ul className="mb-4">
            <li><a href="mailto:mail.aryan.jain07@gmail.com" className="text-vscode-accent hover:underline">Email</a></li>
            <li><a href="https://linkedin.com/in/aryan-jain07" target="_blank" className="text-vscode-accent hover:underline">LinkedIn</a></li>
            <li><a href="https://leetcode.com/u/arien7" target="_blank" className="text-vscode-accent hover:underline">LeetCode</a></li>
            <li><a href="https://github.com/gitsofaryan" target="_blank" className="text-vscode-accent hover:underline">GitHub</a></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Now</h2>
          <p className="mb-4">Currently working on:</p>
          <ul className="list-disc list-inside mb-8">
            <li>Enhancing <Link to="/projects/codespace" className="text-vscode-accent hover:underline">Codespace</Link> with live drawing + audio support</li>
            <li>Improving <Link to="/projects/voiceguard" className="text-vscode-accent hover:underline">VoiceGuard</Link> for WhatsApp and social media deepfake detection</li>
            <li>Solar rooftop estimation tools for India's NE region</li>
            <li>AI + ML-driven Moon rover path planning using Chandrayaan data</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Guides</h2>
          <p className="mb-4">Long-form tutorials on a variety of development topics.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link to="/guides/graphql" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-pink-500 mr-3">🔺</span>
              <span>An Intro to GraphQL</span>
            </Link>
            <Link to="/guides/react-structure" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-blue-400 mr-3">⚛️</span>
              <span>How to Structure and Organize a React Application</span>
            </Link>
            <Link to="/guides/webpack" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-blue-300 mr-3">📦</span>
              <span>How to Set Up Webpack 5 From Scratch</span>
            </Link>
            <Link to="/guides/js-event-loop" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-yellow-400 mr-3">JS</span>
              <span>The Event Loop, Callbacks, Promises, and Async/Await in JavaScript</span>
            </Link>
            <Link to="/guides/redux-react" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-purple-400 mr-3">🌀</span>
              <span>How to Use Redux and React</span>
            </Link>
            <Link to="/guides/mac-dev" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-gray-400 mr-3">🍎</span>
              <span>How to Set Up a Mac for Development</span>
            </Link>
            <Link to="/guides/css-fundamentals" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-purple-500 mr-3">CSS</span>
              <span>A Complete Guide to CSS Concepts and Fundamentals</span>
            </Link>
            <Link to="/guides/vue" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-green-400 mr-3">V</span>
              <span>How to Use Vue, the JavaScript Framework</span>
            </Link>
            <Link to="/guides/software-dev" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-gray-400 mr-3">💾</span>
              <span>Everything I Know as a Software Developer Without a Degree (2019)</span>
            </Link>
            <Link to="/guides/react" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-blue-400 mr-3">⚛️</span>
              <span>How to Use React, the JavaScript Framework</span>
            </Link>
            <Link to="/guides/design-for-devs" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-yellow-300 mr-3">✏️</span>
              <span>Design for Developers: Specific Steps to Improve Your Website Design</span>
            </Link>
            <Link to="/guides/command-line" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
              <span className="text-gray-400 mr-3">>_</span>
              <span>How to Use the Command Line in Linux and macOS</span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="mb-8">
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-600"></div>
              <div className="mb-6">
                <div className="absolute left-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Typescript', 'JavaScript', 'Python', 'C/C++', 'SQL'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="absolute left-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">Libraries/Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'Tailwindcss', 'Streamlit'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="absolute left-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">Tools/Platform</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'MongoDB', 'SupaBase', 'Docker', 'Amazon AWS', 'Google GCP', 'MS AZURE', 'GitLab'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Frontend Developer Intern at Persistent Systems (October-December’23)</h3>
            <ul className="list-disc list-inside">
              <li>Enhanced the frontend of a user-centric website using React.js by integrating Firebase authentication and optimizing responsiveness across devices.</li>
              <li>Developed an admin portal using React.js, which contributed to a 35% reduction in the bounce rate.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Open-Source Contributor</h3>
            <p>Contributed to CircuitVerse and Palisadoes:</p>
            <ul className="list-disc list-inside">
              <li>Upgraded Node.js to version 22 and resolved Ruby deprecation warnings at CircuitVerse, improving performance.</li>
              <li>Migrated Vue Simulator code from JavaScript to TypeScript, enhancing type safety and maintainability.</li>
              <li>Developed unit tests with 100% coverage and fixed critical Flutter bugs at Palisadoes, improving software quality and user experience.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">MagicAI</h3>
            <p>An AI-powered tool that converts wireframe images into React code instantly. Features include an integrated code editor and a secure authentication system.</p>
            <p><a href="https://github.com/gitsofaryan/magicai" target="_blank" className="text-vscode-accent hover:underline">Code</a> | <a href="https://magicai.vercel.app" target="_blank" className="text-vscode-accent hover:underline">Preview</a></p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">CodeSpace</h3>
            <p>A real-time collaborative code editor with advanced file management and built-in chat. Built with React.js, TypeScript, and Socket.io.</p>
            <p><a href="https://github.com/gitsofaryan/codespace" target="_blank" className="text-vscode-accent hover:underline">Code</a> | <a href="https://codespace.vercel.app" target="_blank" className="text-vscode-accent hover:underline">Preview</a></p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Summer of Bitcoin - Prep’25: Bitcoin Development</li>
            <li>Google Solutions Challenge 2024: Regional Finalist</li>
            <li>Microsoft Imagine Cup 2024: Semi-Finalist</li>
            <li>IIT Bombay E-Cell Eureka: Finalist</li>
            <li>Cisco ThingQbator: Top 10 Startup</li>
            <li>Competed in 60+ hackathons with 12 wins (Devpost, MLH, Onsite)</li>
            <li>Leadership Roles: Google Developer Students Club LEAD’24, Web3 Club LEAD (1000+ students), MLSA (Alpha)</li>
            <li>NASA Citizen Scientist’24: 49+ contributions</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-4">Bachelor of Technology in Computer Science and Business System (CSBS) at Gyan Ganga Institute of Technology and Sciences, Jabalpur (2022-26). CGPA: 8</p>

          <h2 className="text-2xl font-bold mb-4">Tools and Setup</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software</h3>
            <ul className="list-disc list-inside">
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>Docker</li>
              <li>MongoDB</li>
              <li>SupaBase</li>
              <li>Amazon AWS</li>
              <li>Google GCP</li>
              <li>MS AZURE</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Hardware</h3>
            <ul className="list-disc list-inside">
              <li>MacBook Pro</li>
              <li>External monitor</li>
              <li>Mechanical keyboard</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <p className="mb-4">In my free time, I enjoy listening to electronic music while coding and staying fit with regular gym sessions.</p>
        </div>

        <div>
          <img
            src="/img/me.png"
            alt="Aryan Jain"
            className="w-full rounded-xl #shadow-lg mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default About;