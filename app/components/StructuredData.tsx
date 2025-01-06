export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tomas J. Santos Yciano",
          jobTitle: "Full-Stack Engineer",
          url: "https://www.tjsy.dev",
          sameAs: [
            "https://github.com/tomassantos484",
            "https://www.linkedin.com/in/tjsy",
            "https://twitter.com/TomasJSantosY"
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "St. John's University"
          },
          knowsAbout: [
            "Full Stack Development",
            "Software Engineering",
            "AI Development",
            "Web Development",
            "Data Science",
            "Cybersecurity"
          ]
        })
      }}
    />
  );
} 