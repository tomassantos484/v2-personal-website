import Link from 'next/link';
import AwardCard from '../components/AwardCard';
import { getAllAwards } from '@/lib/contentful';
import ScrollBackground from '../components/ScrollBackground';

export const metadata = {
  title: 'Awards | Tomas J. Santos Yciano',
  description: 'Explore my achievements and recognition in technology, software engineering, competitions, and more!',
};

export default async function AwardsPage() {
  const awards = await getAllAwards();
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">Awards & Recognition</h1>
            <p className="text-white/70 mt-4 max-w-2xl">
              A collection of my accomplishments and recognition in technology, competitions, and professional achievements.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            {awards && awards.length > 0 ? (
              awards.map((award, index) => {
                // Transform description string to array for the AwardCard component
                const descriptionArray = award.description
                  .split('\n')
                  .filter(item => item.trim().length > 0);
                
                return (
                  <AwardCard
                    key={index}
                    title={award.award}
                    event={award.competitionName}
                    date={award.awardDate}
                    location={award.location}
                    description={descriptionArray}
                    category={award.category}
                    borderColor="border-white/50"
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 text-white">
                <p>No awards found. Please check back later.</p>
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