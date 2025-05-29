# DEAN Initiative Website

## Overview
The DEAN Initiative (Development of Educational Action Network) website is a modern web platform built with Next.js, showcasing our organization's work in education, climate action, and community development. The platform serves as a central hub for news, press releases, and updates about our various initiatives and achievements.

## Features

### 🌟 Key Features
- **Dynamic Blog System**: Engaging blog platform with category filtering and smooth animations
- **Press Release Center**: Dedicated section for official announcements and news
- **Modern UI/UX**: Responsive design with beautiful gradients and transitions
- **Category Management**: Easy filtering of content by categories
- **SEO Optimized**: Built with best practices for search engine visibility

### 💻 Technical Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Deployment**: [Your deployment platform]

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd deandraft
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
deandraft/
├── app/
│   ├── media/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   └── page.jsx
│   │   └── press/
│   │       ├── [id]/
│   │       └── page.jsx
│   └── ...
├── public/
├── components/
└── ...
```

## Content Management
- Blog posts are managed through the `blogPosts` array in `app/media/blog/page.jsx`
- Press releases are managed through `pressReleases.js` in the root directory

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
[Your chosen license]

## Contact
- Website: [Your website URL]
- Email: [Contact email]
- Twitter: [@YourTwitterHandle]

## Acknowledgments
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All contributors and supporters of DEAN Initiative
