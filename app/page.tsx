import ScrollBackground from './components/ScrollBackground';

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
            <p className="text-xl md:text-2xl">Your Tagline Here</p>
          </div>
        </section>

        {/* My Story Section */}
        <section id="story" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">My Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-200">Your story content here...</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add your skills items here */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add your project cards here */}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Experience</h2>
            <div className="max-w-3xl mx-auto">
              {/* Add your experience timeline here */}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
            <div className="max-w-3xl mx-auto">
              {/* Add your education details here */}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Add your gallery images here */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
            <div className="max-w-md mx-auto">
              {/* Add your contact form or contact information here */}
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
