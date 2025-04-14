const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'music-production.jpg',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop'
  },
  {
    name: 'songwriting.jpg',
    url: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&auto=format&fit=crop'
  },
  {
    name: 'mixing.jpg',
    url: 'https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?w=1200&auto=format&fit=crop'
  },
  {
    name: 'marketing.jpg',
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&auto=format&fit=crop'
  },
  {
    name: 'sound-design.jpg',
    url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&auto=format&fit=crop'
  }
];

const downloadImage = (url, filename) => {
  const dir = path.join(process.cwd(), 'public', 'course-thumbnails');
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath);
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(img => {
  downloadImage(img.url, img.name);
}); 