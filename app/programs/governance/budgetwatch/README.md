# BudgetWatch Page Implementation Guide

This document provides guidelines for implementing the BudgetWatch page, particularly regarding image requirements and page structure.

## About the Initiative

The #BudgetWatch Project is DEAN Initiative's approach to encourage citizens' participation and inclusion in governance processes through active engagement in budget creation, monitoring, and tracking approved budgets. The project aims to strengthen the capacity of communities to understand budget creation and equip them with tools to monitor and track the budget.

## Image Requirements

The page requires several images that need to be placed in the `/public/budgetwatch/` directory. Here are the specifications:

1. **Hero Image (`hero.jpg`)**
   - Content: A high-quality image showing community budget engagement, town hall meetings, or transparency-related activities
   - Ideal dimensions: 1920x1080px
   - The image will have an overlay applied, so it should be clear enough to be visible through a dark gradient

2. **About Section Image (`about.jpg`)**
   - Content: Image showing budget education or community engagement with government representatives
   - Ideal dimensions: 800x1000px

3. **Previous Work Image (`previous.jpg`)**
   - Content: Image from the "Accountability is Legal" initiative showing town hall meetings or community budget dialogues
   - Ideal dimensions: 800x600px

## Page Structure

The page is structured as follows:

1. **Hero Section**: Introduction to #BudgetWatch with a compelling headline and brief description
2. **About Section**: Detailed information about the initiative, its goals, and approach
3. **Objectives Section**: Overview of the specific objectives that BudgetWatch aims to achieve
4. **Previous Work Section**: Highlighting previous success with the "Accountability is Legal" initiative
5. **Call to Action Section**: Encouraging users to get involved with the BudgetWatch initiative
6. **Join Us Section**: Standard DEAN Initiative join form for audience engagement

## Notes for Developers

- All images should be optimized for web to ensure fast page loading
- The page uses framer-motion for animations, which are triggered on scroll
- Make sure all images are properly credited if they are not owned by DEAN Initiative
- Consider adding alt text that accurately describes each image for accessibility
- The image preloading in the useEffect hook ensures images are loaded before they're needed, reducing layout shifts

## Target Audience

The page is designed to appeal to:
- Community stakeholders interested in budget transparency
- Young people, women, and other persons with disabilities seeking to participate in governance
- Government officials looking to engage with citizens on budget processes
- Civil society organizations focused on governance and accountability

## Contact

For any questions or issues regarding this page implementation, please contact the development team or email info@dean.com.ng. 