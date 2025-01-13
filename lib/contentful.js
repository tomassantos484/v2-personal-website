import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

// Verify environment variables are loaded
if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  console.error('Missing required Contentful environment variables');
}

export const getHeroImage = async () => {
  try {
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

export const testContentful = async () => {
  try {
    const image = await getHeroImage();
    console.log('Fetched image URL:', image);
    return image;
  } catch (error) {
    console.error('Contentful test failed:', error);
    return null;
  }
};

export const getResume = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'resume',
      limit: 1,
    });

    console.log('Contentful response:', response);

    if (response.items.length > 0) {
      const resumeUrl = response.items[0].fields.myResume.fields.file.url;
      return `https:${resumeUrl}`;
    }

    console.log('No resume found in response');
    return null;
  } catch (error) {
    console.error('Error fetching resume:', error);
    return null;
  }
}; 