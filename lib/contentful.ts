import { createClient } from 'contentful';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  link: string;
  date?: string;
  priority: number;
}

const getClient = () => {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    return null;
  }
  
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const getHeroImage = async (): Promise<string | null> => {
  try {
    const client = getClient();
    if (!client) {
      console.warn('Contentful is not configured');
      return null;
    }

    const response = await client.getEntries({
      content_type: 'heroSectionPicture',
      limit: 1,
    });

    if (response.items.length > 0) {
      // Using type assertion to access fields
      const item = response.items[0];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const imageUrl = (item.fields as any).tomasTransparentHeadshot.fields.file.url;
      return `https:${imageUrl}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching hero image:', error);
    return null;
  }
};

export const getResume = async (): Promise<string | null> => {
  try {
    const client = getClient();
    if (!client) {
      console.warn('Contentful is not configured');
      return null;
    }

    const response = await client.getEntries({
      content_type: 'resume',
      limit: 1,
    });

    if (response.items.length > 0) {
      // Using type assertion to access fields
      const item = response.items[0];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resumeUrl = (item.fields as any).myResume.fields.file.url;
      return `https:${resumeUrl}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching resume:', error);
    return null;
  }
};

export const getProjects = async (limit = 8): Promise<ProjectItem[] | null> => {
  try {
      const client = getClient();
      if (!client) {
        console.warn('Contentful is not configured');
        return null;
      }
  
      // Now that we know the correct content type is 'projects', use it directly
      const response = await client.getEntries({
        content_type: 'projects',
        limit: limit
      });
      
      if (!response.items.length) {
        console.warn('No projects found in Contentful');
        return null;
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const projects = response.items.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fields = item.fields as any;
        return {
          title: fields.projectName || 'Untitled Project',
          description: fields.projectDescription || 'No description available',
          technologies: fields.technologiesUsed || '',
          link: fields.linkToProject || 'https://github.com/tomassantos484',
          date: fields.dateOfProject || '',
          priority: fields.priority || 1 // Default to lowest priority if not specified
        };
      });
      
      // Sort projects by priority (high to low) and then by date (recent to old) as tiebreaker
      return projects.sort((a, b) => {
        // Primary sort by priority (high to low)
        if (b.priority !== a.priority) {
          return b.priority - a.priority;
        }
        
        // Secondary sort by date (if available and priority is the same)
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        
        return 0;
      });
      
    } catch (error) {
      console.error('Error fetching projects:', error);
      return null;
    }
};

export const getAllProjects = async (): Promise<ProjectItem[] | null> => {
  // Get all projects with a high limit (adjust if you have more than 100 projects)
  return getProjects(1000);
}; 