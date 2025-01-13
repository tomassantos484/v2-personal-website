import { createClient } from 'contentful';

const getClient = () => {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    return null;
  }
  
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const getHeroImage = async () => {
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
      const imageUrl = response.items[0].fields.tomasTransparentHeadshot.fields.file.url;
      return `https:${imageUrl}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching hero image:', error);
    return null;
  }
};

export const getResume = async () => {
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
      const resumeUrl = response.items[0].fields.myResume.fields.file.url;
      return `https:${resumeUrl}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching resume:', error);
    return null;
  }
}; 