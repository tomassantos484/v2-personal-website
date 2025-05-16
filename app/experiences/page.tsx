import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';
import { getAllExperiences } from '@/lib/contentful';
import ScrollBackground from '../components/ScrollBackground';

export const metadata = {
  title: 'Experience | Tomas J. Santos Yciano',
  description: 'Explore my professional experience and career journey in technology, software engineering, and AI development.',
};

export default async function ExperiencesPage() {
  const experiences = await getAllExperiences();
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">Professional Experience</h1>
            <p className="text-white/70 mt-4 max-w-2xl">
              A comprehensive overview of my professional journey, showcasing my roles, responsibilities, and achievements in the tech industry.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl">
            {experiences && experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  company={experience.companyName}
                  role={experience.position}
                  duration={experience.duration}
                  description={experience.description}
                  link={`https://www.google.com/search?q=${encodeURIComponent(experience.companyName)}`}
                  borderColor={`border-white/${30 + (Math.min(Math.max(experience.priority, 1), 5) - 1) * 10}`}
                />
              ))
            ) : (
              <div className="text-center py-16 text-white">
                <p>No experience entries found. Please check back later.</p>
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