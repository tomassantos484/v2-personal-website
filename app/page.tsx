// Importing Components
import ScrollBackground from './components/ScrollBackground';
import Link from 'next/link';
import NavItem from './components/NavItem';
import LoadingScreen from './components/LoadingScreen';
import StoryImage from './components/StoryImage';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import RelevantCoursework from './components/RelevantCoursework';
import AwardCard from './components/AwardCard';
import ViewMoreCard from './components/ViewMoreCard';
import GalleryCarousel from './components/GalleryCarousel';
import Image from 'next/image';
import { getHeroImage, getResume, getProjects, getExperiences, getAllAwards } from '@/lib/contentful';
import ResumeLink from './components/ResumeLink';
import ScrollFadeIn from './components/ScrollFadeIn';

//Main Page
export default async function Home() {
  const heroImage = await getHeroImage();
  const resumeLink = await getResume();
  const projects = await getProjects();
  const experiences = await getExperiences();
  const awards = await getAllAwards();
  
  return (
    <>
      <LoadingScreen />
      <ScrollBackground />
      <div className="min-h-screen font-mono relative animate-siteLoad overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="space-y-8 w-full lg:w-auto text-center lg:text-left">
              {/* Section Headers */}

              {/* Welcome Text */}
              <div>
                <h2 className="text-yellow-300 text-xl md:text-2xl mb-2">Welcome! I&apos;m</h2>
                <h1 className="text-white text-4xl md:text-5xl font-bold">
                  Tomas J. Santos Yciano.
                </h1>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <NavItem
                  title="MY STORY"
                  subtitle="From the D.R. to the Big Apple, here's my journey."
                  href="#story"
                />

                <NavItem
                  title="PROJECTS"
                  subtitle="Turning big ideas into bold projects."
                  href="#projects"
                />

                <NavItem
                  title="EXPERIENCE"
                  subtitle="Learning, leading, and building along the way."
                  href="#experience"
                />

                <NavItem
                  title="EDUCATION"
                  subtitle="Proudly learning and growing at St. John's University."
                  href="#education"
                />

                <NavItem
                  title="AWARDS"
                  subtitle="Recognition for innovation and excellence."
                  href="#awards"
                />

                <NavItem
                  title="GALLERY"
                  subtitle="Snapshots of my journey, one moment at a time."
                  href="#gallery"
                />
              </nav>

              {/* Most Important Social Links */}
              <div className="pt-4">
                <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
                  <div className="flex space-x-4 text-lg whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
                    <Link 
                      href="mailto:tomassantos484@gmail.com" 
                      className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >
                      EMAIL
                    </Link>
                    <span className="text-white/30">|</span>
                    <Link 
                      href="https://github.com/tomassantos484" 
                      className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >
                      GITHUB
                    </Link>
                    <span className="text-white/30">|</span>
                    <Link 
                      href="https://www.linkedin.com/in/tjsy" 
                      className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >
                      LINKEDIN
                    </Link>
                    <span className="text-white/30">|</span>
                    <ResumeLink resumeUrl={resumeLink} />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-48 sm:w-64 lg:w-auto">
              {heroImage && (
                <div className="relative w-[200px] h-[240px] sm:w-[280px] sm:h-[320px] lg:w-[500px] lg:h-[600px] opacity-0 animate-imageAppear transition-opacity duration-500 hover:opacity-80">
                  <Image
                    src={heroImage || ''}
                    alt="Tomas' Headshot"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 500px"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section id="story" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto">
              <div className="space-y-6 max-w-2xl w-full lg:w-1/2">
                <div className="space-y-2">
                  <h2 className="text-yellow-300 text-4xl mb-2">1</h2>
                  <h3 className="text-white text-4xl font-bold">My Story.</h3>
                </div>
                
                <div className="text-white space-y-6 text-base">
                  <p>
                    Born in the Dominican Republic and raised in New York City, I&apos;m a full-stack engineer and a Fast Track B.S./M.S. Computer Science and Data Science student at St. John&apos;s University, where I serve as President of the STJ ACM Student Chapter. 
                    Through internships at <a 
                      href="https://www.ey.com/en_us" 
          target="_blank"
          rel="noopener noreferrer"
                      className="text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >Ernst & Young (EY)</a> and <a 
                      href="https://www.headstarter.co" 
          target="_blank"
          rel="noopener noreferrer"
                      className="text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >Headstarter</a>, I&apos;ve honed my skills in building impactful solutions and bridging technical expertise with business acumen.
                  </p>
                  <p>
                    Outside of work and academics, I enjoy traveling, playing and watching sports, reading, and exploring video games. 
                    Grounded in family, faith in Jesus Christ, and community, I&apos;m passionate about leveraging technology to drive meaningful change.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <StoryImage />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">2</h2>
              <h3 className="text-white text-4xl font-bold">Projects.</h3>
              <p className="text-white/70 mt-2">
                Showcasing my top projects. <Link href="/projects" className="text-yellow-300 hover:underline">View all projects →</Link>
              </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {projects && projects.length > 0 ? (
                <>
                  {projects.map((project, index) => {
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
                  })}
                  <ViewMoreCard useProjectsPage={true} />
                </>
              ) : (
                <div className="col-span-full text-center py-16 text-white">
                  <p>No projects found. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">3</h2>
              <h3 className="text-white text-4xl font-bold">Experience.</h3>
              <p className="text-white/70 mt-2">
                Showcasing my professional journey. <Link href="/experiences" className="text-yellow-300 hover:underline">View all experiences →</Link>
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {experiences && experiences.length > 0 ? (
                <>
                  {experiences.slice(0, 3).map((experience, index) => (
                    <ExperienceCard
                      key={index}
                      company={experience.companyName}
                      role={experience.position}
                      duration={experience.duration}
                      description={experience.description}
                      link={`https://www.google.com/search?q=${encodeURIComponent(experience.companyName)}`}
                      borderColor={`border-white/${30 + (Math.min(Math.max(experience.priority, 1), 5) - 1) * 10}`}
                    />
                  ))}
                  <ViewMoreCard useExperiencesPage={true} />
                </>
              ) : (
                <div className="col-span-full text-center py-16 text-white">
                  <p>No experience entries found. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">4</h2>
              <h3 className="text-white text-4xl font-bold">Education.</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <EducationCard
                school="St. John's University"
                degree="Fast Track B.S./M.S. in Computer Science/Data Science"
                duration="May 2026/May 2027"
                description={[
                  "Pursuing accelerated dual degree program in Computer Science and Data Science.",
                  "President, STJ ACM - Leading weekly technical workshops, managing chapter website, 100+ active members.",
                  "Co-VP, STJ FBLA - Largest business career & technical student organization in the world, led chapter's university recognition.",
                  "Network Leader, R.I.S.E. Network - Mentoring freshmen through academic guidance and community engagement.",
                  "Dean's List Scholar, active in hackathons and professional development initiatives."
                ]}
                link="https://www.stjohns.edu"
                borderColor="border-white/70"
              />
            </div>
            <RelevantCoursework />
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">5</h2>
              <h3 className="text-white text-4xl font-bold">Awards.</h3>
              <p className="text-white/70 mt-2">
                Recent recognition and accomplishments. <Link href="/awards" className="text-yellow-300 hover:underline">View all awards →</Link>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {awards && awards.length > 0 ? (
                <>
                  {awards.slice(0, 3).map((award, index) => {
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
                        borderColor="border-white/80"
                      />
                    );
                  })}
                  <ViewMoreCard link="/awards" />
                </>
              ) : (
                <div className="col-span-full text-center py-16 text-white">
                  <p>No awards found. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-transparent mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">6</h2>
              <h3 className="text-white text-4xl font-bold">Gallery.</h3>
            </div>
            
            <GalleryCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-transparent mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">7</h2>
              <h3 className="text-white text-4xl font-bold">Get In Touch.</h3>
            </div>
            
            <div className="max-w-3xl mb-12">
              <p className="text-white/80 text-lg leading-relaxed">
                Let&apos;s connect! Whether you have a project in mind, a question about my work, or just want to say hello, I&apos;m always eager to hear from you. Feel free to reach out through any of my contact details.
              </p>
            </div>
            
            {/* Contact Section Links */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
              <div className="flex space-x-4 text-lg whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
                <Link 
                  href="mailto:tomassantos484@gmail.com"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  EMAIL
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://github.com/tomassantos484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  GITHUB
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://www.linkedin.com/in/tjsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  LINKEDIN
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://x.com/TomasJSantosY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  X/TWITTER
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://instagram.com/tomassantos484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  INSTAGRAM
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://medium.com/@tomassantos484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  MEDIUM
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  href="https://calendly.com/tomassantos484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                >
                  CALENDLY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Message */}
        <ScrollFadeIn>
          <div className="container mx-auto px-4 text-center text-white py-12">
            <p className="text-lg">
              So you&apos;ve reached the bottom of the ocean! Thank you for visiting my website.
              I left a surprise for you{' '}
              <Link
                href="https://bit.ly/4hmiWUR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
              >
                here!
              </Link>
            </p>
          </div>
        </ScrollFadeIn>

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
