
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, GitPullRequest } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock GitHub contribution data - in a real app, you would fetch this from GitHub API
const contributionData = {
  totalContributions: 628,
  organizations: [
    { name: "CircuitVerse", image: "/lovable-uploads/8bcb98ba-2e99-4a29-abd9-4e560ded7671.png" },
    { name: "Opensource Society", image: "/img/projects.png" },
    { name: "RoboSats", image: "/img/notes.png" },
  ],
  repositories: [
    "gitsofaryan/FAANG",
    "Sujal942/Talk-to-Code",
    "CircuitVerse/cv-frontend-vue"
  ]
};

const featuredProjects = [
  {
    id: "codespace",
    title: "CodeSpace",
    description: "A collaborative, real-time code editor where users can seamlessly code together.",
    image: "/lovable-uploads/c1a2980b-0986-4a83-a70e-dc805410acaf.png",
    link: "/projects/codespace",
    tags: ["React.js", "TypeScript", "Socket.io"]
  },
  {
    id: "nexts3ops",
    title: "NextS3Ops",
    description: "An innovative architecture designed to seamlessly integrate frontend development with robust DevOps practices.",
    image: "/lovable-uploads/29040269-5f15-4642-a1ae-03a55b7fc2c6.png",
    link: "/projects/nexts3ops",
    tags: ["Next.js", "AWS", "TypeScript"]
  },
  {
    id: "xeditor",
    title: "Xeditor",
    description: "UML and Diagram Maker and Editor for Software Engineering Teams and Students.",
    image: "/lovable-uploads/9b982116-68b8-4c86-8351-6efe18fbd2d6.png",
    link: "/projects/xeditor",
    tags: ["TypeScript", "UML", "Diagrams"]
  },
  {
    id: "isl",
    title: "ISL",
    description: "A solution that translates Indian Sign Language into text and speech in real-time.",
    image: "/lovable-uploads/b9dd9476-6872-4e27-8403-30d7c36b3f89.png",
    link: "/projects/isl",
    tags: ["AI", "Accessibility", "Python"]
  },
  {
    id: "finlitera",
    title: "FinLitera",
    description: "AI-powered assistant for smarter investing and financial insights.",
    image: "/lovable-uploads/d401a2a1-423a-4203-a824-f6c0d97f46b2.png",
    link: "/projects/finlitera",
    tags: ["AI", "Finance", "React"]
  }
];

// Mock PR data - in a real app, you would fetch this from GitHub API
const pullRequests = [
  {
    title: "Update README.md",
    repo: "Sujal942/Talk-to-Code",
    status: "merged",
    date: "last month",
    commits: 62
  },
  {
    title: "Update chrome-extension-ci.yml",
    repo: "Sujal942/Talk-to-Code",
    status: "merged",
    date: "last month",
    commits: 4
  },
  {
    title: "Fix origin",
    repo: "Sujal942/Talk-to-Code",
    status: "merged",
    date: "last month",
    commits: 2
  }
];

const ContributionChart = () => (
  <div className="w-full bg-[#0d1117] rounded-lg p-4 mb-8 border border-vscode-border">
    <h3 className="text-xl font-semibold mb-2 text-white">{contributionData.totalContributions} contributions in the last year</h3>
    <div className="w-full h-24 bg-[#0d1117] mb-4 relative">
      <img 
        src="/lovable-uploads/2a30a6da-1eed-4a4e-8f7f-4173bb1fc042.png" 
        alt="GitHub contribution graph" 
        className="w-full h-full object-cover rounded"
      />
    </div>
    <div className="flex items-center gap-2">
      {contributionData.organizations.map((org, index) => (
        <div key={index} className="flex items-center bg-[#21262d] rounded-full px-3 py-1">
          <img src={org.image} alt={org.name} className="w-6 h-6 rounded-full mr-2" />
          <span className="text-sm text-white">{`@${org.name}`}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <Link to={project.link} className="block">
    <Card className="h-full bg-vscode-sidebar border border-vscode-border hover:border-vscode-accent transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
        <CardDescription className="text-vscode-text">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map(tag => (
            <span key={`${project.id}-${tag}`} className="text-xs px-2 py-1 bg-vscode-highlight rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Hey, I'm Arien!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
        <div className="md:col-span-3">
          <p className="text-lg mb-4">
            I'm a software engineer, open-source creator, and former professional chef. 
            I've been making websites since 1998 and <Link to="/blog" className="text-vscode-accent">writing on this blog</Link> for 
            the past decade.
          </p>
          
          <p className="text-lg mb-4">
            I enjoy weight-lifting, reading sci-fi and fantasy, playing retro video
            games, and spending time with my partner and friends.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <Link 
              to="/about"
              className="px-4 py-2 bg-vscode-accent hover:bg-opacity-80 text-white rounded-md transition-colors"
            >
              About Me
            </Link>
            <Link 
              to="/newsletter"
              className="px-4 py-2 border border-vscode-border hover:border-vscode-accent text-white rounded-md transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <img 
            src="/img/ironman.png" 
            alt="Ram illustration" 
            className="w-[200px] ml-28 rounded-lg"
          />
        </div>
      </div>

      {/* Open Source Contributions Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Github size={24} className="mr-2" />
            Open Source Contributions
          </h2>
          <a href="https://github.com/gitsofaryan" target="_blank" rel="noopener noreferrer" className="text-vscode-accent hover:underline">
            View GitHub Profile
          </a>
        </div>
        
        <ContributionChart />

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <GitPullRequest size={20} className="mr-2" />
            Recent Pull Requests
          </h3>
          <div className="space-y-3">
            {pullRequests.map((pr, index) => (
              <div key={index} className="p-4 bg-vscode-sidebar border border-vscode-border rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${pr.status === 'merged' ? 'bg-purple-500' : 'bg-green-500'}`}></div>
                    <span className="font-medium text-white">{pr.title}</span>
                  </div>
                  <span className="text-sm text-vscode-text">{pr.date}</span>
                </div>
                <div className="mt-2 text-sm text-vscode-text">{pr.repo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Projects Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-vscode-accent hover:underline">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.slice(0, 4).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Notes</h2>
          <Link to="/notes" className="text-vscode-accent hover:underline">
            See All
          </Link>
        </div>
        
        <p className="text-vscode-text mb-6">
          Personal notes about life, music, projects, and everything else.
        </p>
        
        <div className="space-y-6">
          <div className="border-b border-vscode-border pb-4">
            <div className="flex items-center mb-2">
              <span className="text-xs bg-vscode-highlight px-2 py-1 rounded mr-2">New</span>
              <Link to="/notes/year-in-review" className="text-xl text-white hover:text-vscode-accent">
                Year in Review: 2024 into 2025
              </Link>
            </div>
            <p className="text-vscode-text text-sm">March 2025</p>
          </div>
          
          <div className="border-b border-vscode-border pb-4">
            <Link to="/notes/redesign" className="text-xl text-white hover:text-vscode-accent">
              Redesign: Version 7.0: Sidebars, light-dark, and Bluesky
            </Link>
            <p className="text-vscode-text text-sm">December 2024</p>
          </div>
          
          <div className="border-b border-vscode-border pb-4">
            <Link to="/notes/year-in-review-2023" className="text-xl text-white hover:text-vscode-accent">
              Year in Review: 2023 into 2024
            </Link>
            <p className="text-vscode-text text-sm">January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
