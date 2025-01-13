'use client';

interface ResumeLinkProps {
  resumeUrl: string | null;
}

export default function ResumeLink({ resumeUrl }: ResumeLinkProps) {
  return (
    <a 
      href={resumeUrl ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
    >
      RESUME
    </a>
  );
} 