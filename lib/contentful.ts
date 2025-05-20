import { createClient } from 'contentful';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  link: string;
  date?: string;
  priority: number;
}

interface ExperienceItem {
  title: string;
  companyName: string;
  position: string;
  duration: string;
  startDate?: string;
  endDate?: string;
  description: string[];
  priority: number;
}

interface AwardItem {
  title: string;
  award: string;
  competitionName: string;
  location: string;
  description: string;
  awardDate: string;
  awardReceivedDate?: string;
  category: string;
}

interface GalleryItem {
  title: string;
  image: string;
  imageCaption: string;
}

// Content structure types for rich text content
interface RichTextContent {
  nodeType: string;
  content?: RichTextContent[];
  value?: string;
  data?: Record<string, unknown>;
}

interface RichTextField {
  data: Record<string, unknown>;
  content: RichTextContent[];
  nodeType: string;
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
  
      const response = await client.getEntries({
        content_type: 'projects',
        limit: limit
      });
      
      if (!response.items.length) {
        console.warn('No projects found in Contentful');
        return null;
      }
      
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
  // Get all projects (Imagine making 1000 projects lol)
  return getProjects(1000);
};

export const getExperiences = async (limit = 10): Promise<ExperienceItem[] | null> => {
  try {
    const client = getClient();
    if (!client) {
      console.warn('Contentful is not configured');
      return null;
    }

    const response = await client.getEntries({
      content_type: 'experience',
      limit: limit
    });
    
    if (!response.items.length) {
      console.warn('No experiences found in Contentful');
      return null;
    }
    
    const experiences = response.items.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = item.fields as any;
      
      // For the description, check all possible field names
      let descriptionArray: string[] = [];
      
      // Option 1: Direct array in description field
      if (Array.isArray(fields.description)) {
        descriptionArray = fields.description;
      } 
      // Option 2: Array in experienceDescription field
      else if (Array.isArray(fields.experienceDescription)) {
        descriptionArray = fields.experienceDescription;
      }
      // Option 3: Rich text format in experienceDescription
      else if (fields.experienceDescription && fields.experienceDescription.content) {
        try {
          // Rich text format parsing
          const richText = fields.experienceDescription as RichTextField;
          
          // Recursively extract text from rich text nodes
          const extractTextFromNode = (node: RichTextContent): string[] => {
            const texts: string[] = [];
            
            // If it's a text node, add its value
            if (node.nodeType === 'text' && node.value) {
              return [node.value];
            }
            
            // If it has content, process each child node
            if (node.content && Array.isArray(node.content)) {
              // For paragraphs, collect all text and make it one entry
              if (node.nodeType === 'paragraph') {
                const paragraphText = node.content
                  .map(childNode => extractTextFromNode(childNode).join(''))
                  .join('');
                
                if (paragraphText.trim()) {
                  return [paragraphText];
                }
              } else {
                // For other node types, process each child separately
                node.content.forEach(childNode => {
                  texts.push(...extractTextFromNode(childNode));
                });
              }
            }
            
            return texts;
          };
          
          // Extract text from the document
          richText.content.forEach(block => {
            const extractedTexts = extractTextFromNode(block);
            descriptionArray.push(...extractedTexts);
          });
        } catch (err) {
          console.error('Error parsing rich text description:', err);
        }
      }
      
      return {
        title: fields.title || '',
        companyName: fields.companyName || '',
        position: fields.position || '',
        duration: fields.duration || '',
        startDate: fields.startDate || '',
        endDate: fields.endDate || '',
        description: descriptionArray.length > 0 ? descriptionArray : ['No description available'],
        priority: fields.priority || 1
      };
    });
    
    // Sort experiences by priority (high to low) and then by start date (recent to old) as tiebreaker
    return experiences.sort((a, b) => {
      // Primary sort by priority (high to low)
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      
      // Secondary sort by start date (if available and priority is the same)
      if (a.startDate && b.startDate) {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }
      
      return 0;
    });
    
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return null;
  }
};

export const getAllAwards = async (): Promise<AwardItem[] | null> => {
  try {
    const client = getClient();
    if (!client) {
      console.warn('Contentful is not configured');
      return null;
    }

    const response = await client.getEntries({
      content_type: 'awards',
      limit: 1000
    });
    
    if (!response.items.length) {
      console.warn('No awards found in Contentful');
      return null;
    }
    
    const awards = response.items.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = item.fields as any;
      
      // Extract rich text description if available
      let description = '';
      
      // First, check if we have a rich text field
      if (fields.awardDescription && fields.awardDescription.content) {
        try {
          // Reuse the same extraction function that works for experiences
          const extractTextFromNode = (node: RichTextContent): string[] => {
            const texts: string[] = [];
            
            // If it's a text node, add its value
            if (node.nodeType === 'text' && node.value) {
              return [node.value];
            }
            
            // If it has content, process each child node
            if (node.content && Array.isArray(node.content)) {
              // For paragraphs, collect all text and make it one entry
              if (node.nodeType === 'paragraph') {
                const paragraphText = node.content
                  .map(childNode => extractTextFromNode(childNode).join(''))
                  .join('');
                
                if (paragraphText.trim()) {
                  return [paragraphText];
                }
              } 
              // For unordered lists, process each list item
              else if (node.nodeType === 'unordered-list' || node.nodeType === 'ordered-list') {
                node.content.forEach(childNode => {
                  if (childNode.nodeType === 'list-item' && childNode.content) {
                    const listItemText = childNode.content
                      .map(listItemContent => {
                        if (!listItemContent.content) return '';
                        return listItemContent.content
                          .map(textNode => textNode.value || '')
                          .join('') || '';
                      })
                      .join('');
                    
                    if (listItemText.trim()) {
                      texts.push(listItemText);
                    }
                  }
                });
              } else {
                // For other node types, process each child separately
                node.content.forEach(childNode => {
                  texts.push(...extractTextFromNode(childNode));
                });
              }
            }
            
            return texts;
          };
          
          // Process the rich text content
          const richText = fields.awardDescription as RichTextField;
          const extractedTexts: string[] = [];
          
          richText.content.forEach(block => {
            extractedTexts.push(...extractTextFromNode(block));
          });
          
          // Join all the extracted texts with newlines
          description = extractedTexts.join('\n');
        } catch (err) {
          console.error('Error parsing award description rich text:', err);
        }
      } else if (fields.awardDescription) {
        // If it's just a plain string
        description = fields.awardDescription;
      }
      
      // If there's still no description, try a fallback
      if (!description && fields.description) {
        description = fields.description;
      }
      
      return {
        title: fields.title || '',
        award: fields.award || 'Untitled Award',
        competitionName: fields.competitionName || 'Untitled Competition',
        location: fields.location || '',
        description: description || 'No description available',
        awardDate: fields.awardDate || '',
        awardReceivedDate: fields.awardReceivedDate || '',
        category: fields.category || ''
      };
    });
    
    // Sort awards by date (recent to oldest) with robust date parsing
    const sortedAwards = awards.sort((a, b) => {
      try {
        // Parse dates or use fallbacks
        const dateA = a.awardReceivedDate ? new Date(a.awardReceivedDate) : 
                      a.awardDate ? new Date(a.awardDate) : new Date(0);
        
        const dateB = b.awardReceivedDate ? new Date(b.awardReceivedDate) : 
                      b.awardDate ? new Date(b.awardDate) : new Date(0);
        
        // Compare dates (most recent first)
        return dateB.getTime() - dateA.getTime();
      } catch (error) {
        console.error("Error in award sorting:", error);
        return 0;
      }
    });
    
    return sortedAwards;
    
  } catch (error) {
    console.error('Error fetching awards:', error);
    return null;
  }
};

export const getAllExperiences = async (): Promise<ExperienceItem[] | null> => {
  // Get all experiences (Imagine having 1000 experiences lol)
  return getExperiences(1000);
};

export const getGalleryImages = async (): Promise<GalleryItem[]> => {
  try {
    const client = getClient();
    if (!client) {
      console.warn('Contentful is not configured');
      return [];
    }

    const response = await client.getEntries({
      content_type: 'gallery',
      order: ['fields.title'], // Optional: order by title
    });

    if (!response.items.length) {
      console.warn('No gallery images found in Contentful');
      return [];
    }

    return response.items.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = item.fields as any;
      const imageUrl = fields.image?.fields?.file?.url;
      return {
        title: fields.title || '',
        image: imageUrl ? `https:${imageUrl}` : '',
        imageCaption: fields.imageCaption || '',
      };
    });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}; 


