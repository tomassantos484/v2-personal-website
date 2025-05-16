import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '@/lib/contentful';
import ScrollBackground from '../components/ScrollBackground';

export const metadata = {
  title: 'Projects | Tomas J. Santos Yciano',
  description: 'Explore a comprehensive collection of software development projects by Tomas J. Santos Yciano, showcasing skills in web development, AI, and more.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  
  return (
    <>
      <ScrollBackground />
      <div className="min-h-screen font-mono relative overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 py-20">
          {/* Header with back link */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-block text-white hover:text-yellow-300 transition-colors mb-8 border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">All of My Projects</h1>
            <p className="text-white/70 mt-4 max-w-2xl">
              A comprehensive collection of my software development projects, showcasing a diverse range of skills and technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => {
                // Calculate opacity based on priority (higher priority = more visible)
                // Map from priority 1-5 to opacity 30-70%
                const opacityLevel = 30 + (Math.min(Math.max(project.priority, 1), 5) - 1) * 10;
                const borderColor = `border-white/${opacityLevel}`;
                
                return (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    borderColor={borderColor}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 text-white">
                <p>No projects found. Please check back later.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-6 bg-transparent border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-white">
            <p>© {new Date().getFullYear()} Tomas J. Santos Yciano. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
} 