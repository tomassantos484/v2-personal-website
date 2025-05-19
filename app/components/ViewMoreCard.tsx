'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ViewMoreCard({ 
  useProjectsPage = false, 
  useExperiencesPage = false, 
  link = null 
}: { 
  useProjectsPage?: boolean, 
  useExperiencesPage?: boolean, 
  link?: string | null 
}) {
  // Determine the link based on props
  const targetLink = link || 
    (useProjectsPage ? "/projects" : 
     useExperiencesPage ? "/experiences" : 
     "https://github.com/tomassantos484");
  
  // Determine if link is external
  const isExternalLink = targetLink.startsWith('http');
  
  // Determine the text based on the link
  let linkText = "Check out more!";
  if (useProjectsPage) {
    linkText = "Check out all of my projects!";
  } else if (useExperiencesPage) {
    linkText = "Check out all of my experiences!";
  } else if (link && link === "/awards") {
    linkText = "Check out all of my awards!";
  } else if (!link) {
    linkText = "Check out more of my projects on GitHub!";
  }
  
  // Determine the icon based on the link
  let iconName = "mdi:arrow-right";
  if (useProjectsPage) {
    iconName = "mdi:file-document-multiple";
  } else if (useExperiencesPage) {
    iconName = "mdi:briefcase";
  } else if (link && link === "/awards") {
    iconName = "mdi:trophy";
  } else if (!link) {
    iconName = "mdi:github";
  }

  return (
    <div
      className={`border-2 p-8 transition-all duration-700 ease-in-out transform flex flex-col h-full
        group border-white/40 hover:border-yellow-300`}
    >
      <Link 
        href={targetLink}
        target={isExternalLink ? "_blank" : "_self"} 
        rel={isExternalLink ? "noopener noreferrer" : ""}
        className="flex-1 flex flex-col items-center"
      >
        <h3 className="text-3xl mb-6 transition-colors duration-200 text-white group-hover:text-yellow-300">
          View More ⇒
        </h3>
        <span className="mb-4 text-white text-sm text-center">
          {linkText}
        </span>
        <Icon 
          icon={iconName}
          className="w-32 h-32 text-white/50 transition-colors duration-200 
            group-hover:text-yellow-300/50 hover:text-yellow-300"
        />
      </Link>
    </div>
  );
} 