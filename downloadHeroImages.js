const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1920&q=80',
    filename: 'hero-1.jpg',
    description: 'Young people collaborating on community projects'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    filename: 'hero-2.jpg',
    description: 'Education initiative with diverse youth'
  },
  {
    url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1920&q=80',
    filename: 'hero-3.jpg',
    description: 'Climate action community event'
  },
  {
    url: 'https://images.unsplash.com/photo-1505243542579-da5adaec7672?auto=format&fit=crop&w=1920&q=80',
    filename: 'hero-4.jpg',
    description: 'Youth governance program'
  }
];

const heroDir = path.join(__dirname, 'public', 'hero');

// Make sure the directory exists
if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

// Download each image
images.forEach(image => {
  const filePath = path.join(heroDir, image.filename);
  console.log(`Downloading ${image.description} to ${filePath}...`);
  
  const file = fs.createWriteStream(filePath);
  
  https.get(image.url, response => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Finished downloading ${image.filename}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
}); 