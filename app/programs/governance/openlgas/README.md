# OpenLGAs Page Implementation Guide

This document provides guidelines for implementing the OpenLGAs page, particularly regarding image requirements and page structure.

## About the Initiative

The #OpenLGAs Project is DEAN Initiative's flagship initiative that seeks to drive accountability, transparency, and openness at the third tier of government - the local government administration. This tier of government, though the closest to the people, has remained highly inaccessible.

## Image Requirements

The page requires several images that need to be placed in the `/public/openlgas/` directory. Here are the specifications:

1. **Hero Image (`hero.jpg`)**
   - Content: A high-quality image showing local government engagement, town hall meetings, or transparency-related activities
   - Ideal dimensions: 1920x1080px
   - The image will have an overlay applied, so it should be clear enough to be visible through a dark gradient

2. **About Section Image (`about.jpg`)**
   - Content: Image showing community engagement with local government representatives
   - Ideal dimensions: 800x1000px

3. **TownHall Meeting Images (`townhall1.jpg` and `townhall2.jpg`)**
   - Content: Images from town hall meetings with local government officials and citizens
   - Ideal dimensions: 800x600px each

4. **Award Ceremony Image (`award.jpg`)**
   - Content: Image from the Local Government Accountability Award ceremony
   - Ideal dimensions: 800x600px

5. **Capacity Building Image (`capacity.jpg`)**
   - Content: Image showing capacity building workshops with local government administrators
   - Ideal dimensions: 800x600px

## Page Structure

The page is structured as follows:

1. **Hero Section**: Introduction to #OpenLGAs with a compelling headline and brief description
2. **About Section**: Detailed information about the initiative, its goals, and approach
3. **Achievements Section**: Highlighting key accomplishments of the #OpenLGAs project
4. **Gallery Section**: Visual showcase of the initiative's activities and events
5. **Call to Action Section**: Encouraging visitors to get involved with the initiative
6. **Join Us Section**: A standard component used across the site for visitor engagement

## Notes for Developers

1. **Image Optimization**: All images should be optimized for web to ensure fast loading times. Consider using formats like WebP if supported.

2. **Animation Triggers**: The page uses Framer Motion animations that are triggered when elements come into view. These are handled by the `useInView` hook.

3. **Image Credits**: If images are sourced from partners or external sources, consider adding proper attribution.

4. **Accessibility**: Ensure all images have appropriate alt text for screen readers.

5. **Image Preloading**: The page implements image preloading in the `useEffect` hook of the main page component to improve user experience.

6. **Google Drive Links**: The images provided in Google Drive links should be downloaded and placed in the appropriate directory with the filenames specified above:
   - https://drive.google.com/drive/folders/1XI1Xo2wR1cuQqfH13rhubao69sX9A3s_?usp=sharing
   - https://drive.google.com/drive/folders/1-ovhBzIeLdgRbaXlYyIg2u8TKhxNMQi_?usp=drive_link
   - https://drive.google.com/drive/folders/1THq96sho5JVl9vtCf1lRqcjdh80bAf4w?usp=drive_link
   - https://drive.google.com/drive/folders/11lRFweNEdtEmorIqgN2EWQe4VXlqEM2O?usp=drive_link

## Contact

For any inquiries related to this page implementation, please contact the development team. 