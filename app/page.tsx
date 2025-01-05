// Importing Components

import ScrollBackground from './components/ScrollBackground';
import Link from 'next/link';
import NavItem from './components/NavItem';
import ProfileImage from './components/ProfileImage';
import LoadingScreen from './components/LoadingScreen';
import StoryImage from './components/StoryImage';
import ProjectCard from './components/ProjectCard';
import { default as LinkedText } from './components/LinkedText';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import RelevantCoursework from './components/RelevantCoursework';
import AwardCard from './components/AwardCard';
import ViewMoreCard from './components/ViewMoreCard';
import GalleryCarousel from './components/GalleryCarousel';


export default function Home() {
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
                  title="GALLERY"
                  subtitle="Snapshots of my journey, one moment at a time."
                  href="#gallery"
                />
              </nav>

              {/* Social Links */}
              <div className="pt-4">
                <div className="text-white space-x-4 text-xl">
                  <Link 
                    href="mailto:tomassantos484@gmail.com" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    EMAIL
                  </Link>
                  <span>|</span>
                  <Link 
                    href="https://github.com/tomassantos484" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    GITHUB
                  </Link>
                  <span>|</span>
                  <Link 
                    href="https://www.linkedin.com/in/tjsy" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    LINKEDIN
                  </Link>
                  <span>|</span>
                  <a 
                    href="/TSY_Resume_Sept2024_V5.pdf" 
                    download="Tomas_Santos_Yciano_Resume.pdf"
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    RESUME
          </a>
        </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-48 sm:w-64 lg:w-auto">
              <ProfileImage />
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
            </div>

            {/* Project Cards Row 1*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <ProjectCard
                title="Codetionary Bot"
                description="A Discord bot that helps Computer Science students succeed by generating personalized learning roadmaps, providing interactive tutorials, and creating custom code examples in their preferred programming language. Winner of the STJ ACM x Headstarter AI Hackathon 2024."
                technologies="Python | Discord API | MythoMist 7B LLM"
                link="https://github.com/tomassantos484/codetionary-ai-hackathon"
                borderColor="border-white/20"
              />
              <ProjectCard
                title="ConagraGPT"
                description={
                  <div>
                    A <LinkedText href="https://chatgpt.com/g/g-BAB9OZkz2-conagragpt">
                      custom GPT solution
                    </LinkedText> developed for Conagra Brands to revolutionize market research in the food industry. Leverages web-scraped data and AI to identify food trends, analyze nutritional needs, and discover market gaps. Won 3rd Place in FBLA&apos;s National Technology & Computer Science Case Competition 2024.
                  </div>
                }
                technologies="OpenAI GPT-4o | Apify Web Scraping"
                link="https://github.com/tomassantos484/ConagraGPT"
                borderColor="border-white/20"
              />
              <ProjectCard
                title="VCRTS"
                description="A distributed cloud computing system that leverages parked vehicles' computational resources to create a static cloud environment. Features real-time job scheduling, resource allocation, and a comprehensive GUI for both clients and administrators. Capstone project for Software Engineering (CUS 1166), built with a team of 4 developers."
                technologies="Java | Java Swing | MySQL"
                link="https://github.com/Alegacki21/VCRTS-SWE-Project"
                borderColor="border-white/20"
              />

              {/* Project Cards Row 2*/}
              <ProjectCard
                title="SJU UIS DBMS"
                description="A graduate-level database management system that replicates St. John's University's Information System (UIS). Features normalized database design, robust student/faculty management, and dynamic enrollment tracking. Built for the graduate-level Database Management Systems (CUS 510) course."
                technologies="Python Flask | SQLAlchemy | MySQL"
                link="https://github.com/tomassantos484/SJU-UIS-DBMS-Project"
                borderColor="border-white/30"
              />
              <ProjectCard
                title="Baseball Buddy"
                description="A feature-rich Discord bot serving 1000+ users across multiple servers. Leverages MLB data, AI, and GIF APIs to provide player statistics, baseball fun facts, and interactive entertainment. Originally conceived as a Twitter bot, pivoted to Discord for better API accessibility and user engagement."
                technologies="Python | Discord API | MythoMist 7B LLM"
                link="https://github.com/tomassantos484/Baseball-Buddy"
                borderColor="border-white/30"
              />
              <ProjectCard
                title="PantryPulse"
                description="A modern web application that helps users efficiently track and manage their pantry inventory. Features real-time updates and cloud synchronization for seamless inventory management across devices."
                technologies=" TypeScript | React | Next.js | Firebase"
                link="https://github.com/tomassantos484/Pantry-Pulse"
                borderColor="border-white/30"
              />

              {/* Project Cards Row 3*/}
              <ProjectCard
                title="V2 Personal Website"
                description="This website! The modern and responsive successor to my previous website, built with React, NextJS, Tailwind CSS, and TypeScript. Features a clean and intuitive design, with a focus on showcasing my journey as a full-stack engineer."
                technologies="TypeScript | React | Next.js | Tailwind CSS"
                link="https://github.com/tomassantos484/v2-personal-website"
                borderColor="border-white/40"
              />
              <ProjectCard
                title="V1 Personal Website"
                description="My first personal portfolio site, created using an HTML5Up template. A simple yet effective showcase of my early web development skills, demonstrating proficiency in core web technologies while maintaining a professional and user-friendly interface."
                technologies="HTML/CSS | SASS | JavaScript"
                link="https://github.com/tomassantos484/tomassantos484.github.io"
                borderColor="border-white/40"
              />
              <ViewMoreCard />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">3</h2>
              <h3 className="text-white text-4xl font-bold">Experience.</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <ExperienceCard
                company="Ernst & Young, LLP (EY)"
                role="Launch National Technology Intern"
                duration="June 2024 - August 2024"
                description={[
                  "Completed rotations in AI & Data and Cybersecurity with Fortune 500 clients.",
                  "Created OCM plan for pharmaceutical client to drive AI-powered data marketplace adoption.",
                  "Supported cybersecurity alliance initiatives through strategic presentations.",
                  "Earned AI Engineering Bronze Badge - Prompt Engineering, LLMs, and Responsible AI.",
                  "Secured return offer for Summer 2025 Launch National Technology Consulting position."
                ]}
                link="https://www.ey.com/en_us"
                borderColor="border-white/50"
              />
              
              <ExperienceCard
                company="Headstarter"
                role="Software Engineer Fellow"
                duration="August 2024"
                description={[
                  "Built multiple AI-powered projects during the SWE Fellowship, enhancing technical and presentation skills.",
                  "Transformed the Codetionary Discord Bot into a full-stack web platform using Next.js and React.",
                  "Collaborated with software engineers and fellows to expand the hackathon-winning project's capabilities.",
                  "Gained hands-on experience with modern web development practices and AI integration.",
                  "Expanded professional network through active participation in the Headstarter community."
                ]}
                link="https://www.headstarter.co"
                borderColor="border-white/60"
              />
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
                duration="Expected Graduation Date: May 2026/May 2027"
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
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <AwardCard
                title="1st Place Hackathon Winner"
                event="STJ ACM x Headstarter AI Hackathon"
                date="March 2024"
                location="St. John's University - Queens, NY"
                description={[
                  "Led team of 4 to develop Codetionary, an AI-powered Discord bot for CS education",
                  "Implemented LLM integration for personalized learning paths and code generation",
                  "Presented solution to panel of judges and Headstarter Co-Founder, Faizan Ahmed"
                ]}
                category="Artificial Intelligence & Education"
                borderColor="border-white/80"
              />
              
              <AwardCard
                title="3rd Place, Technology & CompSci Case Competition"
                event="2024 FBLA National Leadership Conference"
                date="June 2024"
                location="Orlando, FL"
                description={[
                  "Developed ConagraGPT, an AI solution for food industry market research",
                  "Integrated web scraping and GPT-4 for trend analysis and market gap identification",
                  "Competed against top business students nationwide"
                ]}
                category="Technology & Business"
                borderColor="border-white/80"
              />
              
              <AwardCard
                title="2nd Place, Computer Applications Objective Test"
                event="2024 FBLA State Leadership Conference"
                date="February 2024"
                location="Kean University, Union, NJ"
                description={[
                  "Demonstrated expertise in software applications and computer concepts",
                  "Competed in timed objective test covering various technical topics",
                  "Qualified for 2024 FBLA National Leadership Conference in Orlando, FL"
                ]}
                category="Technical Knowledge"
                borderColor="border-white/80"
              />
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

        {/* Footer */}
        <footer className="py-6 bg-transparent border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-white">
            <p>© {new Date().getFullYear()} Tomas Santos Yciano. All rights reserved.</p>
          </div>
      </footer>
    </div>
    </>
  );
}
